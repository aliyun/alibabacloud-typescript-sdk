// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrivateAccessPolicesResponseBodyPolicesCustomUserAttributes extends $dara.Model {
  /**
   * @remarks
   * The identity provider ID of the user group. This value exists when the custom user group type is **department**.
   * 
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @remarks
   * The relation of the user group. Valid values:
   * - **Equal**: Equal.
   * - **Unequal**: Not equal.
   * 
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @remarks
   * The type of the user group. Valid values:
   * - **username**: Username.
   * - **department**: Department.
   * - **email**: Email.
   * - **telephone**: Mobile phone.
   * 
   * @example
   * department
   */
  userGroupType?: string;
  /**
   * @remarks
   * The value of the user group attribute.
   * - When the user group type is **username**, this indicates the value of the username. The value must be 1 to 128 characters in length and supports Chinese characters and uppercase and lowercase English letters. It can contain digits, periods (.), underscores (_), and hyphens (-).
   * - When the user group type is **department**, this indicates the value of the department. For example: OU=Department1,OU=SASE DingTalk.
   * - When the user group type is **email**, this indicates the value of the email. For example: username@example.com.
   * - When the user group type is **telephone**, this indicates the value of the mobile phone. For example: 13900001234.
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

export class ListPrivateAccessPolicesResponseBodyPolices extends $dara.Model {
  /**
   * @remarks
   * The collection of application IDs of the private access policy. This field has a value when the application type is **Application**.
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
   * The creation time of the private access policy.
   * 
   * @example
   * 2022-07-10 15:50:23
   */
  createTime?: string;
  /**
   * @remarks
   * The collection of custom user group attributes. Multiple custom user group attributes have an OR relationship and take effect by union.
   */
  customUserAttributes?: ListPrivateAccessPolicesResponseBodyPolicesCustomUserAttributes[];
  /**
   * @remarks
   * The description of the private access policy.
   * 
   * @example
   * 这是一条内网访问策略
   */
  description?: string;
  /**
   * @remarks
   * The action to take when the security baseline is not met. Valid values:
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
   * The name of the private access policy.
   * 
   * @example
   * private_access_policy_name
   */
  name?: string;
  /**
   * @remarks
   * The action of the private access policy. Valid values:
   * - **Block**: Block.
   * - **Allow**: Allow.
   * 
   * @example
   * Allow
   */
  policyAction?: string;
  /**
   * @remarks
   * The ID of the private access policy.
   * 
   * @example
   * pa-policy-63b2f1844b86****
   */
  policyId?: string;
  /**
   * @remarks
   * The priority of the private access policy. A value of 1 indicates the highest priority.
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
   * The collection of tag IDs of the private access policy. This field has a value when the application type is **Tag**.
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
   * The list of trusted process group IDs.
   */
  trustedProcessGroupIds?: string[];
  /**
   * @remarks
   * The status of the trusted process switch. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  trustedProcessStatus?: string;
  /**
   * @remarks
   * The list of trusted software IDs.
   */
  trustedSoftwareIds?: string[];
  /**
   * @remarks
   * The collection of user group IDs for the private access policy. This field has a value when the user group type is **Normal**.
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The user group type of the private access policy. Valid values:
   * - **Normal**: Normal user group.
   * - **Custom**: Custom user group.
   * 
   * @example
   * Normal
   */
  userGroupMode?: string;
  /**
   * @remarks
   * The effective start time of the zero trust policy, in second-level Unix timestamp.
   * 
   * @example
   * 0
   */
  validFrom?: number;
  /**
   * @remarks
   * The status of the effective time switch. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  validTimeStatus?: string;
  /**
   * @remarks
   * The effective end time of the zero trust policy, in second-level Unix timestamp.
   * 
   * @example
   * 1764727544
   */
  validUntil?: number;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      applicationType: 'ApplicationType',
      createTime: 'CreateTime',
      customUserAttributes: 'CustomUserAttributes',
      description: 'Description',
      deviceAttributeAction: 'DeviceAttributeAction',
      deviceAttributeId: 'DeviceAttributeId',
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
      createTime: 'string',
      customUserAttributes: { 'type': 'array', 'itemType': ListPrivateAccessPolicesResponseBodyPolicesCustomUserAttributes },
      description: 'string',
      deviceAttributeAction: 'string',
      deviceAttributeId: 'string',
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

export class ListPrivateAccessPolicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of private access policies.
   */
  polices?: ListPrivateAccessPolicesResponseBodyPolices[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 748CFDC7-1EB6-5B8B-9405-DA76ED5BB60D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of private access policies.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      polices: 'Polices',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      polices: { 'type': 'array', 'itemType': ListPrivateAccessPolicesResponseBodyPolices },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.polices)) {
      $dara.Model.validateArray(this.polices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

