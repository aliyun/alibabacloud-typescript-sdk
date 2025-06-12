// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicyResponseBodyPolicy extends $dara.Model {
  /**
   * @remarks
   * The time when the policy was created.
   * 
   * @example
   * 2021-10-13T02:46:57Z
   */
  createDate?: string;
  /**
   * @remarks
   * The version of the policy. Default value: v1.
   * 
   * @example
   * v1
   */
  defaultVersion?: string;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * Query ECS instances in a specific region
   */
  description?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * View-ECS-instances-in-a-specific-region
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * *   Custom
   * *   System
   * 
   * @example
   * Custom
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      defaultVersion: 'DefaultVersion',
      description: 'Description',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      defaultVersion: 'string',
      description: 'string',
      policyName: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

