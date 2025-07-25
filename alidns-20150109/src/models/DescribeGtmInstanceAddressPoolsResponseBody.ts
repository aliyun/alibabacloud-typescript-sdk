// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGtmInstanceAddressPoolsResponseBodyAddrPoolsAddrPool extends $dara.Model {
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
  /**
   * @remarks
   * The time when this address pool was created.
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
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      minAvailableAddrNum: 'MinAvailableAddrNum',
      monitorConfigId: 'MonitorConfigId',
      monitorStatus: 'MonitorStatus',
      name: 'Name',
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
      createTime: 'string',
      createTimestamp: 'number',
      minAvailableAddrNum: 'number',
      monitorConfigId: 'string',
      monitorStatus: 'string',
      name: 'string',
      status: 'string',
      type: 'string',
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

export class DescribeGtmInstanceAddressPoolsResponseBodyAddrPools extends $dara.Model {
  addrPool?: DescribeGtmInstanceAddressPoolsResponseBodyAddrPoolsAddrPool[];
  static names(): { [key: string]: string } {
    return {
      addrPool: 'AddrPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPool: { 'type': 'array', 'itemType': DescribeGtmInstanceAddressPoolsResponseBodyAddrPoolsAddrPool },
    };
  }

  validate() {
    if(Array.isArray(this.addrPool)) {
      $dara.Model.validateArray(this.addrPool);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstanceAddressPoolsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned list of address pools of the GTM instance.
   */
  addrPools?: DescribeGtmInstanceAddressPoolsResponseBodyAddrPools;
  /**
   * @remarks
   * The number of the page returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
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
   * The total number of entries returned on all pages.
   * 
   * @example
   * 2
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      addrPools: 'AddrPools',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPools: DescribeGtmInstanceAddressPoolsResponseBodyAddrPools,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(this.addrPools && typeof (this.addrPools as any).validate === 'function') {
      (this.addrPools as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

