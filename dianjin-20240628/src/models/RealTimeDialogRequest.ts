// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RealTimeDialogRequestConversationModel extends $dara.Model {
  /**
   * @remarks
   * The start time of the sentence, in milliseconds, relative to the start of the session.
   * 
   * @example
   * 5
   */
  begin?: number;
  /**
   * @remarks
   * The start time of this sentence.
   * 
   * @example
   * 2024-11-08 09:51:16
   */
  beginTime?: string;
  /**
   * @remarks
   * The specific content of the conversation.
   * 
   * This parameter is required.
   * 
   * @example
   * 人工客服
   */
  content?: string;
  /**
   * @remarks
   * The unique ID of the conversation role. This parameter is **required**.
   * 
   * @example
   * 98457834685635
   */
  customerId?: string;
  /**
   * @remarks
   * The ID of the customer service representative. This parameter is **required**.
   * 
   * @example
   * 1374683645635
   */
  customerServiceId?: string;
  /**
   * @remarks
   * The type of the customer service representative. 0: bot, 1: human.
   * 
   * @example
   * 0
   */
  customerServiceType?: string;
  /**
   * @remarks
   * The end time of the sentence, in milliseconds, relative to the start of the session.
   * 
   * @example
   * 10
   */
  end?: number;
  /**
   * @remarks
   * The intent code.
   * 
   * @example
   * 198379874354
   */
  intentionCode?: string;
  /**
   * @remarks
   * The role. 0 indicates the customer, and 1 indicates the customer service representative.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  role?: number;
  /**
   * @remarks
   * The type of the conversation content. Valid values: text, audio, and image.
   * 
   * This parameter is required.
   * 
   * @example
   * audio
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'begin',
      beginTime: 'beginTime',
      content: 'content',
      customerId: 'customerId',
      customerServiceId: 'customerServiceId',
      customerServiceType: 'customerServiceType',
      end: 'end',
      intentionCode: 'intentionCode',
      role: 'role',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      beginTime: 'string',
      content: 'string',
      customerId: 'string',
      customerServiceId: 'string',
      customerServiceType: 'string',
      end: 'number',
      intentionCode: 'string',
      role: 'number',
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

export class RealTimeDialogRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform analysis.
   * 
   * @example
   * false
   */
  analysis?: boolean;
  /**
   * @remarks
   * The business type. The default value is mixIntentChat.
   * 
   * @example
   * mixIntentChat
   */
  bizType?: string;
  /**
   * @remarks
   * The list of conversations.
   * 
   * This parameter is required.
   */
  conversationModel?: RealTimeDialogRequestConversationModel[];
  /**
   * @remarks
   * The number of historical conversation turns to include.
   * 
   * @example
   * 3
   */
  dialogMemoryTurns?: number;
  /**
   * @remarks
   * The metadata used to encapsulate prompts.
   * 
   * @example
   * {
   *       "phoneTailNumber": "机主尾号：98X1",
   *       "preScreeningQuota": "预审额度：3万",
   *       "generalInterest": "平台一般利息：20.4%"
   *     }
   */
  metaData?: { [key: string]: any };
  /**
   * @remarks
   * The operation type. Only common and hierarchical are supported.
   * 
   * @example
   * common
   */
  opType?: string;
  /**
   * @remarks
   * The recommended intent.
   * 
   * @example
   * false
   */
  recommend?: boolean;
  /**
   * @remarks
   * The part of the previous script from the customer service representative that has been played.
   * 
   * @example
   * 你好，我是
   */
  scriptContentPlayed?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 237645726354
   */
  sessionId?: string;
  /**
   * @remarks
   * Specifies whether to return the response in a stream.
   * 
   * @example
   * false
   */
  stream?: boolean;
  /**
   * @remarks
   * Specifies whether the user interrupted the conversation.
   * 
   * @example
   * true
   */
  userVad?: boolean;
  static names(): { [key: string]: string } {
    return {
      analysis: 'analysis',
      bizType: 'bizType',
      conversationModel: 'conversationModel',
      dialogMemoryTurns: 'dialogMemoryTurns',
      metaData: 'metaData',
      opType: 'opType',
      recommend: 'recommend',
      scriptContentPlayed: 'scriptContentPlayed',
      sessionId: 'sessionId',
      stream: 'stream',
      userVad: 'userVad',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: 'boolean',
      bizType: 'string',
      conversationModel: { 'type': 'array', 'itemType': RealTimeDialogRequestConversationModel },
      dialogMemoryTurns: 'number',
      metaData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      opType: 'string',
      recommend: 'boolean',
      scriptContentPlayed: 'string',
      sessionId: 'string',
      stream: 'boolean',
      userVad: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.conversationModel)) {
      $dara.Model.validateArray(this.conversationModel);
    }
    if(this.metaData) {
      $dara.Model.validateMap(this.metaData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

