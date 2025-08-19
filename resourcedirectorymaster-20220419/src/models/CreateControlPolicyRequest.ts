// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateControlPolicyRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * v1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the access control policy.
   * 
   * The description must be 1 to 1,024 characters in length. The description can contain letters, digits, underscores (_), and hyphens (-) and must start with a letter.
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
   * This parameter is required.
   * 
   * @example
   * RAM
   */
  effectScope?: string;
  /**
   * @remarks
   * The document of the access control policy.
   * 
   * The document can be a maximum of 4,096 characters in length.
   * 
   * For more information about the languages of access control policies, see [Languages of access control policies](https://help.aliyun.com/document_detail/179096.html).
   * 
   * For more information about the examples of access control policies, see [Examples of custom access control policies](https://help.aliyun.com/document_detail/181474.html).
   * 
   * This parameter is required.
   * 
   * @example
   * {"Version":"1","Statement":[{"Effect":"Deny","Action":["ram:UpdateRole","ram:DeleteRole","ram:AttachPolicyToRole","ram:DetachPolicyFromRole"],"Resource":"acs:ram:*:*:role/ResourceDirectoryAccountAccessRole"}]}
   */
  policyDocument?: string;
  /**
   * @remarks
   * The name of the access control policy.
   * 
   * The name must be 1 to 128 characters in length. The name can contain letters, digits, and hyphens (-) and must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * ExampleControlPolicy
   */
  policyName?: string;
  /**
   * @remarks
   * The tag to add to the access control policy.
   */
  tag?: CreateControlPolicyRequestTag[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      effectScope: 'EffectScope',
      policyDocument: 'PolicyDocument',
      policyName: 'PolicyName',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      effectScope: 'string',
      policyDocument: 'string',
      policyName: 'string',
      tag: { 'type': 'array', 'itemType': CreateControlPolicyRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

