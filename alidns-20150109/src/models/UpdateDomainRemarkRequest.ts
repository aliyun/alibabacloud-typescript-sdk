// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDomainRemarkRequest extends $dara.Model {
  /**
   * @remarks
   * An existing domain name in Alibaba Cloud DNS.<props="china">For more information, see [DescribeDomains ](https://help.aliyun.com/zh/dns/api-alidns-2015-01-09-describedomains?spm=a2c4g.11186623.help-menu-search-29697.d_0).
   * <props="intl">For more information, see [DescribeDomains ](https://www.alibabacloud.com/help/zh/dns/api-alidns-2015-01-09-describedomains?spm=a2c63.p38356.help-menu-search-29697.d_0).
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh: Chinese
   * 
   * - en: English
   * 
   * Default: en
   * 
   * @example
   * cn
   */
  lang?: string;
  /**
   * @remarks
   * The remarks for the domain name.
   * 
   * The remarks can be up to 50 characters in length. They can contain digits, letters, Chinese characters, and the following special characters: _, -, ,, and .
   * 
   * @example
   * 这是我在阿里云解析的第一个域名
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

