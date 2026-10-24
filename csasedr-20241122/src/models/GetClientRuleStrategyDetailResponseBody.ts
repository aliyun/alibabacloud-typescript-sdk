// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClientRuleStrategyDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The policy action. Valid values:
   * 
   * - **0**: Monitor mode.
   * - **1**: Block startup.
   * - **2**: Block mode.
   * 
   * Valid values for custom rules of proactive defense (PolicyType=2):
   * 
   * - **0**: Allowlist and allow.
   * - **1**: Blocklist and block.
   * 
   * @example
   * 0
   */
  actionType?: number;
  /**
   * @remarks
   * Specifies whether the policy takes effect for all user groups. Valid values:
   * 
   * - **0**: No.
   * - **1**: Yes.
   * 
   * @example
   * 1
   */
  allGroup?: number;
  /**
   * @remarks
   * The approval instance ID.
   * 
   * @example
   * approval-9cf803604a16410c
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
   * The timestamp when the policy was created. Unit: milliseconds.
   * 
   * @example
   * 1792627200000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the policy.
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
   * The policy ID.
   * 
   * @example
   * 1
   */
  id?: number;
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
   * The list of targets in the effective scope.
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
   * The configuration of the primary button in Chinese.
   * 
   * @example
   * test
   */
  mainButtonTextCh?: string;
  /**
   * @remarks
   * The configuration of the primary button in English.
   * 
   * @example
   * test
   */
  mainButtonTextEn?: string;
  /**
   * @remarks
   * The effective scope mode. Valid values:
   * 
   * - **UserGroupAll**: All user groups.
   * - **UserGroupNormal**: Specified user groups.
   * - **DeviceGroupNormal**: Specified device groups.
   * - **DevTagNormal**: Specified device tags.
   * 
   * The meaning of MatchTargetIds is determined by this field.
   * 
   * @example
   * UserGroupNormal
   */
  matchMode?: string;
  /**
   * @remarks
   * The list of targets in the effective scope. The meaning of the targets is determined by MatchMode.
   */
  matchTargetIds?: string[];
  /**
   * @remarks
   * The MD5 match string for the file.
   * 
   * @example
   * d41d8cd98f00b204e9800998ecf8427e
   */
  md5List?: string;
  /**
   * @remarks
   * The configuration of the secondary button in Chinese.
   * 
   * @example
   * test
   */
  minorButtonTextCh?: string;
  /**
   * @remarks
   * The configuration of the secondary button in English.
   * 
   * @example
   * test
   */
  minorButtonTextEn?: string;
  /**
   * @remarks
   * The Policy Name.
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
   * 
   * - **linux**: Linux.
   * - **windows**: Windows.
   * - **mac**: macOS.
   * - **all**: All platforms.
   * 
   * @example
   * windows
   */
  platform?: string;
  /**
   * @remarks
   * The policy type. Valid values:
   * 
   * - **0**: Software hardening.
   * - **1**: Firewall.
   * - **2**: Proactive defense.
   * 
   * @example
   * 1
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
   */
  portOnList?: string[];
  /**
   * @remarks
   * The policy priority. A smaller value indicates a higher priority. Valid values: greater than 0.
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
   * The association key of the policy configuration, which is used to associate the policy with its process or switch configuration.
   * 
   * @example
   * a8d64565-ab8b-41a6-bd3d-14d0fc639285
   */
  selectionKey?: string;
  /**
   * @remarks
   * The list of main process names of the software for which integrity check is enabled. The elements correspond to the Process parameter returned by GetSwitchInfoListByType.
   */
  softWareOnList?: string[];
  /**
   * @remarks
   * The policy switch. Valid values:
   * 
   * - **0**: Disabled.
   * - **1**: Enabled.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The source of the rule for proactive defense (PolicyType=2). Valid values:
   * 
   * - **SYSTEM**: System rule.
   * - **CUSTOM**: Custom rule.
   * 
   * @example
   * SYSTEM
   */
  strategySourceType?: string;
  /**
   * @remarks
   * Specifies whether reporting and approval are supported. Valid values:
   * 
   * - **0**: Not supported.
   * - **1**: Supported.
   * 
   * @example
   * 1
   */
  supportsApproval?: number;
  /**
   * @remarks
   * The content of the pop-up prompt in English.
   * 
   * @example
   * test
   */
  usContent?: string;
  /**
   * @remarks
   * The title of the pop-up prompt in English.
   * 
   * @example
   * test
   */
  usTitle?: string;
  /**
   * @remarks
   * The content of the pop-up prompt in Chinese.
   * 
   * @example
   * test
   */
  zhContent?: string;
  /**
   * @remarks
   * The title of the pop-up prompt in Chinese.
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
      createTime: 'CreateTime',
      description: 'Description',
      excludeUserNameList: 'ExcludeUserNameList',
      filePath: 'FilePath',
      id: 'Id',
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
      createTime: 'number',
      description: 'string',
      excludeUserNameList: { 'type': 'array', 'itemType': 'string' },
      filePath: 'string',
      id: 'number',
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

export class GetClientRuleStrategyDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The policy information.
   */
  data?: GetClientRuleStrategyDetailResponseBodyData;
  /**
   * @remarks
   * The ID of the request. The ID is a unique identifier generated by Alibaba Cloud for the request and can be used to troubleshoot and locate issues.
   * 
   * @example
   * 3F931C98-2116-52B4-9C7E-C3F27641C8FF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetClientRuleStrategyDetailResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

