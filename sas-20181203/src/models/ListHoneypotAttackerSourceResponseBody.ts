// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHoneypotAttackerSourceResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The total number of attack events.
   * 
   * @example
   * 30
   */
  eventCount?: number;
  /**
   * @remarks
   * The most recent honeypot that was attacked.
   * 
   * @example
   * vpc tcp honeypot
   */
  lastTargetHoneypot?: string;
  /**
   * @remarks
   * The most recent IP address that was attacked.
   * 
   * @example
   * 144.23.66.***
   */
  lastTargetIp?: string;
  /**
   * @remarks
   * The last time when the attack event occurred.
   * 
   * @example
   * 1693446913000
   */
  lastTime?: number;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * *   **2**: low
   * *   **3**: medium
   * *   **4**: high
   * 
   * @example
   * 2
   */
  riskLevel?: string;
  /**
   * @remarks
   * The source IP address of the attack.
   * 
   * @example
   * 101.102.61.***
   */
  srcIp?: string;
  static names(): { [key: string]: string } {
    return {
      eventCount: 'EventCount',
      lastTargetHoneypot: 'LastTargetHoneypot',
      lastTargetIp: 'LastTargetIp',
      lastTime: 'LastTime',
      riskLevel: 'RiskLevel',
      srcIp: 'SrcIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventCount: 'number',
      lastTargetHoneypot: 'string',
      lastTargetIp: 'string',
      lastTime: 'number',
      riskLevel: 'string',
      srcIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHoneypotAttackerSourceResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 55
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHoneypotAttackerSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code **200** indicates that the request was successful. Other status codes indicate that the request failed. You can identify the cause of the failure based on the status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The source IP addresses of the attack.
   */
  list?: ListHoneypotAttackerSourceResponseBodyList[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListHoneypotAttackerSourceResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9915DC4D-B4DA-5140-8138-FD80636*****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      list: 'List',
      message: 'Message',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      list: { 'type': 'array', 'itemType': ListHoneypotAttackerSourceResponseBodyList },
      message: 'string',
      pageInfo: ListHoneypotAttackerSourceResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

