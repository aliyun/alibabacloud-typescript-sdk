// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CodeInterpreterSessionConfig extends $dara.Model {
  /**
   * @remarks
   * 代码解释器会话的环境变量配置
   * 
   * @example
   * PYTHONPATH=/app,DEBUG=true
   */
  environment?: { [key: string]: string };
  /**
   * @remarks
   * 代码解释器会话的超时时间，单位为秒
   * 
   * @example
   * 3600
   */
  timeout?: number;
  /**
   * @remarks
   * 代码解释器会话的工作目录路径
   * 
   * @example
   * /app
   */
  workingDirectory?: string;
  static names(): { [key: string]: string } {
    return {
      environment: 'environment',
      timeout: 'timeout',
      workingDirectory: 'workingDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environment: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      timeout: 'number',
      workingDirectory: 'string',
    };
  }

  validate() {
    if(this.environment) {
      $dara.Model.validateMap(this.environment);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

