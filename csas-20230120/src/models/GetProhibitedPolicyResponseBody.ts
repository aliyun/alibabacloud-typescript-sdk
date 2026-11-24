// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProhibitedPolicyResponseBodyPolicySoftwareIds extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the prohibited software is a built-in prohibited software. Valid values:
   * - **true**: The software is a built-in prohibited software that is shared by all Alibaba Cloud accounts and cannot be modified or deleted.
   * - **false**: The software is a custom prohibited software under the current Alibaba Cloud account.
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The ID of the prohibited software.
   * 
   * @example
   * swb-050216aafaae****
   */
  softwareId?: string;
  static names(): { [key: string]: string } {
    return {
      isDefault: 'IsDefault',
      softwareId: 'SoftwareId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDefault: 'boolean',
      softwareId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProhibitedPolicyResponseBodyPolicy extends $dara.Model {
  /**
   * @remarks
   * Indicates whether terminal users are allowed to submit applications for this policy. Valid values:
   * - **true**: Applications are allowed. The terminal pop-up window provides an entry for submitting applications.
   * - **false**: Applications are not allowed.
   * 
   * @example
   * false
   */
  allowReport?: boolean;
  /**
   * @remarks
   * The time when the prohibited software policy was created. The time is displayed in the yyyy-MM-dd HH:mm:ss format and uses the UTC+8 time zone.
   * 
   * @example
   * 2021-07-29 11:26:02
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the prohibited software policy.
   * 
   * @example
   * completed
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the policy is enabled. Valid values:
   * - **true**: The policy is enabled, delivered to terminals, and takes effect.
   * - **false**: The policy is disabled. The configuration is retained but not delivered to terminals.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Indicates whether to forcibly terminate running software processes. Valid values:
   * - **true**: The terminal immediately terminates the running processes of the software when the policy is matched.
   * - **false**: The terminal does not terminate running processes but only prevents subsequent startups.
   * 
   * @example
   * false
   */
  forceKill?: boolean;
  /**
   * @remarks
   * The Chinese text of the primary button in the terminal pop-up window.
   * 
   * @example
   * 前往报备
   */
  mainButtonTextCh?: string;
  /**
   * @remarks
   * The English text of the primary button in the terminal pop-up window.
   * 
   * @example
   * Report
   */
  mainButtonTextEn?: string;
  /**
   * @remarks
   * The target matching mode of the policy. Valid values:
   * - **UserGroupAll**: Applies to all users.
   * - **UserGroupNormal**: Applies to specific user groups.
   * 
   * @example
   * UserGroupNormal
   */
  matchMode?: string;
  /**
   * @remarks
   * The Chinese text of the secondary button in the terminal pop-up window.
   * 
   * @example
   * 我知道了
   */
  minorButtonTextCh?: string;
  /**
   * @remarks
   * The English text of the secondary button in the terminal pop-up window.
   * 
   * @example
   * I know
   */
  minorButtonTextEn?: string;
  /**
   * @remarks
   * The name of the prohibited software policy.
   * 
   * @example
   * PolicyC
   */
  name?: string;
  /**
   * @remarks
   * The managed object type. Valid values:
   * - **App**: Managed by prohibited software. The managed objects are specified by SoftwareIds.
   * - **Tag**: Managed by prohibited software tag. The managed objects are specified by TagIds, and all prohibited software under the tag is managed.
   * 
   * @example
   * App
   */
  objectType?: string;
  /**
   * @remarks
   * The ID of the prohibited software policy.
   * 
   * @example
   * pid-36ee4a5869f3****
   */
  policyId?: string;
  /**
   * @remarks
   * The enforcement action. Valid values:
   * - **Ban**: Blocks the software from running and displays a pop-up window to notify the terminal user.
   * - **BanSilent**: Blocks the software from running silently without notifying the terminal user.
   * - **Warn**: Displays a pop-up window to notify the terminal user without blocking the software from running.
   * 
   * @example
   * Ban
   */
  policyType?: string;
  /**
   * @remarks
   * The policy priority. Valid values: 0 to 99. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The Chinese prompt content in the terminal pop-up window.
   * 
   * @example
   * 该软件已被企业安全策略禁止运行，如需使用请提交报备申请
   */
  promptCh?: string;
  /**
   * @remarks
   * The English prompt content in the terminal pop-up window.
   * 
   * @example
   * This software is blocked by your enterprise security policy.
   */
  promptEn?: string;
  /**
   * @remarks
   * The ID of the approval process bound to the policy. If no approval process is bound, an empty string is returned, and applications submitted by terminal users are approved by the IT administrator. You can bind an approval process by calling [AttachPolicy2ApprovalProcess](~~AttachPolicy2ApprovalProcess~~) and unbind it by calling [DetachPolicy2ApprovalProcess](~~DetachPolicy2ApprovalProcess~~). You can obtain the value from the following operations:
   * - [ListApprovalProcesses](~~ListApprovalProcesses~~): Lists approval processes.
   * 
   * @example
   * approval-process-6c2f8a1b7d3e****
   */
  reportProcessId?: string;
  /**
   * @remarks
   * The list of prohibited software directly managed by the policy.
   */
  softwareIds?: GetProhibitedPolicyResponseBodyPolicySoftwareIds[];
  /**
   * @remarks
   * The list of prohibited software tag IDs managed by the policy.
   */
  tagIds?: string[];
  /**
   * @remarks
   * The Chinese title of the terminal pop-up window.
   * 
   * @example
   * 软件禁用提醒
   */
  titleCh?: string;
  /**
   * @remarks
   * The English title of the terminal pop-up window.
   * 
   * @example
   * Software Blocked
   */
  titleEn?: string;
  /**
   * @remarks
   * The list of user group IDs to which the policy applies.
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The list of exempted usernames.
   */
  whitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      allowReport: 'AllowReport',
      createTime: 'CreateTime',
      description: 'Description',
      enabled: 'Enabled',
      forceKill: 'ForceKill',
      mainButtonTextCh: 'MainButtonTextCh',
      mainButtonTextEn: 'MainButtonTextEn',
      matchMode: 'MatchMode',
      minorButtonTextCh: 'MinorButtonTextCh',
      minorButtonTextEn: 'MinorButtonTextEn',
      name: 'Name',
      objectType: 'ObjectType',
      policyId: 'PolicyId',
      policyType: 'PolicyType',
      priority: 'Priority',
      promptCh: 'PromptCh',
      promptEn: 'PromptEn',
      reportProcessId: 'ReportProcessId',
      softwareIds: 'SoftwareIds',
      tagIds: 'TagIds',
      titleCh: 'TitleCh',
      titleEn: 'TitleEn',
      userGroupIds: 'UserGroupIds',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowReport: 'boolean',
      createTime: 'string',
      description: 'string',
      enabled: 'boolean',
      forceKill: 'boolean',
      mainButtonTextCh: 'string',
      mainButtonTextEn: 'string',
      matchMode: 'string',
      minorButtonTextCh: 'string',
      minorButtonTextEn: 'string',
      name: 'string',
      objectType: 'string',
      policyId: 'string',
      policyType: 'string',
      priority: 'number',
      promptCh: 'string',
      promptEn: 'string',
      reportProcessId: 'string',
      softwareIds: { 'type': 'array', 'itemType': GetProhibitedPolicyResponseBodyPolicySoftwareIds },
      tagIds: { 'type': 'array', 'itemType': 'string' },
      titleCh: 'string',
      titleEn: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      whitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.softwareIds)) {
      $dara.Model.validateArray(this.softwareIds);
    }
    if(Array.isArray(this.tagIds)) {
      $dara.Model.validateArray(this.tagIds);
    }
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    if(Array.isArray(this.whitelist)) {
      $dara.Model.validateArray(this.whitelist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProhibitedPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the prohibited software policy.
   */
  policy?: GetProhibitedPolicyResponseBodyPolicy;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E966413B-7538-5332-99B4-C3DA016B9453
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: GetProhibitedPolicyResponseBodyPolicy,
      requestId: 'string',
    };
  }

  validate() {
    if(this.policy && typeof (this.policy as any).validate === 'function') {
      (this.policy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

