// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFileProtectClientRuleRequest extends $dara.Model {
  /**
   * @example
   * 0
   */
  alertLevel?: number;
  /**
   * @example
   * xxx
   */
  clientToken?: string;
  excludeUsers?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  fileOps?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  filePaths?: string[];
  fileTypes?: string[];
  /**
   * @example
   * linux
   */
  platform?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  procPaths?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pass
   */
  ruleAction?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ruleName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
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

