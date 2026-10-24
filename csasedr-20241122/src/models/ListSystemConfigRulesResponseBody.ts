// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSystemConfigRulesResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 204
   */
  id?: number;
  /**
   * @remarks
   * The platform name of the system rule. Valid values:
   * - **1**: Linux.
   * - **2**: Windows.
   * - **3**: Mac.
   * 
   * @example
   * windows
   */
  platform?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * Host defense link test
   */
  ruleName?: string;
  /**
   * @remarks
   * The rule type.
   * 
   * @example
   * 1
   */
  ruleType?: number;
  /**
   * @remarks
   * The switch status of the rule under the specified SelectionKey. Valid values:
   * - **add**: Enabled.
   * - **del**: Disabled.
   * 
   * @example
   * add
   */
  status?: string;
  /**
   * @remarks
   * The switch identifier of the system rule.
   * 
   * @example
   * USER-ENABLE-SWITCH-TYPE_1
   */
  switchId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      platform: 'Platform',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      status: 'Status',
      switchId: 'SwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      platform: 'string',
      ruleName: 'string',
      ruleType: 'number',
      status: 'string',
      switchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemConfigRulesResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries on the current page.
   * 
   * @example
   * 20
   */
  count?: number;
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
   * The maximum number of entries to return on each page during paging in a paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 122
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemConfigRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The rule list.
   */
  list?: ListSystemConfigRulesResponseBodyList[];
  /**
   * @remarks
   * The paging information displayed during a paged query.
   */
  pageInfo?: ListSystemConfigRulesResponseBodyPageInfo;
  /**
   * @remarks
   * The unique identifier of the request, which is used to troubleshoot and locate issues.
   * 
   * @example
   * 5B1AACF9-E87B-577A-9B12-655A2E0C96FA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListSystemConfigRulesResponseBodyList },
      pageInfo: ListSystemConfigRulesResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

