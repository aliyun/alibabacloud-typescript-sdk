// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsGtmAccessStrategyResponseBodyDefaultAddrPoolsDefaultAddrPool extends $dara.Model {
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
   * pool1
   */
  id?: string;
  /**
   * @remarks
   * The weight of the address pool.
   * 
   * @example
   * 1
   */
  lbaWeight?: number;
  /**
   * @remarks
   * The name of the address pool.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      addrCount: 'AddrCount',
      id: 'Id',
      lbaWeight: 'LbaWeight',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrCount: 'number',
      id: 'string',
      lbaWeight: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyResponseBodyDefaultAddrPools extends $dara.Model {
  defaultAddrPool?: DescribeDnsGtmAccessStrategyResponseBodyDefaultAddrPoolsDefaultAddrPool[];
  static names(): { [key: string]: string } {
    return {
      defaultAddrPool: 'DefaultAddrPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultAddrPool: { 'type': 'array', 'itemType': DescribeDnsGtmAccessStrategyResponseBodyDefaultAddrPoolsDefaultAddrPool },
    };
  }

  validate() {
    if(Array.isArray(this.defaultAddrPool)) {
      $dara.Model.validateArray(this.defaultAddrPool);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyResponseBodyFailoverAddrPoolsFailoverAddrPool extends $dara.Model {
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
   * pool1
   */
  id?: string;
  /**
   * @remarks
   * The weight of the address pool.
   * 
   * @example
   * 1
   */
  lbaWeight?: number;
  /**
   * @remarks
   * The name of the address pool.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      addrCount: 'AddrCount',
      id: 'Id',
      lbaWeight: 'LbaWeight',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrCount: 'number',
      id: 'string',
      lbaWeight: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyResponseBodyFailoverAddrPools extends $dara.Model {
  failoverAddrPool?: DescribeDnsGtmAccessStrategyResponseBodyFailoverAddrPoolsFailoverAddrPool[];
  static names(): { [key: string]: string } {
    return {
      failoverAddrPool: 'FailoverAddrPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failoverAddrPool: { 'type': 'array', 'itemType': DescribeDnsGtmAccessStrategyResponseBodyFailoverAddrPoolsFailoverAddrPool },
    };
  }

  validate() {
    if(Array.isArray(this.failoverAddrPool)) {
      $dara.Model.validateArray(this.failoverAddrPool);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyResponseBodyLinesLine extends $dara.Model {
  /**
   * @remarks
   * The code of the source region group.
   * 
   * @example
   * default
   */
  groupCode?: string;
  /**
   * @remarks
   * The name of the source region group.
   * 
   * @example
   * global
   */
  groupName?: string;
  /**
   * @remarks
   * The line code of the source region.
   * 
   * @example
   * default
   */
  lineCode?: string;
  /**
   * @remarks
   * The line name of the source region.
   * 
   * @example
   * global
   */
  lineName?: string;
  static names(): { [key: string]: string } {
    return {
      groupCode: 'GroupCode',
      groupName: 'GroupName',
      lineCode: 'LineCode',
      lineName: 'LineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupCode: 'string',
      groupName: 'string',
      lineCode: 'string',
      lineName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyResponseBodyLines extends $dara.Model {
  line?: DescribeDnsGtmAccessStrategyResponseBodyLinesLine[];
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: { 'type': 'array', 'itemType': DescribeDnsGtmAccessStrategyResponseBodyLinesLine },
    };
  }

  validate() {
    if(Array.isArray(this.line)) {
      $dara.Model.validateArray(this.line);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The primary/secondary switchover policy for address pool groups. Valid values:
   * 
   * *   AUTO: performs automatic switchover between the primary and secondary address pool groups upon failures.
   * *   DEFAULT: uses the primary address pool group.
   * *   FAILOVER: uses the secondary address pool group.
   * 
   * @example
   * auto
   */
  accessMode?: string;
  /**
   * @remarks
   * The time when the access policy was created.
   * 
   * @example
   * 2018-08-09T00:10Z
   */
  createTime?: string;
  /**
   * @remarks
   * The timestamp that indicates when the access policy was created.
   * 
   * @example
   * 1533773400000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The status of the primary address pool group. Valid values:
   * 
   * *   AVAILABLE: available
   * *   NOT_AVAILABLE: unavailable
   * 
   * @example
   * AVAILABLE
   */
  defaultAddrPoolGroupStatus?: string;
  /**
   * @remarks
   * The type of the primary address pool. Valid values:
   * 
   * *   IPV4
   * *   IPV6
   * *   DOMAIN
   * 
   * @example
   * ipv4
   */
  defaultAddrPoolType?: string;
  /**
   * @remarks
   * The address pools in the primary address pool group.
   */
  defaultAddrPools?: DescribeDnsGtmAccessStrategyResponseBodyDefaultAddrPools;
  /**
   * @remarks
   * The number of available addresses in the primary address pool.
   * 
   * @example
   * 1
   */
  defaultAvailableAddrNum?: number;
  /**
   * @remarks
   * Indicates whether scheduling optimization for latency resolution was enabled for the primary address pool group. Valid values:
   * 
   * *   OPEN: enabled
   * *   CLOSE: disabled
   * 
   * @example
   * open
   */
  defaultLatencyOptimization?: string;
  /**
   * @remarks
   * The load balancing policy of the primary address pool group. Valid values:
   * 
   * *   ALL_RR: returns all addresses.
   * *   RATIO: returns addresses by weight.
   * 
   * @example
   * all_rr
   */
  defaultLbaStrategy?: string;
  /**
   * @remarks
   * The maximum number of addresses returned from the primary address pool group.
   * 
   * @example
   * 1
   */
  defaultMaxReturnAddrNum?: number;
  /**
   * @remarks
   * The minimum number of available addresses in the primary address pool group.
   * 
   * @example
   * 1
   */
  defaultMinAvailableAddrNum?: number;
  /**
   * @remarks
   * The type of the active address pool group. Valid values:
   * 
   * *   DEFAULT: the primary address pool group
   * *   FAILOVER: the secondary address pool group
   * 
   * @example
   * DEFAULT
   */
  effectiveAddrPoolGroupType?: string;
  /**
   * @remarks
   * The status of the secondary address pool group. Valid values:
   * 
   * *   AVAILABLE: available
   * *   NOT_AVAILABLE: unavailable
   * 
   * @example
   * AVAILABLE
   */
  failoverAddrPoolGroupStatus?: string;
  /**
   * @remarks
   * The type of the secondary address pool. Valid values:
   * 
   * *   IPV4
   * *   IPV6
   * *   DOMAIN
   * 
   * @example
   * ipv4
   */
  failoverAddrPoolType?: string;
  /**
   * @remarks
   * The address pools in the secondary address pool group.
   */
  failoverAddrPools?: DescribeDnsGtmAccessStrategyResponseBodyFailoverAddrPools;
  /**
   * @remarks
   * The number of available addresses in the secondary address pool.
   * 
   * @example
   * 1
   */
  failoverAvailableAddrNum?: number;
  /**
   * @remarks
   * Indicates whether scheduling optimization for latency resolution was enabled for the secondary address pool group. Valid values:
   * 
   * *   OPEN: enabled
   * *   CLOSE: disabled
   * 
   * @example
   * open
   */
  failoverLatencyOptimization?: string;
  /**
   * @remarks
   * The load balancing policy of the secondary address pool group. Valid values:
   * 
   * *   ALL_RR: returns all addresses.
   * *   RATIO: returns addresses by weight.
   * 
   * @example
   * all_rr
   */
  failoverLbaStrategy?: string;
  /**
   * @remarks
   * The maximum number of addresses returned from the secondary address pool group.
   * 
   * @example
   * 1
   */
  failoverMaxReturnAddrNum?: number;
  /**
   * @remarks
   * The minimum number of available addresses in the secondary address pool group.
   * 
   * @example
   * 1
   */
  failoverMinAvailableAddrNum?: number;
  /**
   * @remarks
   * The ID of the associated instance.
   * 
   * @example
   * instance1
   */
  instanceId?: string;
  /**
   * @remarks
   * The source regions.
   */
  lines?: DescribeDnsGtmAccessStrategyResponseBodyLines;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BA1608CA-834C-4E63-8682-8AF0B11ED72D
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the access policy.
   * 
   * @example
   * strategyId1
   */
  strategyId?: string;
  /**
   * @remarks
   * The type of the access policy. Valid values:
   * 
   * *   GEO: geographical location-based
   * *   LATENCY: latency-based
   * 
   * @example
   * geo
   */
  strategyMode?: string;
  /**
   * @remarks
   * The name of the access policy.
   * 
   * @example
   * strategyName1
   */
  strategyName?: string;
  static names(): { [key: string]: string } {
    return {
      accessMode: 'AccessMode',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      defaultAddrPoolGroupStatus: 'DefaultAddrPoolGroupStatus',
      defaultAddrPoolType: 'DefaultAddrPoolType',
      defaultAddrPools: 'DefaultAddrPools',
      defaultAvailableAddrNum: 'DefaultAvailableAddrNum',
      defaultLatencyOptimization: 'DefaultLatencyOptimization',
      defaultLbaStrategy: 'DefaultLbaStrategy',
      defaultMaxReturnAddrNum: 'DefaultMaxReturnAddrNum',
      defaultMinAvailableAddrNum: 'DefaultMinAvailableAddrNum',
      effectiveAddrPoolGroupType: 'EffectiveAddrPoolGroupType',
      failoverAddrPoolGroupStatus: 'FailoverAddrPoolGroupStatus',
      failoverAddrPoolType: 'FailoverAddrPoolType',
      failoverAddrPools: 'FailoverAddrPools',
      failoverAvailableAddrNum: 'FailoverAvailableAddrNum',
      failoverLatencyOptimization: 'FailoverLatencyOptimization',
      failoverLbaStrategy: 'FailoverLbaStrategy',
      failoverMaxReturnAddrNum: 'FailoverMaxReturnAddrNum',
      failoverMinAvailableAddrNum: 'FailoverMinAvailableAddrNum',
      instanceId: 'InstanceId',
      lines: 'Lines',
      requestId: 'RequestId',
      strategyId: 'StrategyId',
      strategyMode: 'StrategyMode',
      strategyName: 'StrategyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessMode: 'string',
      createTime: 'string',
      createTimestamp: 'number',
      defaultAddrPoolGroupStatus: 'string',
      defaultAddrPoolType: 'string',
      defaultAddrPools: DescribeDnsGtmAccessStrategyResponseBodyDefaultAddrPools,
      defaultAvailableAddrNum: 'number',
      defaultLatencyOptimization: 'string',
      defaultLbaStrategy: 'string',
      defaultMaxReturnAddrNum: 'number',
      defaultMinAvailableAddrNum: 'number',
      effectiveAddrPoolGroupType: 'string',
      failoverAddrPoolGroupStatus: 'string',
      failoverAddrPoolType: 'string',
      failoverAddrPools: DescribeDnsGtmAccessStrategyResponseBodyFailoverAddrPools,
      failoverAvailableAddrNum: 'number',
      failoverLatencyOptimization: 'string',
      failoverLbaStrategy: 'string',
      failoverMaxReturnAddrNum: 'number',
      failoverMinAvailableAddrNum: 'number',
      instanceId: 'string',
      lines: DescribeDnsGtmAccessStrategyResponseBodyLines,
      requestId: 'string',
      strategyId: 'string',
      strategyMode: 'string',
      strategyName: 'string',
    };
  }

  validate() {
    if(this.defaultAddrPools && typeof (this.defaultAddrPools as any).validate === 'function') {
      (this.defaultAddrPools as any).validate();
    }
    if(this.failoverAddrPools && typeof (this.failoverAddrPools as any).validate === 'function') {
      (this.failoverAddrPools as any).validate();
    }
    if(this.lines && typeof (this.lines as any).validate === 'function') {
      (this.lines as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

