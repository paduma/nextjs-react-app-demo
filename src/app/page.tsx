"use client"
import React from 'react';
import Link from 'next/link';  
const Home: React.FC = () => {  
  return (  
      <div>  
          <h1>欢迎来到首页！</h1>  
          <p>请登录以访问更多内容。</p>
          <Link href="/login">去登录</Link>  
          <br />  
          <Link href="/protected">尝试访问保护页面</Link>  
      </div>  
  );  
};  

export default Home; 