// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateDnsGtmAddressPoolRequestAddr } from "./UpdateDnsGtmAddressPoolRequestAddr";


export class UpdateDnsGtmAddressPoolRequest extends $dara.Model {
  /**
   * @remarks
   * The address pools.
   * 
   * This parameter is required.
   */
  addr?: UpdateDnsGtmAddressPoolRequestAddr[];
  /**
   * @remarks
   * The ID of the address pool.
   * 
   * This parameter is required.
   * 
   * @example
   * testpool1
   */
  addrPoolId?: string;
  /**
   * @remarks
   * The language of the values of specific response parameters. Default value: en. Valid values: en, zh, and ja.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The load balancing policy of the address pool. Valid values:
   * 
   * *   ALL_RR: returns all addresses.
   * *   RATIO: returns addresses by weight.
   * 
   * This parameter is required.
   * 
   * @example
   * all_rr
   */
  lbaStrategy?: string;
  /**
   * @remarks
   * The name of the address pool.
   * 
   * @example
   * testpoolname
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
      addrPoolId: 'AddrPoolId',
      lang: 'Lang',
      lbaStrategy: 'LbaStrategy',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: { 'type': 'array', 'itemType': UpdateDnsGtmAddressPoolRequestAddr },
      addrPoolId: 'string',
      lang: 'string',
      lbaStrategy: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addr)) {
      $dara.Model.validateArray(this.addr);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

