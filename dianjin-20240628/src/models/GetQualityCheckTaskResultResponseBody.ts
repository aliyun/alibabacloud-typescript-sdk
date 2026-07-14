// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityCheckTaskResultResponseBodyDataConversationListDialogueList extends $dara.Model {
  /**
   * @remarks
   * Start time of this utterance, in milliseconds relative to the start of the conversation
   * 
   * @example
   * 0
   */
  begin?: number;
  /**
   * @remarks
   * Start time of this utterance
   * 
   * @example
   * 2024-09-27 11:23:20
   */
  beginTime?: string;
  /**
   * @remarks
   * Dialogue content
   * 
   * @example
   * 您好，我是2001，很高兴为您服务！
   */
  content?: string;
  /**
   * @remarks
   * Unique identifier for the dialogue role
   * 
   * @example
   * null
   */
  customerId?: string;
  /**
   * @remarks
   * Agent ID
   * 
   * @example
   * 李四
   */
  customerServiceId?: string;
  /**
   * @remarks
   * Agent type
   * 
   * @example
   * 0
   */
  customerServiceType?: string;
  /**
   * @remarks
   * End time of this utterance, in milliseconds relative to the start of the conversation
   * 
   * @example
   * 0
   */
  end?: number;
  /**
   * @remarks
   * Unique identifier for this utterance. Assigned internally
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * Role
   * 
   * @example
   * 0
   */
  role?: string;
  /**
   * @remarks
   * Content type
   * 
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
   * @remarks
   * Call type:
   * 
   * @example
   * 1
   */
  callType?: string;
  /**
   * @remarks
   * Customer ID
   * 
   * @example
   * 234234
   */
  customerId?: string;
  /**
   * @remarks
   * Customer name
   * 
   * @example
   * 张三
   */
  customerName?: string;
  /**
   * @remarks
   * Agent ID
   * 
   * @example
   * 23984763826
   */
  customerServiceId?: string;
  /**
   * @remarks
   * Agent name
   * 
   * @example
   * 李四
   */
  customerServiceName?: string;
  /**
   * @remarks
   * Dialogue details list
   */
  dialogueList?: GetQualityCheckTaskResultResponseBodyDataConversationListDialogueList[];
  /**
   * @remarks
   * Conversation time
   * 
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
   * @remarks
   * Start time of this utterance, in milliseconds relative to the start of the conversation
   * 
   * @example
   * 0
   */
  begin?: number;
  /**
   * @remarks
   * Start time of this utterance
   * 
   * @example
   * 2024-05-23 14:57:50
   */
  beginTime?: string;
  /**
   * @remarks
   * Dialogue content
   * 
   * @example
   * 您好，我是2001，很高兴为您服务！
   */
  content?: string;
  /**
   * @remarks
   * Unique identifier for the dialogue role
   * 
   * @example
   * xxx
   */
  customerId?: string;
  /**
   * @remarks
   * Agent ID
   * 
   * @example
   * 23876432
   */
  customerServiceId?: string;
  /**
   * @remarks
   * Agent type
   * 
   * @example
   * 0
   */
  customerServiceType?: string;
  /**
   * @remarks
   * End time of this utterance, in milliseconds relative to the start of the conversation
   * 
   * @example
   * 0
   */
  end?: number;
  /**
   * @remarks
   * Unique identifier for this utterance. Assigned internally
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * Role
   * 
   * @example
   * 0
   */
  role?: string;
  /**
   * @remarks
   * Content type
   * 
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
  /**
   * @remarks
   * Rule business type
   * 
   * @example
   * No
   */
  bizType?: string;
  /**
   * @remarks
   * Reason for passing or failing the quality check
   * 
   * @example
   * 暂无
   */
  checkExplanation?: string;
  /**
   * @remarks
   * Whether the quality check passed
   * 
   * @example
   * PASSED
   */
  checkPassed?: string;
  /**
   * @remarks
   * Description of the quality check process
   * 
   * @example
   * 暂无
   */
  checkProcess?: string;
  /**
   * @remarks
   * Whether the rule matched
   * 
   * @example
   * HIT
   */
  checked?: string;
  /**
   * @remarks
   * Quality check completion time
   * 
   * @example
   * 2024-05-23 14:57:50
   */
  gmtEnd?: string;
  /**
   * @remarks
   * Quality check start time
   * 
   * @example
   * 2024-05-23 14:57:50
   */
  gmtStart?: string;
  /**
   * @remarks
   * Internal quality check mode
   * 
   * @example
   * 0
   */
  mode?: string;
  /**
   * @remarks
   * Original dialogue list
   */
  originDialogue?: GetQualityCheckTaskResultResponseBodyDataQualityCheckListOriginDialogue[];
  /**
   * @remarks
   * Quality check group ID
   * 
   * @example
   * warning_customers
   */
  qualityGroupId?: string;
  /**
   * @remarks
   * Quality check item description
   * 
   * @example
   * 进入检测预警客户流程
   */
  ruleDescription?: string;
  /**
   * @remarks
   * Quality check item ID
   * 
   * @example
   * wcm_start
   */
  ruleId?: string;
  /**
   * @remarks
   * Rule direction. 0: negative, 1: positive
   * 
   * @example
   * 0
   */
  ruleType?: string;
  /**
   * @remarks
   * Child node
   */
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
  /**
   * @remarks
   * Original conversation content
   */
  conversationList?: GetQualityCheckTaskResultResponseBodyDataConversationList;
  /**
   * @remarks
   * Task creation time. This is when the task was submitted
   * 
   * @example
   * 2024-09-27 11:23:20
   */
  gmtCreate?: string;
  /**
   * @remarks
   * System execution end time
   * 
   * @example
   * 2024-09-27 11:23:20
   */
  gmtEnd?: string;
  /**
   * @remarks
   * System execution start time
   * 
   * @example
   * 2024-09-27 11:23:20
   */
  gmtStart?: string;
  /**
   * @remarks
   * Quality check result set
   */
  qualityCheckList?: GetQualityCheckTaskResultResponseBodyDataQualityCheckList[];
  /**
   * @remarks
   * Task status
   * 
   * @example
   * INIT
   */
  status?: string;
  /**
   * @remarks
   * Task ID
   * 
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
   * @remarks
   * Processing time, in milliseconds
   * 
   * @example
   * null
   */
  cost?: number;
  /**
   * @remarks
   * Response data
   */
  data?: GetQualityCheckTaskResultResponseBodyData;
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
   * 67C7021A-D268-553D-8C15-A087B9604028
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the request succeeded
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

