// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDNSSLBWeightRequest extends $dara.Model {
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
   * The ID of the DNS record. You can call the [DescribeDomainRecords](https://www.alibabacloud.com/help/en/dns/api-alidns-2015-01-09-describedomainrecords?spm=a2c63.p38356.help-menu-search-29697.d_0) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9999985
   */
  recordId?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 1.1.1.1
   */
  userClientIp?: string;
  /**
   * @remarks
   * The weight of the DNS record that you want to specify. Valid values: `1 to 100`.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      recordId: 'RecordId',
      userClientIp: 'UserClientIp',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      recordId: 'string',
      userClientIp: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

