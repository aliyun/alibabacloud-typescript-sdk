// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDnsGtmAddressPoolRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the address pool. To obtain the ID, call [DescribeDnsGtmInstanceAddressPools](https://www.alibabacloud.com/help/en/dns/latest/api-alidns-2015-01-09-describednsgtminstanceaddresspools).
   * 
   * This parameter is required.
   * 
   * @example
   * testp******
   */
  addrPoolId?: string;
  /**
   * @remarks
   * The language for some returned parameters. Default: en. Valid values: en, zh, and ja.
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

