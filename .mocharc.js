module.exports = {
  extension: ["ts"],
  require: "ts-node/register",
  spec: "test/**/*.spec.ts", // 指定测试文件的位置
  reporter: "spec", // 指定测试报告的格式
  timeout: 5000, // 设置测试超时时间（毫秒）
  bail: true, // 在第一个测试失败后停止执行
  // 添加其他的配置选项...
  "node-option": [
    "loader=ts-node/esm"
  ],
};