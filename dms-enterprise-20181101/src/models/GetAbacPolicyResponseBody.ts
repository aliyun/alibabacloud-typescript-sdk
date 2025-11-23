// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAbacPolicyResponseBodyPolicy extends $dara.Model {
  /**
   * @remarks
   * The number of users or custom roles to which the policy is attached.
   * 
   * @example
   * 3
   */
  authorizedQuantity?: string;
  /**
   * @remarks
   * The ID of the user who create the policy.
   * 
   * @example
   * 51****
   */
  creatorId?: number;
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
  policyContent?: string;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * test
   */
  policyDesc?: string;
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
   * The source of the policy. Valid values:
   */
  policySource?: string;
  static names(): { [key: string]: string } {
    return {
      authorizedQuantity: 'AuthorizedQuantity',
      creatorId: 'CreatorId',
      policyContent: 'PolicyContent',
      policyDesc: 'PolicyDesc',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      policySource: 'PolicySource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedQuantity: 'string',
      creatorId: 'number',
      policyContent: 'string',
      policyDesc: 'string',
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

export class GetAbacPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
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
   * The details of the policy.
   */
  policy?: GetAbacPolicyResponseBodyPolicy;
  /**
   * @remarks
   * The request ID. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * 2B7844DE-A0C3-50ED-A796-8F07D377144C
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
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      policy: 'Policy',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      policy: GetAbacPolicyResponseBodyPolicy,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.policy && typeof (this.policy as any).validate === 'function') {
      (this.policy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

