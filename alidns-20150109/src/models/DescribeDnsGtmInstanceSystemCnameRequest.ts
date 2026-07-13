// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsGtmInstanceSystemCnameRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. <props="china">Call [DescribeDnsGtmInstances](https://help.aliyun.com/zh/dns/api-alidns-2015-01-09-describednsgtminstances?spm=a2c4g.11186623.help-menu-29697.d_0_5_1_3_8_8.2aea3618RlSR9K) to obtain the ID.
   * <props="intl">Call [DescribeDnsGtmInstances](https://www.alibabacloud.com/help/zh/dns/api-alidns-2015-01-09-describednsgtminstances?spm=a2c63.p38356.help-menu-search-29697.d_0) to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gtm-cn-wwo3a3hbz**
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the response. The default value is en. Valid values: en, zh, and ja.
   * 
   * @example
   * en
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

