// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRayHistoryServersRequest extends $dara.Model {
  /**
   * @example
   * test
   */
  displayName?: string;
  /**
   * @example
   * 2020-11-09T16:00:00Z
   */
  endTime?: string;
  idPrefix?: string;
  /**
   * @example
   * 2020-11-09T16:00:00Z
   */
  modifiedAfter?: string;
  /**
   * @example
   * desc
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * Postpaid
   */
  paymentType?: string;
  /**
   * @example
   * quotaxxx
   */
  resourceId?: string;
  /**
   * @example
   * true
   */
  showOwn?: boolean;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @example
   * 2020-11-08T16:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * running
   */
  status?: string;
  /**
   * @example
   * 123456789
   */
  userIdForFilter?: string;
  /**
   * @example
   * myusername
   */
  username?: string;
  /**
   * @example
   * 268
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      endTime: 'EndTime',
      idPrefix: 'IdPrefix',
      modifiedAfter: 'ModifiedAfter',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      paymentType: 'PaymentType',
      resourceId: 'ResourceId',
      showOwn: 'ShowOwn',
      sortBy: 'SortBy',
      startTime: 'StartTime',
      status: 'Status',
      userIdForFilter: 'UserIdForFilter',
      username: 'Username',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      endTime: 'string',
      idPrefix: 'string',
      modifiedAfter: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      paymentType: 'string',
      resourceId: 'string',
      showOwn: 'boolean',
      sortBy: 'string',
      startTime: 'string',
      status: 'string',
      userIdForFilter: 'string',
      username: 'string',
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

