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

export class CreatePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the policy.
   */
  policy?: CreatePolicyResponseBodyPolicy;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BA34C54A-C2B1-5A65-B6B0-B5842C1DB4DA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: CreatePolicyResponseBodyPolicy,
      requestId: 'string',
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

