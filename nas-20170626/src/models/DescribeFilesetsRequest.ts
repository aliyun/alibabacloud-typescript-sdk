// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFilesetsRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The name of the filter key. Valid values:
   * 
   * - FsetIds: Filters by fileset ID.
   * - FileSystemPath: Filters by the path of the fileset in the CPFS file system.
   * - Description: Filters by the description of the fileset.
   * - QuotaExists: Filters by whether a quota exists.
   * > Only CPFS for Lingjun 2.7.0 and later support filtering by the QuotaExists parameter.
   * 
   * @example
   * FsetIds
   */
  key?: string;
  /**
   * @remarks
   * The value of the filter key. This parameter does not support wildcards.
   * 
   * - When Key is set to FsetIds, Value is set to the fileset ID. You can specify one or more fileset IDs. You can specify up to 10 fileset IDs. Separate multiple values with commas (,). Example: `fset-1902718ea0ae****` or `fset-1902718ea0ae****,fset-3212718ea0ae****`.
   * - When Key is set to FileSystemPath, Value is set to the path or a part of the path of the fileset in the CPFS file system. The value must be 2 to 1,024 characters in length and encoded in UTF-8.
   * - When Key is set to Description, Value is set to the description or a part of the description of the fileset.
   * - When Key is set to QuotaExists, Value is set to true or false. If you do not specify this parameter, all filesets are returned.
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
   * - CPFS: Must start with `cpfs-`, such as cpfs-099394bd928c****.
   * 
   * - CPFS for Lingjun: Must start with `bmcpfs-`, such as bmcpfs-290w65p03ok64ya****.
   * > This operation supports only CPFS file systems (with an ID prefix of cpfs-* or bmcpfs-*). Standard NAS and Extreme NAS file systems are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * bmcpfs-290w65p03ok64ya****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The filter conditions for the filesets to query.
   */
  filters?: DescribeFilesetsRequestFilters[];
  /**
   * @remarks
   * The maximum number of entries to return for a single request.
   * 
   * Valid values: 10 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. If the returned results are truncated, you can use this token to initiate another request to retrieve the remaining results.
   * 
   * @example
   * TGlzdFJlc291cmNlU****mVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0=
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort field.
   * 
   * - FileCountLimit: The file count limit of the quota.
   * - SizeLimit: The capacity limit of the quota.
   * - FileCountUsage: The file count usage.
   * - SpaceUsage: The capacity usage.
   * 
   * @example
   * FileCountLimit
   */
  orderByField?: string;
  /**
   * @remarks
   * The sort order.
   * 
   * - asc (default): Ascending order. Results are sorted from smallest to largest.
   * - desc: Descending order. Results are sorted from largest to smallest.
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

