// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListManagedRulesGroupsResponseBodyManagedRulesGroups extends $dara.Model {
  /**
   * @example
   * example
   */
  name?: string;
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
  managedRulesGroups?: ListManagedRulesGroupsResponseBodyManagedRulesGroups[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  /**
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

