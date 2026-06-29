// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFilesetsRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The name of the filter key. Valid values:
   * 
   * - FsetIds: filters by fileset ID.
   * - FileSystemPath: filters by the path of the fileset in the CPFS file system.
   * - Description: filters by the description of the fileset.
   * - QuotaExists: filters by whether a quota exists.
   * > Only CPFS for Lingjun 2.7.0 and later support filtering by the QuotaExists parameter.
   * 
   * @example
   * FsetIds
   */
  key?: string;
  /**
   * @remarks
   * The value of the filter key. Wildcards are not supported for this parameter.
   * 
   * - If Key is set to FsetIds, Value is set to a fileset ID. You can specify one or more fileset IDs, up to 10. Separate multiple values with commas (,). Example: `fset-1902718ea0ae****` or `fset-1902718ea0ae****,fset-3212718ea0ae****`.
   * - If Key is set to FileSystemPath, Value is set to the full path or a partial path of the fileset in the CPFS file system. The value must be 2 to 1,024 characters in length and encoded in UTF-8.
   * - If Key is set to Description, Value is set to the full description or a partial description of the fileset.
   * - If Key is set to QuotaExists, Value is set to true or false. If you leave this parameter empty, all filesets are returned.
   * 
   * @example
   * fset-1902718ea0ae****
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class DescribeFilesetsRequest extends $dara.Model {
  /**
   * @remarks
   * The file system ID.
   * 
   * - CPFS: The ID must start with `cpfs-`, such as cpfs-099394bd928c****.
   * 
   * - CPFS for Lingjun: The ID must start with `bmcpfs-`, such as bmcpfs-290w65p03ok64ya****.
   * 
   * This parameter is required.
   * 
   * @example
   * bmcpfs-290w65p03ok64ya****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The filter key information for the filesets to query.
   */
  filters?: DescribeFilesetsRequestFilters[];
  /**
   * @remarks
   * The number of results per query.
   * 
   * Valid values: 10 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If the response is truncated, you can use this token in the next request to retrieve the remaining results.
   * 
   * @example
   * TGlzdFJlc291cmNlU****mVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0=
   */
  nextToken?: string;
  /**
   * @remarks
   * The field by which to sort the results.
   * 
   * - FileCountLimit: the quota file count limit.
   * - SizeLimit: the quota capacity limit.
   * - FileCountUsage: the file count usage.
   * - SpaceUsage: the capacity usage.
   * 
   * @example
   * FileCountLimit
   */
  orderByField?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - asc (default): ascending order, which sorts results from smallest to largest.
   * - desc: descending order, which sorts results from largest to smallest.
   * > This parameter takes effect only when the OrderByField parameter is specified.
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

