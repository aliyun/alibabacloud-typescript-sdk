// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProhibitedPolicyRequestSoftwareIds extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the prohibited software is a system built-in entry. Valid values:
   * - **true**: A system built-in prohibited software entry shared across all Alibaba Cloud accounts. It cannot be modified or deleted.
   * - **false**: A custom prohibited software entry under the current Alibaba Cloud account.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The ID of the prohibited software. You can obtain the value from the following operations:
   * - [ListProhibitedSoftware](~~ListProhibitedSoftware~~): Lists prohibited software.
   * - [CreateProhibitedSoftware](~~CreateProhibitedSoftware~~): Creates custom prohibited software.
   * 
   * @example
   * swb-23d749361c41****
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

export class UpdateProhibitedPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether endpoint users are allowed to submit a filing request for this policy. Valid values:
   * - **true**: Filing is allowed. A filing entry is provided in the pop-up notification on the endpoint.
   * - **false**: Filing is not allowed.
   * 
   * @example
   * false
   */
  allowReport?: string;
  /**
   * @remarks
   * The description of the software prohibition policy. The description can contain Chinese characters, uppercase and lowercase letters, digits, spaces, periods (.), underscores (_), and hyphens (-). The description can be up to 128 characters in length and can be left empty.
   * 
   * @example
   * No description
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
   * Policy Name of the software prohibition policy. Policy Name must be 1 to 128 characters in length and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), and hyphens (-). Spaces are not supported.
   * 
   * @example
   * ProhibitionPolicy
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
   * This parameter is required.
   * 
   * @example
   * pid-6a9f6adbee0a****
   */
  policyId?: string;
  /**
   * @remarks
   * The action to take. If this parameter is not specified, the original value is retained. Valid values:
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
   * 99
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
   * test
   */
  promptEn?: string;
  /**
   * @remarks
   * The collection of prohibited software directly controlled by this policy.
   */
  softwareIds?: UpdateProhibitedPolicyRequestSoftwareIds[];
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
   * The collection of user group IDs for which the policy takes effect. Duplicate values are not allowed.
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The list of exempted usernames. Duplicate values are not allowed.
   */
  whitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      allowReport: 'AllowReport',
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
      allowReport: 'string',
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
      softwareIds: { 'type': 'array', 'itemType': UpdateProhibitedPolicyRequestSoftwareIds },
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

