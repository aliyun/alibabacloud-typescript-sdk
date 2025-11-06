// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServerLockRequest extends $dara.Model {
  /**
   * @remarks
   * The start of the time range to query.
   * 
   * @example
   * 2021-07-10 17:37:36
   */
  beginStartDate?: number;
  /**
   * @remarks
   * The domain name for which you want to query the enabled registry lock.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the expiration time.
   * 
   * @example
   * 2021-07-10 17:37:36
   */
  endExpireDate?: number;
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * @example
   * 2020-07-10 17:37:36
   */
  endStartDate?: number;
  /**
   * @remarks
   * The language of the error message to return if the request fails. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
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
   * The field that you use to sort the query results.
   * 
   * Valid values:
   * 
   * *   EXPIRE_DATE
   * 
   * @example
   * EXPIRE_DATE
   */
  orderBy?: string;
  /**
   * @remarks
   * The order of the information based on which you want to sort the domain names, such as the registration date and expiration date. Valid values: ASC and DESC. The value ASC specifies the ascending order. The value DESC specifies the descending order. If this parameter is not configured, the default value DESC is used.
   * 
   * @example
   * DESC
   */
  orderByType?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of the registry lock. Valid values:
   * 
   * *   1: The registry lock is not enabled.
   * *   2: The registry lock is enabled.
   * *   3: The registry lock is disabled.
   * 
   * @example
   * 1
   */
  serverLockStatus?: number;
  /**
   * @remarks
   * The start of the expiration time.
   * 
   * @example
   * 2020-07-10 17:37:36
   */
  startExpireDate?: number;
  /**
   * @remarks
   * The IP address of the client. For example, you can set the value to **127.0.0.1**.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      beginStartDate: 'BeginStartDate',
      domainName: 'DomainName',
      endExpireDate: 'EndExpireDate',
      endStartDate: 'EndStartDate',
      lang: 'Lang',
      lockProductId: 'LockProductId',
      orderBy: 'OrderBy',
      orderByType: 'OrderByType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      serverLockStatus: 'ServerLockStatus',
      startExpireDate: 'StartExpireDate',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginStartDate: 'number',
      domainName: 'string',
      endExpireDate: 'number',
      endStartDate: 'number',
      lang: 'string',
      lockProductId: 'string',
      orderBy: 'string',
      orderByType: 'string',
      pageNum: 'number',
      pageSize: 'number',
      serverLockStatus: 'number',
      startExpireDate: 'number',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

