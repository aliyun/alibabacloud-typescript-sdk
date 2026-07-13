// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDNSSLBSubDomainsRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name. Call the [DescribeDomains](https://www.alibabacloud.com/help/en/dns/api-alidns-2015-01-09-describedomains) operation to obtain the domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The language of the response. Valid values are:
   * 
   * - **zh**: Chinese. This is the default value.
   * 
   * - **en**: English.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The page number. The value starts from **1**. The default value is **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. The maximum value is **100**. The default value is **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The host record.
   * 
   * @example
   * test
   */
  rr?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 1.1.XX.XX
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      rr: 'Rr',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      rr: 'string',
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

