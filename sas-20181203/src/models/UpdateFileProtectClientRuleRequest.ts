// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFileProtectClientRuleRequest extends $dara.Model {
  /**
   * @example
   * 0
   */
  alertLevel?: number;
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 245
   */
  id?: number;
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
   * 
   * @example
   * text-001
   */
  ruleName?: string;
  /**
   * @remarks
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

