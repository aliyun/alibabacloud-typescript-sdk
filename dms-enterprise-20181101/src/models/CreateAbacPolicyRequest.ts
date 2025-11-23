// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAbacPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the policy. Specifies whether the authorized user can access and use the resources and features defined in the policy.
   * 
   * This parameter is required.
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
   * The name of the policy. The name must be unique for the tenant.
   * 
   * This parameter is required.
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
      abacPolicyName: 'AbacPolicyName',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abacPolicyContent: 'string',
      abacPolicyDesc: 'string',
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

