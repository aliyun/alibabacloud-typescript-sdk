// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServerLockResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the domain name.
   * 
   * @example
   * S20190N1DAI4****
   */
  domainInstanceId?: string;
  /**
   * @remarks
   * The domain name that has valid registry lock information.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2030-07-10 17:37:36
   */
  expireDate?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2020-02-19 16:38:07
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the domain name was last modified.
   * 
   * @example
   * 2022-02-19 16:40:38
   */
  gmtModified?: string;
  /**
   * @remarks
   * The instance ID of the domain name for which the registry lock is enabled.
   * 
   * @example
   * S2021591IQ28****
   */
  lockInstanceId?: string;
  /**
   * @remarks
   * The ID of the product to which the domain name with the registry lock enabled belongs.
   * 
   * @example
   * 1807**
   */
  lockProductId?: string;
  /**
   * @remarks
   * The status of the registry lock.
   * 
   * @example
   * 2
   */
  serverLockStatus?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2021-07-10 17:37:36
   */
  startDate?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 121000000****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      domainInstanceId: 'DomainInstanceId',
      domainName: 'DomainName',
      expireDate: 'ExpireDate',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      lockInstanceId: 'LockInstanceId',
      lockProductId: 'LockProductId',
      serverLockStatus: 'ServerLockStatus',
      startDate: 'StartDate',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainInstanceId: 'string',
      domainName: 'string',
      expireDate: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      lockInstanceId: 'string',
      lockProductId: 'string',
      serverLockStatus: 'string',
      startDate: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerLockResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 0
   */
  currentPageNum?: number;
  /**
   * @remarks
   * The response parameters.
   */
  data?: ListServerLockResponseBodyData[];
  /**
   * @remarks
   * Indicates whether the current page is followed by a page.
   * 
   * @example
   * false
   */
  nextPage?: boolean;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * Indicates whether the current page is preceded by a page.
   * 
   * @example
   * false
   */
  prePage?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9DFCF6F8-243C-****-8035-4B12FEFD7D48
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalItemNum?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 1
   */
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      nextPage: 'NextPage',
      pageSize: 'PageSize',
      prePage: 'PrePage',
      requestId: 'RequestId',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: { 'type': 'array', 'itemType': ListServerLockResponseBodyData },
      nextPage: 'boolean',
      pageSize: 'number',
      prePage: 'boolean',
      requestId: 'string',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

