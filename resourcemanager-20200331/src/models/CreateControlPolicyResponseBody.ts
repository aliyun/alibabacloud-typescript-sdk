// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateControlPolicyResponseBodyControlPolicy extends $dara.Model {
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
   * The effective scope of the access control policy.
   * 
   * The value RAM indicates that the access control policy takes effect only for RAM users and RAM roles.
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
   * ExampleControlPolicy
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
   * 2021-03-18T09:24:19Z
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

export class CreateControlPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access control policy.
   */
  controlPolicy?: CreateControlPolicyResponseBodyControlPolicy;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 776B05B3-A0B0-464B-A191-F4E1119A94B2
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
      controlPolicy: CreateControlPolicyResponseBodyControlPolicy,
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

