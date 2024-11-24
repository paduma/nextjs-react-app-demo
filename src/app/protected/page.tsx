"use client"
import withAuth from '../../hoc/withAuth';  

const ProtectedPage: React.FC = () => {  
    return (  
        <div>  
            <h1>保护页面</h1>  
            <p>只有认证用户可以看到这个页面。</p>  
        </div>  
    );  
};  

export default withAuth(ProtectedPage); 