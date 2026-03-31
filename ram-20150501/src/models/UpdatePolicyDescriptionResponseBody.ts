// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePolicyDescriptionResponseBodyPolicy extends $dara.Model {
  /**
   * @remarks
   * The time when the policy was created.
   * 
   * @example
   * 2022-02-28T07:04:15Z
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
   * This is a test policy.
   */
  description?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * TestPolicy
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
  /**
   * @remarks
   * The time when the policy was modified.
   * 
   * @example
   * 2022-02-28T07:05:37Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      defaultVersion: 'DefaultVersion',
      description: 'Description',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      defaultVersion: 'string',
      description: 'string',
      policyName: 'string',
      policyType: 'string',
      updateDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolicyDescriptionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the policy.
   */
  policy?: UpdatePolicyDescriptionResponseBodyPolicy;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7572DEBD-0ECE-518E-8682-D8CB82F8FE8E
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
      policy: UpdatePolicyDescriptionResponseBodyPolicy,
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

