// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDnsGtmAddressPoolRequestAddr extends $dara.Model {
  /**
   * @remarks
   * The address in the address pool.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.1.1.1
   */
  addr?: string;
  /**
   * @remarks
   * The information about the source region of the address. The value of the parameter is a string in the JSON format. Valid values:
   * 
   * *   LineCode: the line code of the source region. This parameter is deprecated. Use lineCodes instead.
   * 
   * *   lineCodes: the line codes of the source region
   * 
   * *   lineCodeRectifyType: the rectification type of the line code. Default value: AUTO. Valid values:
   * 
   *     *   NO_NEED: no need for rectification
   *     *   RECTIFIED: rectified
   *     *   AUTO: automatic rectification
   * 
   * @example
   * Linecode:default,lineCodes:["default"],lineCodeRectifyType:"NO_NEED"
   */
  attributeInfo?: string;
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
   * The return mode of the addresses. Valid values:
   * 
   * *   SMART: smart return
   * *   ONLINE: always online
   * *   OFFLINE: always offline
   * 
   * This parameter is required.
   * 
   * @example
   * online
   */
  mode?: string;
  /**
   * @remarks
   * The description of the address pool.
   * 
   * @example
   * test
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
      attributeInfo: 'AttributeInfo',
      lbaWeight: 'LbaWeight',
      mode: 'Mode',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: 'string',
      attributeInfo: 'string',
      lbaWeight: 'number',
      mode: 'string',
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

