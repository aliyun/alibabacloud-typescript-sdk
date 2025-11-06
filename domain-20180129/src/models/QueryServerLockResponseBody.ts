// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryServerLockResponseBody extends $dara.Model {
  /**
   * @example
   * S20190N1DAI4****
   */
  domainInstanceId?: string;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * 2030-07-10 17:37:36
   */
  expireDate?: string;
  /**
   * @example
   * 2021-07-10 17:37:36
   */
  gmtCreate?: string;
  /**
   * @example
   * 2021-07-10 17:37:36
   */
  gmtModified?: string;
  /**
   * @example
   * S2021591IQ28****
   */
  lockInstanceId?: string;
  /**
   * @example
   * 1807**
   */
  lockProductId?: string;
  /**
   * @example
   * 9DFCF6F8-243C-****-8035-4B12FEFD7D48
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  serverLockStatus?: number;
  /**
   * @example
   * 2021-07-10 17:37:36
   */
  startDate?: string;
  /**
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
      requestId: 'RequestId',
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
      requestId: 'string',
      serverLockStatus: 'number',
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

