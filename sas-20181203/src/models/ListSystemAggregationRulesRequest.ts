// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSystemAggregationRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the rule aggregation.
   */
  aggregationIds?: number[];
  /**
   * @remarks
   * The page number of the current page for a paged query. This parameter is used for paging.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Specifies the language type for requests and responses. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page for a paged query. This parameter is used for paging.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * Rule****
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
   * - **0**: All
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

