// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAbacPolicyRequest extends $dara.Model {
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
   * This parameter is required.
   * 
   * @example
   * 12****
   */
  abacPolicyId?: number;
  /**
   * @remarks
   * The name of the permission policy.
   * 
   * @example
   * policy_test
   */
  abacPolicyName?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > To view the ID of the tenant, go to the DMS console and move the pointer over the profile picture in the upper-right corner. For more information, see the [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html) section of the "Manage DMS tenants" topic.
   * 
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

