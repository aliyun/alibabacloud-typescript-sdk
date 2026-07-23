// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatConversationRequest extends $dara.Model {
  /**
   * @remarks
   * The additional information input in JSON format.
   * 
   * @example
   * {}
   */
  config?: string;
  /**
   * @remarks
   * The message content.
   * 
   * This parameter is required.
   * 
   * @example
   * 校验引擎配置
   */
  content?: string;
  /**
   * @remarks
   * The session ID. If this parameter is not specified, a new session is created. If this parameter is specified, the conversation continues in the context of the existing session.
   * 
   * @example
   * e47cfae9-c0cc-42e1-91e2-e67cdb0e7b96
   */
  conversationId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
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

