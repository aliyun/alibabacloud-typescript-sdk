// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProhibitedPolicyResponseBodyPolicySoftwareIds extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the prohibited software is a system built-in entry. Valid values:
   * - **true**: A system built-in prohibited software entry shared by all Alibaba Cloud accounts. Modification and deletion are not supported.
   * - **false**: A custom prohibited software entry under the current Alibaba Cloud account.
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The prohibited software ID.
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
   * Indicates whether end users are allowed to submit a filing request for this policy. Valid values:
   * - **true**: Filing is allowed. The terminal pop-up window provides a filing entry.
   * - **false**: Filing is not allowed.
   * 
   * @example
   * false
   */
  allowReport?: boolean;
  /**
   * @remarks
   * The creation time of the software prohibition policy, in the yyyy-MM-dd HH:mm:ss format using the UTC+8 time zone.
   * 
   * @example
   * 2021-07-29 11:26:02
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the software prohibition policy.
   * 
   * @example
   * completed
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the policy is enabled. Valid values:
   * - **true**: Enabled. The policy is delivered to terminals and takes effect.
   * - **false**: Disabled. The policy configuration is retained but not delivered to terminals.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Indicates whether to forcibly terminate running software processes. Valid values:
   * - **true**: The terminal immediately terminates the running processes of the software when the policy is triggered.
   * - **false**: Running processes are not terminated. Only subsequent launches are blocked.
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
   * The policy matching target type. Valid values:
   * - **UserGroupAll**: Associates with all users.
   * - **UserGroupNormal**: Associates with specific user groups.
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
   * The name of the software prohibition policy.
   * 
   * @example
   * PolicyC
   */
  name?: string;
  /**
   * @remarks
   * The object type of the controlled target. Valid values:
   * - **App**: Controls by prohibited software. The controlled objects are specified by SoftwareIds.
   * - **Tag**: Controls by prohibited software labels. The controlled objects are specified by TagIds. All prohibited software under the labels is controlled.
   * 
   * @example
   * App
   */
  objectType?: string;
  /**
   * @remarks
   * The software prohibition policy ID.
   * 
   * @example
   * pid-36ee4a5869f3****
   */
  policyId?: string;
  /**
   * @remarks
   * The action type. Valid values:
   * - **Ban**: Blocks the software from running and displays a pop-up notification to the end user.
   * - **BanSilent**: Blocks the software from running without notifying the end user (silent blocking).
   * - **Warn**: Displays a pop-up notification to the end user without blocking the software from running.
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
   * The Chinese prompt content displayed in the terminal pop-up window.
   * 
   * @example
   * This software has been blocked by the enterprise security policy. To use it, submit an approval request
   */
  promptCh?: string;
  /**
   * @remarks
   * The English prompt content displayed in the terminal pop-up window.
   * 
   * @example
   * This software is blocked by your enterprise security policy.
   */
  promptEn?: string;
  /**
   * @remarks
   * The approval process ID bound to this policy. An empty string is returned if no approval process is bound. In this case, filing requests submitted by end users are approved by the IT administrator as a fallback. Approval processes are bound by using [AttachPolicy2ApprovalProcess](~~AttachPolicy2ApprovalProcess~~) and unbound by using [DetachPolicy2ApprovalProcess](~~DetachPolicy2ApprovalProcess~~). You can obtain this value from the following operation:
   * - [ListApprovalProcesses](~~ListApprovalProcesses~~): Lists approval processes.
   * 
   * @example
   * approval-process-6c2f8a1b7d3e****
   */
  reportProcessId?: string;
  /**
   * @remarks
   * The collection of prohibited software directly controlled by this policy.
   */
  softwareIds?: GetProhibitedPolicyResponseBodyPolicySoftwareIds[];
  /**
   * @remarks
   * The collection of prohibited software label IDs controlled by this policy.
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
   * The collection of user group IDs to which this policy applies.
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
   * The details of the software prohibition policy.
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

