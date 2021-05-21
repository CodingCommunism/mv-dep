export function getRootPath(
  source: string,
  target: string,
  root?: string
) {
  // 找到项目根路径。
  // 如果有root用root，没有的话用source、target中最外的路径向外找，找到最近的一个package.json所在路径即为root。
  // 如果找不到则返回空字符串。
}
