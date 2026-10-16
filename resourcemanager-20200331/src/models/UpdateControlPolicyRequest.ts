// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The new description of the control policy.
   * 
   * The description must be 1 to 1,024 characters in length, must start with a letter, and can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * @example
   * ExampleControlPolicy
   */
  newDescription?: string;
  /**
   * @remarks
   * The new document of the control policy.
   * 
   * The maximum length is 4,096 characters.
   * 
   * For information about the control policy language, see [Control policy language](https://help.aliyun.com/document_detail/179096.html).
   * 
   * For examples of control policies, see [Examples of custom control policies](https://help.aliyun.com/document_detail/181474.html).
   * 
   * @example
   * {"Version":"1","Statement":[{"Effect":"Deny","Action":["ram:UpdateRole","ram:DeleteRole","ram:AttachPolicyToRole","ram:DetachPolicyFromRole"],"Resource":"acs:ram:*:*:role/ResourceDirectoryAccountAccessRole"}]}
   */
  newPolicyDocument?: string;
  /**
   * @remarks
   * The new Policy Name of the control policy.
   * 
   * The name must be 1 to 128 characters in length, must start with a letter, and can contain letters, digits, and hyphens (-).
   * 
   * @example
   * NewControlPolicy
   */
  newPolicyName?: string;
  /**
   * @remarks
   * The ID of the control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * cp-jExXAqIYkwHN****
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      newDescription: 'NewDescription',
      newPolicyDocument: 'NewPolicyDocument',
      newPolicyName: 'NewPolicyName',
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newDescription: 'string',
      newPolicyDocument: 'string',
      newPolicyName: 'string',
      policyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

