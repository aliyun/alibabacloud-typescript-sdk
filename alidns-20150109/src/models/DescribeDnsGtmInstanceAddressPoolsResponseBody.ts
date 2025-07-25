// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsGtmInstanceAddressPoolsResponseBodyAddrPoolsAddrPool extends $dara.Model {
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
   * pool-1
   */
  addrPoolId?: string;
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
   * The timestamp that indicates when the address pool was created.
   * 
   * @example
   * 1527690629357
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The load balancing policy of the address pool. Valid values:
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
   * The ID of the health check task.
   * 
   * @example
   * abc123
   */
  monitorConfigId?: string;
  /**
   * @remarks
   * Indicates whether health checks are configured. Valid values:
   * 
   * *   OPEN: enabled
   * *   CLOSE: disabled
   * *   UNCONFIGURED: not configured
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
   * testpool
   */
  name?: string;
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
   * The time when the address pool was updated.
   * 
   * @example
   * 2017-12-28T13:08Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The timestamp that indicates when the address pool was updated.
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
      lbaStrategy: 'LbaStrategy',
      monitorConfigId: 'MonitorConfigId',
      monitorStatus: 'MonitorStatus',
      name: 'Name',
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
      lbaStrategy: 'string',
      monitorConfigId: 'string',
      monitorStatus: 'string',
      name: 'string',
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

export class DescribeDnsGtmInstanceAddressPoolsResponseBodyAddrPools extends $dara.Model {
  addrPool?: DescribeDnsGtmInstanceAddressPoolsResponseBodyAddrPoolsAddrPool[];
  static names(): { [key: string]: string } {
    return {
      addrPool: 'AddrPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPool: { 'type': 'array', 'itemType': DescribeDnsGtmInstanceAddressPoolsResponseBodyAddrPoolsAddrPool },
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

export class DescribeDnsGtmInstanceAddressPoolsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned address pools.
   */
  addrPools?: DescribeDnsGtmInstanceAddressPoolsResponseBodyAddrPools;
  /**
   * @remarks
   * The page number of the returned page.
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
   * 1
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
   * 1
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
      addrPools: DescribeDnsGtmInstanceAddressPoolsResponseBodyAddrPools,
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

