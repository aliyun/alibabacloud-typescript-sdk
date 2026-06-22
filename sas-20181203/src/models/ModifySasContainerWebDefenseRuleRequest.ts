// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySasContainerWebDefenseRuleRequestPathConfDTOList extends $dara.Model {
  /**
   * @remarks
   * The backup path.
   * 
   * @example
   * /tmp/test
   */
  backupPath?: string;
  /**
   * @remarks
   * The action to perform. Valid values:
   * - **block**: Block.
   * - **audit**: Alert.
   * 
   * This parameter is required.
   * 
   * @example
   * audit
   */
  defenseMode?: string;
  /**
   * @remarks
   * The defense path.
   * 
   * This parameter is required.
   * 
   * @example
   * /test/home/
   */
  defensePath?: string;
  /**
   * @remarks
   * The excluded file.
   * 
   * @example
   * /usr/test
   */
  excludeFile?: string;
  /**
   * @remarks
   * The excluded file path.
   * 
   * @example
   * /test/home/qq
   */
  excludeFilePath?: string;
  /**
   * @remarks
   * The excluded file type.
   * 
   * @example
   * php
   */
  excludeFileType?: string;
  /**
   * @remarks
   * The Defense mode. Valid values:
   * - **0**: Basic pattern (whitelist). 
   * - **1**: Complex pattern (blacklist).
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  guardType?: number;
  /**
   * @remarks
   * The included file.
   * 
   * @example
   * /home/admin/test
   */
  includeFile?: string;
  /**
   * @remarks
   * The included file type.
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
   * The list of whitelisted processes.
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
   * The list of defense paths for the rule.
   */
  pathConfDTOList?: ModifySasContainerWebDefenseRuleRequestPathConfDTOList[];
  /**
   * @remarks
   * The rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 200634
   */
  ruleId?: number;
  /**
   * @remarks
   * The rule name.
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

