// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListManagedRulesGroupsResponseBodyManagedRulesGroups extends $dara.Model {
  /**
   * @remarks
   * The name of the managed rule group.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The number of rules in the managed rule group.
   * 
   * @example
   * 1000
   */
  ruleCount?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ruleCount: 'RuleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ruleCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListManagedRulesGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of managed rule groups.
   */
  managedRulesGroups?: ListManagedRulesGroupsResponseBodyManagedRulesGroups[];
  /**
   * @remarks
   * The current page number.
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records after filtering.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      managedRulesGroups: 'ManagedRulesGroups',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      managedRulesGroups: { 'type': 'array', 'itemType': ListManagedRulesGroupsResponseBodyManagedRulesGroups },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.managedRulesGroups)) {
      $dara.Model.validateArray(this.managedRulesGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

