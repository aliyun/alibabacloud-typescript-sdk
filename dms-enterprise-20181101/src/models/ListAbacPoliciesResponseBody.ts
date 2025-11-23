// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAbacPoliciesResponseBodyPolicyList extends $dara.Model {
  /**
   * @remarks
   * The content of the policy.
   * 
   * @example
   * {
   *   "Statement": [
   *     {
   *       "Action": "*",
   *       "Effect": "Allow",
   *       "Resource": "*",
   *       "Condition": {
   *         "StringEqualsIgnoreCase": {
   *           "dms:DbType": [
   *             "redis"
   *           ]
   *         }
   *       }
   *     }
   *   ],
   *   "Version": "1"
   * }
   */
  abacPolicyContent?: string;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * test
   */
  abacPolicyDesc?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * 12****
   */
  abacPolicyId?: number;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * policy_test
   */
  abacPolicyName?: string;
  /**
   * @remarks
   * The source of the policy.
   * 
   * @example
   * USER_DEFINE
   */
  abacPolicySource?: string;
  /**
   * @remarks
   * The ID of the user who created the policy.
   * 
   * @example
   * 51****
   */
  creatorId?: number;
  static names(): { [key: string]: string } {
    return {
      abacPolicyContent: 'AbacPolicyContent',
      abacPolicyDesc: 'AbacPolicyDesc',
      abacPolicyId: 'AbacPolicyId',
      abacPolicyName: 'AbacPolicyName',
      abacPolicySource: 'AbacPolicySource',
      creatorId: 'CreatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abacPolicyContent: 'string',
      abacPolicyDesc: 'string',
      abacPolicyId: 'number',
      abacPolicyName: 'string',
      abacPolicySource: 'string',
      creatorId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAbacPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code that is returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that is returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The details of the permission policies.
   */
  policyList?: ListAbacPoliciesResponseBodyPolicyList[];
  /**
   * @remarks
   * The request ID. You can use the request ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931
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
   * The ID of the tenant.
   * 
   * @example
   * 3***
   */
  tid?: number;
  /**
   * @remarks
   * The total number of policies.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      policyList: 'PolicyList',
      requestId: 'RequestId',
      success: 'Success',
      tid: 'Tid',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      policyList: { 'type': 'array', 'itemType': ListAbacPoliciesResponseBodyPolicyList },
      requestId: 'string',
      success: 'boolean',
      tid: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.policyList)) {
      $dara.Model.validateArray(this.policyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

