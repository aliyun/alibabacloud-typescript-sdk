// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFileProtectRuleRequest extends $dara.Model {
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
   * - 3: high-risk
   * 
   * @example
   * 0
   */
  alertLevel?: number;
  /**
   * @remarks
   * The list of file operations.
   * 
   * This parameter is required.
   */
  fileOps?: string[];
  /**
   * @remarks
   * The list of file paths to monitor. Wildcards are supported.
   * 
   * This parameter is required.
   */
  filePaths?: string[];
  /**
   * @remarks
   * The operating system type. Valid values:
   * 
   * - **windows**: Windows
   * - **linux**: Linux
   * 
   * @example
   * linux
   */
  platform?: string;
  /**
   * @remarks
   * The list of process paths to monitor. Wildcards are supported.
   * 
   * This parameter is required.
   */
  procPaths?: string[];
  /**
   * @remarks
   * The action that the rule takes on the client. Valid values:
   * 
   * - pass: allow
   * 
   * - alert: alert
   * 
   * This parameter is required.
   * 
   * @example
   * pass
   */
  ruleAction?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * tetsRule
   */
  ruleName?: string;
  /**
   * @remarks
   * The rule status. Valid values:
   * - **1**: Enabled.
   * - **0**: Disabled.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The switch ID associated with the rule.
   * 
   * @example
   * FILE_PROTECT_RULE_SWITCH_TYPE_0000
   */
  switchId?: string;
  static names(): { [key: string]: string } {
    return {
      alertLevel: 'AlertLevel',
      fileOps: 'FileOps',
      filePaths: 'FilePaths',
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
      fileOps: { 'type': 'array', 'itemType': 'string' },
      filePaths: { 'type': 'array', 'itemType': 'string' },
      platform: 'string',
      procPaths: { 'type': 'array', 'itemType': 'string' },
      ruleAction: 'string',
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

