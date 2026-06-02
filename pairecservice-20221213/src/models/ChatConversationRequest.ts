// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatConversationRequest extends $dara.Model {
  /**
   * @example
   * {}
   */
  config?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @example
   * e47cfae9-c0cc-42e1-91e2-e67cdb0e7b96
   */
  conversationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * learn-pairec-xxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      content: 'Content',
      conversationId: 'ConversationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      content: 'string',
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

