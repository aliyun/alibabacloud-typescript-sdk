// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProhibitedPolicyResponseBodyPolicySoftwareIds extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the banned software is a system built-in banned software. Valid values:
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
   * Specifies whether end users are allowed to submit a report request for this policy. Valid values:
   * - **true**: Reporting is allowed. The pop-up window on the endpoint provides a reporting entry.
   * - **false**: Reporting is not allowed.
   * 
   * @example
   * false
   */
  allowReport?: boolean;
  /**
   * @remarks
   * The time when the software prohibition policy was created, in the yyyy-MM-dd HH:mm:ss format. The time is displayed in UTC+8.
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
   * OK
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the policy is enabled. Valid values:
   * 
   * - **true**: Enabled. The policy is delivered to the endpoint and takes effect.
   * - **false**: Disabled. The policy retains its configuration but is not delivered to the endpoint.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * Specifies whether to forcibly terminate running software processes. Valid values:
   * - **true**: The terminal immediately terminates the running process of the software when the policy is hit.
   * - **false**: Running processes are not terminated. Only subsequent launches are blocked.
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
   * The scope of the policy. Valid values:
   * 
   * - **UserGroupAll**: The policy takes effect for all users under the current Alibaba Cloud account. You do not need to specify user groups.
   * - **UserGroupNormal**: The policy takes effect only for users in the user groups specified by UserGroupIds.
   * 
   * @example
   * UserGroupNormal
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
   * The Policy Name of the software disable policy.
   * 
   * @example
   * autotest_846acf98
   */
  name?: string;
  /**
   * @remarks
   * The object type of the controlled target. Valid values:
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
   * pid-dcbfd33cb004****
   */
  policyId?: string;
  /**
   * @remarks
   * The action to take. Valid values:
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
   * The Chinese prompt content displayed in the pop-up window on the endpoint.
   * 
   * @example
   * test
   */
  promptCh?: string;
  /**
   * @remarks
   * The English prompt content displayed in the pop-up window on the endpoint.
   * 
   * @example
   * L0 auto test prompt
   */
  promptEn?: string;
  /**
   * @remarks
   * The collection of banned software directly controlled by this policy.
   */
  softwareIds?: CreateProhibitedPolicyResponseBodyPolicySoftwareIds[];
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
   * The details of the software prohibition policy.
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

