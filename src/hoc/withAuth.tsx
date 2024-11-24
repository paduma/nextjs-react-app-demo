"use client"
import React, { useEffect, useState } from 'react';  
import { useRouter } from 'next/navigation';  

const withAuth = (WrappedComponent: React.FC<any>) => {  
    return (props: any) => {  
        const [isAuthenticated, setIsAuthenticated] = useState(false);  
        const router = useRouter();  

        useEffect(() => {  
            const token = localStorage.getItem('accessToken');  
            console.log('token', token)
            if (!token) {  
                router.push('/login'); // 未认证则重定向到登录页面  
            } else {  
                setIsAuthenticated(true);  
            }  
        }, [router]);  

        if (!isAuthenticated) {  
            return <div>Loading...</div>; // 可替换为更美观的 loading 指示
        }  

        return <WrappedComponent {...props} />;  
    };  
};  

export default withAuth;  