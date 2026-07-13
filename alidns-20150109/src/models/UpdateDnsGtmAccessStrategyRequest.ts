// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDnsGtmAccessStrategyRequestDefaultAddrPool extends $dara.Model {
  /**
   * @remarks
   * The ID of the address pool in the primary address pool collection.
   * 
   * @example
   * po***
   */
  id?: string;
  /**
   * @remarks
   * The weight of the address pool in the primary address pool collection.
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

export class UpdateDnsGtmAccessStrategyRequestFailoverAddrPool extends $dara.Model {
  /**
   * @remarks
   * The ID of the address pool in the failover address pool collection.
   * 
   * @example
   * po**
   */
  id?: string;
  /**
   * @remarks
   * The weight of the address pool in the failover address pool collection.
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

export class UpdateDnsGtmAccessStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The switchover policy for the address pool collection:
   * 
   * - AUTO: Automatic switchover
   * 
   * - DEFAULT: Primary address pool collection
   * 
   * - FAILOVER: Failover address pool collection
   * 
   * @example
   * DEFAULT
   */
  accessMode?: string;
  /**
   * @remarks
   * The primary address pool collection.
   * 
   * This parameter is required.
   */
  defaultAddrPool?: UpdateDnsGtmAccessStrategyRequestDefaultAddrPool[];
  /**
   * @remarks
   * The type of the primary address pool:
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
   * Specifies whether to enable latency-based scheduling for the primary address pool collection:
   * 
   * - OPEN: Enabled
   * 
   * - CLOSE: Disabled
   * 
   * @example
   * OPEN
   */
  defaultLatencyOptimization?: string;
  /**
   * @remarks
   * The load balancing policy for the primary address pool collection:
   * 
   * - ALL_RR: Returns all addresses.
   * 
   * - RATIO: Returns addresses by weight.
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
   * 1
   */
  defaultMaxReturnAddrNum?: number;
  /**
   * @remarks
   * The minimum number of available addresses in the primary address pool collection.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  defaultMinAvailableAddrNum?: number;
  /**
   * @remarks
   * The failover address pool collection. If no failover address pool collection is configured, enter "EMPTY".
   */
  failoverAddrPool?: UpdateDnsGtmAccessStrategyRequestFailoverAddrPool[];
  /**
   * @remarks
   * The type of the failover address pool:
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
   * Specifies whether to enable latency-based scheduling for the failover address pool collection:
   * 
   * - OPEN: Enabled
   * 
   * - CLOSE: Disabled
   * 
   * @example
   * OPEN
   */
  failoverLatencyOptimization?: string;
  /**
   * @remarks
   * The load balancing policy for the failover address pool collection:
   * 
   * - ALL_RR: Returns all addresses.
   * 
   * - RATIO: Returns addresses by weight.
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
   * The minimum number of available addresses in the failover address pool collection.
   * 
   * @example
   * 1
   */
  failoverMinAvailableAddrNum?: number;
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
   * The line codes of the access regions. For example, `["default", "drpeng"]` specifies the global line and the Dr. Peng line.
   * 
   * @example
   * ["default", "drpeng"]
   */
  lines?: string;
  /**
   * @remarks
   * The ID of the policy. To obtain the policy ID, call [DescribeDnsGtmAccessStrategies](https://help.aliyun.com/document_detail/2357191.html).
   * 
   * This parameter is required.
   * 
   * @example
   * hrb**
   */
  strategyId?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  strategyName?: string;
  static names(): { [key: string]: string } {
    return {
      accessMode: 'AccessMode',
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
      lang: 'Lang',
      lines: 'Lines',
      strategyId: 'StrategyId',
      strategyName: 'StrategyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessMode: 'string',
      defaultAddrPool: { 'type': 'array', 'itemType': UpdateDnsGtmAccessStrategyRequestDefaultAddrPool },
      defaultAddrPoolType: 'string',
      defaultLatencyOptimization: 'string',
      defaultLbaStrategy: 'string',
      defaultMaxReturnAddrNum: 'number',
      defaultMinAvailableAddrNum: 'number',
      failoverAddrPool: { 'type': 'array', 'itemType': UpdateDnsGtmAccessStrategyRequestFailoverAddrPool },
      failoverAddrPoolType: 'string',
      failoverLatencyOptimization: 'string',
      failoverLbaStrategy: 'string',
      failoverMaxReturnAddrNum: 'number',
      failoverMinAvailableAddrNum: 'number',
      lang: 'string',
      lines: 'string',
      strategyId: 'string',
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

