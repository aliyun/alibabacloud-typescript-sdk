// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLabelTablesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the label tables by which to filter the results.
   */
  labelTableIds?: string[];
  /**
   * @remarks
   * The name of the label table.
   * 
   * @example
   * label_table1
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
   * The Alibaba Cloud account ID of the owner.
   * 
   * @example
   * 1231432432****
   */
  owner?: string;
  /**
   * @remarks
   * The page number. Page numbers start from 1. Default value: 1.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The project ID. You can call the `ListProjects` operation to obtain this ID.
   * 
   * @example
   * project1
   */
  projectId?: string;
  /**
   * @remarks
   * The field by which to sort the results.
   * 
   * @example
   * GmtModifiedTime
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      labelTableIds: 'LabelTableIds',
      name: 'Name',
      order: 'Order',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelTableIds: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      order: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      sortBy: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labelTableIds)) {
      $dara.Model.validateArray(this.labelTableIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

