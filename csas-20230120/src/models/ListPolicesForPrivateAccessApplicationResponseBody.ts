// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolicesForPrivateAccessApplicationResponseBodyApplicationsPoliciesCustomUserAttributes extends $dara.Model {
  /**
   * @remarks
   * The ID of the identity provider (IdP) for the user group. This parameter is returned when the custom user group type is **department**.
   * 
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @remarks
   * The relationship of the user group. Valid values:
   * 
   * - **Equal**: Equal to.
   * 
   * - **Unequal**: Not equal to.
   * 
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @remarks
   * The type of the user group. Valid values:
   * 
   * - **username**: Username.
   * 
   * - **department**: Department.
   * 
   * - **email**: Email.
   * 
   * - **telephone**: Mobile number.
   * 
   * @example
   * department
   */
  userGroupType?: string;
  /**
   * @remarks
   * The value of the user group attribute.
   * 
   * - If the user group type is **username**, this parameter specifies the value of the username. The value can be 1 to 128 characters in length and can contain Chinese characters, letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * - If the user group type is **department**, this parameter specifies the value of the department. Example: OU=Department 1,OU=SASE DingTalk.
   * 
   * - If the user group type is **email**, this parameter specifies the value of the email address. Example: username\\@example.com.
   * 
   * - If the user group type is **telephone**, this parameter specifies the value of the mobile number. Example: 13900001234.
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

export class ListPolicesForPrivateAccessApplicationResponseBodyApplicationsPolicies extends $dara.Model {
  /**
   * @remarks
   * The application type of the private access policy. Valid values:
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
   * The time when the private access policy was created.
   * 
   * @example
   * 2022-09-27 18:10:25
   */
  createTime?: string;
  /**
   * @remarks
   * The collection of custom user group attributes. If you specify multiple attributes, the relationship between them is OR.
   */
  customUserAttributes?: ListPolicesForPrivateAccessApplicationResponseBodyApplicationsPoliciesCustomUserAttributes[];
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
   * The name of the private access policy.
   * 
   * @example
   * private_access_policy_name
   */
  name?: string;
  /**
   * @remarks
   * The action of the private access policy. Valid values:
   * 
   * - **Block**: Blocks access.
   * 
   * - **Allow**: Allows access.
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
   * pa-policy-867ef4007c8a****
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
   * - **Enabled**: The policy is enabled.
   * 
   * - **Disabled**: The policy is disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The user group type of the private access policy. Valid values:
   * 
   * - **Normal**: Regular user group.
   * 
   * - **Custom**: Custom user group.
   * 
   * @example
   * Normal
   */
  userGroupType?: string;
  static names(): { [key: string]: string } {
    return {
      applicationType: 'ApplicationType',
      createTime: 'CreateTime',
      customUserAttributes: 'CustomUserAttributes',
      description: 'Description',
      name: 'Name',
      policyAction: 'PolicyAction',
      policyId: 'PolicyId',
      priority: 'Priority',
      status: 'Status',
      userGroupType: 'UserGroupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationType: 'string',
      createTime: 'string',
      customUserAttributes: { 'type': 'array', 'itemType': ListPolicesForPrivateAccessApplicationResponseBodyApplicationsPoliciesCustomUserAttributes },
      description: 'string',
      name: 'string',
      policyAction: 'string',
      policyId: 'string',
      priority: 'number',
      status: 'string',
      userGroupType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customUserAttributes)) {
      $dara.Model.validateArray(this.customUserAttributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForPrivateAccessApplicationResponseBodyApplications extends $dara.Model {
  /**
   * @remarks
   * The ID of the private access application.
   * 
   * @example
   * pa-application-b927baf3e592****
   */
  applicationId?: string;
  /**
   * @remarks
   * The collection of private access policies.
   */
  policies?: ListPolicesForPrivateAccessApplicationResponseBodyApplicationsPolicies[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      policies: 'Policies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      policies: { 'type': 'array', 'itemType': ListPolicesForPrivateAccessApplicationResponseBodyApplicationsPolicies },
    };
  }

  validate() {
    if(Array.isArray(this.policies)) {
      $dara.Model.validateArray(this.policies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForPrivateAccessApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of private access applications.
   */
  applications?: ListPolicesForPrivateAccessApplicationResponseBodyApplications[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4AB972E2-D702-5464-B132-B1911498B8BF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListPolicesForPrivateAccessApplicationResponseBodyApplications },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

