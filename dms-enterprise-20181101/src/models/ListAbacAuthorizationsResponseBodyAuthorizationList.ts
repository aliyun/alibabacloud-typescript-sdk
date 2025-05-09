// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAbacAuthorizationsResponseBodyAuthorizationList extends $dara.Model {
  /**
   * @example
   * 32****
   */
  authorizationId?: number;
  /**
   * @example
   * 51****
   */
  identityId?: number;
  /**
   * @example
   * test_user
   */
  identityName?: string;
  /**
   * @example
   * USER
   */
  identityType?: string;
  /**
   * @example
   * 12****
   */
  policyId?: number;
  /**
   * @example
   * policy_test
   */
  policyName?: string;
  /**
   * @example
   * USER_DEFINE
   */
  policySource?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationId: 'AuthorizationId',
      identityId: 'IdentityId',
      identityName: 'IdentityName',
      identityType: 'IdentityType',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      policySource: 'PolicySource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationId: 'number',
      identityId: 'number',
      identityName: 'string',
      identityType: 'string',
      policyId: 'number',
      policyName: 'string',
      policySource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

