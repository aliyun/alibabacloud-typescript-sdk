// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSasContainerWebDefenseRuleResponseBodyContainerWebDefenseRuleListPathConfDTOList extends $dara.Model {
  /**
   * @remarks
   * The backup paths.
   * 
   * @example
   * /tmp/test
   */
  backupPath?: string;
  /**
   * @remarks
   * The prevention mode. Valid values:
   * 
   * *   **block**
   * *   **audit**
   * 
   * @example
   * audit
   */
  defenseMode?: string;
  /**
   * @remarks
   * The protected path.
   * 
   * @example
   * /usr/test/
   */
  defensePath?: string;
  /**
   * @remarks
   * The file that is excluded.
   * 
   * @example
   * php
   */
  excludeFile?: string;
  /**
   * @remarks
   * The path to the file that is excluded.
   * 
   * @example
   * /usr/tt
   */
  excludeFilePath?: string;
  /**
   * @remarks
   * The type of the file that is excluded.
   * 
   * @example
   * jsp
   */
  excludeFileType?: string;
  /**
   * @remarks
   * The protection mode. Valid values:
   * 
   * *   **0**: basic mode (whitelist)
   * *   **1**: complex mode (blacklist)
   * 
   * @example
   * 0
   */
  guardType?: number;
  /**
   * @remarks
   * The file that is included.
   * 
   * @example
   * /usr/test
   */
  includeFile?: string;
  /**
   * @remarks
   * The type of the file that is included.
   * 
   * @example
   * php
   */
  includeFileType?: string;
  /**
   * @remarks
   * The processes that are added to the whitelist.
   */
  processPathList?: string[];
  static names(): { [key: string]: string } {
    return {
      backupPath: 'BackupPath',
      defenseMode: 'DefenseMode',
      defensePath: 'DefensePath',
      excludeFile: 'ExcludeFile',
      excludeFilePath: 'ExcludeFilePath',
      excludeFileType: 'ExcludeFileType',
      guardType: 'GuardType',
      includeFile: 'IncludeFile',
      includeFileType: 'IncludeFileType',
      processPathList: 'ProcessPathList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPath: 'string',
      defenseMode: 'string',
      defensePath: 'string',
      excludeFile: 'string',
      excludeFilePath: 'string',
      excludeFileType: 'string',
      guardType: 'number',
      includeFile: 'string',
      includeFileType: 'string',
      processPathList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.processPathList)) {
      $dara.Model.validateArray(this.processPathList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSasContainerWebDefenseRuleResponseBodyContainerWebDefenseRuleList extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1766185894104675
   */
  aliUid?: number;
  /**
   * @remarks
   * The number of the applications.
   * 
   * @example
   * 10
   */
  apptotalCount?: number;
  /**
   * @remarks
   * The creation time. Unit: milliseconds.
   * 
   * @example
   * 1698978109000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The timestamp when the alert event was last modified. Unit: milliseconds.
   * 
   * @example
   * 1678852686000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 420336648
   */
  id?: number;
  /**
   * @remarks
   * The paths that are protected.
   */
  pathConfDTOList?: ListSasContainerWebDefenseRuleResponseBodyContainerWebDefenseRuleListPathConfDTOList[];
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * test2
   */
  ruleName?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * *   **1**: enabled
   * *   **0**: disabled
   * 
   * @example
   * 1
   */
  ruleStatus?: number;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      apptotalCount: 'ApptotalCount',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      pathConfDTOList: 'PathConfDTOList',
      ruleName: 'RuleName',
      ruleStatus: 'RuleStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      apptotalCount: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      pathConfDTOList: { 'type': 'array', 'itemType': ListSasContainerWebDefenseRuleResponseBodyContainerWebDefenseRuleListPathConfDTOList },
      ruleName: 'string',
      ruleStatus: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pathConfDTOList)) {
      $dara.Model.validateArray(this.pathConfDTOList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSasContainerWebDefenseRuleResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 4
   */
  count?: number;
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
   * 42
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

export class ListSasContainerWebDefenseRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The rules for container tamper-proofing.
   */
  containerWebDefenseRuleList?: ListSasContainerWebDefenseRuleResponseBodyContainerWebDefenseRuleList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListSasContainerWebDefenseRuleResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID, which is used to query logs and troubleshoot issues.
   * 
   * @example
   * 8C376***AE74FB4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      containerWebDefenseRuleList: 'ContainerWebDefenseRuleList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerWebDefenseRuleList: { 'type': 'array', 'itemType': ListSasContainerWebDefenseRuleResponseBodyContainerWebDefenseRuleList },
      pageInfo: ListSasContainerWebDefenseRuleResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.containerWebDefenseRuleList)) {
      $dara.Model.validateArray(this.containerWebDefenseRuleList);
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

