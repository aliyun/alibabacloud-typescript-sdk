// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecretParametersShrinkRequest extends $dara.Model {
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
   * The name of the parameter. **You can enter a keyword to query parameter names in fuzzy match mode.
   * 
   * @example
   * MySecretParameter
   */
  name?: string;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * sPH90GZOVGC6KPDUL0FIIbEtMQHq_19S6_4O_XqA
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
   * The tags of the parameter.
   * 
   * @example
   * {"k1": "v1", "k2": "v2"}
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      path: 'Path',
      recursive: 'Recursive',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      tagsShrink: 'Tags',
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
      sortField: 'string',
      sortOrder: 'string',
      tagsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

