// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAbacAuthorizationsResponseBodyAuthorizationList extends $dara.Model {
  /**
   * @remarks
   * The authorization ID.
   * 
   * @example
   * 32****
   */
  authorizationId?: number;
  /**
   * @remarks
   * The ID of the object to which the policy is attached.
   * 
   * @example
   * 51****
   */
  identityId?: number;
  /**
   * @remarks
   * The name of the object to which the policy is attached.
   * 
   * @example
   * test_user
   */
  identityName?: string;
  /**
   * @remarks
   * The type of the object to which the policy is attached.
   * 
   * @example
   * USER
   */
  identityType?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * 12****
   */
  policyId?: number;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * policy_test
   */
  policyName?: string;
  /**
   * @remarks
   * The source of the policy.
   * 
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
  /**
   * @remarks
   * The list of users to which the specified policy is attached.
   */
  authorizationList?: ListAbacAuthorizationsResponseBodyAuthorizationList[];
  /**
   * @remarks
   * The error code that is returned when the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that is returned when the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * 7FAD400F-7A5C-4193-8F9A-39D86C4F0231
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The number of objects to which the policy is attached.
   * 
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

