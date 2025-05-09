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

