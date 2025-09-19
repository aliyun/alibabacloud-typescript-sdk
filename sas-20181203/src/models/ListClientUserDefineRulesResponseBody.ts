// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClientUserDefineRulesResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 69
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListClientUserDefineRulesResponseBodyUserDefineRuleList extends $dara.Model {
  /**
   * @remarks
   * The action of the rule. Valid values:
   * 
   * *   **0**: allow
   * *   **1**: block
   * 
   * @example
   * 0
   */
  actionType?: number;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 200****
   */
  id?: number;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * Rule\\*\\*\\*\\*
   */
  name?: string;
  /**
   * @remarks
   * The type of the operating system. Valid values:
   * 
   * *   **windows**: Windows
   * *   **linux**: Linux
   * *   **all**: all types
   * 
   * @example
   * linux
   */
  platform?: string;
  /**
   * @remarks
   * The switch ID of the rule.
   * 
   * @example
   * USER-DEFINE-RULE-SWITCH-TYPE_200****
   */
  switchId?: string;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * *   **1**: Process hash
   * *   **2**: Command line
   * *   **3**: Process Network
   * *   **4**: File Read and Write
   * *   **5**: Operation on Registry
   * *   **6**: Dynamic-link Library Loading
   * *   **7**: File Renaming
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      id: 'Id',
      name: 'Name',
      platform: 'Platform',
      switchId: 'SwitchId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'number',
      id: 'number',
      name: 'string',
      platform: 'string',
      switchId: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientUserDefineRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListClientUserDefineRulesResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * A4EB8B1C-1DEC-5E18-BCD0-D1BBB393***
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of the rules.
   */
  userDefineRuleList?: ListClientUserDefineRulesResponseBodyUserDefineRuleList[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      userDefineRuleList: 'UserDefineRuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: ListClientUserDefineRulesResponseBodyPageInfo,
      requestId: 'string',
      userDefineRuleList: { 'type': 'array', 'itemType': ListClientUserDefineRulesResponseBodyUserDefineRuleList },
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.userDefineRuleList)) {
      $dara.Model.validateArray(this.userDefineRuleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

