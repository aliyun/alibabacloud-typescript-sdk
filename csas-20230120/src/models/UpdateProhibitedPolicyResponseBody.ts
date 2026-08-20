// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProhibitedPolicyResponseBodyPolicySoftwareIds extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the prohibited software is a system built-in entry. Valid values:
   * - **true**: A system built-in prohibited software entry shared across all Alibaba Cloud accounts. It cannot be modified or deleted.
   * - **false**: A custom prohibited software entry under the current Alibaba Cloud account.
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
   * swb-f024ee962344****
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

export class UpdateProhibitedPolicyResponseBodyPolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether endpoint users are allowed to submit a filing request for this policy. Valid values:
   * - **true**: Filing is allowed. A filing entry is provided in the pop-up notification on the endpoint.
   * - **false**: Filing is not allowed.
   * 
   * @example
   * true
   */
  allowReport?: boolean;
  /**
   * @remarks
   * The time when the software prohibition policy was created, in the yyyy-MM-dd HH:mm:ss format. The time is in the UTC+8 time zone.
   * 
   * @example
   * 2026-08-19 10:24:31
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the software prohibition policy.
   * 
   * @example
   * OK
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
   * - **true**: The endpoint immediately terminates the running processes of the software when the policy is triggered.
   * - **false**: Running processes are not terminated. Only subsequent launches are blocked.
   * 
   * @example
   * false
   */
  forceKill?: boolean;
  /**
   * @remarks
   * The Chinese text of the primary button in the pop-up notification on the endpoint.
   * 
   * @example
   * Submit Filing
   */
  mainButtonTextCh?: string;
  /**
   * @remarks
   * The English text of the primary button in the pop-up notification on the endpoint.
   * 
   * @example
   * Report
   */
  mainButtonTextEn?: string;
  /**
   * @remarks
   * The scope in which the policy takes effect. Valid values:
   * - **UserGroupAll**: Takes effect for all users under the current Alibaba Cloud account. No user group needs to be specified.
   * - **UserGroupNormal**: Takes effect only for users in the user groups specified by UserGroupIds.
   * 
   * @example
   * UserGroupNormal
   */
  matchMode?: string;
  /**
   * @remarks
   * The Chinese text of the secondary button in the pop-up notification on the endpoint.
   * 
   * @example
   * Got It
   */
  minorButtonTextCh?: string;
  /**
   * @remarks
   * The English text of the secondary button in the pop-up notification on the endpoint.
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
   * autotest_c51af82d
   */
  name?: string;
  /**
   * @remarks
   * The object type. Valid values:
   * - **App**: Controls by prohibited software. The controlled objects are specified by SoftwareIds.
   * - **Tag**: Controls by prohibited software tag. The controlled objects are specified by TagIds. All prohibited software under the specified tags is controlled.
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
   * pid-ef8eb37cff62****
   */
  policyId?: string;
  /**
   * @remarks
   * The action to take. Valid values:
   * - **Ban**: Blocks the software from running and displays a pop-up notification on the endpoint to alert the user.
   * - **BanSilent**: Blocks the software from running without notifying the user (silent blocking).
   * - **Warn**: Displays a pop-up notification on the endpoint to alert the user without blocking the software from running.
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
   * The Chinese prompt content displayed in the pop-up notification on the endpoint.
   * 
   * @example
   * test
   */
  promptCh?: string;
  /**
   * @remarks
   * The English prompt content displayed in the pop-up notification on the endpoint.
   * 
   * @example
   * After analysis and monitoring, the software has been disabled as a security risk.
   */
  promptEn?: string;
  /**
   * @remarks
   * The collection of prohibited software directly controlled by this policy.
   */
  softwareIds?: UpdateProhibitedPolicyResponseBodyPolicySoftwareIds[];
  /**
   * @remarks
   * The collection of prohibited software tag IDs controlled by this policy.
   */
  tagIds?: string[];
  /**
   * @remarks
   * The Chinese title of the pop-up notification on the endpoint.
   * 
   * @example
   * Software Prohibition Reminder
   */
  titleCh?: string;
  /**
   * @remarks
   * The English title of the pop-up notification on the endpoint.
   * 
   * @example
   * Software Blocked
   */
  titleEn?: string;
  /**
   * @remarks
   * The collection of user group IDs for which the policy takes effect.
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
      softwareIds: { 'type': 'array', 'itemType': UpdateProhibitedPolicyResponseBodyPolicySoftwareIds },
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

export class UpdateProhibitedPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the software prohibition policy.
   */
  policy?: UpdateProhibitedPolicyResponseBodyPolicy;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C4F48DD4-B70D-5342-80B9-2BF5498262FF
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
      policy: UpdateProhibitedPolicyResponseBodyPolicy,
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

