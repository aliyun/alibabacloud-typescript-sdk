// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTensorboardsRequest extends $dara.Model {
  /**
   * @remarks
   * The visibility of the job. Valid values:
   * - PUBLIC: The job is visible to all users in the workspace.
   * - PRIVATE: The job is visible only to you and administrators in the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The display name of the TensorBoard instance.
   * 
   * @example
   * TestTensorboard
   */
  displayName?: string;
  /**
   * @remarks
   * The end time of the query interval. Filters instances by the UTC creation time of the TensorBoard instance. If this parameter is left empty, the default value is the current time.
   * 
   * @example
   * 2020-11-09T14:45:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Filters TensorBoard instances by the DLC job ID. Refer to [ListJobs](https://help.aliyun.com/document_detail/459676.html) to obtain the job ID.
   * 
   * @example
   * dlc-xxx
   */
  jobId?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * - desc: Descending order.
   * - asc: Ascending order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The page number of the current page in the paged query. Pages start from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of TensorBoard instances to return on each page in the paged query.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The billing method of the TensorBoard instance. Valid values:
   * - Free: The instance uses free resources.
   * - Postpaid: The instance uses pay-as-you-go resources.
   * 
   * @example
   * Postpaid
   */
  paymentType?: string;
  /**
   * @remarks
   * The resource quota ID.
   * > - Currently, only whitelisted users can use resource quotas to create TensorBoard instances. To use this feature, contact us.
   * > - This parameter is valid only when the TensorBoard instance uses resources from a resource quota.
   * 
   * @example
   * quota12***
   */
  quotaId?: string;
  /**
   * @remarks
   * Specifies whether to return only the TensorBoard instances created by the current logged-on user.
   * 
   * @example
   * false
   */
  showOwn?: boolean;
  /**
   * @remarks
   * The field by which to sort the returned results. Valid values:
   * - DisplayName: The name of the job.
   * - GmtCreateTime: The creation time of the job.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The data source ID. Refer to [ListJobs](https://help.aliyun.com/document_detail/459676.html) to obtain the job ID.
   * 
   * @example
   * dlc-xxxxxx
   */
  sourceId?: string;
  /**
   * @remarks
   * The data source. Currently, only DLC training jobs are supported.
   * 
   * @example
   * job
   */
  sourceType?: string;
  /**
   * @remarks
   * The start time of the query interval. Filters instances by the UTC creation time of the TensorBoard instance. If this parameter is left empty, the default value is 7 days before the current time.
   * 
   * @example
   * 2020-11-08T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the TensorBoard instance. Valid values:
   * - Creating: The instance is being created.
   * - Running: The instance is running.
   * - Stopped: The instance is stopped.
   * - Succeeded: The instance succeeded.
   * - Failed: The instance failed.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * Filters TensorBoard instances by the TensorBoard ID.
   * 
   * @example
   * tensorboard-xxx
   */
  tensorboardId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 161****3000
   */
  userId?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * she****mo
   */
  username?: string;
  /**
   * @remarks
   * Specifies whether to display details. Valid values:
   * - true: Displays details.
   * - false: Does not display details.
   * 
   * @example
   * true
   */
  verbose?: boolean;
  /**
   * @remarks
   * The workspace ID. Retrieves the list of TensorBoard instances based on the workspace ID. <props="china">Refer to [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
   * @example
   * 380
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      displayName: 'DisplayName',
      endTime: 'EndTime',
      jobId: 'JobId',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      paymentType: 'PaymentType',
      quotaId: 'QuotaId',
      showOwn: 'ShowOwn',
      sortBy: 'SortBy',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      startTime: 'StartTime',
      status: 'Status',
      tensorboardId: 'TensorboardId',
      userId: 'UserId',
      username: 'Username',
      verbose: 'Verbose',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      displayName: 'string',
      endTime: 'string',
      jobId: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      paymentType: 'string',
      quotaId: 'string',
      showOwn: 'boolean',
      sortBy: 'string',
      sourceId: 'string',
      sourceType: 'string',
      startTime: 'string',
      status: 'string',
      tensorboardId: 'string',
      userId: 'string',
      username: 'string',
      verbose: 'boolean',
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

