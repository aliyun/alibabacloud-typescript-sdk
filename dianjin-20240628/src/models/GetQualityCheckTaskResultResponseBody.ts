// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityCheckTaskResultResponseBodyDataConversationListDialogueList extends $dara.Model {
  /**
   * @example
   * 0
   */
  begin?: number;
  /**
   * @example
   * 2024-09-27 11:23:20
   */
  beginTime?: string;
  content?: string;
  /**
   * @example
   * null
   */
  customerId?: string;
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
  end?: number;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 0
   */
  role?: string;
  /**
   * @example
   * TEXT
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
      id: 'id',
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
      id: 'number',
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

export class GetQualityCheckTaskResultResponseBodyDataConversationList extends $dara.Model {
  /**
   * @example
   * 1
   */
  callType?: string;
  /**
   * @example
   * 234234
   */
  customerId?: string;
  customerName?: string;
  /**
   * @example
   * 23984763826
   */
  customerServiceId?: string;
  customerServiceName?: string;
  dialogueList?: GetQualityCheckTaskResultResponseBodyDataConversationListDialogueList[];
  /**
   * @example
   * 2024-09-27 11:23:20
   */
  gmtService?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'callType',
      customerId: 'customerId',
      customerName: 'customerName',
      customerServiceId: 'customerServiceId',
      customerServiceName: 'customerServiceName',
      dialogueList: 'dialogueList',
      gmtService: 'gmtService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      customerId: 'string',
      customerName: 'string',
      customerServiceId: 'string',
      customerServiceName: 'string',
      dialogueList: { 'type': 'array', 'itemType': GetQualityCheckTaskResultResponseBodyDataConversationListDialogueList },
      gmtService: 'string',
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

export class GetQualityCheckTaskResultResponseBodyDataQualityCheckListOriginDialogue extends $dara.Model {
  /**
   * @example
   * 0
   */
  begin?: number;
  /**
   * @example
   * 2024-05-23 14:57:50
   */
  beginTime?: string;
  content?: string;
  /**
   * @example
   * xxx
   */
  customerId?: string;
  /**
   * @example
   * 23876432
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
  end?: number;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 0
   */
  role?: string;
  /**
   * @example
   * TEXT
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
      id: 'id',
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
      id: 'number',
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

export class GetQualityCheckTaskResultResponseBodyDataQualityCheckList extends $dara.Model {
  bizType?: string;
  checkExplanation?: string;
  /**
   * @example
   * PASSED
   */
  checkPassed?: string;
  checkProcess?: string;
  /**
   * @example
   * HIT
   */
  checked?: string;
  /**
   * @example
   * 2024-05-23 14:57:50
   */
  gmtEnd?: string;
  /**
   * @example
   * 2024-05-23 14:57:50
   */
  gmtStart?: string;
  /**
   * @example
   * 0
   */
  mode?: string;
  originDialogue?: GetQualityCheckTaskResultResponseBodyDataQualityCheckListOriginDialogue[];
  /**
   * @example
   * warning_customers
   */
  qualityGroupId?: string;
  ruleDescription?: string;
  /**
   * @example
   * wcm_start
   */
  ruleId?: string;
  ruleType?: string;
  subNodeCol?: any[];
  static names(): { [key: string]: string } {
    return {
      bizType: 'bizType',
      checkExplanation: 'checkExplanation',
      checkPassed: 'checkPassed',
      checkProcess: 'checkProcess',
      checked: 'checked',
      gmtEnd: 'gmtEnd',
      gmtStart: 'gmtStart',
      mode: 'mode',
      originDialogue: 'originDialogue',
      qualityGroupId: 'qualityGroupId',
      ruleDescription: 'ruleDescription',
      ruleId: 'ruleId',
      ruleType: 'ruleType',
      subNodeCol: 'subNodeCol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      checkExplanation: 'string',
      checkPassed: 'string',
      checkProcess: 'string',
      checked: 'string',
      gmtEnd: 'string',
      gmtStart: 'string',
      mode: 'string',
      originDialogue: { 'type': 'array', 'itemType': GetQualityCheckTaskResultResponseBodyDataQualityCheckListOriginDialogue },
      qualityGroupId: 'string',
      ruleDescription: 'string',
      ruleId: 'string',
      ruleType: 'string',
      subNodeCol: { 'type': 'array', 'itemType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.originDialogue)) {
      $dara.Model.validateArray(this.originDialogue);
    }
    if(Array.isArray(this.subNodeCol)) {
      $dara.Model.validateArray(this.subNodeCol);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityCheckTaskResultResponseBodyData extends $dara.Model {
  conversationList?: GetQualityCheckTaskResultResponseBodyDataConversationList;
  /**
   * @example
   * 2024-09-27 11:23:20
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-09-27 11:23:20
   */
  gmtEnd?: string;
  /**
   * @example
   * 2024-09-27 11:23:20
   */
  gmtStart?: string;
  qualityCheckList?: GetQualityCheckTaskResultResponseBodyDataQualityCheckList[];
  /**
   * @example
   * INIT
   */
  status?: string;
  /**
   * @example
   * 1703557101831
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      conversationList: 'conversationList',
      gmtCreate: 'gmtCreate',
      gmtEnd: 'gmtEnd',
      gmtStart: 'gmtStart',
      qualityCheckList: 'qualityCheckList',
      status: 'status',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationList: GetQualityCheckTaskResultResponseBodyDataConversationList,
      gmtCreate: 'string',
      gmtEnd: 'string',
      gmtStart: 'string',
      qualityCheckList: { 'type': 'array', 'itemType': GetQualityCheckTaskResultResponseBodyDataQualityCheckList },
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(this.conversationList && typeof (this.conversationList as any).validate === 'function') {
      (this.conversationList as any).validate();
    }
    if(Array.isArray(this.qualityCheckList)) {
      $dara.Model.validateArray(this.qualityCheckList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityCheckTaskResultResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: GetQualityCheckTaskResultResponseBodyData;
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
      data: GetQualityCheckTaskResultResponseBodyData,
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

