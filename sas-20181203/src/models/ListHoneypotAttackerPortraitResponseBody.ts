// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHoneypotAttackerPortraitResponseBodyListNetwork extends $dara.Model {
  /**
   * @remarks
   * The public IP addresses.
   */
  externalIp?: string[];
  /**
   * @remarks
   * The private IP addresses.
   */
  internalIp?: string[];
  /**
   * @remarks
   * The originating IP addresses.
   */
  realIp?: string[];
  static names(): { [key: string]: string } {
    return {
      externalIp: 'ExternalIp',
      internalIp: 'InternalIp',
      realIp: 'RealIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalIp: { 'type': 'array', 'itemType': 'string' },
      internalIp: { 'type': 'array', 'itemType': 'string' },
      realIp: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.externalIp)) {
      $dara.Model.validateArray(this.externalIp);
    }
    if(Array.isArray(this.internalIp)) {
      $dara.Model.validateArray(this.internalIp);
    }
    if(Array.isArray(this.realIp)) {
      $dara.Model.validateArray(this.realIp);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHoneypotAttackerPortraitResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The number of attacks.
   * 
   * @example
   * 10
   */
  attackCount?: number;
  /**
   * @remarks
   * The information about the browsers of the attack source.
   */
  browser?: string[];
  /**
   * @remarks
   * The information about the hosts of the attack source.
   */
  host?: string[];
  /**
   * @remarks
   * The timestamp at which the attack was last detected. Unit: milliseconds.
   * 
   * @example
   * 1679896965
   */
  lastTime?: number;
  /**
   * @remarks
   * The network information about the attack source.
   */
  network?: ListHoneypotAttackerPortraitResponseBodyListNetwork;
  /**
   * @remarks
   * The attacker profile ID.
   * 
   * @example
   * cd48604a-1694-4f03-ade0-ec6994c3****
   */
  portraitId?: string;
  /**
   * @remarks
   * The social information about the attack source.
   */
  social?: string[];
  static names(): { [key: string]: string } {
    return {
      attackCount: 'AttackCount',
      browser: 'Browser',
      host: 'Host',
      lastTime: 'LastTime',
      network: 'Network',
      portraitId: 'PortraitId',
      social: 'Social',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackCount: 'number',
      browser: { 'type': 'array', 'itemType': 'string' },
      host: { 'type': 'array', 'itemType': 'string' },
      lastTime: 'number',
      network: ListHoneypotAttackerPortraitResponseBodyListNetwork,
      portraitId: 'string',
      social: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.browser)) {
      $dara.Model.validateArray(this.browser);
    }
    if(Array.isArray(this.host)) {
      $dara.Model.validateArray(this.host);
    }
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
    }
    if(Array.isArray(this.social)) {
      $dara.Model.validateArray(this.social);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHoneypotAttackerPortraitResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 11
   */
  count?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 2
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
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
   * 25
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

export class ListHoneypotAttackerPortraitResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code that is returned. The status code **200** indicates that the request was successful. Other status codes indicate that the request failed. You can identify the cause of the failure based on the status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The details of the attacker profile.
   */
  list?: ListHoneypotAttackerPortraitResponseBodyList[];
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
  pageInfo?: ListHoneypotAttackerPortraitResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8A5A2DA6-67EA-5968-960F-6B20FD0C*****
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
      list: { 'type': 'array', 'itemType': ListHoneypotAttackerPortraitResponseBodyList },
      message: 'string',
      pageInfo: ListHoneypotAttackerPortraitResponseBodyPageInfo,
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

