// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventPageListResponseBodyResultObjectChildren extends $dara.Model {
  /**
   * @remarks
   * Event code.
   * 
   * @example
   * de_aamexg3015
   */
  eventCode?: string;
  /**
   * @remarks
   * Event name.
   * 
   * @example
   * 测试
   */
  eventName?: string;
  /**
   * @remarks
   * Event status.
   * 
   * @example
   * ONLINE
   */
  eventStatus?: string;
  /**
   * @remarks
   * Event type.
   * 
   * @example
   * BYPASS
   */
  eventType?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 1621578648000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * Modification time
   * 
   * @example
   * 1621578648000
   */
  gmtModified?: number;
  /**
   * @remarks
   * Primary key ID
   * 
   * @example
   * 334
   */
  id?: number;
  /**
   * @remarks
   * Total number of rules.
   * 
   * @example
   * 10
   */
  ruleCount?: number;
  static names(): { [key: string]: string } {
    return {
      eventCode: 'eventCode',
      eventName: 'eventName',
      eventStatus: 'eventStatus',
      eventType: 'eventType',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      ruleCount: 'ruleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventCode: 'string',
      eventName: 'string',
      eventStatus: 'string',
      eventType: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      ruleCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventPageListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Object
   */
  children?: DescribeEventPageListResponseBodyResultObjectChildren[];
  /**
   * @remarks
   * Event code
   * 
   * @example
   * de_aszbjb7236
   */
  eventCode?: string;
  /**
   * @remarks
   * Event name.
   * 
   * @example
   * 注册风险
   */
  eventName?: string;
  /**
   * @remarks
   * Event status.
   * 
   * @example
   * ONLINE
   */
  eventStatus?: string;
  /**
   * @remarks
   * Event type.
   * 
   * @example
   * MAIN
   */
  eventType?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 1621578648000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * Modification time
   * 
   * @example
   * 1565701886000
   */
  gmtModified?: number;
  /**
   * @remarks
   * Database ID.
   * 
   * @example
   * 497
   */
  id?: number;
  /**
   * @remarks
   * Total number of rules.
   * 
   * @example
   * 10
   */
  ruleCount?: number;
  /**
   * @remarks
   * Template code
   * 
   * @example
   * register
   */
  templateCode?: string;
  /**
   * @remarks
   * Template name.
   * 
   * @example
   * 注册模版
   */
  templateName?: string;
  /**
   * @remarks
   * Template type
   * 
   * @example
   * UNIVERSAL
   */
  templateType?: string;
  /**
   * @remarks
   * Number of customer authorizations
   * 
   * @example
   * 1
   */
  userCount?: number;
  static names(): { [key: string]: string } {
    return {
      children: 'children',
      eventCode: 'eventCode',
      eventName: 'eventName',
      eventStatus: 'eventStatus',
      eventType: 'eventType',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      ruleCount: 'ruleCount',
      templateCode: 'templateCode',
      templateName: 'templateName',
      templateType: 'templateType',
      userCount: 'userCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': DescribeEventPageListResponseBodyResultObjectChildren },
      eventCode: 'string',
      eventName: 'string',
      eventStatus: 'string',
      eventType: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      ruleCount: 'number',
      templateCode: 'string',
      templateName: 'string',
      templateType: 'string',
      userCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventPageListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Page size, with a default value of 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Returned object
   */
  resultObject?: DescribeEventPageListResponseBodyResultObject[];
  /**
   * @remarks
   * Total number of items
   * 
   * @example
   * 3
   */
  totalItem?: number;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 9
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      resultObject: 'resultObject',
      totalItem: 'totalItem',
      totalPage: 'totalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      currentPage: 'number',
      pageSize: 'number',
      resultObject: { 'type': 'array', 'itemType': DescribeEventPageListResponseBodyResultObject },
      totalItem: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resultObject)) {
      $dara.Model.validateArray(this.resultObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

