// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DedicatedIpPoolListResponseBodyIpPoolsIps extends $dara.Model {
  /**
   * @remarks
   * Instance purchase ID
   * 
   * @example
   * xxx
   */
  id?: string;
  /**
   * @remarks
   * IP address
   * 
   * @example
   * xxx
   */
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      ip: 'string',
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
   * Creation time
   * 
   * @example
   * 2025-05-23T07:41:43Z
   */
  createTime?: string;
  /**
   * @remarks
   * IP pool ID
   * 
   * @example
   * xxx
   */
  id?: string;
  /**
   * @remarks
   * Number of source IP addresses
   * 
   * @example
   * 1
   */
  ipCount?: number;
  /**
   * @remarks
   * List of IPs
   */
  ips?: DedicatedIpPoolListResponseBodyIpPoolsIps[];
  /**
   * @remarks
   * IP pool name
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
   * Current page
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * Whether there is a next page
   * 
   * @example
   * false
   */
  hasMore?: boolean;
  /**
   * @remarks
   * List of IP pools
   */
  ipPools?: DedicatedIpPoolListResponseBodyIpPools[];
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * xxx
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of data under the current request conditions
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

