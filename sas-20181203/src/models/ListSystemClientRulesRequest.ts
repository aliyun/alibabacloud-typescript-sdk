// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSystemClientRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the aggregation types for rules.
   */
  aggregationIds?: number[];
  /**
   * @remarks
   * The number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Specifies whether to query only container images. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 1
   */
  isContainer?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the system defense rule.
   * 
   * @example
   * Rule\\*\\*\\*\\*
   */
  ruleName?: string;
  /**
   * @remarks
   * The types of the system defense rules.
   */
  ruleTypes?: number[];
  /**
   * @remarks
   * The type of the OS. Valid values:
   * 
   * *   **2**: Windows
   * *   **1**: Linux
   * *   **0**: all types
   * 
   * @example
   * 0
   */
  systemType?: number;
  static names(): { [key: string]: string } {
    return {
      aggregationIds: 'AggregationIds',
      currentPage: 'CurrentPage',
      isContainer: 'IsContainer',
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
      isContainer: 'number',
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

