// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventPageListResponseBodyResultObjectChildren extends $dara.Model {
  /**
   * @remarks
   * The event code.
   * 
   * @example
   * de_aamexg3015
   */
  eventCode?: string;
  /**
   * @remarks
   * The event name.
   * 
   * @example
   * 测试
   */
  eventName?: string;
  /**
   * @remarks
   * The event status.
   * 
   * @example
   * ONLINE
   */
  eventStatus?: string;
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * BYPASS
   */
  eventType?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1621578648000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 1621578648000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 334
   */
  id?: number;
  /**
   * @remarks
   * The total number of rules.
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
   * The object.
   */
  children?: DescribeEventPageListResponseBodyResultObjectChildren[];
  /**
   * @remarks
   * The event code.
   * 
   * @example
   * de_aszbjb7236
   */
  eventCode?: string;
  /**
   * @remarks
   * The event name.
   * 
   * @example
   * 注册风险
   */
  eventName?: string;
  /**
   * @remarks
   * The event status.
   * 
   * @example
   * ONLINE
   */
  eventStatus?: string;
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * MAIN
   */
  eventType?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1621578648000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 1565701886000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The database ID.
   * 
   * @example
   * 497
   */
  id?: number;
  /**
   * @remarks
   * The total number of rules.
   * 
   * @example
   * 10
   */
  ruleCount?: number;
  /**
   * @remarks
   * The template code.
   * 
   * @example
   * register
   */
  templateCode?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * 注册模版
   */
  templateName?: string;
  /**
   * @remarks
   * The template type.
   * 
   * @example
   * UNIVERSAL
   */
  templateType?: string;
  /**
   * @remarks
   * The number of authorized users.
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
   * The request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The returned object.
   */
  resultObject?: DescribeEventPageListResponseBodyResultObject[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 3
   */
  totalItem?: number;
  /**
   * @remarks
   * The total number of pages.
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

