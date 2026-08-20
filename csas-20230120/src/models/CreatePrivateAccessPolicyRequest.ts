// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePrivateAccessPolicyRequestCustomUserAttributes extends $dara.Model {
  /**
   * @remarks
   * The ID of the identity source for the custom user group. Required when the custom user group type is **department**.
   * 
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @remarks
   * Relation of the custom user group. Values:
   * - **Equal**: Equal.
   * - **Unequal**: Not equal.
   * 
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @remarks
   * Type of the custom user group. Values:
   * - **username**: Username.
   * - **department**: Department.
   * - **email**: Email.
   * - **telephone**: Telephone.
   * 
   * @example
   * department
   */
  userGroupType?: string;
  /**
   * @remarks
   * Value of the custom user group attribute.
   * - When the user group type is **username**, it represents the value of the username. The length is 1 to 128 characters, supporting Chinese and uppercase and lowercase English letters, and can include numbers, periods (.), underscores (_), hyphens (-), asterisks (*), at (@) symbols, and spaces.
   * - When the user group type is **department**, it represents the value of the department. For example: OU=Department1,OU=SASE DingTalk.
   * - When the user group type is **email**, it represents the value of the email. For example: username@example.com.
   * - When the user group type is **telephone**, it represents the value of the telephone. For example: 13900001234.
   * 
   * @example
   * OU=部门1,OU=SASE钉钉
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      idpId: 'IdpId',
      relation: 'Relation',
      userGroupType: 'UserGroupType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpId: 'number',
      relation: 'string',
      userGroupType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrivateAccessPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * Set of application IDs for the private access policy. Up to 100 application IDs can be entered. Required when **ApplicationType** is **Application**. Mutually exclusive with **TagIds**.
   */
  applicationIds?: string[];
  /**
   * @remarks
   * Application type of the private access policy. Values:
   * - **Application**: Application.
   * - **Tag**: Tag.
   * 
   * This parameter is required.
   * 
   * @example
   * Application
   */
  applicationType?: string;
  /**
   * @remarks
   * Set of custom user groups for the private access policy. Required when the user group type is **Custom**. Mutually exclusive with the user group ID set. Up to 10 custom user groups can be entered.
   */
  customUserAttributes?: CreatePrivateAccessPolicyRequestCustomUserAttributes[];
  /**
   * @remarks
   * Description of the private access policy. The length is 1 to 128 characters, supporting Chinese and uppercase and lowercase English letters, and can include numbers, periods (.), underscores (_), hyphens (-), and spaces.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The execution policy for not meeting the security baseline. Values:
   * 
   * - **Block**: Block.
   * - **Observe**: Observe.
   * 
   * @example
   * Block
   */
  deviceAttributeAction?: string;
  /**
   * @remarks
   * The ID of the security baseline policy.
   * 
   * @example
   * dag-d3f64e8bdd4a****
   */
  deviceAttributeId?: string;
  /**
   * @remarks
   * Name of the private access policy. The length is 1 to 128 characters, supporting Chinese and uppercase and lowercase English letters, and can include numbers, periods (.), underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * private_access_policy_name
   */
  name?: string;
  /**
   * @remarks
   * Action of the private access policy. Values:
   * - **Block**: Block.
   * - **Allow**: Allow.
   * 
   * This parameter is required.
   * 
   * @example
   * Allow
   */
  policyAction?: string;
  /**
   * @remarks
   * The priority of the private access policy. The number 1 indicates the highest priority. Range: 1~1000, with the maximum value being the total number of private access policies.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The status of the private access policy. Values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * Set of tag IDs for the private access policy. Up to 100 tag IDs can be entered. Required when **ApplicationType** is **Tag**. Mutually exclusive with **ApplicationIds**.
   */
  tagIds?: string[];
  /**
   * @remarks
   * The trigger template ID.
   * 
   * @example
   * dag-d3f64e8bdd4a****
   */
  triggerTemplateId?: string;
  /**
   * @remarks
   * The ID of the trusted process group.
   */
  trustedProcessGroupIds?: string[];
  /**
   * @remarks
   * The switch status of the trusted process. Values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  trustedProcessStatus?: string;
  /**
   * @remarks
   * The ID of the trusted software.
   */
  trustedSoftwareIds?: string[];
  /**
   * @remarks
   * Set of user group IDs for the private access policy. Required when the user group type is **Normal**. Mutually exclusive with the custom user group set. Up to 2000 user group IDs can be entered.
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * User group type of the private access policy. Values:
   * - **Normal**: Normal user group.
   * - **Custom**: Custom user group.
   * 
   * This parameter is required.
   * 
   * @example
   * Normal
   */
  userGroupMode?: string;
  /**
   * @remarks
   * The start time when the zero trust policy takes effect, represented as a timestamp in seconds.
   * 
   * @example
   * 0
   */
  validFrom?: number;
  /**
   * @remarks
   * Switch status for effective time. Values: - **Enabled**: On. - **Disabled**: Off.
   * 
   * @example
   * Disabled
   */
  validTimeStatus?: string;
  /**
   * @remarks
   * The expiration time of the zero trust policy, in seconds timestamp.
   * 
   * @example
   * 1764727544
   */
  validUntil?: number;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      applicationType: 'ApplicationType',
      customUserAttributes: 'CustomUserAttributes',
      description: 'Description',
      deviceAttributeAction: 'DeviceAttributeAction',
      deviceAttributeId: 'DeviceAttributeId',
      name: 'Name',
      policyAction: 'PolicyAction',
      priority: 'Priority',
      status: 'Status',
      tagIds: 'TagIds',
      triggerTemplateId: 'TriggerTemplateId',
      trustedProcessGroupIds: 'TrustedProcessGroupIds',
      trustedProcessStatus: 'TrustedProcessStatus',
      trustedSoftwareIds: 'TrustedSoftwareIds',
      userGroupIds: 'UserGroupIds',
      userGroupMode: 'UserGroupMode',
      validFrom: 'ValidFrom',
      validTimeStatus: 'ValidTimeStatus',
      validUntil: 'ValidUntil',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      applicationType: 'string',
      customUserAttributes: { 'type': 'array', 'itemType': CreatePrivateAccessPolicyRequestCustomUserAttributes },
      description: 'string',
      deviceAttributeAction: 'string',
      deviceAttributeId: 'string',
      name: 'string',
      policyAction: 'string',
      priority: 'number',
      status: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
      triggerTemplateId: 'string',
      trustedProcessGroupIds: { 'type': 'array', 'itemType': 'string' },
      trustedProcessStatus: 'string',
      trustedSoftwareIds: { 'type': 'array', 'itemType': 'string' },
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      userGroupMode: 'string',
      validFrom: 'number',
      validTimeStatus: 'string',
      validUntil: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applicationIds)) {
      $dara.Model.validateArray(this.applicationIds);
    }
    if(Array.isArray(this.customUserAttributes)) {
      $dara.Model.validateArray(this.customUserAttributes);
    }
    if(Array.isArray(this.tagIds)) {
      $dara.Model.validateArray(this.tagIds);
    }
    if(Array.isArray(this.trustedProcessGroupIds)) {
      $dara.Model.validateArray(this.trustedProcessGroupIds);
    }
    if(Array.isArray(this.trustedSoftwareIds)) {
      $dara.Model.validateArray(this.trustedSoftwareIds);
    }
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

