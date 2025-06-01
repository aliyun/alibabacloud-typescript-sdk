// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolicesForUserGroupResponseBodyUserGroupsPolices extends $dara.Model {
  /**
   * @example
   * private_access_policy_name
   */
  name?: string;
  /**
   * @example
   * pa-policy-ce2bf7236fab****
   */
  policyId?: string;
  /**
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

