// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSystemConfigRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of system rule category IDs.
   */
  aggregationIds?: number[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The language used for the rule name and description. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page during paging in a paged query.
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
   * Process startup
   */
  ruleName?: string;
  /**
   * @remarks
   * The list of rule types for filtering.
   */
  ruleTypes?: number[];
  /**
   * @remarks
   * The key for the switch configuration of rules associated with a policy. Use the SelectionKey saved for the same policy.
   * 
   * @example
   * 7efed2db-cc8c-4704-a1c3-d448c5d41e74
   */
  selectionKey?: string;
  /**
   * @remarks
   * The system platform identifier used for filtering. Valid values:
   * - **1**: Linux.
   * - **2**: Windows.
   * - **3**: Mac.
   * 
   * @example
   * 1
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
      selectionKey: 'SelectionKey',
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
      selectionKey: 'string',
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

