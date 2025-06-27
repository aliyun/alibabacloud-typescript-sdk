// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDomainRemarkRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name that already exists in Alibaba Cloud Domain Name System (DNS). You can call the [DescribeDomains ](https://www.alibabacloud.com/help/zh/dns/api-alidns-2015-01-09-describedomains?spm=a2c63.p38356.help-menu-search-29697.d_0)operation to obtain the domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * mydomain.com
   */
  domainName?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en
   * 
   * @example
   * cn
   */
  lang?: string;
  /**
   * @remarks
   * The description of the domain name.
   * 
   * It can be up to 50 characters in length and can contain digits, letters, and the following special characters: _ - , .
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

