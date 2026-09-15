// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFileProtectRuleRequest extends $dara.Model {
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
   * The list of operations performed on files.
   * 
   * This parameter is required.
   */
  fileOps?: string[];
  /**
   * @remarks
   * The list of monitored file paths. Wildcards are supported.
   * 
   * This parameter is required.
   */
  filePaths?: string[];
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 1062
   */
  id?: number;
  /**
   * @remarks
   * The list of process listening paths.
   * 
   * This parameter is required.
   */
  procPaths?: string[];
  /**
   * @remarks
   * The behavior of the rule on the client. Valid values:
   * 
   * - pass: allow
   * 
   * - alert: alert
   * 
   * @example
   * pass
   */
  ruleAction?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-rule-1
   */
  ruleName?: string;
  /**
   * @remarks
   * The rule status. Valid values:
   * - **0**: disabled
   * - **1**: enabled
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

