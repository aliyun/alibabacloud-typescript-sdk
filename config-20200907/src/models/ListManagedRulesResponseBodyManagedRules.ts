// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListManagedRulesResponseBodyManagedRulesManagedRuleList } from "./ListManagedRulesResponseBodyManagedRulesManagedRuleList";


export class ListManagedRulesResponseBodyManagedRules extends $dara.Model {
  /**
   * @remarks
   * The details of the managed rule.
   */
  managedRuleList?: ListManagedRulesResponseBodyManagedRulesManagedRuleList[];
  /**
   * @remarks
   * The page number.
   * 
   * Page start from page 1.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page. Valid values: 1 to 500.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      managedRuleList: 'ManagedRuleList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      managedRuleList: { 'type': 'array', 'itemType': ListManagedRulesResponseBodyManagedRulesManagedRuleList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.managedRuleList)) {
      $dara.Model.validateArray(this.managedRuleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

