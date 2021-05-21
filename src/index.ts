import { getRootPath, getRelativePath } from "./utils";
import * as path from 'path';

export function move(
  source: string,
  target: string,
  options?: {
    root?: string;
    munualRule: {
      prefix?: string | RegExp;
      suffix?: string | RegExp;
    };
  }
) {
  source = path.isAbsolute(source) ? source : path.resolve(source);
  target = path.isAbsolute(target) ? target : path.resolve(target);
  const rootPath = getRootPath(source, target, options?.root);
  getRelativePath(rootPath, target);
  // 找到 root 下所有使用 source 的地方，建议在另一个文件的中封装。
  // 根据jsconfig、tsconfig，生成target所有可能使用路径——相对路径、alias等，找到最短的一个，建议在另一个文件中封装。
}
