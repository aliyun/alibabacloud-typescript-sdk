// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelChatRequest extends $dara.Model {
  /**
   * @remarks
   * The agent key. If unspecified, the default agent is used. You can obtain the key on the Business Management page of your Alibaba Cloud account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The content of the answer.
   * 
   * @example
   * <这个答案被打>
   */
  answer?: string;
  /**
   * @remarks
   * The ID that identifies a single chat turn.
   * 
   * @example
   * 7105a351-b2e7-4c9e-8437-c43a043c0a4e
   */
  chatId?: string;
  /**
   * @remarks
   * The ID of the chatbot instance.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  /**
   * @remarks
   * The session ID is used to identify a visitor\\"s session and maintain context. For a new visitor, omit this parameter in the first call to the chat operation. The chatbot starts a session and returns the session ID in the response. For subsequent turns, you must pass the session ID to maintain context. The value can be up to 64 characters in length.
   * 
   * @example
   * c1187530338311ebade7cf3eaeb3668a
   */
  sessionId?: string;
  /**
   * @remarks
   * The cancellation type.
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

