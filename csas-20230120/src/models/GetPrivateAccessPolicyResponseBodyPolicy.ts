// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPrivateAccessPolicyResponseBodyPolicyCustomUserAttributes } from "./GetPrivateAccessPolicyResponseBodyPolicyCustomUserAttributes";


export class GetPrivateAccessPolicyResponseBodyPolicy extends $dara.Model {
  /**
   * @remarks
   * A collection of application IDs for the private access policy. This field has a value when the application type is Application.
   */
  applicationIds?: string[];
  /**
   * @remarks
   * The application type of the private access policy. Possible values:
   * - **Application**: Application.
   * - **Tag**: Tag.
   * 
   * @example
   * Application
   */
  applicationType?: string;
  /**
   * @remarks
   * Intranet access policy creation time.
   * 
   * @example
   * 2021-07-29 11:26:02
   */
  createTime?: string;
  /**
   * @remarks
   * Collection of custom user group attributes. Multiple custom user group attributes are combined with an OR relationship and take effect as a set.
   */
  customUserAttributes?: GetPrivateAccessPolicyResponseBodyPolicyCustomUserAttributes[];
  /**
   * @remarks
   * Intranet access policy description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The action to take if the security baseline is not met. Possible values:
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
   * Intranet access policy name.
   * 
   * @example
   * private_access_policy_name
   */
  name?: string;
  /**
   * @remarks
   * Intranet access policy action. Values:
   * - **Block**: Block.
   * - **Allow**: Allow.
   * 
   * @example
   * Allow
   */
  policyAction?: string;
  /**
   * @remarks
   * Intranet access policy ID.
   * 
   * @example
   * pa-policy-63b2f1844b86****
   */
  policyId?: string;
  /**
   * @remarks
   * Intranet access policy priority. A value of 1 indicates the highest priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * Intranet access policy status. Values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * A collection of tag IDs for the private access policy. This field has a value when the application type is Tag.
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
   * A list of trusted process group IDs.
   */
  trustedProcessGroupIds?: string[];
  /**
   * @remarks
   * The status of the trusted process switch. Possible values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  trustedProcessStatus?: string;
  /**
   * @remarks
   * A list of trusted software IDs.
   */
  trustedSoftwareIds?: string[];
  /**
   * @remarks
   * Collection of user group IDs for the intranet access policy. This field is populated when the user group type is Normal.
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * User group type for the intranet access policy. Values:
   * - **Normal**: Normal user group.
   * - **Custom**: Custom user group.
   * 
   * @example
   * Normal
   */
  userGroupMode?: string;
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      applicationType: 'string',
      createTime: 'string',
      customUserAttributes: { 'type': 'array', 'itemType': GetPrivateAccessPolicyResponseBodyPolicyCustomUserAttributes },
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

