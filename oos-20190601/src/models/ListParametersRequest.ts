// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListParametersRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 10 to 100. Default value: 50.
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
   * The pagination token that can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzA
   */
  nextToken?: string;
  /**
   * @remarks
   * The path of the parameter. For example, if the name of a parameter is /path/path1/Myparameter, the path of the parameter is /path/path1/.
   * 
   * @example
   * /path1/path2/
   */
  path?: string;
  /**
   * @remarks
   * Specifies whether to query parameters from all levels of directories in the specified path. Default value: false.
   * 
   * @example
   * false
   */
  recursive?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The share type of the common parameter. Valid values:
   * 
   * *   Public
   * *   Private
   * 
   * Default value: Private.
   * 
   * @example
   * ‘Private’
   */
  shareType?: string;
  /**
   * @remarks
   * The field used to sort the query results. Valid values:
   * 
   * *   Name
   * *   CreatedDate
   * 
   * @example
   * Name
   */
  sortField?: string;
  /**
   * @remarks
   * The order in which the entries are sorted. Valid values:
   * 
   * *   Ascending
   * *   Descending (Default)
   * 
   * @example
   * Descending
   */
  sortOrder?: string;
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
   * The data type of the common parameter.
   * 
   * @example
   * String
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      path: 'Path',
      recursive: 'Recursive',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      path: 'string',
      recursive: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      sortField: 'string',
      sortOrder: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
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

