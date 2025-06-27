// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddDnsGtmAccessStrategyRequestDefaultAddrPool } from "./AddDnsGtmAccessStrategyRequestDefaultAddrPool";
import { AddDnsGtmAccessStrategyRequestFailoverAddrPool } from "./AddDnsGtmAccessStrategyRequestFailoverAddrPool";


export class AddDnsGtmAccessStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The address pools in the primary address pool set.
   * 
   * This parameter is required.
   */
  defaultAddrPool?: AddDnsGtmAccessStrategyRequestDefaultAddrPool[];
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
   * Specifies whether to enable DNS resolution with optimal latency for the primary address pool set. Valid values:
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
   * 3
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
  failoverAddrPool?: AddDnsGtmAccessStrategyRequestFailoverAddrPool[];
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
   * The language of the values for specific response parameters. Default value: en. Valid values: en, zh, and ja.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The Domain Name System (DNS) request source. For example: `["default", "drpeng"]` indicates Global and Dr. Peng Group.
   * 
   * @example
   * ["default", "drpeng"]
   */
  lines?: string;
  /**
   * @remarks
   * The type of the access policy. Valid values:
   * 
   * *   GEO: geographical location-based access policy
   * *   LATENCY: latency-based access policy
   * 
   * This parameter is required.
   * 
   * @example
   * geo
   */
  strategyMode?: string;
  /**
   * @remarks
   * The name of the access policy.
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

