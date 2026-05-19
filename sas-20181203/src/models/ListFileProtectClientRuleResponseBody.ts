// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFileProtectClientRuleResponseBodyFileProtectList extends $dara.Model {
  /**
   * @example
   * 0
   */
  alertLevel?: number;
  /**
   * @example
   * 12
   */
  effectInstanceCount?: number;
  excludeUsers?: string[];
  fileOps?: string[];
  filePaths?: string[];
  fileTypes?: string[];
  /**
   * @example
   * 1682304179000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1682304179000
   */
  gmtModified?: number;
  /**
   * @example
   * 1412511
   */
  id?: number;
  /**
   * @example
   * linux
   */
  platform?: string;
  procPaths?: string[];
  /**
   * @example
   * pass
   */
  ruleAction?: string;
  /**
   * @example
   * test11
   */
  ruleName?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * FILE_PROTECT_RULE_SWITCH_TYPE_******
   */
  switchId?: string;
  static names(): { [key: string]: string } {
    return {
      alertLevel: 'AlertLevel',
      effectInstanceCount: 'EffectInstanceCount',
      excludeUsers: 'ExcludeUsers',
      fileOps: 'FileOps',
      filePaths: 'FilePaths',
      fileTypes: 'FileTypes',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      platform: 'Platform',
      procPaths: 'ProcPaths',
      ruleAction: 'RuleAction',
      ruleName: 'RuleName',
      status: 'Status',
      switchId: 'SwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertLevel: 'number',
      effectInstanceCount: 'number',
      excludeUsers: { 'type': 'array', 'itemType': 'string' },
      fileOps: { 'type': 'array', 'itemType': 'string' },
      filePaths: { 'type': 'array', 'itemType': 'string' },
      fileTypes: { 'type': 'array', 'itemType': 'string' },
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      platform: 'string',
      procPaths: { 'type': 'array', 'itemType': 'string' },
      ruleAction: 'string',
      ruleName: 'string',
      status: 'number',
      switchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.excludeUsers)) {
      $dara.Model.validateArray(this.excludeUsers);
    }
    if(Array.isArray(this.fileOps)) {
      $dara.Model.validateArray(this.fileOps);
    }
    if(Array.isArray(this.filePaths)) {
      $dara.Model.validateArray(this.filePaths);
    }
    if(Array.isArray(this.fileTypes)) {
      $dara.Model.validateArray(this.fileTypes);
    }
    if(Array.isArray(this.procPaths)) {
      $dara.Model.validateArray(this.procPaths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileProtectClientRuleResponseBodyPageInfo extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 45
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

export class ListFileProtectClientRuleResponseBody extends $dara.Model {
  fileProtectList?: ListFileProtectClientRuleResponseBodyFileProtectList[];
  pageInfo?: ListFileProtectClientRuleResponseBodyPageInfo;
  /**
   * @example
   * BA674E4B-00CF-5DEA-8B92-360862FB****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fileProtectList: 'FileProtectList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileProtectList: { 'type': 'array', 'itemType': ListFileProtectClientRuleResponseBodyFileProtectList },
      pageInfo: ListFileProtectClientRuleResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fileProtectList)) {
      $dara.Model.validateArray(this.fileProtectList);
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

