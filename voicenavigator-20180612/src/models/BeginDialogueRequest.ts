// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BeginDialogueRequest extends $dara.Model {
  /**
   * @example
   * 10086
   */
  calledNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1358158****
   */
  callingNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c28fc549-d88f-4f6e-85ad-a0806e5e39c0
   */
  conversationId?: string;
  /**
   * @example
   * {\\"channelId\\":\\"fe2559d3-5fc9-4fa5-8314-32b9f762791d\\"}
   */
  initialContext?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4d7db6670b8e41b5adb1f21560ea9272
   */
  instanceId?: string;
  /**
   * @example
   * 1231639035307976
   */
  instanceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      conversationId: 'ConversationId',
      initialContext: 'InitialContext',
      instanceId: 'InstanceId',
      instanceOwnerId: 'InstanceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      callingNumber: 'string',
      conversationId: 'string',
      initialContext: 'string',
      instanceId: 'string',
      instanceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

