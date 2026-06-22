// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSasContainerWebDefenseRuleResponseBodyContainerWebDefenseRulePathConfDTOList extends $dara.Model {
  /**
   * @remarks
   * The backup path.
   * 
   * @example
   * /usr/path/
   */
  backupPath?: string;
  /**
   * @remarks
   * The action to take. Valid values:
   * - **block**: Block.
   * - **audit**: Alert.
   * 
   * @example
   * audit
   */
  defenseMode?: string;
  /**
   * @remarks
   * The defense path.
   * 
   * @example
   * /test11*
   */
  defensePath?: string;
  /**
   * @remarks
   * The excluded file.
   * 
   * @example
   * file1
   */
  excludeFile?: string;
  /**
   * @remarks
   * The excluded file path.
   * 
   * @example
   * /test2/sub1,/test2/sub2
   */
  excludeFilePath?: string;
  /**
   * @remarks
   * The excluded file type.
   * 
   * @example
   * doc
   */
  excludeFileType?: string;
  /**
   * @remarks
   * The defense mode. Valid values:
   * - **0**: Basic pattern (whitelist).
   * - **1**: Advanced pattern (blacklist).
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
   * webapp
   */
  includeFile?: string;
  /**
   * @remarks
   * The included file type.
   * 
   * @example
   * doc
   */
  includeFileType?: string;
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

export class GetSasContainerWebDefenseRuleResponseBodyContainerWebDefenseRule extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1000**0002
   */
  aliUid?: number;
  /**
   * @remarks
   * The total number of applications.
   * 
   * @example
   * 1
   */
  appTotalCount?: number;
  /**
   * @remarks
   * The timestamp when the rule was created. Unit: milliseconds.
   * 
   * @example
   * 1709173360000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The timestamp when the rule was modified. Unit: milliseconds.
   * 
   * @example
   * 1655432638000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 100
   */
  id?: number;
  /**
   * @remarks
   * The list of configured file paths.
   */
  pathConfDTOList?: GetSasContainerWebDefenseRuleResponseBodyContainerWebDefenseRulePathConfDTOList[];
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * 防篡改规则
   */
  ruleName?: string;
  /**
   * @remarks
   * The rule status. Valid values:
   * 
   * - **1**: Enabled.
   * - **0**: Disabled.
   * 
   * @example
   * 1
   */
  ruleStatus?: number;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      appTotalCount: 'AppTotalCount',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      pathConfDTOList: 'PathConfDTOList',
      ruleName: 'RuleName',
      ruleStatus: 'RuleStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      appTotalCount: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      pathConfDTOList: { 'type': 'array', 'itemType': GetSasContainerWebDefenseRuleResponseBodyContainerWebDefenseRulePathConfDTOList },
      ruleName: 'string',
      ruleStatus: 'number',
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

export class GetSasContainerWebDefenseRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the container file defense rule.
   */
  containerWebDefenseRule?: GetSasContainerWebDefenseRuleResponseBodyContainerWebDefenseRule;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique ID for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * BA674E4**62FB5133
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      containerWebDefenseRule: 'ContainerWebDefenseRule',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerWebDefenseRule: GetSasContainerWebDefenseRuleResponseBodyContainerWebDefenseRule,
      requestId: 'string',
    };
  }

  validate() {
    if(this.containerWebDefenseRule && typeof (this.containerWebDefenseRule as any).validate === 'function') {
      (this.containerWebDefenseRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

