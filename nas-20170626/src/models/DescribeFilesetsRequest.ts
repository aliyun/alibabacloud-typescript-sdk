// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFilesetsRequestFilters } from "./DescribeFilesetsRequestFilters";


export class DescribeFilesetsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * *   The IDs of CPFS file systems must start with `cpfs-`. Example: cpfs-099394bd928c\\*\\*\\*\\*.
   * *   The IDs of CPFS for LINGJUN file systems must start with `bmcpfs-`. Example: bmcpfs-290w65p03ok64ya\\*\\*\\*\\*.
   * 
   * >  CPFS is not supported on the international site.
   * 
   * This parameter is required.
   * 
   * @example
   * bmcpfs-290w65p03ok64ya****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The filter that is used to query filesets.
   */
  filters?: DescribeFilesetsRequestFilters[];
  /**
   * @remarks
   * The number of results for each query.
   * 
   * Valid values: 10 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * TGlzdFJlc291cmNlU****mVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0=
   */
  nextToken?: string;
  /**
   * @remarks
   * The condition by which the results are sorted. Valid values:
   * 
   * *   FileCountLimit: the file quantity quota
   * *   SizeLimit: the capacity quota
   * *   FileCountUsage: the usage of the file quantity quota
   * *   SpaceUsage: the capacity usage
   * 
   * @example
   * FileCountLimit
   */
  orderByField?: string;
  /**
   * @remarks
   * The order in which you want to sort the results. Valid values:
   * 
   * *   asc (default): ascending order
   * *   desc: descending order
   * 
   * >  This parameter takes effect only if you specify the OrderByField parameter.
   * 
   * @example
   * asc
   */
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      filters: 'Filters',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderByField: 'OrderByField',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      filters: { 'type': 'array', 'itemType': DescribeFilesetsRequestFilters },
      maxResults: 'number',
      nextToken: 'string',
      orderByField: 'string',
      sortOrder: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

