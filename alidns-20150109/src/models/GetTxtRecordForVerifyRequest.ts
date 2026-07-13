// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTxtRecordForVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name. The [DescribeDomains](https://www.alibabacloud.com/help/en/dns/api-alidns-2015-01-09-describedomains) operation returns a list of domain names.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * 
   * - **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The purpose of the TXT record verification. Valid values:
   * 
   * - ADD_SUB_DOMAIN: Add a subdomain for verification.
   * 
   * - RETRIEVAL: Other verifications.
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

