// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProhibitedPolicyRequestSoftwareIds extends $dara.Model {
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
   * The ID of the prohibited software. You can obtain the value from the following sources:
   * - [ListProhibitedSoftware](~~ListProhibitedSoftware~~): queries prohibited software in batches.
   * - [CreateProhibitedSoftware](~~CreateProhibitedSoftware~~): creates custom prohibited software.
   * 
   * @example
   * swb-df1fa76d889b****
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

export class CreateProhibitedPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow terminal users to submit an exception request for the policy. Valid values:
   * - **true**: Exception requests are allowed. The terminal pop-up window provides an entry for the request.
   * - **false**: Exception requests are not allowed.
   * 
   * @example
   * false
   */
  allowReport?: string;
  /**
   * @remarks
   * The description of the prohibited software policy. The description can be up to 128 characters in length and can be empty.
   * 
   * @example
   * project name pass the check
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the policy is enabled. Valid values:
   * - **true**: The policy is enabled, delivered to terminals, and takes effect.
   * - **false**: The policy is disabled. The configuration is retained but not delivered to terminals.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Specifies whether to forcibly terminate running processes of the software. Valid values:
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
   * Apply for exemption
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
   * The effective scope. Valid values:
   * - **UserGroupAll**: The policy takes effect for all users under the current Alibaba Cloud account. You do not need to specify user groups.
   * - **UserGroupNormal**: The policy takes effect only for users in the user groups specified by UserGroupIds.
   * 
   * This parameter is required.
   * 
   * @example
   * UserGroupAll
   */
  matchMode?: string;
  /**
   * @remarks
   * The Chinese text of the secondary button in the terminal pop-up window.
   * 
   * @example
   * Got it
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
   * Policy Name of the prohibited software policy. Policy Name must be 1 to 128 characters in length and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), and hyphens (-). Spaces are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * autotest_a0344d22
   */
  name?: string;
  /**
   * @remarks
   * The object type. Valid values:
   * - **App**: controls disable software. The managed objects are specified by SoftwareIds.
   * - **Tag**: controls disable software labels. The managed objects are specified by TagIds. All disable software within the labels is managed.
   * 
   * This parameter is required.
   * 
   * @example
   * App
   */
  objectType?: string;
  /**
   * @remarks
   * The action to take. Valid values:
   * - **Ban**: blocks the software from running and displays a pop-up window on the terminal to notify the user.
   * - **BanSilent**: blocks the software from running without notifying the user.
   * - **Warn**: displays a pop-up window on the terminal to notify the user without blocking the software from running.
   * 
   * This parameter is required.
   * 
   * @example
   * Warn
   */
  policyType?: string;
  /**
   * @remarks
   * The policy priority. Valid values: 0 to 99. A smaller value indicates a higher priority.
   * 
   * This parameter is required.
   * 
   * @example
   * 99
   */
  priority?: number;
  /**
   * @remarks
   * The Chinese prompt content in the terminal pop-up window.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  promptCh?: string;
  /**
   * @remarks
   * The English prompt content in the terminal pop-up window.
   * 
   * This parameter is required.
   * 
   * @example
   * Auto test prohibition prompt
   */
  promptEn?: string;
  /**
   * @remarks
   * The collection of prohibited software directly managed by the policy.
   */
  softwareIds?: CreateProhibitedPolicyRequestSoftwareIds[];
  /**
   * @remarks
   * The collection of prohibited software tag IDs managed by the policy.
   */
  tagIds?: string[];
  /**
   * @remarks
   * The Chinese title of the terminal pop-up window.
   * 
   * @example
   * Prohibited software reminder
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
      policyType: 'string',
      priority: 'number',
      promptCh: 'string',
      promptEn: 'string',
      softwareIds: { 'type': 'array', 'itemType': CreateProhibitedPolicyRequestSoftwareIds },
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

