// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelChatRequest extends $dara.Model {
  /**
   * @remarks
   * The business space key. If this parameter is not specified, the default business space is accessed. You can obtain the key value on the business management page of the Alibaba Cloud account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The answer content.
   * 
   * @example
   * <This answer was inter>
   */
  answer?: string;
  /**
   * @remarks
   * The ID that identifies a single conversation.
   * 
   * @example
   * 7105a351-b2e7-4c9e-8437-c43a043c0a4e
   */
  chatId?: string;
  /**
   * @remarks
   * The chatbot ID.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  /**
   * @remarks
   * The session ID, which is used to identify a visitor\\"s session and maintain context information. For a new visitor, you do not need to specify this parameter when calling the Chat operation for the first time. The chatbot starts a session and returns the SessionId in the response of the Chat operation. For subsequent conversation turns of the visitor, pass the SessionId of the current session when calling the Chat operation so that the chatbot can continue the conversation based on the SessionId. Maximum length: 64 characters.
   * 
   * @example
   * c1187530338311ebade7cf3eaeb3668a
   */
  sessionId?: string;
  /**
   * @remarks
   * The interruption type.
   * 
   * @example
   * Canceled
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      answer: 'Answer',
      chatId: 'ChatId',
      instanceId: 'InstanceId',
      sessionId: 'SessionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      answer: 'string',
      chatId: 'string',
      instanceId: 'string',
      sessionId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

