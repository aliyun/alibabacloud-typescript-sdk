// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SilenceTimeoutRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the conversation.
   * 
   * This parameter is required.
   * 
   * @example
   * 0099b75d-60fd-4c63-8541-7fbba0ae6bb0
   */
  conversationId?: string;
  /**
   * @remarks
   * The context of the conversation.
   * 
   * @example
   * {}
   */
  initialContext?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 0099b75d-60fd-4c63-8541-7fbba0ae6bb0
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the instance owner.
   * 
   * @example
   * 1231639035307976
   */
  instanceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'ConversationId',
      initialContext: 'InitialContext',
      instanceId: 'InstanceId',
      instanceOwnerId: 'InstanceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

