// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProhibitedPolicyRequestSoftwareIds extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the blocked software is a built-in blocked software entry. Valid values:
   * - **true**: A built-in blocked software entry that is shared across all Alibaba Cloud accounts. Built-in entries cannot be modified or deleted.
   * - **false**: A custom blocked software entry under the current Alibaba Cloud account.
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
   * Specifies whether end users are allowed to submit a report request for this policy. Valid values:
   * 
   * - **true**: Reporting is allowed. The pop-up window on the endpoint provides a reporting entry.
   * - **false**: Reporting is not allowed.
   * 
   * @example
   * false
   */
  allowReport?: string;
  /**
   * @remarks
   * The description of the software ban policy. The description can be up to 128 characters in length and can be left empty.
   * 
   * @example
   * project name pass the check
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the policy is enabled. Valid values:
   * - **true**: Enabled. The policy is delivered to the endpoint and takes effect.
   * - **false**: Disabled. The policy configuration is retained but not delivered to the endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Specifies whether to forcefully terminate running software processes. Valid values:
   * 
   * @example
   * false
   */
  forceKill?: boolean;
  /**
   * @remarks
   * The Chinese text of the primary button in the pop-up window on the endpoint.
   * 
   * @example
   * Submit Filing
   */
  mainButtonTextCh?: string;
  /**
   * @remarks
   * The English text of the primary button in the pop-up window on the endpoint.
   * 
   * @example
   * Report
   */
  mainButtonTextEn?: string;
  /**
   * @remarks
   * The scope in which the policy takes effect. Valid values:
   * 
   * This parameter is required.
   * 
   * @example
   * UserGroupAll
   */
  matchMode?: string;
  /**
   * @remarks
   * The Chinese text of the secondary button in the pop-up window on the endpoint.
   * 
   * @example
   * Got It
   */
  minorButtonTextCh?: string;
  /**
   * @remarks
   * The English text of the secondary button in the pop-up window on the endpoint.
   * 
   * @example
   * I know
   */
  minorButtonTextEn?: string;
  /**
   * @remarks
   * Policy Name of the software ban policy. Policy Name must be 1 to 128 characters in length and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), and hyphens (-). Spaces are not supported.
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
   * 
   * - **Ban**: Blocks the software from running and displays a pop-up notification to the end user.
   * - **BanSilent**: Blocks the software from running without notifying the end user (silent blocking).
   * - **Warn**: Displays a pop-up notification to the end user without blocking the software from running.
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
   * The Chinese prompt content displayed in the pop-up window on the endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  promptCh?: string;
  /**
   * @remarks
   * The English prompt content displayed in the pop-up window on the endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * Auto test prohibition prompt
   */
  promptEn?: string;
  /**
   * @remarks
   * The collection of banned software directly controlled by this policy.
   */
  softwareIds?: CreateProhibitedPolicyRequestSoftwareIds[];
  /**
   * @remarks
   * The collection of banned software tag IDs controlled by this policy.
   */
  tagIds?: string[];
  /**
   * @remarks
   * The Chinese title of the pop-up window on the endpoint.
   * 
   * @example
   * Software Ban Reminder
   */
  titleCh?: string;
  /**
   * @remarks
   * The English title of the pop-up window on the endpoint.
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

