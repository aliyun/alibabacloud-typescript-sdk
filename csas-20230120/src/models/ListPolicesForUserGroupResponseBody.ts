// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolicesForUserGroupResponseBodyUserGroupsPolices extends $dara.Model {
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * private_access_policy_name
   */
  name?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * pa-policy-ce2bf7236fab****
   */
  policyId?: string;
  /**
   * @remarks
   * The policy type. Valid values:
   * 
   * - **PrivateAccess**: private network access.
   * 
   * - **URLFilter**: URL filtering.
   * 
   * - **AppAccessControl**: application control.
   * 
   * - **DLP**: Data Leakage Prevention.
   * 
   * - **NAC**: Network Access Control.
   * 
   * @example
   * PrivateAccess
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      policyId: 'PolicyId',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      policyId: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForUserGroupResponseBodyUserGroups extends $dara.Model {
  /**
   * @remarks
   * The policies.
   */
  polices?: ListPolicesForUserGroupResponseBodyUserGroupsPolices[];
  /**
   * @remarks
   * The ID of the user group.
   * 
   * @example
   * usergroup-6f1ef2fc56b6****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      polices: 'Polices',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      polices: { 'type': 'array', 'itemType': ListPolicesForUserGroupResponseBodyUserGroupsPolices },
      userGroupId: 'string',
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

export class ListPolicesForUserGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5F04DFBD-3F48-5F70-AE72-474026670128
   */
  requestId?: string;
  /**
   * @remarks
   * The list of user groups.
   */
  userGroups?: ListPolicesForUserGroupResponseBodyUserGroups[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userGroups: 'UserGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userGroups: { 'type': 'array', 'itemType': ListPolicesForUserGroupResponseBodyUserGroups },
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

