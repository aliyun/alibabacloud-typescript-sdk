// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartAIAgentInstanceRequestChatSyncConfig extends $dara.Model {
  /**
   * @remarks
   * IM的智能体Id。
   * 
   * @example
   * ******005e4f309379701645f4****
   */
  IMAIAgentId?: string;
  /**
   * @remarks
   * 接收用户Id。
   * 
   * @example
   * 4167626d312034b2b1c3b7f2f3e41884
   */
  receiverId?: string;
  static names(): { [key: string]: string } {
    return {
      IMAIAgentId: 'IMAIAgentId',
      receiverId: 'ReceiverId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IMAIAgentId: 'string',
      receiverId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

