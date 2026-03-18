// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyEffectiveAddrPoolsEffectiveAddrPool extends $dara.Model {
  addrCount?: number;
  id?: string;
  lbaWeight?: number;
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
  groupCode?: string;
  groupName?: string;
  lineCode?: string;
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
  createTime?: string;
  createTimestamp?: number;
  effectiveAddrPoolGroupType?: string;
  effectiveAddrPoolType?: string;
  effectiveAddrPools?: DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyEffectiveAddrPools;
  effectiveLbaStrategy?: string;
  lines?: DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyLines;
  strategyId?: string;
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

