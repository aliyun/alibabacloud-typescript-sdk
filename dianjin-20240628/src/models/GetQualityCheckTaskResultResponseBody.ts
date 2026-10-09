// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityCheckTaskResultResponseBodyDataConversationListDialogueList extends $dara.Model {
  /**
   * @remarks
   * The start time of the utterance, as an offset in milliseconds from the start of the conversation.
   * 
   * @example
   * 0
   */
  begin?: number;
  /**
   * @remarks
   * The start time of the utterance.
   * 
   * @example
   * 2024-09-27 11:23:20
   */
  beginTime?: string;
  /**
   * @remarks
   * The specific content of the dialogue.
   * 
   * @example
   * Hello, this is 2001. How may I help you?
   */
  content?: string;
  /**
   * @remarks
   * The unique identifier of the dialogue role.
   * 
   * @example
   * null
   */
  customerId?: string;
  /**
   * @remarks
   * The customer service ID.
   * 
   * @example
   * Li Si
   */
  customerServiceId?: string;
  /**
   * @remarks
   * The agent type.
   * 
   * @example
   * 0
   */
  customerServiceType?: string;
  /**
   * @remarks
   * The end time of the utterance, as an offset in milliseconds from the start of the conversation.
   * 
   * @example
   * 0
   */
  end?: number;
  /**
   * @remarks
   * The unique identifier of the utterance. This value is assigned internally.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The role.
   * 
   * @example
   * 0
   */
  role?: string;
  /**
   * @remarks
   * The type of the dialogue content.
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
   * The call type.
   * 
   * @example
   * 1
   */
  callType?: string;
  /**
   * @remarks
   * The customer ID.
   * 
   * @example
   * 234234
   */
  customerId?: string;
  /**
   * @remarks
   * The customer name.
   * 
   * @example
   * Zhang San
   */
  customerName?: string;
  /**
   * @remarks
   * The customer service ID.
   * 
   * @example
   * 23984763826
   */
  customerServiceId?: string;
  /**
   * @remarks
   * The customer service name.
   * 
   * @example
   * Li Si
   */
  customerServiceName?: string;
  /**
   * @remarks
   * The list of dialogue details.
   */
  dialogueList?: GetQualityCheckTaskResultResponseBodyDataConversationListDialogueList[];
  /**
   * @remarks
   * The conversation time.
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
   * The start time of the utterance, as an offset in milliseconds from the start of the conversation.
   * 
   * @example
   * 0
   */
  begin?: number;
  /**
   * @remarks
   * The start time of the utterance.
   * 
   * @example
   * 2024-05-23 14:57:50
   */
  beginTime?: string;
  /**
   * @remarks
   * The specific content of the dialogue.
   * 
   * @example
   * Hello, this is 2001. How may I help you?
   */
  content?: string;
  /**
   * @remarks
   * The unique identifier of the dialogue role.
   * 
   * @example
   * xxx
   */
  customerId?: string;
  /**
   * @remarks
   * The customer service ID.
   * 
   * @example
   * 23876432
   */
  customerServiceId?: string;
  /**
   * @remarks
   * The agent type.
   * 
   * @example
   * 0
   */
  customerServiceType?: string;
  /**
   * @remarks
   * The end time of the utterance, as an offset in milliseconds from the start of the conversation.
   * 
   * @example
   * 0
   */
  end?: number;
  /**
   * @remarks
   * The unique identifier of the sentence, which is assigned internally.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The role.
   * 
   * @example
   * 0
   */
  role?: string;
  /**
   * @remarks
   * The type of the dialogue content.
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
   * The business type of the rule.
   * 
   * @example
   * No
   */
  bizType?: string;
  /**
   * @remarks
   * The explanation for why the check passed or failed.
   * 
   * @example
   * None
   */
  checkExplanation?: string;
  /**
   * @remarks
   * Indicates whether the quality check passed.
   * 
   * @example
   * PASSED
   */
  checkPassed?: string;
  /**
   * @remarks
   * The description of the quality check process.
   * 
   * @example
   * None
   */
  checkProcess?: string;
  /**
   * @remarks
   * Indicates whether the rule was hit.
   * 
   * @example
   * HIT
   */
  checked?: string;
  /**
   * @remarks
   * The quality check completion time.
   * 
   * @example
   * 2024-05-23 14:57:50
   */
  gmtEnd?: string;
  /**
   * @remarks
   * The quality check start time.
   * 
   * @example
   * 2024-05-23 14:57:50
   */
  gmtStart?: string;
  /**
   * @remarks
   * The internal quality check mode.
   * 
   * @example
   * 0
   */
  mode?: string;
  /**
   * @remarks
   * The original dialogue list.
   */
  originDialogue?: GetQualityCheckTaskResultResponseBodyDataQualityCheckListOriginDialogue[];
  /**
   * @remarks
   * The quality check group ID.
   * 
   * @example
   * warning_customers
   */
  qualityGroupId?: string;
  /**
   * @remarks
   * The quality check item description.
   * 
   * @example
   * Enter the early-warning customer detection process
   */
  ruleDescription?: string;
  /**
   * @remarks
   * The quality check item ID.
   * 
   * @example
   * wcm_start
   */
  ruleId?: string;
  /**
   * @remarks
   * The polarity type of the rule. Valid values: 0: negative. 1: positive.
   * 
   * @example
   * 0
   */
  ruleType?: string;
  /**
   * @remarks
   * The child node.
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
   * The original conversation content.
   */
  conversationList?: GetQualityCheckTaskResultResponseBodyDataConversationList;
  /**
   * @remarks
   * The time when the task was created and submitted.
   * 
   * @example
   * 2024-09-27 11:23:20
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the system finished execution.
   * 
   * @example
   * 2024-09-27 11:23:20
   */
  gmtEnd?: string;
  /**
   * @remarks
   * The time when the system started execution.
   * 
   * @example
   * 2024-09-27 11:23:20
   */
  gmtStart?: string;
  /**
   * @remarks
   * The quality check results.
   */
  qualityCheckList?: GetQualityCheckTaskResultResponseBodyDataQualityCheckList[];
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * INIT
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
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
   * The duration.
   * 
   * @example
   * null
   */
  cost?: number;
  /**
   * @remarks
   * The response data.
   */
  data?: GetQualityCheckTaskResultResponseBodyData;
  /**
   * @remarks
   * The data type.
   * 
   * @example
   * null
   */
  dataType?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 67C7021A-D268-553D-8C15-A087B9604028
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The timestamp.
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

