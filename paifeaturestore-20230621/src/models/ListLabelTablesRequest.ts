// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLabelTablesRequest extends $dara.Model {
  labelTableIds?: string[];
  /**
   * @example
   * label_table1
   */
  name?: string;
  /**
   * @example
   * Asc
   */
  order?: string;
  /**
   * @example
   * 1231432432****
   */
  owner?: string;
  /**
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @example
   * project1
   */
  projectId?: string;
  /**
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

