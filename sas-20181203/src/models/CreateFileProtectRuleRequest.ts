// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFileProtectRuleRequest extends $dara.Model {
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
  alertLevel?: number;
  /**
   * @remarks
   * The operations that you want to perform on the files.
   * 
   * This parameter is required.
   */
  fileOps?: string[];
  /**
   * @remarks
   * The paths to the files that you want to monitor. Wildcard characters are supported.
   * 
   * This parameter is required.
   */
  filePaths?: string[];
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
   * The paths to the processes that you want to monitor. Wildcard characters are supported.
   * 
   * This parameter is required.
   */
  procPaths?: string[];
  /**
   * @remarks
   * The handling method of the rule. Valid values:
   * 
   * *   pass: allow
   * *   alert
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
   * Specifies whether to enable the rule. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
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

