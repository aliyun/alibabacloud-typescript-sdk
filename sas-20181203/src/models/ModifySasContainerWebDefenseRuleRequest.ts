// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySasContainerWebDefenseRuleRequestPathConfDTOList extends $dara.Model {
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
   * This parameter is required.
   * 
   * @example
   * audit
   */
  defenseMode?: string;
  /**
   * @remarks
   * The path that is protected.
   * 
   * This parameter is required.
   * 
   * @example
   * /test/home/
   */
  defensePath?: string;
  /**
   * @remarks
   * The files that are excluded.
   * 
   * @example
   * /usr/test
   */
  excludeFile?: string;
  /**
   * @remarks
   * The paths to the files that are excluded.
   * 
   * @example
   * /test/home/qq
   */
  excludeFilePath?: string;
  /**
   * @remarks
   * The types of the files that are excluded.
   * 
   * @example
   * php
   */
  excludeFileType?: string;
  /**
   * @remarks
   * The protection mode. Valid values:
   * 
   * *   **0**: basic mode (whitelist)
   * *   **1**: complex mode (blacklist)
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  guardType?: number;
  /**
   * @remarks
   * The files that are included.
   * 
   * @example
   * /home/admin/test
   */
  includeFile?: string;
  /**
   * @remarks
   * The type of the files that are included.
   * 
   * @example
   * jsp
   */
  includeFileType?: string;
  /**
   * @remarks
   * The path ID.
   * 
   * @example
   * 12345678
   */
  pathConfId?: number;
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
      pathConfId: 'PathConfId',
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
      pathConfId: 'number',
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

export class ModifySasContainerWebDefenseRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The paths that are protected.
   */
  pathConfDTOList?: ModifySasContainerWebDefenseRuleRequestPathConfDTOList[];
  /**
   * @remarks
   * The ID of the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 200634
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * wwwwwww
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      pathConfDTOList: 'PathConfDTOList',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pathConfDTOList: { 'type': 'array', 'itemType': ModifySasContainerWebDefenseRuleRequestPathConfDTOList },
      ruleId: 'number',
      ruleName: 'string',
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

