// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelChatRequest extends $dara.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  answer?: string;
  /**
   * @example
   * 7105a351-b2e7-4c9e-8437-c43a043c0a4e
   */
  chatId?: string;
  /**
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  /**
   * @example
   * c1187530338311ebade7cf3eaeb3668a
   */
  sessionId?: string;
  /**
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

