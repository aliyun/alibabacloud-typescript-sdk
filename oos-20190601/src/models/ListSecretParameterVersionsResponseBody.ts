// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecretParameterVersionsResponseBodyParameterVersions extends $dara.Model {
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
   * 2020-09-01T08:01:43Z
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
      parameterVersion: 'ParameterVersion',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterVersion: 'number',
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

export class ListSecretParameterVersionsResponseBody extends $dara.Model {
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
   * 2020-09-01T08:01:43Z
   */
  createdDate?: string;
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
   * p-4c4b401cab6747xxxxxx
   */
  id?: string;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
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
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ3NjFENDdB
   */
  nextToken?: string;
  /**
   * @remarks
   * The information about the version of the encryption parameter.
   */
  parameterVersions?: ListSecretParameterVersionsResponseBodyParameterVersions[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DBA6E6C8-F75D-41DE-AFF5-1FA03F551CA3
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The type of the encryption parameter.
   * 
   * @example
   * Secret
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      parameterVersions: 'ParameterVersions',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      parameterVersions: { 'type': 'array', 'itemType': ListSecretParameterVersionsResponseBodyParameterVersions },
      requestId: 'string',
      totalCount: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameterVersions)) {
      $dara.Model.validateArray(this.parameterVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

