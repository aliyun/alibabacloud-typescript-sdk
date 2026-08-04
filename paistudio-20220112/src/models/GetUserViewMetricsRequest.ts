// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserViewMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * The sort order. Valid values:
   * - asc: ascending order.
   * - desc: descending order.
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The page size.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The sorting criterion.
   * 
   * @example
   * GmtModified
   */
  sortBy?: string;
  /**
   * @remarks
   * The time step. Default value: 5m. Valid values for the time unit:
   * 
   * - h: hours.
   * 
   * - m: minutes.
   * 
   * - s: seconds.
   * 
   * If no unit is specified, the default unit s (seconds) is used.
   * 
   * @example
   * 1h
   */
  timeStep?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 123456
   */
  userId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 86995
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      timeStep: 'TimeStep',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      sortBy: 'string',
      timeStep: 'string',
      userId: 'string',
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

