// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageBaselineStrategyResponseBodyStrategyBaselineItemList extends $dara.Model {
  /**
   * @remarks
   * The key of the baseline type.
   * 
   * @example
   * identification
   */
  classKey?: string;
  /**
   * @remarks
   * The key of the baseline check item.
   * 
   * @example
   * duplicate_pwd_hash
   */
  itemKey?: string;
  /**
   * @remarks
   * The key of the name for the baseline.
   * 
   * @example
   * identification
   */
  nameKey?: string;
  static names(): { [key: string]: string } {
    return {
      classKey: 'ClassKey',
      itemKey: 'ItemKey',
      nameKey: 'NameKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classKey: 'string',
      itemKey: 'string',
      nameKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageBaselineStrategyResponseBodyStrategy extends $dara.Model {
  /**
   * @remarks
   * The baseline check policy for agentless detection.
   * 
   * @example
   * hc_win2008_cis_rules
   */
  baselineItem?: string;
  /**
   * @remarks
   * An array that contains the baselines.
   */
  baselineItemList?: DescribeImageBaselineStrategyResponseBodyStrategyBaselineItemList[];
  /**
   * @remarks
   * The number of selected baseline check items.
   * 
   * @example
   * 10
   */
  selectedItemCount?: number;
  /**
   * @remarks
   * The ID of the baseline check policy.
   * 
   * @example
   * 8257
   */
  strategyId?: number;
  /**
   * @remarks
   * The name of the baseline check policy.
   * 
   * @example
   * default
   */
  strategyName?: string;
  /**
   * @remarks
   * The total number of baseline check items.
   * 
   * @example
   * 100
   */
  totalItemCount?: number;
  /**
   * @remarks
   * The type of the baseline check policy. Valid values:
   * 
   * *   **default**: the default policy
   * *   **full**: a policy that uses all baselines
   * *   **normal**: a policy that uses general baselines
   * 
   * @example
   * default
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      baselineItem: 'BaselineItem',
      baselineItemList: 'BaselineItemList',
      selectedItemCount: 'SelectedItemCount',
      strategyId: 'StrategyId',
      strategyName: 'StrategyName',
      totalItemCount: 'TotalItemCount',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineItem: 'string',
      baselineItemList: { 'type': 'array', 'itemType': DescribeImageBaselineStrategyResponseBodyStrategyBaselineItemList },
      selectedItemCount: 'number',
      strategyId: 'number',
      strategyName: 'string',
      totalItemCount: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.baselineItemList)) {
      $dara.Model.validateArray(this.baselineItemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageBaselineStrategyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9F85AC10-A1FE-54D7-935A-F28D5256****
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the baseline check policy.
   */
  strategy?: DescribeImageBaselineStrategyResponseBodyStrategy;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      strategy: DescribeImageBaselineStrategyResponseBodyStrategy,
    };
  }

  validate() {
    if(this.strategy && typeof (this.strategy as any).validate === 'function') {
      (this.strategy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

