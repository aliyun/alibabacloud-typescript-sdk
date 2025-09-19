// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventLogPageResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Account ID.
   * 
   * @example
   * 1631801314885832
   */
  accountId?: string;
  /**
   * @remarks
   * Email.
   * 
   * @example
   * xxxx@123.com
   */
  email?: string;
  /**
   * @remarks
   * IP address.
   * 
   * @example
   * 10.200.5.100
   */
  ip?: string;
  /**
   * @remarks
   * Mobile phone number.
   * 
   * @example
   * 13817606333
   */
  mobile?: string;
  /**
   * @remarks
   * Nickname.
   * 
   * @example
   * 昵称
   */
  nickName?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 546F8063-0104-5271-9EB7-56FB3F375BAD
   */
  requestId?: string;
  /**
   * @remarks
   * Score.
   * 
   * @example
   * 10.0
   */
  score?: string;
  /**
   * @remarks
   * Event name.
   * 
   * @example
   * 注册事件
   */
  service?: string;
  /**
   * @remarks
   * Tags.
   * 
   * @example
   * rm0102
   */
  tags?: string;
  /**
   * @remarks
   * Transaction time.
   * 
   * @example
   * 1737101348000
   */
  timestamp?: string;
  /**
   * @remarks
   * Device ID.
   * 
   * @example
   * 4239
   */
  umid?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      email: 'email',
      ip: 'ip',
      mobile: 'mobile',
      nickName: 'nickName',
      requestId: 'requestId',
      score: 'score',
      service: 'service',
      tags: 'tags',
      timestamp: 'timestamp',
      umid: 'umid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      email: 'string',
      ip: 'string',
      mobile: 'string',
      nickName: 'string',
      requestId: 'string',
      score: 'string',
      service: 'string',
      tags: 'string',
      timestamp: 'string',
      umid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventLogPageResponseBody extends $dara.Model {
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
   * Page size, default value is 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Returned object.
   */
  resultObject?: DescribeEventLogPageResponseBodyResultObject[];
  /**
   * @remarks
   * Total number of items.
   * 
   * @example
   * 6
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
      resultObject: { 'type': 'array', 'itemType': DescribeEventLogPageResponseBodyResultObject },
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

