// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFileProtectRuleResponseBodyFileProtectList extends $dara.Model {
  /**
   * @remarks
   * The handling method of the rule. Valid values:
   * 
   * *   pass: allow
   * *   alert
   * 
   * @example
   * pass
   */
  action?: string;
  /**
   * @remarks
   * The severity of alerts. Valid values:
   * 
   * *   0: does not generate alerts
   * *   1: sends notifications
   * *   2: suspicious
   * *   3: high-risk
   * 
   * @example
   * 0
   */
  alertLevel?: string;
  /**
   * @remarks
   * The total number of affected assets.
   * 
   * @example
   * 12
   */
  effectInstanceCount?: number;
  /**
   * @remarks
   * The operations performed on the files.
   */
  fileOps?: string[];
  /**
   * @remarks
   * The paths to the monitored files. Wildcard characters are supported.
   */
  filePaths?: string[];
  /**
   * @remarks
   * The time when the rule was created.
   * 
   * @example
   * 1682304179000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The time when the rule was last modified.
   * 
   * @example
   * 1682304179000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 1412511
   */
  id?: number;
  /**
   * @remarks
   * The type of the operating system. Valid values:
   * 
   * *   **windows**: Windows
   * *   **linux**: Linux
   * 
   * @example
   * linux
   */
  platform?: string;
  /**
   * @remarks
   * The paths to the monitored processes. Wildcard characters are supported.
   */
  procPaths?: string[];
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * test11
   */
  ruleName?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * *   0: disabled
   * *   1: enabled
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The switch ID of the rule.
   * 
   * @example
   * FILE_PROTECT_RULE_SWITCH_TYPE_1693474122927
   */
  switchId?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      alertLevel: 'AlertLevel',
      effectInstanceCount: 'EffectInstanceCount',
      fileOps: 'FileOps',
      filePaths: 'FilePaths',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      platform: 'Platform',
      procPaths: 'ProcPaths',
      ruleName: 'RuleName',
      status: 'Status',
      switchId: 'SwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      alertLevel: 'string',
      effectInstanceCount: 'number',
      fileOps: { 'type': 'array', 'itemType': 'string' },
      filePaths: { 'type': 'array', 'itemType': 'string' },
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      platform: 'string',
      procPaths: { 'type': 'array', 'itemType': 'string' },
      ruleName: 'string',
      status: 'number',
      switchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fileOps)) {
      $dara.Model.validateArray(this.fileOps);
    }
    if(Array.isArray(this.filePaths)) {
      $dara.Model.validateArray(this.filePaths);
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

export class ListFileProtectRuleResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
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
   * The total number of entries returned.
   * 
   * @example
   * 253
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

export class ListFileProtectRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of returned data.
   */
  fileProtectList?: ListFileProtectRuleResponseBodyFileProtectList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListFileProtectRuleResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FBBEB173-1F43-505F-A876-C03ECDF6CE4C
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
      fileProtectList: { 'type': 'array', 'itemType': ListFileProtectRuleResponseBodyFileProtectList },
      pageInfo: ListFileProtectRuleResponseBodyPageInfo,
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

