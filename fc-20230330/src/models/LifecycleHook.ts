// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LifecycleHook extends $dara.Model {
  /**
   * @remarks
   * The callback command for the function lifecycle initialization phase. The handler and command parameters for the lifecycle hook execution entry point cannot be configured at the same time. Only one can take effect. Configuring both produces an error.
   */
  command?: string[];
  /**
   * @remarks
   * The execution entry point of the hook, similar in meaning to the handler.
   * 
   * @example
   * index.initializer
   */
  handler?: string;
  /**
   * @remarks
   * The timeout period of the hook, in seconds.
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

