// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecretParametersByPathResponseBodyParameters extends $dara.Model {
  /**
   * @remarks
   * The constraints of the encryption parameter.
   * 
   * @example
   * {\\"AllowedPattern\\": \\"^[a-g]*$\\"}
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
   * The time when the encryption parameter was updated.
   * 
   * @example
   * 2020-10-21T06:22:48Z
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
   * 090xxbex-xexx-xxxx-axfc-ddxxcxxxxcex
   */
  keyId?: string;
  /**
   * @remarks
   * The name of the encryption parameter.
   * 
   * @example
   * mySecretParameter
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
   * The share type of the encryption parameter.
   * 
   * @example
   * Private
   */
  shareType?: string;
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
   * 2020-10-21T06:22:48Z
   */
  updatedDate?: string;
  /**
   * @remarks
   * The value of the encryption parameter.
   * 
   * @example
   * secretParameter
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
      shareType: 'ShareType',
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
      shareType: 'string',
      type: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
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

export class GetSecretParametersByPathResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * gAAAAABfTgv5ewUWmNdJ3g7JVLvX70sPH90GZOVGC
   */
  nextToken?: string;
  /**
   * @remarks
   * The information about the encryption parameters.
   */
  parameters?: GetSecretParametersByPathResponseBodyParameters[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25156E99-7437-4590-AA58-2ACA17DE405C
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      parameters: 'Parameters',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      parameters: { 'type': 'array', 'itemType': GetSecretParametersByPathResponseBodyParameters },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

