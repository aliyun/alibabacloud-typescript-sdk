// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LifecycleHook extends $dara.Model {
  command?: string[];
  /**
   * @example
   * index.initializer
   */
  handler?: string;
  /**
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

