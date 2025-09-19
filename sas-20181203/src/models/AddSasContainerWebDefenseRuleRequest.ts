// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSasContainerWebDefenseRuleRequestPathConfDTOList extends $dara.Model {
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
   * The prevention mode. Valid values:
   * 
   * *   **block**
   * *   **audit**
   * 
   * @example
   * audit
   */
  defenseMode?: string;
  /**
   * @remarks
   * The path that you want to protect.
   * 
   * This parameter is required.
   * 
   * @example
   * /usr/test/
   */
  defensePath?: string;
  /**
   * @remarks
   * The file that you want to exclude.
   * 
   * @example
   * /usr/test/aa
   */
  excludeFile?: string;
  /**
   * @remarks
   * The path to the file that you want to exclude.
   * 
   * @example
   * /usr/test/tt
   */
  excludeFilePath?: string;
  /**
   * @remarks
   * The type of the file that you want to exclude.
   * 
   * @example
   * jsp
   */
  excludeFileType?: string;
  /**
   * @remarks
   * The protecion mode. Valid values:
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
   * The file that you want to include.
   * 
   * @example
   * /usr/test/t1
   */
  includeFile?: string;
  /**
   * @remarks
   * The type of the file that you want to include.
   * 
   * @example
   * *.jsp
   */
  includeFileType?: string;
  /**
   * @remarks
   * The processes that you want to add to the whitelist.
   * 
   * This parameter is required.
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

export class AddSasContainerWebDefenseRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The paths that you want to protect.
   */
  pathConfDTOList?: AddSasContainerWebDefenseRuleRequestPathConfDTOList[];
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * test-2020
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      pathConfDTOList: 'PathConfDTOList',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pathConfDTOList: { 'type': 'array', 'itemType': AddSasContainerWebDefenseRuleRequestPathConfDTOList },
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

