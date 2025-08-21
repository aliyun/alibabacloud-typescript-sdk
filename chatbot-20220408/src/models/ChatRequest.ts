// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatRequest extends $dara.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * chatbot-cn-mp90s2lrk00050
   */
  instanceId?: string;
  intentName?: string;
  /**
   * @example
   * 30002406051
   */
  knowledgeId?: string;
  perspective?: string[];
  /**
   * @example
   * true
   */
  sandBox?: boolean;
  /**
   * @example
   * custumer_123456
   */
  senderId?: string;
  senderNick?: string;
  /**
   * @example
   * 9c6ebdc6e66f46ecadab3434314f6959
   */
  sessionId?: string;
  utterance?: string;
  /**
   * @example
   * {"phone":123456789}
   */
  vendorParam?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      intentName: 'IntentName',
      knowledgeId: 'KnowledgeId',
      perspective: 'Perspective',
      sandBox: 'SandBox',
      senderId: 'SenderId',
      senderNick: 'SenderNick',
      sessionId: 'SessionId',
      utterance: 'Utterance',
      vendorParam: 'VendorParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      intentName: 'string',
      knowledgeId: 'string',
      perspective: { 'type': 'array', 'itemType': 'string' },
      sandBox: 'boolean',
      senderId: 'string',
      senderNick: 'string',
      sessionId: 'string',
      utterance: 'string',
      vendorParam: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.perspective)) {
      $dara.Model.validateArray(this.perspective);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

