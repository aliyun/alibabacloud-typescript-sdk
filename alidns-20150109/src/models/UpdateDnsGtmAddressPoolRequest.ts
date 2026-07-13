// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDnsGtmAddressPoolRequestAddr extends $dara.Model {
  /**
   * @remarks
   * The address.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.1.XX.XX
   */
  addr?: string;
  /**
   * @remarks
   * The source region of the address. This parameter is a JSON string.
   * 
   * - LineCode: The line code of the source region. This parameter is deprecated. Use lineCodes instead.
   * 
   * - lineCodes: A list of line codes for the source regions.
   * 
   * - lineCodeRectifyType: The type of line code rectification. Default value: AUTO. Valid values:
   * 
   *   - NO_NEED: No rectification is required.
   * 
   *   - RECTIFIED: The line code is rectified.
   * 
   *   - AUTO: The line code is automatically rectified.
   * 
   * @example
   * Linecode: default
   * lineCodes： ["default"]
   * lineCodeRectifyType: AUTO
   */
  attributeInfo?: string;
  /**
   * @remarks
   * The weight.
   * 
   * @example
   * 1
   */
  lbaWeight?: number;
  /**
   * @remarks
   * The mode. Valid values:
   * 
   * - SMART: Smart return
   * 
   * - ONLINE: Always online
   * 
   * - OFFLINE: Always offline
   * 
   * This parameter is required.
   * 
   * @example
   * SMART
   */
  mode?: string;
  /**
   * @remarks
   * The remarks.
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
   * A list of addresses in the address pool.
   * 
   * This parameter is required.
   */
  addr?: UpdateDnsGtmAddressPoolRequestAddr[];
  /**
   * @remarks
   * The ID of the address pool. For more information, see [DescribeDnsGtmInstanceAddressPools](https://www.alibabacloud.com/help/en/dns/api-alidns-2015-01-09-describednsgtminstanceaddresspools).
   * 
   * This parameter is required.
   * 
   * @example
   * testp******
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
  /**
   * @remarks
   * The load balancing policy. Valid values:
   * 
   * - ALL_RR: Returns all addresses.
   * 
   * - RATIO: Returns addresses by weight.
   * 
   * This parameter is required.
   * 
   * @example
   * ALL_RR
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

