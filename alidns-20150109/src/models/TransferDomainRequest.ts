// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The domain names to transfer. Separate multiple domain names with commas. Only domain names registered with Alibaba Cloud are supported. <props="china">To get your domain names, call [DescribeDomains](https://help.aliyun.com/en/dns/api-alidns-2015-01-09-describedomains?spm=a2c4g.11186623.help-menu-search-29697.d_0).
   * <props="intl">To get your domain names, call [DescribeDomains](https://www.alibabacloud.com/help/en/dns/api-alidns-2015-01-09-describedomains?spm=a2c63.p38356.help-menu-search-29697.d_0).
   * 
   * This parameter is required.
   * 
   * @example
   * example.com,example.net
   */
  domainNames?: string;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * 
   * - zh: Chinese
   * 
   * - en: English
   * 
   * Default value: zh.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The remarks for the transfer.
   * 
   * @example
   * test domain transfer
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the target user account. The specified domain names and their DNS records are transferred to this account.
   * 
   * This parameter is required.
   * 
   * @example
   * 12*******
   */
  targetUserId?: number;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      lang: 'Lang',
      remark: 'Remark',
      targetUserId: 'TargetUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: 'string',
      lang: 'string',
      remark: 'string',
      targetUserId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

