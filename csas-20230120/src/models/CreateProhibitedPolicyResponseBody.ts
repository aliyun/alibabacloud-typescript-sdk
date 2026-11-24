// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProhibitedPolicyResponseBodyPolicySoftwareIds extends $dara.Model {
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

export class CreateProhibitedPolicyResponseBodyPolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow terminal users to submit an exception request for the policy. Valid values:
   * - **true**: Exception requests are allowed. The terminal pop-up window provides an entry for the request.
   * - **false**: Exception requests are not allowed.
   * 
   * @example
   * false
   */
  allowReport?: boolean;
  /**
   * @remarks
   * The time when the software blocking policy was created. The time is in the yyyy-MM-dd HH:mm:ss format and displayed in the UTC+8 time zone.
   * 
   * @example
   * 2021-07-29 11:26:02
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the software blocking policy.
   * 
   * @example
   * OK
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the policy is enabled. Valid values:
   * - **true**: The policy is enabled, delivered to terminals, and takes effect.
   * - **false**: The policy is disabled. The configuration is retained but not delivered to terminals.
   * 
   * @example
   * false
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
   * @example
   * UserGroupNormal
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
   * The Policy Name of the software disable policy.
   * 
   * @example
   * autotest_846acf98
   */
  name?: string;
  /**
   * @remarks
   * The object type of the managed object. Valid values:
   * - **App**: Manages disable software. The managed objects are specified by SoftwareIds.
   * - **Tag**: Manages disable software by label. The managed objects are specified by TagIds, and all disable software under the labels is managed.
   * 
   * @example
   * App
   */
  objectType?: string;
  /**
   * @remarks
   * The ID of the software blocking policy.
   * 
   * @example
   * pid-dcbfd33cb004****
   */
  policyId?: string;
  /**
   * @remarks
   * The action to take. Valid values:
   * - **Ban**: blocks the software from running and displays a pop-up window on the terminal to notify the user.
   * - **BanSilent**: blocks the software from running without notifying the user.
   * - **Warn**: displays a pop-up window on the terminal to notify the user without blocking the software from running.
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
   * test
   */
  promptCh?: string;
  /**
   * @remarks
   * The English prompt content in the terminal pop-up window.
   * 
   * @example
   * L0 auto test prompt
   */
  promptEn?: string;
  /**
   * @remarks
   * The collection of prohibited software directly managed by the policy.
   */
  softwareIds?: CreateProhibitedPolicyResponseBodyPolicySoftwareIds[];
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
   * The IDs of the user groups to which the policy applies.
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
      softwareIds: { 'type': 'array', 'itemType': CreateProhibitedPolicyResponseBodyPolicySoftwareIds },
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

export class CreateProhibitedPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the software blocking policy.
   */
  policy?: CreateProhibitedPolicyResponseBodyPolicy;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 215060E3-03D2-548D-A014-17941EA3B6C8
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
      policy: CreateProhibitedPolicyResponseBodyPolicy,
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

