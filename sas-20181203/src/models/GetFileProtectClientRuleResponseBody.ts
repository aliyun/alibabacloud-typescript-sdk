// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileProtectClientRuleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The alert notification level. Valid values:
   * 
   * - 0: no alert
   * 
   * - 1: reminder
   * 
   * - 2: suspicious
   * 
   * - 3: high-risk.
   * 
   * @example
   * 1
   */
  alertLevel?: number;
  /**
   * @remarks
   * The list of excluded users.
   */
  excludeUsers?: string[];
  /**
   * @remarks
   * The operations performed on files.
   */
  fileOps?: string[];
  /**
   * @remarks
   * The monitored file paths. Wildcards are supported.
   */
  filePaths?: string[];
  /**
   * @remarks
   * The protected file types.
   */
  fileTypes?: string[];
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 3119
   */
  id?: number;
  /**
   * @remarks
   * The operating system type. Valid values:
   * 
   * - **windows**: Windows
   * - **linux**: Linux.
   * 
   * @example
   * linux
   */
  platform?: string;
  /**
   * @remarks
   * The process paths. Wildcards are supported.
   */
  procPaths?: string[];
  /**
   * @remarks
   * The action that the rule takes on the client. Valid values:
   * 
   * - monitor: alert
   * 
   * - block: block
   * 
   * - pass: allow.
   * 
   * @example
   * pass
   */
  ruleAction?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * test
   */
  ruleName?: string;
  /**
   * @remarks
   * The rule status. Valid values:
   * 
   * - **0**: disabled.
   * - **1**: enabled.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The switch ID that corresponds to the rule.
   * 
   * @example
   * USER-CONTAINER-RULE-SWITCH-TYPE_***
   */
  switchId?: string;
  static names(): { [key: string]: string } {
    return {
      alertLevel: 'AlertLevel',
      excludeUsers: 'ExcludeUsers',
      fileOps: 'FileOps',
      filePaths: 'FilePaths',
      fileTypes: 'FileTypes',
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
      excludeUsers: { 'type': 'array', 'itemType': 'string' },
      fileOps: { 'type': 'array', 'itemType': 'string' },
      filePaths: { 'type': 'array', 'itemType': 'string' },
      fileTypes: { 'type': 'array', 'itemType': 'string' },
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

export class GetFileProtectClientRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetFileProtectClientRuleResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 79CFF74D-E967-5407-8A78-EE03B925****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetFileProtectClientRuleResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

