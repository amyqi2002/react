/* Material UI组件库 https://mui.com/material-ui/getting-started/ 
使用：1. 安装 npm install @mui/material @emotion/react @emotion/styled
      2. 复制粘贴
*/
/* 
git的使用
1. 安装：git是一个基于操作系统的运行程序，所以不能使用npm安装
    command+空格 输入terminal
git的本地操作
1. 初始化
   进入需要git管理的文件下执行：git init
   那么该文件夹下会出现一个.git 的文件夹，这个文件夹就变成了一个由git管理的本地仓库，
   注意： 1. 空文件夹git不管
          2. 当使用cra创建react项目时，会自动初始化git仓库
        
*/
import Button from "@mui/material/Button";
function App() {
  return (
    <div className="App">
      this is app
      <hr></hr>
      <Button variant="text" color="warning">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <h1>工作区添加到暂停区</h1>
      <div>11111</div>
    </div>
  );
}

export default App;
