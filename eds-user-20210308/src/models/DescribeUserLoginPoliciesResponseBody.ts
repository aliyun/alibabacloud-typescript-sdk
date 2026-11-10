// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserLoginPoliciesResponseBodyPoliciesUserGroups extends $dara.Model {
  /**
   * @remarks
   * The user group ID.
   * 
   * @example
   * ug-ilu90mhsduf****
   */
  groupId?: string;
  /**
   * @remarks
   * The user group name.
   * 
   * @example
   * Developers
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserLoginPoliciesResponseBodyPolicies extends $dara.Model {
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * deveoper-policy
   */
  name?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * up-89unlabdl****
   */
  policyId?: string;
  /**
   * @remarks
   * The associated user group information.
   */
  userGroups?: DescribeUserLoginPoliciesResponseBodyPoliciesUserGroups[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      policyId: 'PolicyId',
      userGroups: 'UserGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      policyId: 'string',
      userGroups: { 'type': 'array', 'itemType': DescribeUserLoginPoliciesResponseBodyPoliciesUserGroups },
    };
  }

  validate() {
    if(Array.isArray(this.userGroups)) {
      $dara.Model.validateArray(this.userGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserLoginPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of policies.
   */
  policies?: DescribeUserLoginPoliciesResponseBodyPolicies[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policies: 'Policies',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policies: { 'type': 'array', 'itemType': DescribeUserLoginPoliciesResponseBodyPolicies },
      requestId: 'string',
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

