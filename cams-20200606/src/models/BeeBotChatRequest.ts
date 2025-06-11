// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BeeBotChatRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the answer is in plain text or rich text.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  chatBotInstanceId?: string;
  /**
   * @remarks
   * The metadata.
   * 
   * @example
   * 293483938849493
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The source of the answer.
   * 
   * @example
   * intent
   */
  intentName?: string;
  /**
   * @remarks
   * The source of the answer.
   * 
   * @example
   * ksiekdki39ksks93939
   */
  isvCode?: string;
  /**
   * @remarks
   * The hit statement.
   * 
   * @example
   * 1
   */
  knowledgeId?: string;
  /**
   * @remarks
   * Beijing
   */
  perspective?: string[];
  /**
   * @remarks
   * The information about the slot.
   * 
   * @example
   * 861500000000
   */
  senderId?: string;
  /**
   * @remarks
   * Beijing
   * 
   * @example
   * nick
   */
  senderNick?: string;
  /**
   * @remarks
   * The title of the related knowledge.
   * 
   * @example
   * en
   */
  sessionId?: string;
  /**
   * @remarks
   * The title of the hit question.
   * 
   * This parameter is required.
   * 
   * @example
   * 659216218162179
   */
  utterance?: string;
  /**
   * @remarks
   * The node name. When AnswerSource is set to BotFramework, a value is returned for this parameter.
   * 
   * @example
   * {\\"skills\\":\\"chat_search\\",\\"accessToken\\":\\"73f4d5c8e8c334d9b538890bca68ac9a\\",\\"senderStaffId\\":\\"1697204021326\\",\\"senderCorpId\\":\\"dingee291fb2828058b9\\"}
   */
  vendorParam?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      chatBotInstanceId: 'ChatBotInstanceId',
      custSpaceId: 'CustSpaceId',
      intentName: 'IntentName',
      isvCode: 'IsvCode',
      knowledgeId: 'KnowledgeId',
      perspective: 'Perspective',
      senderId: 'SenderId',
      senderNick: 'SenderNick',
      sessionId: 'SessionId',
      utterance: 'Utterance',
      vendorParam: 'VendorParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatBotInstanceId: 'string',
      custSpaceId: 'string',
      intentName: 'string',
      isvCode: 'string',
      knowledgeId: 'string',
      perspective: { 'type': 'array', 'itemType': 'string' },
      senderId: 'string',
      senderNick: 'string',
      sessionId: 'string',
      utterance: 'string',
      vendorParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.perspective)) {
      $dara.Model.validateArray(this.perspective);
    }
    if(this.vendorParam) {
      $dara.Model.validateMap(this.vendorParam);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

