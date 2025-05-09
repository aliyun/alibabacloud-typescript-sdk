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

