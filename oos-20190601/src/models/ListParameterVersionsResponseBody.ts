// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListParameterVersionsResponseBodyParameterVersions } from "./ListParameterVersionsResponseBodyParameterVersions";


export class ListParameterVersionsResponseBody extends $dara.Model {
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
   * 2020-09-07T11:37:29Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The description of the common parameter.
   * 
   * @example
   * parameter-description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the common parameter.
   * 
   * @example
   * p-a483b520e0axxxxxxxxx
   */
  id?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
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
   * The pagination token that was used in the next request to retrieve a new page of results.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ3NjFENDdB
   */
  nextToken?: string;
  /**
   * @remarks
   * The information about the version of the common parameter.
   */
  parameterVersions?: ListParameterVersionsResponseBodyParameterVersions[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FD08D89D-B6C8-4AA2-A2B4-521D3F4A39FA
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 50
   */
  totalCount?: number;
  /**
   * @remarks
   * The data type of the common parameter.
   * 
   * @example
   * String
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
      parameterVersions: { 'type': 'array', 'itemType': ListParameterVersionsResponseBodyParameterVersions },
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

