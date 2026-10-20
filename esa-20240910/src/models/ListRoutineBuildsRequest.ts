// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRoutineBuildsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number Settings for paging in a paged query. The value must be greater than or equal to 1.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page for paging in a paged query. Valid values: 1 to 500.
   * 
   * @example
   * 500
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the Edge Routine (ER).
   * 
   * @example
   * test-routine
   */
  routineName?: string;
  /**
   * @remarks
   * The field used for sorting. By default, tasks are sorted by creation time. Valid values:
   * 
   * - CreateTime: Creation time.
   * - ExpireTime: Expiration time.
   * 
   * @example
   * CreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The sort order. Default value: desc. Valid values:
   * 
   * - asc: Ascending order.
   * - desc: Descending order.
   * 
   * @example
   * asc
   */
  sortOrder?: string;
  /**
   * @remarks
   * The status of the build task. Valid values:
   * 
   * - int: Initialized.
   * - pending: Preparing.
   * - building: Building.
   * - succeed: Succeeded.
   * - failed: Failed.
   * - canceled: Canceled.
   * 
   * @example
   * canceled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      routineName: 'RoutineName',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
      routineName: 'string',
      sortBy: 'string',
      sortOrder: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

