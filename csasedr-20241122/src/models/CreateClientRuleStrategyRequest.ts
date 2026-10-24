// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClientRuleStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The action of the policy. Valid values:
   * - **0**: monitor mode.
   * - **1**: block startup.
   * - **2**: Block Mode.
   * Valid values for custom rules of proactive defense (PolicyType=2):
   * - **0**: add to allowlist and allow.
   * - **1**: add to blocklist and block.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  actionType?: number;
  /**
   * @remarks
   * Specifies whether the policy takes effect for all user groups. Valid values:
   * - **0**: no.
   * - **1**: yes.
   * 
   * @example
   * 1
   */
  allGroup?: number;
  /**
   * @remarks
   * The ID of the reporting and approval process.
   * 
   * @example
   * approval-b567d830cd17674c
   */
  approvalId?: string;
  /**
   * @remarks
   * The matched process command line.
   * 
   * @example
   * C:\\Windows\\System32\\RuntimeBroker.exe -Embedding
   */
  cmdline?: string;
  /**
   * @remarks
   * The description of the policy.
   * > The maximum length is 128 characters.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The list of usernames for which the policy does not take effect.
   */
  excludeUserNameList?: string[];
  /**
   * @remarks
   * The matched file path.
   * 
   * @example
   * C:\\Program Files\\Example\\example.exe
   */
  filePath?: string;
  /**
   * @remarks
   * The inbound network switch.
   * 
   * @example
   * true
   */
  inSwitch?: boolean;
  /**
   * @remarks
   * The list of IDs of the user groups for which the policy takes effect.
   */
  includeGroupIdList?: string[];
  /**
   * @remarks
   * The matched IP address.
   * 
   * @example
   * 192.0.2.1
   */
  ip?: string;
  /**
   * @remarks
   * The text of the primary button in the Chinese button configuration.
   * 
   * @example
   * test
   */
  mainButtonTextCh?: string;
  /**
   * @remarks
   * The text of the primary button in the English button configuration.
   * 
   * @example
   * test
   */
  mainButtonTextEn?: string;
  /**
   * @remarks
   * The effective scope mode. Valid values:
   * - **UserGroupAll**: all user groups.
   * - **UserGroupNormal**: specified user groups.
   * - **DeviceGroupNormal**: specified device groups.
   * - **DevTagNormal**: specified device tags.
   * 
   * @example
   * UserGroupNormal
   */
  matchMode?: string;
  /**
   * @remarks
   * The list of effective scope targets. The meaning of the targets is determined by MatchMode.
   */
  matchTargetIds?: string[];
  /**
   * @remarks
   * The MD5 match string of the file.
   * 
   * @example
   * d41d8cd98f00b204e9800998ecf8427e
   */
  md5List?: string;
  /**
   * @remarks
   * The text of the secondary button in the Chinese button configuration.
   * 
   * @example
   * test
   */
  minorButtonTextCh?: string;
  /**
   * @remarks
   * The text of the secondary button in the English button configuration.
   * 
   * @example
   * test
   */
  minorButtonTextEn?: string;
  /**
   * @remarks
   * The Policy Name.
   * > The maximum length is 128 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The matched new file path.
   * 
   * @example
   * C:\\Program Files\\Example\\renamed.exe
   */
  newFilePath?: string;
  /**
   * @remarks
   * The outbound network switch.
   * 
   * @example
   * true
   */
  outSwitch?: boolean;
  /**
   * @remarks
   * The matched parent process command line.
   * 
   * @example
   * C:\\Windows\\System32\\svchost.exe -k DcomLaunch -p
   */
  parentCmdline?: string;
  /**
   * @remarks
   * The matched parent process path.
   * 
   * @example
   * C:\\Windows\\System32\\svchost.exe
   */
  parentProcPath?: string;
  /**
   * @remarks
   * The platform to which the rule applies. Valid values:
   * - **linux**
   * - **windows**
   * - **mac**
   * - **all**: all platforms.
   * 
   * @example
   * windows
   */
  platform?: string;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * - **0**: software hardening.
   * - **1**: firewall.
   * - **2**: proactive defense.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  policyType?: number;
  /**
   * @remarks
   * The matched port.
   * 
   * @example
   * 443
   */
  port?: string;
  /**
   * @remarks
   * The list of enabled ports.
   * > This parameter is valid only when the policy type is firewall.
   */
  portOnList?: string[];
  /**
   * @remarks
   * The policy priority. A smaller value indicates a higher priority. Valid values: greater than 0.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The matched process path.
   * 
   * @example
   * C:\\Windows\\System32\\RuntimeBroker.exe
   */
  procPath?: string;
  /**
   * @remarks
   * The matched registry content.
   * 
   * @example
   * ExampleValue
   */
  registryContent?: string;
  /**
   * @remarks
   * The matched registry key.
   * 
   * @example
   * HKEY_LOCAL_MACHINE\\Software\\Example
   */
  registryKey?: string;
  /**
   * @remarks
   * The type of the defense rule. Valid values: 1 to 7.
   * 
   * @example
   * 1
   */
  ruleType?: number;
  /**
   * @remarks
   * The key of the switch configuration for the rule associated with the policy. This key can be used in ListSystemConfigRules and OperateTargetConfig.
   * 
   * @example
   * a8d64565-ab8b-41a6-bd3d-14d0fc639285
   */
  selectionKey?: string;
  /**
   * @remarks
   * The list of main process names of the software for which integrity check is enabled. The elements correspond to the Process returned by GetSwitchInfoListByType.
   */
  softWareOnList?: string[];
  /**
   * @remarks
   * The status of the policy. Valid values:
   * - **0**: disabled.
   * - **1**: enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The rule source for proactive defense (PolicyType=2). Valid values:
   * - **SYSTEM**: system rules.
   * - **CUSTOM**: custom rules.
   * 
   * @example
   * SYSTEM
   */
  strategySourceType?: string;
  /**
   * @remarks
   * Specifies whether reporting and approval are supported. Valid values:
   * - **0**: not supported.
   * - **1**: supported.
   * 
   * @example
   * 0
   */
  supportsApproval?: number;
  /**
   * @remarks
   * The English content in the pop-up prompt configuration.
   * 
   * @example
   * test
   */
  usContent?: string;
  /**
   * @remarks
   * The English title in the pop-up prompt configuration.
   * 
   * @example
   * test
   */
  usTitle?: string;
  /**
   * @remarks
   * The Chinese content in the pop-up prompt configuration.
   * 
   * @example
   * test
   */
  zhContent?: string;
  /**
   * @remarks
   * The Chinese title in the pop-up prompt configuration.
   * 
   * @example
   * test
   */
  zhTitle?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      allGroup: 'AllGroup',
      approvalId: 'ApprovalId',
      cmdline: 'Cmdline',
      description: 'Description',
      excludeUserNameList: 'ExcludeUserNameList',
      filePath: 'FilePath',
      inSwitch: 'InSwitch',
      includeGroupIdList: 'IncludeGroupIdList',
      ip: 'Ip',
      mainButtonTextCh: 'MainButtonTextCh',
      mainButtonTextEn: 'MainButtonTextEn',
      matchMode: 'MatchMode',
      matchTargetIds: 'MatchTargetIds',
      md5List: 'Md5List',
      minorButtonTextCh: 'MinorButtonTextCh',
      minorButtonTextEn: 'MinorButtonTextEn',
      name: 'Name',
      newFilePath: 'NewFilePath',
      outSwitch: 'OutSwitch',
      parentCmdline: 'ParentCmdline',
      parentProcPath: 'ParentProcPath',
      platform: 'Platform',
      policyType: 'PolicyType',
      port: 'Port',
      portOnList: 'PortOnList',
      priority: 'Priority',
      procPath: 'ProcPath',
      registryContent: 'RegistryContent',
      registryKey: 'RegistryKey',
      ruleType: 'RuleType',
      selectionKey: 'SelectionKey',
      softWareOnList: 'SoftWareOnList',
      status: 'Status',
      strategySourceType: 'StrategySourceType',
      supportsApproval: 'SupportsApproval',
      usContent: 'UsContent',
      usTitle: 'UsTitle',
      zhContent: 'ZhContent',
      zhTitle: 'ZhTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'number',
      allGroup: 'number',
      approvalId: 'string',
      cmdline: 'string',
      description: 'string',
      excludeUserNameList: { 'type': 'array', 'itemType': 'string' },
      filePath: 'string',
      inSwitch: 'boolean',
      includeGroupIdList: { 'type': 'array', 'itemType': 'string' },
      ip: 'string',
      mainButtonTextCh: 'string',
      mainButtonTextEn: 'string',
      matchMode: 'string',
      matchTargetIds: { 'type': 'array', 'itemType': 'string' },
      md5List: 'string',
      minorButtonTextCh: 'string',
      minorButtonTextEn: 'string',
      name: 'string',
      newFilePath: 'string',
      outSwitch: 'boolean',
      parentCmdline: 'string',
      parentProcPath: 'string',
      platform: 'string',
      policyType: 'number',
      port: 'string',
      portOnList: { 'type': 'array', 'itemType': 'string' },
      priority: 'number',
      procPath: 'string',
      registryContent: 'string',
      registryKey: 'string',
      ruleType: 'number',
      selectionKey: 'string',
      softWareOnList: { 'type': 'array', 'itemType': 'string' },
      status: 'number',
      strategySourceType: 'string',
      supportsApproval: 'number',
      usContent: 'string',
      usTitle: 'string',
      zhContent: 'string',
      zhTitle: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.excludeUserNameList)) {
      $dara.Model.validateArray(this.excludeUserNameList);
    }
    if(Array.isArray(this.includeGroupIdList)) {
      $dara.Model.validateArray(this.includeGroupIdList);
    }
    if(Array.isArray(this.matchTargetIds)) {
      $dara.Model.validateArray(this.matchTargetIds);
    }
    if(Array.isArray(this.portOnList)) {
      $dara.Model.validateArray(this.portOnList);
    }
    if(Array.isArray(this.softWareOnList)) {
      $dara.Model.validateArray(this.softWareOnList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

