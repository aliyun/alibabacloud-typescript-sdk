// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRayHistoryServersRequest extends $dara.Model {
  /**
   * @remarks
   * The display name of the node.
   * 
   * @example
   * test
   */
  displayName?: string;
  /**
   * @remarks
   * The end time of the query range. The node creation time is used for filtering.
   * 
   * @example
   * 2020-11-09T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID prefix.
   * 
   * @example
   * Filter by ID prefix
   */
  idPrefix?: string;
  /**
   * @remarks
   * Filters results by the time after which the resource was last modified.
   * 
   * @example
   * 2020-11-09T16:00:00Z
   */
  modifiedAfter?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * - desc: descending order
   * - asc: ascending order
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The page number for a paging query. Paging starts from page 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of RayHistoryServers to return per page in a paging query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The payment method. Valid values:
   * - PrePaid
   * - PostPaid
   * 
   * @example
   * Postpaid
   */
  paymentType?: string;
  /**
   * @remarks
   * The resource group ID. To query the ID of a dedicated resource group, see [Manage resource quotas](https://help.aliyun.com/document_detail/2651299.html).
   * 
   * @example
   * quotaxxx
   */
  resourceId?: string;
  /**
   * @remarks
   * Specifies whether to return only the RayHistoryServers created by the current user.
   * 
   * @example
   * true
   */
  showOwn?: boolean;
  /**
   * @remarks
   * The field by which to sort the results. Valid values:
   * - DisplayName
   * - GmtCreateTime
   * - UserId
   * - ResourceId
   * - Status
   * - GmtModifyTime
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2020-11-08T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the RayHistoryServer. Valid values:
   * - Creating: The RayHistoryServer is being created.
   * - Queuing: The RayHistoryServer is queuing.
   * - Running: The RayHistoryServer is running.
   * - Stopped: The RayHistoryServer is stopped.
   * - Failed: The RayHistoryServer has failed.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The storage path for Ray logs.
   * 
   * @example
   * oss://bucket-test-hangzhou.oss-cn-hangzhou-internal.aliyuncs.com/tmp
   */
  storagePath?: string;
  /**
   * @remarks
   * Filters results by user ID.
   * 
   * @example
   * 123456789
   */
  userIdForFilter?: string;
  /**
   * @remarks
   * Filters results by username.
   * 
   * @example
   * myusername
   */
  username?: string;
  /**
   * @remarks
   * The workspace ID. <props="china">To obtain the workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
   * 
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
      storagePath: 'StoragePath',
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
      storagePath: 'string',
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

