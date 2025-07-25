// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyEffectiveAddrPoolsEffectiveAddrPool extends $dara.Model {
  /**
   * @remarks
   * The number of addresses in the address pool.
   * 
   * @example
   * 3
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

export class DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyEffectiveAddrPools extends $dara.Model {
  effectiveAddrPool?: DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyEffectiveAddrPoolsEffectiveAddrPool[];
  static names(): { [key: string]: string } {
    return {
      effectiveAddrPool: 'EffectiveAddrPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveAddrPool: { 'type': 'array', 'itemType': DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyEffectiveAddrPoolsEffectiveAddrPool },
    };
  }

  validate() {
    if(Array.isArray(this.effectiveAddrPool)) {
      $dara.Model.validateArray(this.effectiveAddrPool);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyLinesLine extends $dara.Model {
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

export class DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyLines extends $dara.Model {
  line?: DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyLinesLine[];
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: { 'type': 'array', 'itemType': DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyLinesLine },
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

export class DescribeDnsGtmAccessStrategiesResponseBodyStrategies extends $dara.Model {
  strategy?: DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategy[];
  static names(): { [key: string]: string } {
    return {
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      strategy: { 'type': 'array', 'itemType': DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategy },
    };
  }

  validate() {
    if(Array.isArray(this.strategy)) {
      $dara.Model.validateArray(this.strategy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategiesResponseBody extends $dara.Model {
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
   * 0CCC9971-CEC9-4132-824B-4AE611C07623
   */
  requestId?: string;
  /**
   * @remarks
   * The access policies.
   */
  strategies?: DescribeDnsGtmAccessStrategiesResponseBodyStrategies;
  /**
   * @remarks
   * The total number of entries returned on all pages.
   * 
   * @example
   * 11
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 11
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      strategies: 'Strategies',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      strategies: DescribeDnsGtmAccessStrategiesResponseBodyStrategies,
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(this.strategies && typeof (this.strategies as any).validate === 'function') {
      (this.strategies as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

