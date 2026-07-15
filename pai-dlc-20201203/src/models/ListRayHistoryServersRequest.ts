// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRayHistoryServersRequest extends $dara.Model {
  /**
   * @remarks
   * The display name of the job.
   * 
   * @example
   * test
   */
  displayName?: string;
  /**
   * @remarks
   * The end time of the query range. The job creation time is used for filtering.
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
   * 按ID前缀过滤
   */
  idPrefix?: string;
  /**
   * @remarks
   * Filters results by the time after which they were modified.
   * 
   * @example
   * 2020-11-09T16:00:00Z
   */
  modifiedAfter?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * - desc: descending order.
   * - asc: ascending order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The page number of the page to return in a paged query. Paging starts from page 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of RayHistoryServer entries to return on each page in a paged query. Paging is used to return results in batches.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The billing method. Valid values:
   * - PrePaid
   * - PostPaid.
   * 
   * @example
   * Postpaid
   */
  paymentType?: string;
  /**
   * @remarks
   * The resource group ID. For information about how to query the ID of a dedicated resource group, see [Manage resource quotas](https://help.aliyun.com/document_detail/2651299.html).
   * 
   * @example
   * quotaxxx
   */
  resourceId?: string;
  /**
   * @remarks
   * Specifies whether to return only the RayHistoryServer entries created by the current user.
   * 
   * @example
   * true
   */
  showOwn?: boolean;
  /**
   * @remarks
   * The field by which to sort the returned results. Valid values:
   * - DisplayName
   * - GmtCreateTime
   * - UserId
   * - ResourceId
   * - Status
   * - GmtModifyTime.
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
   * The RayHistoryServer status. Valid values:
   * - Creating: being created.
   * - Queuing: waiting in queue.
   * - Running: running.
   * - Stopped: stopped.
   * - Failed: failed.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The storage path of Ray logs.
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
   * The workspace ID. <props="china">For information about how to obtain the workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html)..
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

