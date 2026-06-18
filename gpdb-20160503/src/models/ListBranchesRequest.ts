// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBranchesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records to return in this query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. It is not required for the first query. For subsequent queries, use the NextToken returned from the previous query.
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
   * The parent branch ID, used to specify the parent branch for a new branch or as a query filter condition.
   * 
   * @example
   * br-main
   */
  parentBranchId?: string;
  /**
   * @remarks
   * The region ID. Must be specified when creating a primary branch. When creating a sub-branch, it inherits the region of the primary branch by default.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The search keyword. Supports fuzzy search by branch ID or branch name.
   * 
   * @example
   * main
   */
  search?: string;
  /**
   * @remarks
   * The sort field.
   * 
   * Valid values:
   * - BranchName: Sort by branch name.
   * - CreateTime: Sort by creation time.
   * - LastRunTime: Sort by last run time.
   * 
   * Default value: CreateTime.
   * 
   * @example
   * CreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The sort direction.
   * 
   * Valid values:
   * - Asc: Ascending order.
   * - Desc: Descending order.
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

