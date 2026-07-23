// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRoutineBuildsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number for a paged query. The value must be greater than or equal to 1.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page for a paged query. Valid values: 1 to 500.
   * 
   * @example
   * 500
   */
  pageSize?: number;
  /**
   * @remarks
   * The ER name.
   * 
   * @example
   * test-routine
   */
  routineName?: string;
  /**
   * @remarks
   * The field used for sorting. By default, results are sorted by purchase time. Valid values:
   * 
   * - CreateTime: purchase time.
   * - ExpireTime: expiration time.
   * 
   * @example
   * CreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The sort order. Default value: desc. Valid values:
   * 
   * - asc: ascending order.
   * - desc: descending order.
   * 
   * @example
   * asc
   */
  sortOrder?: string;
  /**
   * @remarks
   * The status of the build task. Valid values:
   * 
   * - int: initialization
   * - pending: preparing
   * - building: building
   * - succeed: build succeeded
   * - failed: build failed
   * - canceled: canceled
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

