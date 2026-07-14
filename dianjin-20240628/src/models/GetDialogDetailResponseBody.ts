// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDialogDetailResponseBodyDataDialogueList extends $dara.Model {
  /**
   * @remarks
   * Dialogue content
   * 
   * @example
   * 请问具体怎么操作呢？
   */
  content?: string;
  /**
   * @remarks
   * Customer ID
   * 
   * @example
   * 123761283
   */
  customerId?: string;
  /**
   * @remarks
   * Agent ID
   * 
   * @example
   * BOT
   */
  customerServiceId?: string;
  /**
   * @remarks
   * Agent type:
   * 
   * - 0: Bot
   * 
   * - 1: Human
   * 
   * @example
   * 0
   */
  customerServiceType?: string;
  /**
   * @remarks
   * Indicates whether the session ended with this message
   * 
   * @example
   * true
   */
  hangUpDialog?: boolean;
  /**
   * @remarks
   * Unique identifier for this message. Assigned internally. May be empty. Use recordId instead.
   * 
   * @example
   * 1742869659849
   */
  id?: number;
  /**
   * @remarks
   * Intent code
   * 
   * @example
   * 193874634xxx
   */
  intentCode?: string;
  /**
   * @remarks
   * Intent name
   * 
   * @example
   * 客户询问如何操作
   */
  intentName?: string;
  /**
   * @remarks
   * Unique identifier for this message. Assigned internally. String type.
   * 
   * @example
   * 19387872364736xdhcb
   */
  recordId?: string;
  /**
   * @remarks
   * Role:
   * 
   * - 0: Customer
   * 
   * - 1: Agent
   * 
   * @example
   * 0
   */
  role?: string;
  /**
   * @remarks
   * Content type: text, audio, or image. Only text is supported.
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
  /**
   * @remarks
   * List of dialogue details
   */
  dialogueList?: GetDialogDetailResponseBodyDataDialogueList[];
  /**
   * @remarks
   * Session time
   * 
   * @example
   * 2024-09-27 11:23:20
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Session status
   * 
   * @example
   * COMPLETED
   */
  status?: string;
  /**
   * @remarks
   * Total conversation rounds. Each round counts one exchange between AI and the customer. Multiple consecutive messages from either side count as one round. If the last message is from the AI and is not a hang-up, subtract one from the total round count.
   * 
   * @example
   * 10
   */
  totalDialogTurns?: number;
  /**
   * @remarks
   * Valid conversation rounds. Each valid round counts one question-and-answer pair between AI and the customer. This differs from the total round count method.
   * 
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
   * @remarks
   * Processing time in milliseconds
   * 
   * @example
   * null
   */
  cost?: number;
  /**
   * @remarks
   * Response data
   */
  data?: GetDialogDetailResponseBodyData;
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
   * Request ID
   * 
   * @example
   * 5E3FBAF1-17AF-53B7-AF0A-CDCEEB6DE658
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation succeeded
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

