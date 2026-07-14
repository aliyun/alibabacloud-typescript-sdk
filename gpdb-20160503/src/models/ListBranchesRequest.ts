// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBranchesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records to return in this request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The cursor for the paged query. You do not need to specify this parameter for the first request. For subsequent requests, use the NextToken value returned in the previous response for paging.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number. The value must be greater than 0. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * Valid values:
   * - 10
   * - 20
   * - 50
   * - 100
   * 
   * Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The parent branch ID. This parameter specifies the parent branch for a new branch or a query filter.
   * 
   * @example
   * br-main
   */
  parentBranchId?: string;
  /**
   * @remarks
   * The region ID. This parameter is required when you create a primary branch. When you create a sub-branch, the region is inherited from the primary branch by default.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The search keyword. Fuzzy search by branch ID or branch name is supported.
   * 
   * @example
   * main
   */
  search?: string;
  /**
   * @remarks
   * The field by which to sort the results.
   * 
   * Valid values:
   * - BranchName: sorts by branch name.
   * - CreateTime: sorts by creation time.
   * - LastRunTime: sorts by last run time.
   * 
   * Default value: CreateTime.
   * 
   * @example
   * CreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The sort order.
   * 
   * Valid values:
   * - Asc: ascending order.
   * - Desc: descending order.
   * 
   * Default value: Desc.
   * 
   * @example
   * Desc
   */
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentBranchId: 'ParentBranchId',
      regionId: 'RegionId',
      search: 'Search',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      parentBranchId: 'string',
      regionId: 'string',
      search: 'string',
      sortBy: 'string',
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

