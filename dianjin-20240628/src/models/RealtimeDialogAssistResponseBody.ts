// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RealtimeDialogAssistResponseBodyDataAssistScripts extends $dara.Model {
  assistScript?: string;
  /**
   * @example
   * 1920005488515465216
   */
  intentCode?: string;
  /**
   * @example
   * null
   */
  intentLabels?: string;
  intentName?: string;
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
   * @example
   * XXX
   */
  assistSop?: string;
  /**
   * @example
   * XXX
   */
  intentCode?: string;
  /**
   * @example
   * XXX
   */
  intentName?: string;
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
  content?: string;
  /**
   * @example
   * 98457834685635
   */
  customerId?: string;
  /**
   * @example
   * 1374683645635
   */
  customerServiceId?: string;
  /**
   * @example
   * 0
   */
  customerServiceType?: string;
  /**
   * @example
   * 0
   */
  role?: string;
  /**
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
  analysisProcess?: string;
  assistScripts?: RealtimeDialogAssistResponseBodyDataAssistScripts[];
  assistSop?: RealtimeDialogAssistResponseBodyDataAssistSop[];
  conversationModel?: RealtimeDialogAssistResponseBodyDataConversationModel[];
  /**
   * @example
   * 0FC6636E-380A-5369-AE01-D1C15BB9B254
   */
  requestId?: string;
  /**
   * @example
   * 1915593248420413441
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      analysisProcess: 'analysisProcess',
      assistScripts: 'assistScripts',
      assistSop: 'assistSop',
      conversationModel: 'conversationModel',
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
   * @example
   * null
   */
  cost?: number;
  data?: RealtimeDialogAssistResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 67C7021A-D268-553D-8C15-A087B9604028
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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

