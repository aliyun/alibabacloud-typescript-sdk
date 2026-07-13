// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGtmInstanceAddressPoolResponseBodyAddrsAddr extends $dara.Model {
  addrId?: number;
  alertStatus?: string;
  createTime?: string;
  createTimestamp?: number;
  lbaWeight?: number;
  mode?: string;
  updateTime?: string;
  updateTimestamp?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      addrId: 'AddrId',
      alertStatus: 'AlertStatus',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      lbaWeight: 'LbaWeight',
      mode: 'Mode',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrId: 'number',
      alertStatus: 'string',
      createTime: 'string',
      createTimestamp: 'number',
      lbaWeight: 'number',
      mode: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
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

export class DescribeGtmInstanceAddressPoolResponseBodyAddrs extends $dara.Model {
  addr?: DescribeGtmInstanceAddressPoolResponseBodyAddrsAddr[];
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: { 'type': 'array', 'itemType': DescribeGtmInstanceAddressPoolResponseBodyAddrsAddr },
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

export class DescribeGtmInstanceAddressPoolResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of addresses in the address pool.
   * 
   * @example
   * 2
   */
  addrCount?: number;
  /**
   * @remarks
   * The ID of the address pool.
   * 
   * @example
   * 1234abc
   */
  addrPoolId?: string;
  addrs?: DescribeGtmInstanceAddressPoolResponseBodyAddrs;
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
   * The time when the address pool was created. This is a UNIX timestamp.
   * 
   * @example
   * 1527690629357
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The minimum number of available addresses.
   * 
   * @example
   * 1
   */
  minAvailableAddrNum?: number;
  /**
   * @remarks
   * The ID of the monitoring configuration.
   * 
   * @example
   * 100abc
   */
  monitorConfigId?: string;
  /**
   * @remarks
   * The monitoring status. Valid values:
   * 
   * - **OPEN**: Enabled
   * 
   * - **CLOSE**: Disabled
   * 
   * - **UNCONFIGURED**: Not configured
   * 
   * @example
   * OPEN
   */
  monitorStatus?: string;
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
   * The unique request ID.
   * 
   * @example
   * 6856BCF6-11D6-4D7E-AC53-FD579933522B
   */
  requestId?: string;
  /**
   * @remarks
   * The availability status of the address pool. Valid values:
   * 
   * - **AVAILABLE**: The address pool is available.
   * 
   * - **NOT_AVAILABLE**: The address pool is unavailable.
   * 
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * The type of the address pool. Valid values:
   * 
   * - **IP**: IP address
   * 
   * - **DOMAIN**: Domain name
   * 
   * @example
   * IP
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
   * The time when the address pool was last updated. This is a UNIX timestamp.
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
      minAvailableAddrNum: 'MinAvailableAddrNum',
      monitorConfigId: 'MonitorConfigId',
      monitorStatus: 'MonitorStatus',
      name: 'Name',
      requestId: 'RequestId',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrCount: 'number',
      addrPoolId: 'string',
      addrs: DescribeGtmInstanceAddressPoolResponseBodyAddrs,
      createTime: 'string',
      createTimestamp: 'number',
      minAvailableAddrNum: 'number',
      monitorConfigId: 'string',
      monitorStatus: 'string',
      name: 'string',
      requestId: 'string',
      status: 'string',
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

