// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFileProtectClientRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The alert notification level. Valid values:
   * 
   * - 0: no alert
   * - 1: reminder
   * - 2: suspicious
   * - 3: high-risk.
   * 
   * @example
   * 0
   */
  alertLevel?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * xxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The list of excluded users.
   */
  excludeUsers?: string[];
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
   * The list of monitored file types.
   */
  fileTypes?: string[];
  /**
   * @remarks
   * The operating system type. Valid values:
   * 
   * - **windows**: Windows.
   * - **linux**: Linux.
   * 
   * @example
   * linux
   */
  platform?: string;
  /**
   * @remarks
   * The list of process monitoring paths. Wildcards are supported.
   * 
   * This parameter is required.
   */
  procPaths?: string[];
  /**
   * @remarks
   * The action to take when the policy is hit. Valid values:
   * 
   * - **monitor**: Alert.
   * - **block**: Block.
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
   * 规则****
   */
  ruleName?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * - **0**: Disabled.
   * - **1**: Enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
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
      clientToken: 'ClientToken',
      excludeUsers: 'ExcludeUsers',
      fileOps: 'FileOps',
      filePaths: 'FilePaths',
      fileTypes: 'FileTypes',
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
      clientToken: 'string',
      excludeUsers: { 'type': 'array', 'itemType': 'string' },
      fileOps: { 'type': 'array', 'itemType': 'string' },
      filePaths: { 'type': 'array', 'itemType': 'string' },
      fileTypes: { 'type': 'array', 'itemType': 'string' },
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

