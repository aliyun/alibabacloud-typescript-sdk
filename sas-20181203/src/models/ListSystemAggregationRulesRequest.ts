// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSystemAggregationRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The rule cluster ID.
   */
  aggregationIds?: number[];
  /**
   * @remarks
   * The page number of the current page in a paging query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The language type of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries per page in a paging query.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * 规则****
   */
  ruleName?: string;
  /**
   * @remarks
   * The list of rule types.
   */
  ruleTypes?: number[];
  /**
   * @remarks
   * The operating system type. Valid values:
   * 
   * - **2**: Windows
   * - **1**: Linux
   * - **0**: all.
   * 
   * @example
   * 0
   */
  systemType?: number;
  static names(): { [key: string]: string } {
    return {
      aggregationIds: 'AggregationIds',
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      ruleName: 'RuleName',
      ruleTypes: 'RuleTypes',
      systemType: 'SystemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregationIds: { 'type': 'array', 'itemType': 'number' },
      currentPage: 'number',
      lang: 'string',
      pageSize: 'number',
      ruleName: 'string',
      ruleTypes: { 'type': 'array', 'itemType': 'number' },
      systemType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.aggregationIds)) {
      $dara.Model.validateArray(this.aggregationIds);
    }
    if(Array.isArray(this.ruleTypes)) {
      $dara.Model.validateArray(this.ruleTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

