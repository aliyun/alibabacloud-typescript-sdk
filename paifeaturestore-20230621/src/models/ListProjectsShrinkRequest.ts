// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The project name to filter by.
   * 
   * @example
   * fs1
   */
  name?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - `Asc`: ascending order.
   * 
   * - `Desc`: descending order.
   * 
   * @example
   * Asc
   */
  order?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the project owner.
   * 
   * @example
   * 134324352****
   */
  owner?: string;
  /**
   * @remarks
   * The page number. Starts from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * An array of project IDs to filter by.
   */
  projectIdsShrink?: string;
  /**
   * @remarks
   * The field to sort the results by.
   * 
   * @example
   * GmtModifiedTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The ID of the workspace. Call the [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) operation to get this ID.
   * 
   * @example
   * 234
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      order: 'Order',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectIdsShrink: 'ProjectIds',
      sortBy: 'SortBy',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      order: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectIdsShrink: 'string',
      sortBy: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

