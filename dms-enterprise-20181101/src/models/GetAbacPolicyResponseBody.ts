// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAbacPolicyResponseBodyPolicy extends $dara.Model {
  /**
   * @example
   * 3
   */
  authorizedQuantity?: string;
  /**
   * @example
   * 51****
   */
  creatorId?: number;
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
  policyContent?: string;
  /**
   * @example
   * test
   */
  policyDesc?: string;
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
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @example
   * UnknownError
   */
  errorMessage?: string;
  policy?: GetAbacPolicyResponseBodyPolicy;
  /**
   * @example
   * 2B7844DE-A0C3-50ED-A796-8F07D377144C
   */
  requestId?: string;
  /**
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

