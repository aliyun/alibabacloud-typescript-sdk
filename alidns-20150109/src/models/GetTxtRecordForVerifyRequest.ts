// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTxtRecordForVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Domain Name System (DNS) record. You can call the [DescribeDomainRecords](https://www.alibabacloud.com/help/zh/dns/api-alidns-2015-01-09-describedomainrecords?spm=a2c63.p38356.help-menu-search-29697.d_0) operation to obtain the ID.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The feature verified by using the TXT record. Valid values:
   * 
   * *   ADD_SUB_DOMAIN: add a subdomain for verification.
   * *   RETRIEVAL: add other subdomains for verification
   * 
   * This parameter is required.
   * 
   * @example
   * ADD_SUB_DOMAIN
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

