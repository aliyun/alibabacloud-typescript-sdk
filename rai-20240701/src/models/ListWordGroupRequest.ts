// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWordGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Keyword group name.
   * 
   * @example
   * testGroup
   */
  groupName?: string;
  /**
   * @remarks
   * When performing a paginated query, sort the specified field in ascending or descending order. Values are as follows:
   * * asc: Ascending.
   * * desc: Descending.
   * 
   * @example
   * asc
   */
  order?: string;
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, the maximum number of results returned per page.
   * Maximum limit: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * Sort field.
   * 
   * @example
   * GmtModified
   */
  sortBy?: string;
  /**
   * @remarks
   * Workspace ID.
   * 
   * @example
   * 620***
   */
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sortBy: 'SortBy',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      sortBy: 'string',
      workspaceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

