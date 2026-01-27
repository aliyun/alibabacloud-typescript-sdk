// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePrivateAccessPolicyRequestCustomUserAttributes extends $dara.Model {
  /**
   * @remarks
   * The identity source ID of the custom user group. Required when the custom user group type is **department**.
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
   * This parameter is required.
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
   * This parameter is required.
   * 
   * @example
   * department
   */
  userGroupType?: string;
  /**
   * @remarks
   * Custom user group attribute values. - When the user group type is **username**, it represents the value of the username. The length should be 1 to 128 characters, supporting Chinese and case-sensitive English letters, and can include numbers, half-width periods (.), underscores (_), hyphens (-), asterisks (*), at symbols (@), and spaces. - When the user group type is **department**, it represents the value of the department. For example: OU=Department1,OU=SASE DingTalk. - When the user group type is **email**, it represents the value of the email. For example: username@example.com. - When the user group type is **telephone**, it represents the value of the mobile phone. For example: 13900001234.
   * 
   * This parameter is required.
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

export class UpdatePrivateAccessPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * Set of application IDs for the private access policy. A single policy supports up to 100 private access application IDs.
   */
  applicationIds?: string[];
  /**
   * @remarks
   * Application type of the private access policy. Values:
   * - **Application**: Application.
   * - **Tag**: Tag.
   * 
   * @example
   * Application
   */
  applicationType?: string;
  /**
   * @remarks
   * Set of custom user attributes for the private access policy, required when the user group type is **Custom**. Mutually exclusive with the user group ID set. The total number of custom user groups is limited to 10.
   */
  customUserAttributes?: UpdatePrivateAccessPolicyRequestCustomUserAttributes[];
  /**
   * @remarks
   * Description of the private access policy. Length should be 1 to 128 characters, supporting Chinese and English letters (both uppercase and lowercase), and can include numbers, periods (.), underscores (_), hyphens (-), and spaces.
   * 
   * @example
   * test
   * 
   * **if can be null:**
   * true
   */
  description?: string;
  /**
   * @remarks
   * The execution strategy for not meeting the security baseline. Values:
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
   * The modification type of the private access policy. Values:
   * - **Cover** (default): Use the values of **ApplicationIds**, **UserGroupIds**, and **CustomUserAttributes** to overwrite the original application ID set, user group ID set, and custom user attribute set, respectively.
   * - **Append**: Add the values provided in **ApplicationIds**, **UserGroupIds**, and **CustomUserAttributes** to the original application ID set, user group ID set, and custom user attribute set, respectively.
   * 
   * @example
   * Cover
   */
  modifyType?: string;
  name?: string;
  /**
   * @remarks
   * Action of the private access policy. Values:
   * - **Block**: Block.
   * - **Allow**: Allow.
   * 
   * @example
   * Allow
   */
  policyAction?: string;
  /**
   * @remarks
   * ID of the private access policy. Value sources:
   * - [ListPrivateAccessPolicies](~~ListPrivateAccessPolicies~~): Batch query for private access policies.
   * - [CreatePrivateAccessPolicy](~~CreatePrivateAccessPolicy~~): Create a private access policy.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-policy-63b2f1844b86****
   */
  policyId?: string;
  /**
   * @remarks
   * The priority of the private access policy. The number 1 indicates the highest priority. Range: 1~1000, with the maximum value being the total number of private access policies minus one.
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
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * Set of tag IDs for the private access policy. A single policy supports up to 100 private access tag IDs.
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
   * Trusted process group ID.
   * 
   * **if can be null:**
   * false
   */
  trustedProcessGroupIds?: string[];
  /**
   * @remarks
   * Trusted process switch status. Values: 
   * 
   * - **Enabled**: On. 
   * 
   * - **Disabled**: Off.
   * 
   * @example
   * Disabled
   */
  trustedProcessStatus?: string;
  /**
   * @remarks
   * Trusted Software ID.
   * 
   * **if can be null:**
   * false
   */
  trustedSoftwareIds?: string[];
  /**
   * @remarks
   * Set of user group IDs for the private access policy, required when the user group type is **Normal**. Mutually exclusive with the custom user group set. A single policy supports up to 10,000 user groups, and a maximum of 2,000 user group IDs can be modified at once.
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * User group type of the private access policy. Values:
   * - **Normal**: Normal user group.
   * - **Custom**: Custom user group.
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
   * Enabled
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
      modifyType: 'ModifyType',
      name: 'Name',
      policyAction: 'PolicyAction',
      policyId: 'PolicyId',
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
      customUserAttributes: { 'type': 'array', 'itemType': UpdatePrivateAccessPolicyRequestCustomUserAttributes },
      description: 'string',
      deviceAttributeAction: 'string',
      deviceAttributeId: 'string',
      modifyType: 'string',
      name: 'string',
      policyAction: 'string',
      policyId: 'string',
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

