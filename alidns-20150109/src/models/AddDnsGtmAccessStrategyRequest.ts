// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDnsGtmAccessStrategyRequestDefaultAddrPool extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      lbaWeight: 'LbaWeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      lbaWeight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDnsGtmAccessStrategyRequestFailoverAddrPool extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      lbaWeight: 'LbaWeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      lbaWeight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDnsGtmAccessStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The collection of primary address pools.
   * 
   * This parameter is required.
   */
  defaultAddrPool?: AddDnsGtmAccessStrategyRequestDefaultAddrPool[];
  /**
   * @remarks
   * The type of the primary address pool.
   * 
   * - IPV4
   * 
   * - IPV6
   * 
   * - DOMAIN
   * 
   * This parameter is required.
   * 
   * @example
   * IPV4
   */
  defaultAddrPoolType?: string;
  /**
   * @remarks
   * The latency-based scheduling optimization for the primary address pool collection.
   * 
   * - OPEN: enabled
   * 
   * - CLOSE: disabled
   * 
   * @example
   * OPEN
   */
  defaultLatencyOptimization?: string;
  /**
   * @remarks
   * The load balancing policy for the primary address pool collection.
   * 
   * - ALL_RR: returns all addresses.
   * 
   * - RATIO: returns addresses by weight.
   * 
   * @example
   * ALL_RR
   */
  defaultLbaStrategy?: string;
  /**
   * @remarks
   * The maximum number of addresses returned from the primary address pool collection.
   * 
   * @example
   * 3
   */
  defaultMaxReturnAddrNum?: number;
  /**
   * @remarks
   * The minimum number of active addresses in the primary address pool collection.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  defaultMinAvailableAddrNum?: number;
  /**
   * @remarks
   * The collection of failover address pools. If a failover address pool collection is not configured, enter "EMPTY".
   */
  failoverAddrPool?: AddDnsGtmAccessStrategyRequestFailoverAddrPool[];
  /**
   * @remarks
   * The type of the failover address pool.
   * 
   * - IPV4
   * 
   * - IPV6
   * 
   * - DOMAIN
   * 
   * @example
   * IPV4
   */
  failoverAddrPoolType?: string;
  /**
   * @remarks
   * The latency-based scheduling optimization for the failover address pool collection.
   * 
   * - OPEN: enabled
   * 
   * - CLOSE: disabled
   * 
   * @example
   * OPEN
   */
  failoverLatencyOptimization?: string;
  /**
   * @remarks
   * The load balancing policy for the failover address pool collection.
   * 
   * - ALL_RR: returns all addresses.
   * 
   * - RATIO: returns addresses by weight.
   * 
   * @example
   * ALL_RR
   */
  failoverLbaStrategy?: string;
  /**
   * @remarks
   * The maximum number of addresses returned from the failover address pool collection.
   * 
   * @example
   * 1
   */
  failoverMaxReturnAddrNum?: number;
  /**
   * @remarks
   * The minimum number of active addresses in the failover address pool collection.
   * 
   * @example
   * 1
   */
  failoverMinAvailableAddrNum?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * instance1
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of some returned parameters. Default value: en. Valid values: en, zh, and ja.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The source of the DNS request. For example, `["default", "drpeng"]` indicates a global policy and Dr. Peng Group.
   * 
   * @example
   * ["default", "drpeng"]
   */
  lines?: string;
  /**
   * @remarks
   * The type of the access policy.
   * 
   * - GEO: a location-based access policy.
   * 
   * - LATENCY: a latency-based access policy.
   * 
   * This parameter is required.
   * 
   * @example
   * GEO
   */
  strategyMode?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * This parameter is required.
   * 
   * @example
   * testStrategyName
   */
  strategyName?: string;
  static names(): { [key: string]: string } {
    return {
      defaultAddrPool: 'DefaultAddrPool',
      defaultAddrPoolType: 'DefaultAddrPoolType',
      defaultLatencyOptimization: 'DefaultLatencyOptimization',
      defaultLbaStrategy: 'DefaultLbaStrategy',
      defaultMaxReturnAddrNum: 'DefaultMaxReturnAddrNum',
      defaultMinAvailableAddrNum: 'DefaultMinAvailableAddrNum',
      failoverAddrPool: 'FailoverAddrPool',
      failoverAddrPoolType: 'FailoverAddrPoolType',
      failoverLatencyOptimization: 'FailoverLatencyOptimization',
      failoverLbaStrategy: 'FailoverLbaStrategy',
      failoverMaxReturnAddrNum: 'FailoverMaxReturnAddrNum',
      failoverMinAvailableAddrNum: 'FailoverMinAvailableAddrNum',
      instanceId: 'InstanceId',
      lang: 'Lang',
      lines: 'Lines',
      strategyMode: 'StrategyMode',
      strategyName: 'StrategyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultAddrPool: { 'type': 'array', 'itemType': AddDnsGtmAccessStrategyRequestDefaultAddrPool },
      defaultAddrPoolType: 'string',
      defaultLatencyOptimization: 'string',
      defaultLbaStrategy: 'string',
      defaultMaxReturnAddrNum: 'number',
      defaultMinAvailableAddrNum: 'number',
      failoverAddrPool: { 'type': 'array', 'itemType': AddDnsGtmAccessStrategyRequestFailoverAddrPool },
      failoverAddrPoolType: 'string',
      failoverLatencyOptimization: 'string',
      failoverLbaStrategy: 'string',
      failoverMaxReturnAddrNum: 'number',
      failoverMinAvailableAddrNum: 'number',
      instanceId: 'string',
      lang: 'string',
      lines: 'string',
      strategyMode: 'string',
      strategyName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.defaultAddrPool)) {
      $dara.Model.validateArray(this.defaultAddrPool);
    }
    if(Array.isArray(this.failoverAddrPool)) {
      $dara.Model.validateArray(this.failoverAddrPool);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

