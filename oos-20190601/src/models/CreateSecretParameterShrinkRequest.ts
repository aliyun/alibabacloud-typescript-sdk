// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecretParameterShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can be up to 64 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). For more information, see "How to ensure idempotence".
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The constraints of the encryption parameter. By default, this parameter is null. Valid values:
   * 
   * *   AllowedValues: The value that is allowed for the encryption parameter. It must be an array string.
   * *   AllowedPattern: The pattern that is allowed for the encryption parameter. It must be a regular expression.
   * *   MinLength: The minimum length of the encryption parameter.
   * *   MaxLength: The maximum length of the encryption parameter.
   * 
   * @example
   * \\"{\\"\\"AllowedValues":["secretparameter"],"AllowedPattern":"secretparameter","MinLength":0,"MaxLength":20}\\"
   */
  constraints?: string;
  /**
   * @remarks
   * The instance ID of the KMS instance.
   * 
   * @example
   * kst-hzz****
   */
  DKMSInstanceId?: string;
  /**
   * @remarks
   * The description of the encryption parameter. The description must be 1 to 200 characters in length.
   * 
   * @example
   * SecretParameter
   */
  description?: string;
  /**
   * @remarks
   * The key ID of Key Management Service (KMS) that is used to encrypt the parameter.
   * 
   * @example
   * 80e9409f-78fa-42ab-84bd-83f40c******
   */
  keyId?: string;
  /**
   * @remarks
   * The name of the parameter. The name must be 1 to 180 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
   * 
   * This parameter is required.
   * 
   * @example
   * MySecretParameter
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"k1": "v1", "k2": "v2"}
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The type of the parameter. Set the value to Secret.
   * 
   * @example
   * Secret
   */
  type?: string;
  /**
   * @remarks
   * The value of the encryption parameter. The value must be 1 to 4096 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * SecretParameter
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      constraints: 'Constraints',
      DKMSInstanceId: 'DKMSInstanceId',
      description: 'Description',
      keyId: 'KeyId',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tagsShrink: 'Tags',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      constraints: 'string',
      DKMSInstanceId: 'string',
      description: 'string',
      keyId: 'string',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tagsShrink: 'string',
      type: 'string',
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

