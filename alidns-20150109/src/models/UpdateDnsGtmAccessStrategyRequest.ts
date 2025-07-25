// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDnsGtmAccessStrategyRequestDefaultAddrPool extends $dara.Model {
  /**
   * @remarks
   * The ID of the address pool in the primary address pool set.
   * 
   * @example
   * pool1
   */
  id?: string;
  /**
   * @remarks
   * The weight of the address pool in the primary address pool set.
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
   * The ID of the address pool in the secondary address pool set.
   * 
   * @example
   * pool1
   */
  id?: string;
  /**
   * @remarks
   * The weight of the address pool in the secondary address pool set.
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
   * The primary/secondary switchover policy for address pool sets. Valid values:
   * 
   * *   AUTO: performs automatic switchover between the primary and secondary address pool sets upon failures.
   * *   DEFAULT: the primary address pool set
   * *   FAILOVER: the secondary address pool set
   * 
   * @example
   * DEFAULT
   */
  accessMode?: string;
  /**
   * @remarks
   * The address pools in the primary address pool set.
   * 
   * This parameter is required.
   */
  defaultAddrPool?: UpdateDnsGtmAccessStrategyRequestDefaultAddrPool[];
  /**
   * @remarks
   * The type of the primary address pool. Valid values:
   * 
   * *   IPV4
   * *   IPV6
   * *   DOMAIN
   * 
   * This parameter is required.
   * 
   * @example
   * ipv4
   */
  defaultAddrPoolType?: string;
  /**
   * @remarks
   * Specifies whether to enable Domain Name System (DNS) resolution with optimal latency for the primary address pool set. Valid values:
   * 
   * *   OPEN
   * *   CLOSE
   * 
   * @example
   * open
   */
  defaultLatencyOptimization?: string;
  /**
   * @remarks
   * The load balancing policy of the primary address pool set. Valid values:
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
   * The maximum number of addresses returned from the primary address pool set.
   * 
   * @example
   * 1
   */
  defaultMaxReturnAddrNum?: number;
  /**
   * @remarks
   * The minimum number of available addresses in the primary address pool set.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  defaultMinAvailableAddrNum?: number;
  /**
   * @remarks
   * The address pools in the secondary address pool set. If no address pool exists in the secondary address pool set, set this parameter to EMPTY.
   */
  failoverAddrPool?: UpdateDnsGtmAccessStrategyRequestFailoverAddrPool[];
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
   * Specifies whether to enable DNS resolution with optimal latency for the secondary address pool set. Valid values:
   * 
   * *   OPEN
   * *   CLOSE
   * 
   * @example
   * open
   */
  failoverLatencyOptimization?: string;
  /**
   * @remarks
   * The load balancing policy of the secondary address pool set. Valid values:
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
   * The maximum number of addresses returned from the secondary address pool set.
   * 
   * @example
   * 1
   */
  failoverMaxReturnAddrNum?: number;
  /**
   * @remarks
   * The minimum number of available addresses in the secondary address pool set.
   * 
   * @example
   * 1
   */
  failoverMinAvailableAddrNum?: number;
  /**
   * @remarks
   * The language of the values for specific response parameters. Default value: en. Valid values: en, zh, and ja.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The line codes of the source regions. Example: `["default", "drpeng"]`, which indicates the global line and Dr. Peng Group line.
   * 
   * @example
   * ["default", "drpeng"]
   */
  lines?: string;
  /**
   * @remarks
   * The ID of the access policy.
   * 
   * This parameter is required.
   * 
   * @example
   * StrategyId1
   */
  strategyId?: string;
  /**
   * @remarks
   * The name of the access policy.
   * 
   * This parameter is required.
   * 
   * @example
   * StrategyName1
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

