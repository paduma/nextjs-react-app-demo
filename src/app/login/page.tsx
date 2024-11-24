"use client"
import React, { useState } from 'react';  
import { Form, Input, Button, notification } from 'antd';  
import { useRouter } from 'next/navigation';

const Login: React.FC<{ onLogin: (username: string) => void }> = ({ onLogin }) => {  
    const [loading, setLoading] = useState(false);  
    const router = useRouter();  

    const onFinish = async (values: { username: string; password: string }) => {  
        setLoading(true);  
        try {  
            const response = await fetch('/api/login', {  
                method: 'POST',  
                headers: {  
                    'Content-Type': 'application/json',  
                },  
                body: JSON.stringify({  
                    username: values.username,  
                    password: values.password,  
                }),  
            });  

            if (!response.ok) {  
                throw new Error('Login failed!');  
            }  

            const data = await response.json();  
            localStorage.setItem('accessToken', data.accessToken); // 假设返回的 token 存在于 data.token  
            if (onLogin) {
              onLogin(values.username);  
            }
            notification.success({ message: 'Login successful!' }); 
            router.push('/'); // 登录后重定向 
        } catch (error: any) {  
            notification.error({ message: error.message || 'Login failed!' });  
        } finally {  
            setLoading(false);  
        }  
    }; 
    return (  
        <Form onFinish={onFinish}>  
            <Form.Item  
                name="username"  
                rules={[{ required: true, message: 'Please input your username!' }]}  
            >  
                <Input placeholder="Username" />  
            </Form.Item>  
            <Form.Item  
                name="password"  
                rules={[{ required: true, message: 'Please input your password!' }]}  
            >  
                <Input.Password placeholder="Password" />  
            </Form.Item>  
            <Form.Item>  
                <Button type="primary" htmlType="submit" loading={loading}>  
                    Login  
                </Button>  
            </Form.Item>  
        </Form>  
    );  
};  

export default Login;  