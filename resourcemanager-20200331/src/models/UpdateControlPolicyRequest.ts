// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The new description of the access control policy.
   * 
   * The description must be 1 to 1,024 characters in length. The description can contain letters, digits, underscores (_), and hyphens (-) and must start with a letter.
   * 
   * @example
   * ExampleControlPolicy
   */
  newDescription?: string;
  /**
   * @remarks
   * The new document of the access control policy.
   * 
   * The document can be a maximum of 4,096 characters in length.
   * 
   * For more information about the languages of access control policies, see [Languages of access control policies](https://help.aliyun.com/document_detail/179096.html).
   * 
   * For more information about the examples of access control policies, see [Examples of custom access control policies](https://help.aliyun.com/document_detail/181474.html).
   * 
   * @example
   * {"Version":"1","Statement":[{"Effect":"Deny","Action":["ram:UpdateRole","ram:DeleteRole","ram:AttachPolicyToRole","ram:DetachPolicyFromRole"],"Resource":"acs:ram:*:*:role/ResourceDirectoryAccountAccessRole"}]}
   */
  newPolicyDocument?: string;
  /**
   * @remarks
   * The new name of the access control policy.
   * 
   * The name must be 1 to 128 characters in length. The name can contain letters, digits, and hyphens (-) and must start with a letter.
   * 
   * @example
   * NewControlPolicy
   */
  newPolicyName?: string;
  /**
   * @remarks
   * The ID of the access control policy.
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

