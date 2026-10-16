// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the control policy.
   * 
   * The description must be 1 to 1024 characters in length, must start with a letter, and can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * @example
   * ExampleControlPolicy
   */
  description?: string;
  /**
   * @remarks
   * The effective scope of the control policy.
   * 
   * Valid values: RAM, which indicates that the control policy takes effect only for Resource Access Management (RAM) users or RAM roles.
   * 
   * This parameter is required.
   * 
   * @example
   * RAM
   */
  effectScope?: string;
  /**
   * @remarks
   * The content of the control policy.
   * 
   * The maximum length is 4096 characters.
   * 
   * For information about the control policy language, see [Control policy language](https://help.aliyun.com/document_detail/179096.html).
   * 
   * For examples of control policies, see [Examples of custom control policies](https://help.aliyun.com/document_detail/181474.html).
   * 
   * This parameter is required.
   * 
   * @example
   * {"Version":"1","Statement":[{"Effect":"Deny","Action":["ram:UpdateRole","ram:DeleteRole","ram:AttachPolicyToRole","ram:DetachPolicyFromRole"],"Resource":"acs:ram:*:*:role/ResourceDirectoryAccountAccessRole"}]}
   */
  policyDocument?: string;
  /**
   * @remarks
   * Policy Name of the control policy.
   * 
   * Policy Name must be 1 to 128 characters in length, must start with a letter, and can contain letters, digits, and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * ExampleControlPolicy
   */
  policyName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      effectScope: 'EffectScope',
      policyDocument: 'PolicyDocument',
      policyName: 'PolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      effectScope: 'string',
      policyDocument: 'string',
      policyName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

