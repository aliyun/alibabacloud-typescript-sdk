// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFileProtectClientRuleRequest extends $dara.Model {
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
   * 0
   */
  alertLevel?: number;
  /**
   * @remarks
   * The list of users excluded from file protection.
   */
  excludeUsers?: string[];
  /**
   * @remarks
   * The list of operations performed on the file.
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
   * The list of protected file types.
   */
  fileTypes?: string[];
  /**
   * @remarks
   * The unique ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 245
   */
  id?: number;
  /**
   * @remarks
   * The list of process listening paths. Wildcards are supported.
   * 
   * This parameter is required.
   */
  procPaths?: string[];
  /**
   * @remarks
   * The action of the rule. Valid values:
   * 
   * - **block**: Block.
   * 
   * - **monitor**: Monitor.
   * 
   * - **pass**: Allow.
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
   * text-001
   */
  ruleName?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * - **0**: disabled
   * - **1**: enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      alertLevel: 'AlertLevel',
      excludeUsers: 'ExcludeUsers',
      fileOps: 'FileOps',
      filePaths: 'FilePaths',
      fileTypes: 'FileTypes',
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
      excludeUsers: { 'type': 'array', 'itemType': 'string' },
      fileOps: { 'type': 'array', 'itemType': 'string' },
      filePaths: { 'type': 'array', 'itemType': 'string' },
      fileTypes: { 'type': 'array', 'itemType': 'string' },
      id: 'number',
      procPaths: { 'type': 'array', 'itemType': 'string' },
      ruleAction: 'string',
      ruleName: 'string',
      status: 'number',
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

