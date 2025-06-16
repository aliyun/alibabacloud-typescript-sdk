// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPrivateAccessPolicesResponseBodyPolicesCustomUserAttributes } from "./ListPrivateAccessPolicesResponseBodyPolicesCustomUserAttributes";


export class ListPrivateAccessPolicesResponseBodyPolices extends $dara.Model {
  /**
   * @remarks
   * The IDs of the applications that are specified in the private access policy. If the value of ApplicationType is **Application**, this parameter is returned.
   */
  applicationIds?: string[];
  /**
   * @remarks
   * The application type of the private access policy. Valid values:
   * 
   * *   **Application**
   * *   **Tag**
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
   * The attributes of the custom user group. The attributes of the custom user group are evaluated by using a logical OR. If an attribute is matched, the policy takes effect.
   */
  customUserAttributes?: ListPrivateAccessPolicesResponseBodyPolicesCustomUserAttributes[];
  /**
   * @remarks
   * The description of the private access policy.
   * 
   * @example
   * a private access policy
   */
  description?: string;
  /**
   * @remarks
   * The action that is performed when the security baseline is not met. Valid values:
   * 
   * *   **Block**
   * *   **Observe**
   * 
   * @example
   * Block
   */
  deviceAttributeAction?: string;
  /**
   * @remarks
   * The ID of the security baseline.
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
   * The action in the private access policy. Valid values:
   * 
   * *   **Block**
   * *   **Allow**
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
   * The priority of the private access policy. The value 1 indicates the highest priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The status of the private access policy. Valid values:
   * 
   * *   **Enabled**
   * *   **Disabled**
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The IDs of the tags that are specified in the private access policy. If the value of ApplicationType is **Tag**, this parameter is returned.
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
   * List of trusted process group IDs.
   */
  trustedProcessGroupIds?: string[];
  /**
   * @remarks
   * Trusted process switch status. Values: 
   * - **Enabled**: On.
   * - **Disabled**: Off.
   * 
   * @example
   * Enabled
   */
  trustedProcessStatus?: string;
  /**
   * @remarks
   * List of trusted software IDs.
   */
  trustedSoftwareIds?: string[];
  /**
   * @remarks
   * The IDs of user groups in the private access policy. If the value of UserGroupMode is **Normal**, this parameter is returned.
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The type of the user group in the private access policy. Valid values:
   * 
   * *   **Normal**: regular user group.
   * *   **Custom**: custom user group.
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

