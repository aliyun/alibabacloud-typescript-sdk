// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClientRuleStrategyResponseBodyList extends $dara.Model {
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
   * - **0**: Allow.
   * - **1**: Block.
   * 
   * @example
   * 1
   */
  actionType?: number;
  /**
   * @remarks
   * Specifies whether the policy applies to all user groups. Valid values:
   * 
   * - **0**: No.
   * - **1**: Yes.
   * 
   * @example
   * 0
   */
  allGroup?: number;
  /**
   * @remarks
   * The instance ID of the approval.
   * 
   * @example
   * approval-3f9bcedb9643b956
   */
  approvalId?: string;
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
   * The list of usernames to which the policy does not apply.
   */
  excludeUserNameList?: string[];
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * 1938
   */
  id?: number;
  /**
   * @remarks
   * The switch for inbound network traffic.
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
   * The text of the primary button in Chinese.
   * 
   * @example
   * test
   */
  mainButtonTextCh?: string;
  /**
   * @remarks
   * The text of the primary button in English.
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
   * The list of targets in the effective scope. UserGroupNormal corresponds to user group IDs, DeviceGroupNormal corresponds to device group IDs, and DevTagNormal corresponds to device tags. If MatchMode is set to UserGroupAll, you do not need to specify targets.
   */
  matchTargetIds?: string[];
  /**
   * @remarks
   * The text of the secondary button in Chinese.
   * 
   * @example
   * test
   */
  minorButtonTextCh?: string;
  /**
   * @remarks
   * The text of the secondary button in English.
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
   * The switch for outbound network traffic.
   * 
   * @example
   * true
   */
  outSwitch?: boolean;
  /**
   * @remarks
   * The policy type. Valid values:
   * 
   * - **0**: Software hardening.
   * - **1**: Firewall.
   * - **2**: Proactive defense.
   * 
   * @example
   * 0
   */
  policyType?: number;
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
   * The association key of the policy configuration, which is used to associate the policy with its process or switch configuration.
   * 
   * @example
   * a8d64565-ab8b-41a6-bd3d-14d0fc639285
   */
  selectionKey?: string;
  /**
   * @remarks
   * The list of main process names of the software for which integrity check is enabled. The elements correspond to the Process field returned by GetSwitchInfoListByType.
   */
  softWareOnList?: string[];
  /**
   * @remarks
   * The status of the policy. Valid values:
   * 
   * - **0**: Disabled.
   * - **1**: Enabled.
   * 
   * @example
   * 1
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
      createTime: 'CreateTime',
      description: 'Description',
      excludeUserNameList: 'ExcludeUserNameList',
      id: 'Id',
      inSwitch: 'InSwitch',
      includeGroupIdList: 'IncludeGroupIdList',
      mainButtonTextCh: 'MainButtonTextCh',
      mainButtonTextEn: 'MainButtonTextEn',
      matchMode: 'MatchMode',
      matchTargetIds: 'MatchTargetIds',
      minorButtonTextCh: 'MinorButtonTextCh',
      minorButtonTextEn: 'MinorButtonTextEn',
      name: 'Name',
      outSwitch: 'OutSwitch',
      policyType: 'PolicyType',
      portOnList: 'PortOnList',
      priority: 'Priority',
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
      createTime: 'number',
      description: 'string',
      excludeUserNameList: { 'type': 'array', 'itemType': 'string' },
      id: 'number',
      inSwitch: 'boolean',
      includeGroupIdList: { 'type': 'array', 'itemType': 'string' },
      mainButtonTextCh: 'string',
      mainButtonTextEn: 'string',
      matchMode: 'string',
      matchTargetIds: { 'type': 'array', 'itemType': 'string' },
      minorButtonTextCh: 'string',
      minorButtonTextEn: 'string',
      name: 'string',
      outSwitch: 'boolean',
      policyType: 'number',
      portOnList: { 'type': 'array', 'itemType': 'string' },
      priority: 'number',
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

export class ListClientRuleStrategyResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page for the paged query with paging.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries returned per page for the paged query with paging.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientRuleStrategyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of policies.
   */
  list?: ListClientRuleStrategyResponseBodyList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListClientRuleStrategyResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 45B2D3AF-0E5F-5D67-944C-2AD5E354B5C9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListClientRuleStrategyResponseBodyList },
      pageInfo: ListClientRuleStrategyResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

