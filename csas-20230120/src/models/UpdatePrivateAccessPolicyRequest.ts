// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePrivateAccessPolicyRequestCustomUserAttributes extends $dara.Model {
  /**
   * @remarks
   * The ID of the identity source for the custom user group. This parameter is required when the custom user group type is **department**.
   * 
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @remarks
   * The relation of the custom user group. Valid values:
   * - **Equal**: Equal to.
   * - **Unequal**: Not equal to.
   * 
   * This parameter is required.
   * 
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @remarks
   * The type of the custom user group. Valid values:
   * - **username**: Username.
   * - **department**: Department.
   * - **email**: Email address.
   * - **telephone**: Mobile phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * department
   */
  userGroupType?: string;
  /**
   * @remarks
   * The value of the custom user group attribute.
   * - If the user group type is **username**, this parameter specifies the username. The value must be 1 to 128 characters in length, and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), hyphens (-), asterisks (*), at signs (@), and spaces.
   * - If the user group type is **department**, this parameter specifies the department. Example: OU=Department 1,OU=SASE DingTalk.
   * - If the user group type is **email**, this parameter specifies the email address. Example: username@example.com.
   * - If the user group type is **telephone**, this parameter specifies the mobile phone number. Example: 13900001234.
   * 
   * This parameter is required.
   * 
   * @example
   * OU=Department 1,OU=SASE DingTalk
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
   * The IDs of the applications in the private access policy. A single policy supports up to 100 private access application IDs.
   */
  applicationIds?: string[];
  /**
   * @remarks
   * The application type of the private access policy. Valid values:
   * - **Application**: Application.
   * - **Tag**: Tag.
   * 
   * @example
   * Application
   */
  applicationType?: string;
  /**
   * @remarks
   * The custom user groups in the private access policy. This parameter is required when the user group type is **Custom**. This parameter is mutually exclusive with the user group IDs. You can specify up to 10 custom user groups.
   */
  customUserAttributes?: UpdatePrivateAccessPolicyRequestCustomUserAttributes[];
  /**
   * @remarks
   * The description of the private access policy. The description must be 1 to 128 characters in length, and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), hyphens (-), and spaces.
   * 
   * @example
   * This is a private access policy
   * 
   * **if can be null:**
   * true
   */
  description?: string;
  /**
   * @remarks
   * The action to take when the security baseline is not met. Valid values:
   * - **Block**: Blocks.
   * - **Observe**: Observes.
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
   * The modification type of the private access policy. Valid values:
   * - **Cover** (default): Overwrites the original application IDs, user group IDs, and custom user groups with the values of the **ApplicationIds**, **UserGroupIds**, and **CustomUserAttributes** parameters.
   * - **Append**: Appends the values of the **ApplicationIds**, **UserGroupIds**, and **CustomUserAttributes** parameters to the original application IDs, user group IDs, and custom user groups.
   * 
   * @example
   * Cover
   */
  modifyType?: string;
  /**
   * @remarks
   * The Policy Name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The action of the private access policy. Valid values:
   * - **Block**: Blocks.
   * - **Allow**: Allows.
   * 
   * @example
   * Allow
   */
  policyAction?: string;
  /**
   * @remarks
   * The ID of the private access policy. You can obtain the value from the following operations:
   * - [ListPrivateAccessPolices](~~ListPrivateAccessPolices~~): Queries private access policies.
   * - [CreatePrivateAccessPolicy](~~CreatePrivateAccessPolicy~~): Creates a private access policy.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-policy-63b2f1844b86****
   */
  policyId?: string;
  /**
   * @remarks
   * The policy priority of the internal network access policy. A value of 1 indicates the highest priority. Valid values: 1 to 1000. The maximum value is the total number of internal network access policies minus one.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The status of the private access policy. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The IDs of the tags in the private access policy. A single policy supports up to 100 private access tag IDs.
   */
  tagIds?: string[];
  /**
   * @remarks
   * The ID of the trigger template.
   * 
   * @example
   * dag-d3f64e8bdd4a****
   */
  triggerTemplateId?: string;
  /**
   * @remarks
   * The IDs of the trusted process groups.
   * 
   * **if can be null:**
   * false
   */
  trustedProcessGroupIds?: string[];
  /**
   * @remarks
   * The status of the trusted process switch. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Disabled
   */
  trustedProcessStatus?: string;
  /**
   * @remarks
   * The IDs of the trusted software.
   * 
   * **if can be null:**
   * false
   */
  trustedSoftwareIds?: string[];
  /**
   * @remarks
   * The IDs of the user groups in the private access policy. This parameter is required when the user group type is **Normal**. This parameter is mutually exclusive with the custom user groups. A single policy supports up to 10,000 user groups, and you can modify up to 2,000 user group IDs at a time.
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The user group type of the private access policy. Valid values:
   * - **Normal**: Regular user group.
   * - **Custom**: Custom user group.
   * 
   * @example
   * Normal
   */
  userGroupMode?: string;
  /**
   * @remarks
   * The start time when the zero trust policy takes effect. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 0
   */
  validFrom?: number;
  /**
   * @remarks
   * The status of the effective period switch. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Shutdown.
   * 
   * @example
   * Enabled
   */
  validTimeStatus?: string;
  /**
   * @remarks
   * The end time when the zero trust policy takes effect. The value is a UNIX timestamp in seconds.
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

