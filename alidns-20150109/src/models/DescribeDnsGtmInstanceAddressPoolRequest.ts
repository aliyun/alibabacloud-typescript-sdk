// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsGtmInstanceAddressPoolRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the address pool.<props="china">You can call the [DescribeDnsGtmInstanceAddressPools](https://help.aliyun.com/zh/dns/api-alidns-2015-01-09-describednsgtminstanceaddresspools?spm=a2c4g.11186623.help-menu-29697.d_0_5_1_3_9_7.1cee430dbd1I3y) operation to obtain the ID.
   * <props="intl">You can call the [DescribeDnsGtmInstanceAddressPools](https://www.alibabacloud.com/help/zh/dns/api-alidns-2015-01-09-describednsgtminstanceaddresspools?spm=a2c63.p38356.help-menu-search-29697.d_0) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * test*****
   */
  addrPoolId?: string;
  /**
   * @remarks
   * The language of the response. Default value: en. Valid values: en, zh, and ja.
   * 
   * @example
   * en
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      addrPoolId: 'AddrPoolId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPoolId: 'string',
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

