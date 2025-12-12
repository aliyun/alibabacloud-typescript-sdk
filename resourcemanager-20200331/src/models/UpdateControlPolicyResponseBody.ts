// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateControlPolicyResponseBodyControlPolicy extends $dara.Model {
  /**
   * @remarks
   * The number of times that the access control policy is referenced.
   * 
   * @example
   * 0
   */
  attachmentCount?: string;
  /**
   * @remarks
   * The time when the access control policy was created.
   * 
   * @example
   * 2021-03-18T09:24:19Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the access control policy.
   * 
   * @example
   * ExampleControlPolicy
   */
  description?: string;
  /**
   * @remarks
   * The effective scope of the access control policy. Valid values:
   * 
   * *   All: The access control policy is in effect for Alibaba Cloud accounts, RAM users, and RAM roles.
   * *   RAM: The access control policy is in effect only for RAM users and RAM roles.
   * 
   * @example
   * RAM
   */
  effectScope?: string;
  /**
   * @remarks
   * The ID of the access control policy.
   * 
   * @example
   * cp-jExXAqIYkwHN****
   */
  policyId?: string;
  /**
   * @remarks
   * The name of the access control policy.
   * 
   * @example
   * NewControlPolicy
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the access control policy. Valid values:
   * 
   * *   System: system access control policy
   * *   Custom: custom access control policy
   * 
   * @example
   * Custom
   */
  policyType?: string;
  /**
   * @remarks
   * The time when the access control policy was updated.
   * 
   * @example
   * 2021-03-18T10:04:55Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentCount: 'AttachmentCount',
      createDate: 'CreateDate',
      description: 'Description',
      effectScope: 'EffectScope',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentCount: 'string',
      createDate: 'string',
      description: 'string',
      effectScope: 'string',
      policyId: 'string',
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

export class UpdateControlPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access control policy.
   */
  controlPolicy?: UpdateControlPolicyResponseBodyControlPolicy;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2DFCE4C9-04A9-4C83-BB14-FE791275EC53
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      controlPolicy: 'ControlPolicy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlPolicy: UpdateControlPolicyResponseBodyControlPolicy,
      requestId: 'string',
    };
  }

  validate() {
    if(this.controlPolicy && typeof (this.controlPolicy as any).validate === 'function') {
      (this.controlPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

