// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetControlPolicyResponseBodyControlPolicy extends $dara.Model {
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
   * 2021-03-18T08:51:33Z
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
   * The document of the access control policy.
   * 
   * @example
   * {\\"Version\\":\\"1\\",\\"Statement\\":[{\\"Effect\\":\\"Deny\\",\\"Action\\":[\\"ram:UpdateRole\\",\\"ram:DeleteRole\\",\\"ram:AttachPolicyToRole\\",\\"ram:DetachPolicyFromRole\\"],\\"Resource\\":\\"acs:ram:*:*:role/ResourceDirectoryAccountAccessRole\\"}]}
   */
  policyDocument?: string;
  /**
   * @remarks
   * The ID of the access control policy.
   * 
   * @example
   * cp-SImPt8GCEwiq****
   */
  policyId?: string;
  /**
   * @remarks
   * The name of the access control policy.
   * 
   * @example
   * test
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
   * 2021-03-18T08:51:33Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentCount: 'AttachmentCount',
      createDate: 'CreateDate',
      description: 'Description',
      effectScope: 'EffectScope',
      policyDocument: 'PolicyDocument',
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
      policyDocument: 'string',
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

export class GetControlPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access control policy.
   */
  controlPolicy?: GetControlPolicyResponseBodyControlPolicy;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AB769936-CDFA-4D52-8CE2-A3581800044A
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
      controlPolicy: GetControlPolicyResponseBodyControlPolicy,
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

