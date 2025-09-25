// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQualityCheckTaskRequestConversationListDialogueList extends $dara.Model {
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
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @example
   * 2348234
   */
  customerId?: string;
  /**
   * @example
   * 23874627346
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  role?: string;
  /**
   * @remarks
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
   * @example
   * 1
   */
  callType?: string;
  /**
   * @example
   * 1
   */
  customerId?: string;
  customerName?: string;
  /**
   * @example
   * xxx
   */
  customerServiceId?: string;
  customerServiceName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dialogueList?: CreateQualityCheckTaskRequestConversationListDialogueList[];
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
   * This parameter is required.
   */
  conversationList?: CreateQualityCheckTaskRequestConversationList;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-09-27 11:23:20
   */
  gmtService?: string;
  metaData?: { [key: string]: string };
  qualityGroup?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0FC6636E-380A-5369-AE01-D1C15BB9B254
   */
  requestId?: string;
  /**
   * @remarks
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

