// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDnsCacheDomainRemarkRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name. You can call the [DescribeDomains](https://www.alibabacloud.com/help/zh/dns/api-alidns-2015-01-09-describedomains?spm=a2c63.p38356.help-menu-search-29697.d_0) operation to obtain the domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * dns-example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * Default: **zh**
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The remarks. The remarks can be up to 50 characters in length and can contain only letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * Delete the original remarks when it is empty.
   * 
   * @example
   * test
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

