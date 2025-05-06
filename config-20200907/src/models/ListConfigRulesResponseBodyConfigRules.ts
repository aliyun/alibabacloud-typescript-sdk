// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListConfigRulesResponseBodyConfigRulesConfigRuleList } from "./ListConfigRulesResponseBodyConfigRulesConfigRuleList";


export class ListConfigRulesResponseBodyConfigRules extends $dara.Model {
  /**
   * @remarks
   * The details of the rule.
   */
  configRuleList?: ListConfigRulesResponseBodyConfigRulesConfigRuleList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of rules.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      configRuleList: 'ConfigRuleList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleList: { 'type': 'array', 'itemType': ListConfigRulesResponseBodyConfigRulesConfigRuleList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configRuleList)) {
      $dara.Model.validateArray(this.configRuleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

