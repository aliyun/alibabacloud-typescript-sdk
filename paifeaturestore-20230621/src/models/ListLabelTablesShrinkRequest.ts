// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLabelTablesShrinkRequest extends $dara.Model {
  labelTableIdsShrink?: string;
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
      labelTableIdsShrink: 'LabelTableIds',
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
      labelTableIdsShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

