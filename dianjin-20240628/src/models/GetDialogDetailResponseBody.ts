// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDialogDetailResponseBodyDataDialogueList extends $dara.Model {
  content?: string;
  /**
   * @example
   * 123761283
   */
  customerId?: string;
  /**
   * @example
   * BOT
   */
  customerServiceId?: string;
  /**
   * @example
   * 0
   */
  customerServiceType?: string;
  /**
   * @example
   * true
   */
  hangUpDialog?: boolean;
  /**
   * @example
   * 1742869659849
   */
  id?: number;
  /**
   * @example
   * 193874634xxx
   */
  intentCode?: string;
  intentName?: string;
  /**
   * @example
   * 19387872364736xdhcb
   */
  recordId?: string;
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
      hangUpDialog: 'hangUpDialog',
      id: 'id',
      intentCode: 'intentCode',
      intentName: 'intentName',
      recordId: 'recordId',
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
      hangUpDialog: 'boolean',
      id: 'number',
      intentCode: 'string',
      intentName: 'string',
      recordId: 'string',
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

export class GetDialogDetailResponseBodyData extends $dara.Model {
  dialogueList?: GetDialogDetailResponseBodyDataDialogueList[];
  /**
   * @example
   * 2024-09-27 11:23:20
   */
  gmtCreate?: string;
  /**
   * @example
   * COMPLETED
   */
  status?: string;
  /**
   * @example
   * 10
   */
  totalDialogTurns?: number;
  /**
   * @example
   * 5
   */
  validDialogTurns?: number;
  static names(): { [key: string]: string } {
    return {
      dialogueList: 'dialogueList',
      gmtCreate: 'gmtCreate',
      status: 'status',
      totalDialogTurns: 'totalDialogTurns',
      validDialogTurns: 'validDialogTurns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogueList: { 'type': 'array', 'itemType': GetDialogDetailResponseBodyDataDialogueList },
      gmtCreate: 'string',
      status: 'string',
      totalDialogTurns: 'number',
      validDialogTurns: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dialogueList)) {
      $dara.Model.validateArray(this.dialogueList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDialogDetailResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: GetDialogDetailResponseBodyData;
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
   * 5E3FBAF1-17AF-53B7-AF0A-CDCEEB6DE658
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
      data: GetDialogDetailResponseBodyData,
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

