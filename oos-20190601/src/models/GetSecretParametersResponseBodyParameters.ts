// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecretParametersResponseBodyParameters extends $dara.Model {
  /**
   * @remarks
   * The constraints of the encryption parameter.
   * 
   * @example
   * {\\"AllowedValues\\": [\\"test\\"]}
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
   * 2020-10-22T03:11:13Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The description of the encryption parameter.
   * 
   * @example
   * secretParameter
   */
  description?: string;
  /**
   * @remarks
   * The ID of the encryption parameter.
   * 
   * @example
   * p-7cdc0000000000000000
   */
  id?: string;
  /**
   * @remarks
   * The ID of the key.
   * 
   * @example
   * ssh-bp67acfmxazb4p****
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
   * The tags.
   * 
   * @example
   * {"k1": "v1", "k2": "v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The data type of the encryption parameter.
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
   * 2020-10-22T03:11:13Z
   */
  updatedDate?: string;
  /**
   * @remarks
   * The value of the encryption parameter.
   * 
   * @example
   * secretParameter,secretParameter1
   */
  value?: string;
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
      value: 'Value',
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

