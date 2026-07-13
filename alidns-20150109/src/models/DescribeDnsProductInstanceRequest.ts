// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsProductInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. <props="china">You can call [DescribeDomainInfo](https://help.aliyun.com/zh/dns/api-alidns-2015-01-09-describedomaininfo?spm=a2c4g.11186623.help-menu-search-29697.d_0) to obtain the instance ID.<props="intl">You can call [DescribeDomainInfo](https://www.alibabacloud.com/help/zh/dns/api-alidns-2015-01-09-describedomaininfo?spm=a2c63.p38356.help-menu-search-29697.d_0) to obtain the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i-8fxxxx
   */
  instanceId?: string;
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
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The client IP address.
   * 
   * @example
   * 192.0.2.0
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
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

