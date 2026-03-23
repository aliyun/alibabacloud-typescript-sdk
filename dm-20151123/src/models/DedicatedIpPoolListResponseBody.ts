// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DedicatedIpPoolListResponseBodyIpPoolsIps extends $dara.Model {
  /**
   * @remarks
   * The ID of the IP address instance.
   * 
   * @example
   * xxx
   */
  id?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * xxx
   */
  ip?: string;
  /**
   * @remarks
   * The ID of the Availability Zone.
   * 
   * @example
   * xxx
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ip: 'Ip',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      ip: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DedicatedIpPoolListResponseBodyIpPools extends $dara.Model {
  /**
   * @remarks
   * The time when the IP pool was created.
   * 
   * @example
   * 2025-05-23T07:41:43Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the IP pool.
   * 
   * @example
   * xxx
   */
  id?: string;
  /**
   * @remarks
   * The number of source IP addresses in the IP pool.
   * 
   * @example
   * 1
   */
  ipCount?: number;
  /**
   * @remarks
   * A list of IP addresses.
   */
  ips?: DedicatedIpPoolListResponseBodyIpPoolsIps[];
  /**
   * @remarks
   * The name of the IP pool.
   * 
   * @example
   * xxx
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      id: 'Id',
      ipCount: 'IpCount',
      ips: 'Ips',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      id: 'string',
      ipCount: 'number',
      ips: { 'type': 'array', 'itemType': DedicatedIpPoolListResponseBodyIpPoolsIps },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ips)) {
      $dara.Model.validateArray(this.ips);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DedicatedIpPoolListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * Indicates whether more results are available.
   * 
   * @example
   * false
   */
  hasMore?: boolean;
  /**
   * @remarks
   * A list of IP pools.
   */
  ipPools?: DedicatedIpPoolListResponseBodyIpPools[];
  /**
   * @remarks
   * The number of entries on the current page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * xxx
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries that match the query.
   * 
   * @example
   * 5
   */
  totalCounts?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      hasMore: 'HasMore',
      ipPools: 'IpPools',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCounts: 'TotalCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      hasMore: 'boolean',
      ipPools: { 'type': 'array', 'itemType': DedicatedIpPoolListResponseBodyIpPools },
      pageSize: 'string',
      requestId: 'string',
      totalCounts: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ipPools)) {
      $dara.Model.validateArray(this.ipPools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

