// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsGtmInstanceAddressPoolResponseBodyAddrsAddr extends $dara.Model {
  addr?: string;
  alertStatus?: string;
  attributeInfo?: string;
  createTime?: string;
  createTimestamp?: number;
  lbaWeight?: number;
  mode?: string;
  remark?: string;
  updateTime?: string;
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
      alertStatus: 'AlertStatus',
      attributeInfo: 'AttributeInfo',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      lbaWeight: 'LbaWeight',
      mode: 'Mode',
      remark: 'Remark',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: 'string',
      alertStatus: 'string',
      attributeInfo: 'string',
      createTime: 'string',
      createTimestamp: 'number',
      lbaWeight: 'number',
      mode: 'string',
      remark: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceAddressPoolResponseBodyAddrs extends $dara.Model {
  addr?: DescribeDnsGtmInstanceAddressPoolResponseBodyAddrsAddr[];
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: { 'type': 'array', 'itemType': DescribeDnsGtmInstanceAddressPoolResponseBodyAddrsAddr },
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

export class DescribeDnsGtmInstanceAddressPoolResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of addresses in the address pool.
   * 
   * @example
   * 1
   */
  addrCount?: number;
  /**
   * @remarks
   * The ID of the address pool.
   * 
   * @example
   * testpool1
   */
  addrPoolId?: string;
  addrs?: DescribeDnsGtmInstanceAddressPoolResponseBodyAddrs;
  /**
   * @remarks
   * The time when the address pool was created.
   * 
   * @example
   * 2017-12-28T13:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The timestamp that indicates the time when the address pool was created.
   * 
   * @example
   * 1527690629357
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The load balancing policy for the address pool. Valid values:
   * 
   * *   ALL_RR: returns all addresses.
   * *   RATIO: returns addresses by weight.
   * 
   * @example
   * all_rr
   */
  lbaStrategy?: string;
  /**
   * @remarks
   * The ID of the health check configuration.
   * 
   * @example
   * test1
   */
  monitorConfigId?: string;
  /**
   * @remarks
   * Indicates the status of the health check. Valid values:
   * 
   * *   OPEN: The health check is enabled.
   * *   CLOSE: The health check is disabled.
   * *   UNCONFIGURED: The health check is not configured.
   * 
   * @example
   * open
   */
  monitorStatus?: string;
  /**
   * @remarks
   * The name of the address pool.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6856BCF6-11D6-4D7E-AC53-FD579933522B
   */
  requestId?: string;
  /**
   * @remarks
   * The type of the address pool. Valid values:
   * 
   * *   IPV4: IPv4 address
   * *   IPV6: IPv6 address
   * *   DOMAIN: domain name
   * 
   * @example
   * ipv4
   */
  type?: string;
  /**
   * @remarks
   * The time when the address pool was last updated.
   * 
   * @example
   * 2017-12-28T13:08Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The timestamp that indicates the time when the address pool was last updated.
   * 
   * @example
   * 1527690629357
   */
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      addrCount: 'AddrCount',
      addrPoolId: 'AddrPoolId',
      addrs: 'Addrs',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      lbaStrategy: 'LbaStrategy',
      monitorConfigId: 'MonitorConfigId',
      monitorStatus: 'MonitorStatus',
      name: 'Name',
      requestId: 'RequestId',
      type: 'Type',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrCount: 'number',
      addrPoolId: 'string',
      addrs: DescribeDnsGtmInstanceAddressPoolResponseBodyAddrs,
      createTime: 'string',
      createTimestamp: 'number',
      lbaStrategy: 'string',
      monitorConfigId: 'string',
      monitorStatus: 'string',
      name: 'string',
      requestId: 'string',
      type: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
    };
  }

  validate() {
    if(this.addrs && typeof (this.addrs as any).validate === 'function') {
      (this.addrs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

