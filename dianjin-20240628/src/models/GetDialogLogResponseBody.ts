// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDialogLogResponseBodyDataHitIntentionList extends $dara.Model {
  description?: string;
  intentionName?: string;
  intentionScript?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      intentionName: 'intentionName',
      intentionScript: 'intentionScript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      intentionName: 'string',
      intentionScript: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDialogLogResponseBodyDataIntentionList extends $dara.Model {
  description?: string;
  intentionName?: string;
  intentionScript?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      intentionName: 'intentionName',
      intentionScript: 'intentionScript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      intentionName: 'string',
      intentionScript: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDialogLogResponseBodyData extends $dara.Model {
  analysisProcess?: string;
  conversationList?: string;
  hitIntentionList?: GetDialogLogResponseBodyDataHitIntentionList[];
  intentionList?: GetDialogLogResponseBodyDataIntentionList[];
  /**
   * @example
   * 1382
   */
  modelCostTime?: number;
  recallList?: string;
  static names(): { [key: string]: string } {
    return {
      analysisProcess: 'analysisProcess',
      conversationList: 'conversationList',
      hitIntentionList: 'hitIntentionList',
      intentionList: 'intentionList',
      modelCostTime: 'modelCostTime',
      recallList: 'recallList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisProcess: 'string',
      conversationList: 'string',
      hitIntentionList: { 'type': 'array', 'itemType': GetDialogLogResponseBodyDataHitIntentionList },
      intentionList: { 'type': 'array', 'itemType': GetDialogLogResponseBodyDataIntentionList },
      modelCostTime: 'number',
      recallList: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hitIntentionList)) {
      $dara.Model.validateArray(this.hitIntentionList);
    }
    if(Array.isArray(this.intentionList)) {
      $dara.Model.validateArray(this.intentionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDialogLogResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: GetDialogLogResponseBodyData;
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
   * 051EEB18-049A-17FF-A5E0-14A5B127C798
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-01-01 00:00:00
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
      data: GetDialogLogResponseBodyData,
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

