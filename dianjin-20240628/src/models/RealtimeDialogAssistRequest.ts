// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RealtimeDialogAssistRequestConversationModel extends $dara.Model {
  /**
   * @remarks
   * Start time of this utterance, offset in milliseconds from the session start.
   * 
   * @example
   * 1
   */
  begin?: number;
  /**
   * @remarks
   * Start time of this utterance
   * 
   * @example
   * 2025-12-12 09:00:00
   */
  beginTime?: string;
  /**
   * @remarks
   * Specific content of the dialog
   * 
   * This parameter is required.
   * 
   * @example
   * 你好
   */
  content?: string;
  /**
   * @remarks
   * Unique identity of the dialog role
   * 
   * @example
   * 98457834685635
   */
  customerId?: string;
  /**
   * @remarks
   * Customer service ID
   * 
   * @example
   * 1374683645635
   */
  customerServiceId?: string;
  /**
   * @remarks
   * Agent type. 0: Robot, 1: Human.
   * 
   * @example
   * 0
   */
  customerServiceType?: string;
  /**
   * @remarks
   * End time of this utterance, offset in milliseconds from the session start.
   * 
   * @example
   * 1
   */
  end?: number;
  /**
   * @remarks
   * Role. 0 indicates customer, 1 indicates agent.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  role?: number;
  /**
   * @remarks
   * Type of dialog content. Currently, only text is supported.
   * 
   * @example
   * text
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

export class RealtimeDialogAssistRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to analyze
   * 
   * @example
   * false
   */
  analysis?: boolean;
  /**
   * @remarks
   * Business type. Currently, only dialogAssist is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * dialogAssist
   */
  bizType?: string;
  /**
   * @remarks
   * Dialog list
   * 
   * This parameter is required.
   */
  conversationModel?: RealtimeDialogAssistRequestConversationModel[];
  /**
   * @remarks
   * Number of historical dialog turns included
   * 
   * @example
   * 0
   */
  dialogMemoryTurns?: number;
  /**
   * @remarks
   * Hang up the session
   * 
   * @example
   * false
   */
  hangUpDialog?: boolean;
  /**
   * @remarks
   * metaData
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
   * Request ID
   * 
   * This parameter is required.
   * 
   * @example
   * 0FC6636E-380A-5369-AE01-D1C15BB9B254
   */
  requestId?: string;
  /**
   * @remarks
   * Portion of the previous agent utterance already broadcast
   * 
   * @example
   * 你好
   */
  scriptContentPlayed?: string;
  /**
   * @remarks
   * Session ID
   * 
   * This parameter is required.
   * 
   * @example
   * 1915593248420413441
   */
  sessionId?: string;
  /**
   * @remarks
   * Whether the user interrupted
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
      hangUpDialog: 'hangUpDialog',
      metaData: 'metaData',
      requestId: 'requestId',
      scriptContentPlayed: 'scriptContentPlayed',
      sessionId: 'sessionId',
      userVad: 'userVad',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: 'boolean',
      bizType: 'string',
      conversationModel: { 'type': 'array', 'itemType': RealtimeDialogAssistRequestConversationModel },
      dialogMemoryTurns: 'number',
      hangUpDialog: 'boolean',
      metaData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      scriptContentPlayed: 'string',
      sessionId: 'string',
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

