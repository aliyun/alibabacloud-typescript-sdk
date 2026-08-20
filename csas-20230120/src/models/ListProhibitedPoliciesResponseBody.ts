// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProhibitedPoliciesResponseBodyPoliciesSoftwareIds extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the prohibited software is a system built-in entry. Valid values:
   * - **true**: A system built-in prohibited software entry shared by all Alibaba Cloud accounts. Modification and deletion are not supported.
   * - **false**: Custom prohibited software under the current Alibaba Cloud account.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The prohibited software ID.
   * 
   * @example
   * swb-9a0bfde19662****
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

export class ListProhibitedPoliciesResponseBodyPolicies extends $dara.Model {
  /**
   * @remarks
   * Indicates whether endpoint users are allowed to submit a filing request for this policy. Valid values:
   * - **true**: Filing is allowed. The endpoint pop-up notification provides a filing entry.
   * - **false**: Filing is not allowed.
   * 
   * @example
   * false
   */
  allowReport?: boolean;
  /**
   * @remarks
   * The creation time of the software prohibition policy, in the format of yyyy-MM-dd HH:mm:ss, using the UTC+8 time zone.
   * 
   * @example
   * 2023-05-16 17:18:46
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the software prohibition policy.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the policy is enabled. Valid values:
   * - **true**: Enabled. The policy is delivered to endpoints and takes effect.
   * - **false**: Disabled. The policy configuration is retained but not delivered to endpoints.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Specifies whether to forcibly terminate running software processes. Valid values:
   * - **true**: The endpoint immediately terminates the running processes of the software when the policy is matched.
   * - **false**: Running processes are not terminated. Only subsequent launches are blocked.
   * 
   * @example
   * false
   */
  forceKill?: boolean;
  /**
   * @remarks
   * The Chinese text of the primary button in the endpoint pop-up notification.
   * 
   * @example
   * 去报备
   */
  mainButtonTextCh?: string;
  /**
   * @remarks
   * The English text of the primary button in the endpoint pop-up notification.
   * 
   * @example
   * Report
   */
  mainButtonTextEn?: string;
  /**
   * @remarks
   * The policy matching target type. Valid values:
   * - **UserGroupAll**: Associated with all users.
   * - **UserGroupNormal**: Associated with specific user groups.
   * 
   * @example
   * UserGroupNormal
   */
  matchMode?: string;
  /**
   * @remarks
   * The Chinese text of the secondary button in the endpoint pop-up notification.
   * 
   * @example
   * 我知道了
   */
  minorButtonTextCh?: string;
  /**
   * @remarks
   * The English text of the secondary button in the endpoint pop-up notification.
   * 
   * @example
   * Got it
   */
  minorButtonTextEn?: string;
  /**
   * @remarks
   * The name of the software prohibition policy.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The object type of the controlled target. Valid values:
   * - **App**: Controls by prohibited software. The controlled objects are specified by SoftwareIds.
   * - **Tag**: Controls by prohibited software tag. The controlled objects are specified by TagIds. All prohibited software under the tag is controlled.
   * 
   * @example
   * App
   */
  objectType?: string;
  /**
   * @remarks
   * The ID of the software prohibition policy.
   * 
   * @example
   * pid-42f19f1b6a3e****
   */
  policyId?: string;
  /**
   * @remarks
   * The action to take. Valid values:
   * - **Ban**: Blocks the software from running and displays a pop-up notification on the endpoint to alert the user.
   * - **BanSilent**: Blocks the software from running without notifying the user. The blocking is silent.
   * - **Warn**: Only displays a pop-up notification on the endpoint to alert the user without blocking the software from running.
   * 
   * @example
   * Warn
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
   * The Chinese prompt content displayed in the endpoint pop-up notification.
   * 
   * @example
   * This software has been blocked by the enterprise security policy. To use it, submit an approval request
   */
  promptCh?: string;
  /**
   * @remarks
   * The English prompt content displayed in the endpoint pop-up notification.
   * 
   * @example
   * This software is blocked by your enterprise security policy.
   */
  promptEn?: string;
  /**
   * @remarks
   * The collection of prohibited software directly controlled by this policy.
   */
  softwareIds?: ListProhibitedPoliciesResponseBodyPoliciesSoftwareIds[];
  /**
   * @remarks
   * The collection of prohibited software tag IDs controlled by this policy.
   */
  tagIds?: string[];
  /**
   * @remarks
   * The Chinese title of the endpoint pop-up notification.
   * 
   * @example
   * 软件禁用提醒
   */
  titleCh?: string;
  /**
   * @remarks
   * The English title of the endpoint pop-up notification.
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
      softwareIds: { 'type': 'array', 'itemType': ListProhibitedPoliciesResponseBodyPoliciesSoftwareIds },
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

export class ListProhibitedPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of software prohibition policies, sorted by priority from highest to lowest.
   */
  policies?: ListProhibitedPoliciesResponseBodyPolicies[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 03362EE0-C6F7-51ED-91FF-0BFFA5A2AB67
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of software prohibition policies.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      policies: 'Policies',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policies: { 'type': 'array', 'itemType': ListProhibitedPoliciesResponseBodyPolicies },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.policies)) {
      $dara.Model.validateArray(this.policies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

