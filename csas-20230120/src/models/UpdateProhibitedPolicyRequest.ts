// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProhibitedPolicyRequestSoftwareIds extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the prohibited software is built-in. Valid values:
   * - **true**: The software is built-in, shared by all Alibaba Cloud accounts, and cannot be modified or deleted.
   * - **false**: The software is custom prohibited software under the current Alibaba Cloud account.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The ID of the prohibited software. You can obtain the value from the following operations:
   * - [ListProhibitedSoftware](~~ListProhibitedSoftware~~): queries prohibited software in batches.
   * - [CreateProhibitedSoftware](~~CreateProhibitedSoftware~~): creates custom prohibited software.
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
   * Specifies whether to allow endpoint users to submit exemption requests for the policy. Valid values:
   * - **true**: Exemption requests are allowed. The endpoint pop-up window provides an entry for submitting requests.
   * - **false**: Exemption requests are not allowed.
   * 
   * @example
   * false
   */
  allowReport?: string;
  /**
   * @remarks
   * The description of the software prohibition policy. The description can contain Chinese characters, uppercase and lowercase letters, digits, spaces, periods (.), underscores (_), and hyphens (-). It can be up to 128 characters in length and can be empty.
   * 
   * @example
   * No description
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the policy is enabled. Valid values:
   * - **true**: The policy is enabled and delivered to endpoints to take effect.
   * - **false**: The policy is disabled. The configuration is retained but not delivered to endpoints.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Specifies whether to forcibly terminate running software processes. Valid values:
   * - **true**: The endpoint immediately terminates the running processes of the software when the policy is matched.
   * - **false**: Running processes are not terminated. Only subsequent startups are blocked.
   * 
   * @example
   * false
   */
  forceKill?: boolean;
  /**
   * @remarks
   * The Chinese text of the primary button in the endpoint pop-up window.
   * 
   * @example
   * Submit request
   */
  mainButtonTextCh?: string;
  /**
   * @remarks
   * The English text of the primary button in the endpoint pop-up window.
   * 
   * @example
   * Report
   */
  mainButtonTextEn?: string;
  /**
   * @remarks
   * The effective scope. Valid values:
   * - **UserGroupAll**: applies to all users under the current Alibaba Cloud account. You do not need to specify user groups.
   * - **UserGroupNormal**: applies only to users in the user groups specified by UserGroupIds.
   * 
   * @example
   * UserGroupNormal
   */
  matchMode?: string;
  /**
   * @remarks
   * The Chinese text of the secondary button in the endpoint pop-up window.
   * 
   * @example
   * Got it
   */
  minorButtonTextCh?: string;
  /**
   * @remarks
   * The English text of the secondary button in the endpoint pop-up window.
   * 
   * @example
   * I know
   */
  minorButtonTextEn?: string;
  /**
   * @remarks
   * Policy Name of the software prohibition policy. Policy Name must be 1 to 128 characters in length, and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), and hyphens (-). Spaces are not supported.
   * 
   * @example
   * Prohibition policy
   */
  name?: string;
  /**
   * @remarks
   * The object type. Valid values:
   * - **App**: manages prohibited software. The managed objects are specified by SoftwareIds.
   * - **Tag**: manages prohibited software tags. The managed objects are specified by TagIds. All prohibited software under the tags are managed.
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
   * - **Ban**: blocks the software from running and displays a pop-up window on the endpoint to notify the user.
   * - **BanSilent**: blocks the software from running without notifying the user.
   * - **Warn**: displays a pop-up window on the endpoint to notify the user without blocking the software from running.
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
   * The Chinese prompt content in the endpoint pop-up window.
   * 
   * @example
   * test
   */
  promptCh?: string;
  /**
   * @remarks
   * The English prompt content in the endpoint pop-up window.
   * 
   * @example
   * test
   */
  promptEn?: string;
  /**
   * @remarks
   * The collection of prohibited software directly managed by the policy.
   */
  softwareIds?: UpdateProhibitedPolicyRequestSoftwareIds[];
  /**
   * @remarks
   * The collection of prohibited software tag IDs managed by the policy.
   */
  tagIds?: string[];
  /**
   * @remarks
   * The Chinese title of the endpoint pop-up window.
   * 
   * @example
   * Software prohibition reminder
   */
  titleCh?: string;
  /**
   * @remarks
   * The English title of the endpoint pop-up window.
   * 
   * @example
   * Software Blocked
   */
  titleEn?: string;
  /**
   * @remarks
   * The collection of user group IDs to which the policy applies. Duplicates are not allowed.
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The list of exempted usernames. Duplicates are not allowed.
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

