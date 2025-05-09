// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAbacPolicyRequest extends $dara.Model {
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
   * @remarks
   * This parameter is required.
   * 
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
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      abacPolicyContent: 'AbacPolicyContent',
      abacPolicyDesc: 'AbacPolicyDesc',
      abacPolicyId: 'AbacPolicyId',
      abacPolicyName: 'AbacPolicyName',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abacPolicyContent: 'string',
      abacPolicyDesc: 'string',
      abacPolicyId: 'number',
      abacPolicyName: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

