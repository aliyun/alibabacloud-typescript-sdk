// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGtmAddressPoolRequestAddr extends $dara.Model {
  /**
   * @remarks
   * The weight of the address.
   * 
   * @example
   * 1
   */
  lbaWeight?: number;
  /**
   * @remarks
   * The mode. Valid values:
   * 
   * - **SMART**: Intelligent return
   * 
   * - **ONLINE**: Always online
   * 
   * - **OFFLINE**: Always offline
   * 
   * @example
   * SMART
   */
  mode?: string;
  /**
   * @remarks
   * The address.
   * 
   * @example
   * 1.1.XX.XX
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      lbaWeight: 'LbaWeight',
      mode: 'Mode',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lbaWeight: 'number',
      mode: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGtmAddressPoolRequest extends $dara.Model {
  /**
   * @remarks
   * The list of addresses in the address pool.
   * 
   * This parameter is required.
   */
  addr?: UpdateGtmAddressPoolRequestAddr[];
  /**
   * @remarks
   * The ID of the address pool.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234abc
   */
  addrPoolId?: string;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The minimum number of active addresses in the address pool.
   * 
   * @example
   * 2
   */
  minAvailableAddrNum?: number;
  /**
   * @remarks
   * The name of the address pool.
   * 
   * @example
   * 名称
   */
  name?: string;
  /**
   * @remarks
   * The type of the address pool. Valid values:
   * 
   * - IP: IPv4 addresses
   * 
   * - DOMAIN: Domain names
   * 
   * This parameter is required.
   * 
   * @example
   * IP
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
      addrPoolId: 'AddrPoolId',
      lang: 'Lang',
      minAvailableAddrNum: 'MinAvailableAddrNum',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: { 'type': 'array', 'itemType': UpdateGtmAddressPoolRequestAddr },
      addrPoolId: 'string',
      lang: 'string',
      minAvailableAddrNum: 'number',
      name: 'string',
      type: 'string',
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

