// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProhibitedPolicyResponseBodyPolicySoftwareIds extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the prohibited software is built-in. Valid values:
   * - **true**: The software is built-in, shared by all Alibaba Cloud accounts, and cannot be modified or deleted.
   * - **false**: The software is custom prohibited software under the current Alibaba Cloud account.
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
   * Specifies whether to allow endpoint users to submit exemption requests for the policy. Valid values:
   * - **true**: Exemption requests are allowed. The endpoint pop-up window provides an entry for submitting requests.
   * - **false**: Exemption requests are not allowed.
   * 
   * @example
   * true
   */
  allowReport?: boolean;
  /**
   * @remarks
   * The time when the software prohibition policy was created. The time is in the yyyy-MM-dd HH:mm:ss format and uses the UTC+8 time zone.
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
   * The policy name of the software prohibition policy.
   * 
   * @example
   * autotest_c51af82d
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
   * @example
   * pid-ef8eb37cff62****
   */
  policyId?: string;
  /**
   * @remarks
   * The action to take. Valid values:
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
   * 1
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
   * After analysis and monitoring, the software has been disabled as a security risk.
   */
  promptEn?: string;
  /**
   * @remarks
   * The collection of prohibited software directly managed by the policy.
   */
  softwareIds?: UpdateProhibitedPolicyResponseBodyPolicySoftwareIds[];
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
   * The collection of user group IDs to which the policy applies.
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

