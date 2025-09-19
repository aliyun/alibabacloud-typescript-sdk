// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFileProtectRuleRequest extends $dara.Model {
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
   * The paths to the monitored files. Wildcard characters are supported.
   * 
   * This parameter is required.
   */
  filePaths?: string[];
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 1062
   */
  id?: number;
  /**
   * @remarks
   * The paths to the monitored processes.
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
   * test-rule-1
   */
  ruleName?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * *   **0**: disabled
   * *   **1**: enabled
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      alertLevel: 'AlertLevel',
      fileOps: 'FileOps',
      filePaths: 'FilePaths',
      id: 'Id',
      procPaths: 'ProcPaths',
      ruleAction: 'RuleAction',
      ruleName: 'RuleName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertLevel: 'number',
      fileOps: { 'type': 'array', 'itemType': 'string' },
      filePaths: { 'type': 'array', 'itemType': 'string' },
      id: 'number',
      procPaths: { 'type': 'array', 'itemType': 'string' },
      ruleAction: 'string',
      ruleName: 'string',
      status: 'number',
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

