// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetParameterResponseBodyParameter extends $dara.Model {
  /**
   * @remarks
   * The constraints of the common parameter.
   * 
   * @example
   * \\"{\\"\\"AllowedValues":["parameter"],"AllowedPattern":"parameter","MinLength":0,"MaxLength":20}\\"
   */
  constraints?: string;
  /**
   * @remarks
   * The user who created the common parameter.
   * 
   * @example
   * root(130900000)
   */
  createdBy?: string;
  /**
   * @remarks
   * The time when the common parameter was created.
   * 
   * @example
   * 2020-09-01T08:01:43Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The description of the common parameter.
   * 
   * @example
   * parameter
   */
  description?: string;
  /**
   * @remarks
   * The ID of the common parameter.
   * 
   * @example
   * p-4c4b401cab6747xxxxxx
   */
  id?: string;
  /**
   * @remarks
   * The name of the common parameter.
   * 
   * @example
   * MyParameter
   */
  name?: string;
  /**
   * @remarks
   * The version number of the common parameter.
   * 
   * @example
   * 1
   */
  parameterVersion?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxsn4m*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The share type of the common parameter.
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * The tags added to the common parameter.
   * 
   * @example
   * {"k1":"v1","k2":"v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The data type of the common parameter.
   * 
   * @example
   * String
   */
  type?: string;
  /**
   * @remarks
   * The user who updated the common parameter.
   * 
   * @example
   * root(130900000)
   */
  updatedBy?: string;
  /**
   * @remarks
   * The time when the common parameter was updated.
   * 
   * @example
   * 2020-09-01T08:01:43Z
   */
  updatedDate?: string;
  /**
   * @remarks
   * The value of the common parameter.
   * 
   * @example
   * parameter
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      constraints: 'Constraints',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
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

