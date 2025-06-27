// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyEffectiveAddrPools } from "./DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyEffectiveAddrPools";
import { DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyLines } from "./DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyLines";


export class DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategy extends $dara.Model {
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
   * The type of the active address pool group. Valid values:
   * 
   * *   DEFAULT: the primary address pool group
   * *   FAILOVER: the secondary address pool group
   * 
   * @example
   * default
   */
  effectiveAddrPoolGroupType?: string;
  /**
   * @remarks
   * The type of the active address pools. Valid values:
   * 
   * *   IPV4
   * *   IPV6
   * *   DOMAIN
   * 
   * @example
   * ipv4
   */
  effectiveAddrPoolType?: string;
  /**
   * @remarks
   * The active address pool groups.
   */
  effectiveAddrPools?: DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyEffectiveAddrPools;
  /**
   * @remarks
   * The load balancing policy of the active address pool group. Data is returned when StrategyMode is set to GEO. Valid values: 
   * 
   * - ALL_RR: returns all addresses.
   * - RATIO: returns addresses by weight.
   * 
   * @example
   * all_rr
   */
  effectiveLbaStrategy?: string;
  /**
   * @remarks
   * The source regions. Data is returned when StrategyMode is set to GEO. Valid values:
   */
  lines?: DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyLines;
  /**
   * @remarks
   * The ID of the access policy.
   * 
   * @example
   * strategyid1
   */
  strategyId?: string;
  /**
   * @remarks
   * The name of the access policy.
   * 
   * @example
   * strategname1
   */
  strategyName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      effectiveAddrPoolGroupType: 'EffectiveAddrPoolGroupType',
      effectiveAddrPoolType: 'EffectiveAddrPoolType',
      effectiveAddrPools: 'EffectiveAddrPools',
      effectiveLbaStrategy: 'EffectiveLbaStrategy',
      lines: 'Lines',
      strategyId: 'StrategyId',
      strategyName: 'StrategyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      effectiveAddrPoolGroupType: 'string',
      effectiveAddrPoolType: 'string',
      effectiveAddrPools: DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyEffectiveAddrPools,
      effectiveLbaStrategy: 'string',
      lines: DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyLines,
      strategyId: 'string',
      strategyName: 'string',
    };
  }

  validate() {
    if(this.effectiveAddrPools && typeof (this.effectiveAddrPools as any).validate === 'function') {
      (this.effectiveAddrPools as any).validate();
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

