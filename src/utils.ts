  // 找到项目根路径。
  // 如果有root用root，没有的话用source、target中最外的路径向外找，找到最近的一个package.json所在路径即为root。
  // 如果找不到则返回空字符串。
import * as fs from 'fs';
import * as path from 'path';
export function getRootPath(
  source: string,
  target: string,
  root?: string
) {
  if(root) return root;
  // console.info(source, target);
  const len: number = Math.min(source.length, target.length);
  let commonPath: string = '';
  for(let i = 0; i < len; i++) {
    if(source[i] !== target[i]) {
      commonPath = source.substring(0, i);
      break;
    }
  }
  while(commonPath && !fs.existsSync(path.join(commonPath, './package.json'))) {
    commonPath = path.join(commonPath, '../');
  }
  // console.info('true', commonPath);
  return commonPath;
}

export function getRelativePath(
  rootPath: string,
  target: string,
) {
  console.info(rootPath);
  const configFileArray = [];
  if(fs.existsSync(path.join(rootPath, './jsconfig.json'))) {
    configFileArray.push(path.join(rootPath, './jsconfig.json'));
  }
  if(fs.existsSync(path.join(rootPath, './tsconfig.json'))) {
    configFileArray.push(path.join(rootPath, './tsconfig.json'));
  }
  // console.info(configFileArray);
  configFileArray.forEach(item => {
    fs.readFile(item, 'utf8', (err, dataString) => {
      if(err) throw err;
      // console.info(dataString);
      const dataObject = JSON.parse(dataString);
      const pathConfig = dataObject?.compilerOptions?.paths;
      console.info(pathConfig);
      // const a = Object.keys(pathConfig);
      const res = [];
      Object.keys(pathConfig).forEach(item => {
        // pathConfig[item] = 
      })
      console.info(a);
    });
  })
}
