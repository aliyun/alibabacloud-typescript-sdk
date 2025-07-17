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

export class ListAbacAuthorizationsResponseBody extends $dara.Model {
  authorizationList?: ListAbacAuthorizationsResponseBodyAuthorizationList[];
  /**
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @example
   * 7FAD400F-7A5C-4193-8F9A-39D86C4F0231
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      authorizationList: 'AuthorizationList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationList: { 'type': 'array', 'itemType': ListAbacAuthorizationsResponseBodyAuthorizationList },
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.authorizationList)) {
      $dara.Model.validateArray(this.authorizationList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

