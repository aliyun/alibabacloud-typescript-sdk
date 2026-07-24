// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCallOutboundInstantRequest extends $dara.Model {
  /**
   * @example
   * 13800138000
   */
  calledNumber?: string;
  /**
   * @example
   * 张三
   */
  customerName?: string;
  /**
   * @example
   * false
   */
  encryptCall?: boolean;
  /**
   * @example
   * {"start":"2220"}
   */
  promptVariables?: string;
  /**
   * @example
   * 132
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      customerName: 'CustomerName',
      encryptCall: 'EncryptCall',
      promptVariables: 'PromptVariables',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      customerName: 'string',
      encryptCall: 'boolean',
      promptVariables: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

