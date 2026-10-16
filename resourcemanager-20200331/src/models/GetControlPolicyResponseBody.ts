// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetControlPolicyResponseBodyControlPolicy extends $dara.Model {
  /**
   * @remarks
   * The number of times the control policy is referenced.
   * 
   * @example
   * 0
   */
  attachmentCount?: string;
  /**
   * @remarks
   * The time when the control policy was created. The time is displayed in UTC in RFC 3339 format, indicated by Z.
   * 
   * @example
   * 2021-03-18T08:51:33Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the control policy.
   * 
   * @example
   * ExampleControlPolicy
   */
  description?: string;
  /**
   * @remarks
   * The effective scope of the control policy. Valid values:
   * 
   * - All: The control policy takes effect for Alibaba Cloud accounts, Resource Access Management (RAM) users, and RAM roles.
   * - RAM: The control policy takes effect only for RAM users and RAM roles.
   * 
   * @example
   * RAM
   */
  effectScope?: string;
  /**
   * @remarks
   * The content of the control policy.
   * 
   * @example
   * {\\"Version\\":\\"1\\",\\"Statement\\":[{\\"Effect\\":\\"Deny\\",\\"Action\\":[\\"ram:UpdateRole\\",\\"ram:DeleteRole\\",\\"ram:AttachPolicyToRole\\",\\"ram:DetachPolicyFromRole\\"],\\"Resource\\":\\"acs:ram:*:*:role/ResourceDirectoryAccountAccessRole\\"}]}
   */
  policyDocument?: string;
  /**
   * @remarks
   * The ID of the control policy.
   * 
   * @example
   * cp-SImPt8GCEwiq****
   */
  policyId?: string;
  /**
   * @remarks
   * The Policy Name of the control policy.
   * 
   * @example
   * test
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the control policy. Valid values:
   * 
   * - System: system control policy.
   * - Custom: custom control policy.
   * 
   * @example
   * Custom
   */
  policyType?: string;
  /**
   * @remarks
   * The time when the control policy was updated. The time is displayed in UTC in RFC 3339 format, indicated by Z.
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
   * The details of the control policy.
   */
  controlPolicy?: GetControlPolicyResponseBodyControlPolicy;
  /**
   * @remarks
   * The request ID.
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

