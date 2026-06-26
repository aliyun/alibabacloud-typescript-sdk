// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LifecycleHook extends $dara.Model {
  /**
   * @remarks
   * 函数生命周期初始化阶段回调指令，生命周期回调方法的执行入口 handler 和 command 不允许同时配置，只能有一个生效，同时配置会产生错误提示
   */
  command?: string[];
  /**
   * @remarks
   * The handler of the hook. The definition is similar to that of a request handler.
   * 
   * @example
   * index.initializer
   */
  handler?: string;
  /**
   * @remarks
   * The timeout period of the hook. Unit: seconds.
   * 
   * @example
   * 10
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      command: 'command',
      handler: 'handler',
      timeout: 'timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: { 'type': 'array', 'itemType': 'string' },
      handler: 'string',
      timeout: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.command)) {
      $dara.Model.validateArray(this.command);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

