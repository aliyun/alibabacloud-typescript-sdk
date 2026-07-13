// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsGtmMonitorConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Default value: en. Valid values: en, zh, and ja.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the health check configuration.<props="china"> For more information, see [DescribeDnsGtmInstanceAddressPool](https://help.aliyun.com/zh/dns/api-alidns-2015-01-09-describednsgtminstanceaddresspool?spm=a2c4g.11186623.help-menu-29697.d_0_5_1_3_9_6.7db77000nMCPI1).<props="intl"> For more information, see [DescribeDnsGtmInstanceAddressPool](https://www.alibabacloud.com/help/zh/dns/api-alidns-2015-01-09-describednsgtminstanceaddresspool?spm=a2c63.p38356.help-menu-search-29697.d_0).
   * 
   * This parameter is required.
   * 
   * @example
   * Moni*******
   */
  monitorConfigId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      monitorConfigId: 'MonitorConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      monitorConfigId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

