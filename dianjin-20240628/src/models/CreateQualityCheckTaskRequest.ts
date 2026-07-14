// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQualityCheckTaskRequestConversationListDialogueList extends $dara.Model {
  /**
   * @remarks
   * The start time of this sentence. This is the offset time in milliseconds from the start of the conversation.
   * 
   * @example
   * 0
   */
  begin?: number;
  /**
   * @remarks
   * The start time of this sentence.
   * 
   * @example
   * 2024-05-23 14:57:50
   */
  beginTime?: string;
  /**
   * @remarks
   * The specific content of the dialogue.
   * 
   * This parameter is required.
   * 
   * @example
   * 您好，我是2001，很高兴为您服务！
   */
  content?: string;
  /**
   * @remarks
   * The unique identifier of the dialogue role.
   * 
   * @example
   * 2348234
   */
  customerId?: string;
  /**
   * @remarks
   * The customer service ID.
   * 
   * @example
   * 23874627346
   */
  customerServiceId?: string;
  /**
   * @remarks
   * Agent type:
   * 
   * @example
   * 0
   */
  customerServiceType?: string;
  /**
   * @remarks
   * The end time of this sentence. This is the offset time in milliseconds from the start of the conversation.
   * 
   * @example
   * 0
   */
  end?: number;
  /**
   * @remarks
   * Role:
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  role?: string;
  /**
   * @remarks
   * Dialogue content type:
   * 
   * This parameter is required.
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

export class CreateQualityCheckTaskRequestConversationList extends $dara.Model {
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
   * The Customer ID.
   * 
   * @example
   * 1
   */
  customerId?: string;
  /**
   * @remarks
   * The customer name.
   * 
   * @example
   * 张三
   */
  customerName?: string;
  /**
   * @remarks
   * The customer service ID.
   * 
   * @example
   * xxx
   */
  customerServiceId?: string;
  /**
   * @remarks
   * The customer service name.
   * 
   * @example
   * 李四
   */
  customerServiceName?: string;
  /**
   * @remarks
   * The list of dialogue details.
   * 
   * This parameter is required.
   */
  dialogueList?: CreateQualityCheckTaskRequestConversationListDialogueList[];
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
      dialogueList: { 'type': 'array', 'itemType': CreateQualityCheckTaskRequestConversationListDialogueList },
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

export class CreateQualityCheckTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The conversation content. If associated with a quality check scenario, pass multiple conversations. Otherwise, pass only one.
   * 
   * This parameter is required.
   */
  conversationList?: CreateQualityCheckTaskRequestConversationList;
  /**
   * @remarks
   * The business occurrence time. The system uses this to record submission time, make task scheduling priority decisions, and so on.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-09-27 11:23:20
   */
  gmtService?: string;
  /**
   * @remarks
   * The metadata. These are properties related to business that rules consume during execution. The business system passes these in real-time when initiating a quality check.
   */
  metaData?: { [key: string]: string };
  /**
   * @remarks
   * The quality check rule group.
   */
  qualityGroup?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 0FC6636E-380A-5369-AE01-D1C15BB9B254
   */
  requestId?: string;
  /**
   * @remarks
   * The scenario code.
   * 
   * @example
   * o9c8u8
   */
  sceneCode?: string;
  /**
   * @remarks
   * Quality check type:
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      conversationList: 'conversationList',
      gmtService: 'gmtService',
      metaData: 'metaData',
      qualityGroup: 'qualityGroup',
      requestId: 'requestId',
      sceneCode: 'sceneCode',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationList: CreateQualityCheckTaskRequestConversationList,
      gmtService: 'string',
      metaData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      qualityGroup: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      sceneCode: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.conversationList && typeof (this.conversationList as any).validate === 'function') {
      (this.conversationList as any).validate();
    }
    if(this.metaData) {
      $dara.Model.validateMap(this.metaData);
    }
    if(Array.isArray(this.qualityGroup)) {
      $dara.Model.validateArray(this.qualityGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

