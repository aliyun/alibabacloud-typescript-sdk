// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetParametersResponseBodyParameters extends $dara.Model {
  /**
   * @remarks
   * The constraints of the common parameter.
   * 
   * @example
   * {\\"MaxLength\\": 2}
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
   * 2020-10-22T03:30:45Z
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
   * p-7cdc0000000000000000
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
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxsn4m4******
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
   * The tags.
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
   * StringList
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
   * The time when the parameter was updated.
   * 
   * @example
   * 2020-10-22T03:30:45Z
   */
  updatedDate?: string;
  /**
   * @remarks
   * The value of the common parameter.
   * 
   * @example
   * parameter,parameter1
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

export class GetParametersResponseBody extends $dara.Model {
  /**
   * @remarks
   * Invalid parameters.
   */
  invalidParameters?: string[];
  /**
   * @remarks
   * The information about the common parameters.
   */
  parameters?: GetParametersResponseBodyParameters[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2597E94B-5346-42D1-BB58-D3333EDD0975
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invalidParameters: 'InvalidParameters',
      parameters: 'Parameters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invalidParameters: { 'type': 'array', 'itemType': 'string' },
      parameters: { 'type': 'array', 'itemType': GetParametersResponseBodyParameters },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.invalidParameters)) {
      $dara.Model.validateArray(this.invalidParameters);
    }
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

