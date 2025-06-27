// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGtmInstanceAddressPoolResponseBodyAddrs } from "./DescribeGtmInstanceAddressPoolResponseBodyAddrs";


export class DescribeGtmInstanceAddressPoolResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of addresses in the address pool queried.
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
  /**
   * @remarks
   * The addresses in the address pool.
   */
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
   * @example
   * 1527690629357
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The minimum number of available addresses in the address pool.
   * 
   * @example
   * 2
   */
  minAvailableAddrNum?: number;
  /**
   * @remarks
   * The health check ID of the address pool.
   * 
   * @example
   * 100abc
   */
  monitorConfigId?: string;
  /**
   * @remarks
   * Indicates whether health check was enabled for the address pool. Valid values:
   * 
   * *   **OPEN**: Enabled
   * *   **CLOSE**: Disabled
   * *   **UNCONFIGURED**: Not configured
   * 
   * @example
   * OPEN
   */
  monitorStatus?: string;
  /**
   * @remarks
   * The name of the address pool.
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
   * The availability status of the address pool. Valid values:
   * 
   * *   **AVAILABLE**: Available
   * *   **NOT_AVAILABLE**: Unavailable
   * 
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * The type of the address pool. Valid values:
   * 
   * *   **IP**: IP address
   * *   **DOMAIN**: Domain name
   * 
   * @example
   * IP
   */
  type?: string;
  /**
   * @remarks
   * The last time when the address pool was updated.
   * 
   * @example
   * 2017-12-28T13:08Z
   */
  updateTime?: string;
  /**
   * @remarks
   * A timestamp that indicates the last time the address pool was updated.
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

