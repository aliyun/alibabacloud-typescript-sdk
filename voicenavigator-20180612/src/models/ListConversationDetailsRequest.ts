// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConversationDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The conversation ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a2c26e67-5984-4935-984e-bcee52971993
   */
  conversationId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 82b2eaae-ce5c-45f8-8231-f15b6b27e55c
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'ConversationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

