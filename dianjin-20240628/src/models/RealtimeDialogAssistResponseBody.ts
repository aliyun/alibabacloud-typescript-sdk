// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RealtimeDialogAssistResponseBodyDataAssistScripts extends $dara.Model {
  /**
   * @remarks
   * Recommended utterance
   * 
   * @example
   * 可按照SOP流程回应。
   */
  assistScript?: string;
  /**
   * @remarks
   * Intent encoding
   * 
   * @example
   * "1920005488515465216"
   */
  intentCode?: string;
  /**
   * @remarks
   * Intent labels
   * 
   * @example
   * null
   */
  intentLabels?: string;
  /**
   * @remarks
   * Intent name
   * 
   * @example
   * 礼貌问答
   */
  intentName?: string;
  /**
   * @remarks
   * Whether intent escaped
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  static names(): { [key: string]: string } {
    return {
      assistScript: 'assistScript',
      intentCode: 'intentCode',
      intentLabels: 'intentLabels',
      intentName: 'intentName',
      isDefault: 'isDefault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistScript: 'string',
      intentCode: 'string',
      intentLabels: 'string',
      intentName: 'string',
      isDefault: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RealtimeDialogAssistResponseBodyDataAssistSop extends $dara.Model {
  /**
   * @remarks
   * Recommended flow
   * 
   * @example
   * XXX
   */
  assistSop?: string;
  /**
   * @remarks
   * Intent encoding
   * 
   * @example
   * XXX
   */
  intentCode?: string;
  /**
   * @remarks
   * Intent name
   * 
   * @example
   * XXX
   */
  intentName?: string;
  /**
   * @remarks
   * Indicates whether the intent is to escape.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  static names(): { [key: string]: string } {
    return {
      assistSop: 'assistSop',
      intentCode: 'intentCode',
      intentName: 'intentName',
      isDefault: 'isDefault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistSop: 'string',
      intentCode: 'string',
      intentName: 'string',
      isDefault: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RealtimeDialogAssistResponseBodyDataConversationModel extends $dara.Model {
  /**
   * @remarks
   * Specific content of the dialog
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
   * "98457834685635"
   */
  customerId?: string;
  /**
   * @remarks
   * Customer service ID
   * 
   * @example
   * "1374683645635"
   */
  customerServiceId?: string;
  /**
   * @remarks
   * Agent type. 0: Robot, 1: Human.
   * 
   * @example
   * "0"
   */
  customerServiceType?: string;
  /**
   * @remarks
   * Role. 0 indicates customer, 1 indicates agent.
   * 
   * @example
   * "0"
   */
  role?: string;
  /**
   * @remarks
   * Type of dialog content
   * 
   * @example
   * text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      customerId: 'customerId',
      customerServiceId: 'customerServiceId',
      customerServiceType: 'customerServiceType',
      role: 'role',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      customerId: 'string',
      customerServiceId: 'string',
      customerServiceType: 'string',
      role: 'string',
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

export class RealtimeDialogAssistResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Analysis process
   * 
   * @example
   * 客户回答的内容与提供的意图列表描述均不匹配，没有表达出对账单、还款、天气或其他服务的具体需求或问题。
   */
  analysisProcess?: string;
  /**
   * @remarks
   * List of dialog assist results
   */
  assistScripts?: RealtimeDialogAssistResponseBodyDataAssistScripts[];
  /**
   * @remarks
   * List of flow assist results
   */
  assistSop?: RealtimeDialogAssistResponseBodyDataAssistSop[];
  /**
   * @remarks
   * Current dialog content
   */
  conversationModel?: RealtimeDialogAssistResponseBodyDataConversationModel[];
  /**
   * @remarks
   * Whether interrupted
   * 
   * @example
   * true
   */
  interrupt?: boolean;
  /**
   * @remarks
   * Unique request ID. This request ID matches the request ID in the input parameter.
   * 
   * @example
   * 0FC6636E-380A-5369-AE01-D1C15BB9B254
   */
  requestId?: string;
  /**
   * @remarks
   * Session ID
   * 
   * @example
   * "1915593248420413441"
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      analysisProcess: 'analysisProcess',
      assistScripts: 'assistScripts',
      assistSop: 'assistSop',
      conversationModel: 'conversationModel',
      interrupt: 'interrupt',
      requestId: 'requestId',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisProcess: 'string',
      assistScripts: { 'type': 'array', 'itemType': RealtimeDialogAssistResponseBodyDataAssistScripts },
      assistSop: { 'type': 'array', 'itemType': RealtimeDialogAssistResponseBodyDataAssistSop },
      conversationModel: { 'type': 'array', 'itemType': RealtimeDialogAssistResponseBodyDataConversationModel },
      interrupt: 'boolean',
      requestId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assistScripts)) {
      $dara.Model.validateArray(this.assistScripts);
    }
    if(Array.isArray(this.assistSop)) {
      $dara.Model.validateArray(this.assistSop);
    }
    if(Array.isArray(this.conversationModel)) {
      $dara.Model.validateArray(this.conversationModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RealtimeDialogAssistResponseBody extends $dara.Model {
  /**
   * @remarks
   * Time consumed
   * 
   * @example
   * null
   */
  cost?: number;
  /**
   * @remarks
   * Response data
   */
  data?: RealtimeDialogAssistResponseBodyData;
  /**
   * @remarks
   * Data type
   * 
   * @example
   * null
   */
  dataType?: string;
  /**
   * @remarks
   * Error code
   * 
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * Request ID. This is the system-recorded request ID. If issues arise, provide this ID to the Model Studio DianJin R\\&D team for troubleshooting.
   * 
   * @example
   * 67C7021A-D268-553D-8C15-A087B9604028
   */
  requestId?: string;
  /**
   * @remarks
   * Whether successful
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Timestamp
   * 
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: RealtimeDialogAssistResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

