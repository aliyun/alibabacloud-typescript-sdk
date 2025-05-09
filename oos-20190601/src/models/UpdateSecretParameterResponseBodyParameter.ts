// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSecretParameterResponseBodyParameter extends $dara.Model {
  /**
   * @remarks
   * The constraints of the parameter.
   * 
   * @example
   * \\"{\\"\\"AllowedValues":["secretparameter"],"AllowedPattern":".*","MinLength":0,"MaxLength":20}\\"
   */
  constraints?: string;
  /**
   * @remarks
   * The user who created the parameter.
   * 
   * @example
   * root(130900000)
   */
  createdBy?: string;
  /**
   * @remarks
   * The time when the parameter was created.
   * 
   * @example
   * 2020-09-01T09:30:36Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The description of the parameter.
   * 
   * @example
   * SecretParameter
   */
  description?: string;
  /**
   * @remarks
   * The ID of the parameter.
   * 
   * @example
   * p-0b0fff9919c946xxxxxx
   */
  id?: string;
  /**
   * @remarks
   * The ID of customer master key (CMK) of Key Management Service (KMS) that is used for encryption.
   * 
   * @example
   * 80e9409f-78fa-42ab-84bd-83f40c******
   */
  keyId?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * MyParameter
   */
  name?: string;
  /**
   * @remarks
   * The version number of the parameter.
   * 
   * @example
   * 2
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
   * The share type of the parameter.
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
  tags?: string;
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
   * The user who updated the parameter.
   * 
   * @example
   * root(130900000)
   */
  updatedBy?: string;
  /**
   * @remarks
   * The time when the parameter was updated.
   * 
   * @example
   * 2020-09-01T09:33:11Z
   */
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      constraints: 'Constraints',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraints: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      keyId: 'string',
      name: 'string',
      parameterVersion: 'number',
      resourceGroupId: 'string',
      shareType: 'string',
      tags: 'string',
      type: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

