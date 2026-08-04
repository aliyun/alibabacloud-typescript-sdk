// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePrivateAccessPolicyRequestCustomUserAttributes extends $dara.Model {
  /**
   * @remarks
   * The identity provider ID for the custom user attribute. This parameter is required when UserGroupType is **department**.
   * 
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @remarks
   * The relation used to match the custom user attribute. Valid values:
   * 
   * - **Equal**: Equal to.
   * 
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
   * The type of the custom user attribute. Valid values:
   * 
   * - **username**: Username.
   * 
   * - **department**: Department.
   * 
   * - **email**: Email address.
   * 
   * - **telephone**: Phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * department
   */
  userGroupType?: string;
  /**
   * @remarks
   * The value of the custom user attribute.
   * 
   * - If UserGroupType is **username**, this is the username. The value must be 1 to 128 characters in length. It can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), hyphens (-), asterisks (\\*), at signs (@), and spaces.
   * 
   * - If UserGroupType is **department**, this is the department name. Example: OU=Department 1,OU=SASE DingTalk.
   * 
   * - If UserGroupType is **email**, this is the email address. Example: username\\@example.com.
   * 
   * - If UserGroupType is **telephone**, this is the phone number. Example: 13900001234.
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
   * The IDs of applications associated with the internal network access policy. A single policy supports up to 100 application IDs.
   */
  applicationIds?: string[];
  /**
   * @remarks
   * The application type for the internal network access policy. Valid values:
   * 
   * - **Application**: Application.
   * 
   * - **Tag**: Tag.
   * 
   * @example
   * Application
   */
  applicationType?: string;
  /**
   * @remarks
   * This parameter specifies a collection of custom user groups for the private network access policy. It is required when the user group type is **Custom**. This collection is mutually exclusive with the user group ID collection, and you can specify a maximum of 10 custom user groups.
   */
  customUserAttributes?: UpdatePrivateAccessPolicyRequestCustomUserAttributes[];
  /**
   * @remarks
   * A description of the internal network access policy. The description must be 1 to 128 characters in length. It can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), hyphens (-), and spaces.
   * 
   * @example
   * 这是一条内网访问策略
   * 
   * **if can be null:**
   * true
   */
  description?: string;
  /**
   * @remarks
   * The action taken when a device does not meet the security baseline. Valid values:
   * 
   * - **Block**: Block access.
   * 
   * - **Observe**: Monitor access.
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
   * The method used to update the internal network access policy. Valid values:
   * 
   * - **Cover** (default): Replace the existing application IDs, user group IDs, and custom user attributes with the values specified in **ApplicationIds**, **UserGroupIds**, and **CustomUserAttributes**.
   * 
   * - **Append**: Add the values specified in **ApplicationIds**, **UserGroupIds**, and **CustomUserAttributes** to the existing application IDs, user group IDs, and custom user attributes.
   * 
   * @example
   * Cover
   */
  modifyType?: string;
  name?: string;
  /**
   * @remarks
   * The action that the internal network access policy takes. Valid values:
   * 
   * - **Block**: Block access.
   * 
   * - **Allow**: Allow access.
   * 
   * @example
   * Allow
   */
  policyAction?: string;
  /**
   * @remarks
   * The ID of the internal network access policy. Get this value from one of the following operations:
   * 
   * - [ListPrivateAccessPolices](~~ListPrivateAccessPolices~~): List internal network access policies in batches.
   * 
   * - [CreatePrivateAccessPolicy](~~CreatePrivateAccessPolicy~~): Create an internal network access policy.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-policy-63b2f1844b86****
   */
  policyId?: string;
  /**
   * @remarks
   * The priority of the internal network access policy. Priority 1 is the highest. Valid values: 1 to 1000. The maximum value is the total number of internal network access policies minus 1.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The status of the internal network access policy. Valid values:
   * 
   * - **Enabled**: Enabled.
   * 
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The IDs of tags associated with the internal network access policy. A single policy supports up to 100 tag IDs.
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
   * The IDs of trusted process groups.
   * 
   * **if can be null:**
   * false
   */
  trustedProcessGroupIds?: string[];
  /**
   * @remarks
   * The status of the trusted process feature. Valid values:
   * 
   * - **Enabled**: Enabled.
   * 
   * - **Disabled**: Disabled.
   * 
   * @example
   * Disabled
   */
  trustedProcessStatus?: string;
  /**
   * @remarks
   * The IDs of trusted software.
   * 
   * **if can be null:**
   * false
   */
  trustedSoftwareIds?: string[];
  /**
   * @remarks
   * The IDs of user groups associated with the internal network access policy. This parameter is required when UserGroupMode is set to Normal. This parameter is mutually exclusive with **CustomUserAttributes**. A single policy supports up to 10,000 user groups. You can update up to 2,000 user group IDs at a time.
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The user group type for the internal network access policy. Valid values:
   * 
   * - **Normal**: Regular user group.
   * 
   * - **Custom**: Custom user group.
   * 
   * @example
   * Normal
   */
  userGroupMode?: string;
  /**
   * @remarks
   * The start time of the zero-trust policy\\"s effective period, in seconds since the Unix epoch.
   * 
   * @example
   * 0
   */
  validFrom?: number;
  /**
   * @remarks
   * The status of the effective time feature. Valid values:
   * 
   * - **Enabled**: Enabled.
   * 
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  validTimeStatus?: string;
  /**
   * @remarks
   * The end time of the zero-trust policy\\"s effective period, in seconds since the Unix epoch.
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

