// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSupabaseProjectsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to return for the current request. Default value: 10.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The next token.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) operation to query available region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The field used for searching. Valid values: ProjectID and ProjectName.
   * 
   * @example
   * ProjectId
   */
  searchField?: string;
  /**
   * @remarks
   * The search keyword. You can filter instances by instance ID or description.
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in the specified region, including the instance IDs and descriptions.
   * 
   * @example
   * gp-bp***************
   */
  searchValue?: string;
  /**
   * @remarks
   * The field used for sorting. Valid values: `gmtCreate` and `gmtModified`. Default value: `gmtCreate`.
   * 
   * @example
   * UpdatedDate
   */
  sortField?: string;
  /**
   * @remarks
   * The sort order. Default value: DESC.
   * 
   * Valid values:
   * 
   * - ASC: ascending order.
   * 
   * - DESC: descending order.
   * 
   * @example
   * desc
   */
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      searchField: 'SearchField',
      searchValue: 'SearchValue',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      searchField: 'string',
      searchValue: 'string',
      sortField: 'string',
      sortOrder: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

