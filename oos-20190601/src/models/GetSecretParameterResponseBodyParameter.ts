// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecretParameterResponseBodyParameter extends $dara.Model {
  /**
   * @remarks
   * The constraints of the encryption parameter.
   * 
   * @example
   * \\"{\\"\\"AllowedValues":["secretparameter"],"AllowedPattern":".*","MinLength":0,"MaxLength":20}\\"
   */
  constraints?: string;
  /**
   * @remarks
   * The user who created the encryption parameter.
   * 
   * @example
   * root(130900000)
   */
  createdBy?: string;
  /**
   * @remarks
   * The time when the encryption parameter was created.
   * 
   * @example
   * 2020-09-01T09:28:47Z
   */
  createdDate?: string;
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
   * The description of the encryption parameter.
   * 
   * @example
   * SecretParameter
   */
  description?: string;
  /**
   * @remarks
   * The ID of the encryption parameter.
   * 
   * @example
   * p-14ed150fdcd048xxxxxx
   */
  id?: string;
  /**
   * @remarks
   * The ID of the key of Key Management Service (KMS) that is used for encryption.
   * 
   * @example
   * 80e9409f-78fa-42ab-84bd-83f40c******
   */
  keyId?: string;
  /**
   * @remarks
   * The name of the encryption parameter.
   * 
   * @example
   * MySecretParameter
   */
  name?: string;
  /**
   * @remarks
   * The version number of the encryption parameter.
   * 
   * @example
   * 1
   */
  parameterVersion?: number;
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
   * The share type of the encryption parameter.
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * The tags of the parameter.
   * 
   * @example
   * {"k1": "v1", "k2": "v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The type of the parameter.
   * 
   * @example
   * Secret
   */
  type?: string;
  /**
   * @remarks
   * The user who updated the encryption parameter.
   * 
   * @example
   * root(130900000)
   */
  updatedBy?: string;
  /**
   * @remarks
   * The time when the encryption parameter was updated.
   * 
   * @example
   * 2020-09-01T09:35:17Z
   */
  updatedDate?: string;
  /**
   * @remarks
   * The value of the encryption parameter.
   * 
   * @example
   * SecretParameter
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      constraints: 'Constraints',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      DKMSInstanceId: 'DKMSInstanceId',
      description: 'Description',
      id: 'Id',
      keyId: 'KeyId',
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tags: 'Tags',
      type: 'Type',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraints: 'string',
      createdBy: 'string',
      createdDate: 'string',
      DKMSInstanceId: 'string',
      description: 'string',
      id: 'string',
      keyId: 'string',
      name: 'string',
      parameterVersion: 'number',
      resourceGroupId: 'string',
      shareType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
      value: 'string',
    };
  }

  validate() {
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

