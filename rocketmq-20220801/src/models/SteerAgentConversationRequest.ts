// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SteerAgentConversationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cmd-20260819-0001
   */
  commandId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 请优先检查消费组在线状态
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      commandId: 'commandId',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

