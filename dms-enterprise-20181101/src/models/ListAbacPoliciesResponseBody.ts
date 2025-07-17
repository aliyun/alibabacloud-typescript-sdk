// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAbacPoliciesResponseBodyPolicyList extends $dara.Model {
  /**
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
   * @example
   * test
   */
  abacPolicyDesc?: string;
  /**
   * @example
   * 12****
   */
  abacPolicyId?: number;
  /**
   * @example
   * policy_test
   */
  abacPolicyName?: string;
  /**
   * @example
   * USER_DEFINE
   */
  abacPolicySource?: string;
  /**
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
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @example
   * UnknownError
   */
  errorMessage?: string;
  policyList?: ListAbacPoliciesResponseBodyPolicyList[];
  /**
   * @example
   * 0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 3***
   */
  tid?: number;
  /**
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

