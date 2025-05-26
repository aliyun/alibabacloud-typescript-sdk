// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDomainByParamResponseBodyDataDomain extends $dara.Model {
  /**
   * @remarks
   * Track verification
   * 
   * @example
   * 0
   */
  cnameAuthStatus?: string;
  /**
   * @remarks
   * CName verification status, success: 0; failure: 1
   * 
   * @example
   * 0
   */
  confirmStatus?: string;
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 2019-09-29T13:28Z
   */
  createTime?: string;
  /**
   * @remarks
   * Domain ID
   * 
   * @example
   * 158923
   */
  domainId?: string;
  /**
   * @remarks
   * Domain name
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Domain record
   * 
   * @example
   * 6bd86901b9fe4618a046
   */
  domainRecord?: string;
  /**
   * @remarks
   * Domain status.
   * 
   * - 0: Available, verified
   * - 1: Unavailable, verification failed
   * 
   * @example
   * 0
   */
  domainStatus?: string;
  /**
   * @remarks
   * ICP filing status.
   * 
   * - 1 indicates filed
   * - 0 indicates not filed
   * 
   * @example
   * 1
   */
  icpStatus?: string;
  /**
   * @remarks
   * MX authentication status, success: 0, failure: 1.
   * 
   * @example
   * 0
   */
  mxAuthStatus?: string;
  /**
   * @remarks
   * SPF authentication status, success: 0, failure: 1.
   * 
   * @example
   * 0
   */
  spfAuthStatus?: string;
  /**
   * @remarks
   * Creation time in UTC format.
   * 
   * @example
   * 1569734892
   */
  utcCreateTime?: number;
  static names(): { [key: string]: string } {
    return {
      cnameAuthStatus: 'CnameAuthStatus',
      confirmStatus: 'ConfirmStatus',
      createTime: 'CreateTime',
      domainId: 'DomainId',
      domainName: 'DomainName',
      domainRecord: 'DomainRecord',
      domainStatus: 'DomainStatus',
      icpStatus: 'IcpStatus',
      mxAuthStatus: 'MxAuthStatus',
      spfAuthStatus: 'SpfAuthStatus',
      utcCreateTime: 'UtcCreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnameAuthStatus: 'string',
      confirmStatus: 'string',
      createTime: 'string',
      domainId: 'string',
      domainName: 'string',
      domainRecord: 'string',
      domainStatus: 'string',
      icpStatus: 'string',
      mxAuthStatus: 'string',
      spfAuthStatus: 'string',
      utcCreateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

