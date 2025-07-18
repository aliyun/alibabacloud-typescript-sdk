// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolicesForPrivateAccessApplicationResponseBodyApplicationsPoliciesCustomUserAttributes extends $dara.Model {
  /**
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @example
   * department
   */
  userGroupType?: string;
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
   * @example
   * Application
   */
  applicationType?: string;
  /**
   * @example
   * 2022-09-27 18:10:25
   */
  createTime?: string;
  customUserAttributes?: ListPolicesForPrivateAccessApplicationResponseBodyApplicationsPoliciesCustomUserAttributes[];
  description?: string;
  /**
   * @example
   * private_access_policy_name
   */
  name?: string;
  /**
   * @example
   * Allow
   */
  policyAction?: string;
  /**
   * @example
   * pa-policy-867ef4007c8a****
   */
  policyId?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * Enabled
   */
  status?: string;
  /**
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
   * @example
   * pa-application-b927baf3e592****
   */
  applicationId?: string;
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
  applications?: ListPolicesForPrivateAccessApplicationResponseBodyApplications[];
  /**
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

