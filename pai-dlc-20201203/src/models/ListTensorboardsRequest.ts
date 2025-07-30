// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTensorboardsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance visibility.
   * 
   * *   PUBLIC: TensorBoard instances are visible to all members in the workspace.
   * *   PRIVATE: TensorBoard instances are visible only to you and the administrator of the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The TensorBoard instance name.
   * 
   * @example
   * TestTensorboard
   */
  displayName?: string;
  /**
   * @remarks
   * The end time of the query. Use the UTC time when the TensorBoard instance is created to filter data. If you leave this parameter empty, the default value is the current time.
   * 
   * @example
   * 2020-11-09T14:45:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The job ID used to filter TensorBoard instances. For more information about how to obtain the ID of a job, see [ListJobs](https://help.aliyun.com/document_detail/459676.html).
   * 
   * @example
   * dlc-xxx
   */
  jobId?: string;
  /**
   * @remarks
   * The sorting order.
   * 
   * *   desc
   * *   asc
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The page number. Minimum value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of TensorBoard instances per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The billing method of TensorBoard instances.
   * 
   * *   Free: the TensorBoard instance that uses free resources.
   * *   Postpaid: the TensorBoard instance that uses pay-as-you-go resources.
   * 
   * @example
   * Postpaid
   */
  paymentType?: string;
  /**
   * @remarks
   * The resource quota ID.
   * 
   * > 
   * 
   * *   Only whitelisted users can use resource quotas to create TensorBoard instances. If you want to use this feature, contact us.
   * 
   * *   This parameter takes effect only when TensorBoard instances use resource quotas.
   * 
   * @example
   * quota12***
   */
  quotaId?: string;
  /**
   * @remarks
   * Specifies whether to return only the TensorBoard instances created by the current logon account.
   * 
   * @example
   * false
   */
  showOwn?: boolean;
  /**
   * @remarks
   * The returned field used to sort TensorBoard instances.
   * 
   * *   DisplayName: the name of the TensorBoard instance.
   * *   GmtCreateTime: the time when the TensorBoard instance is created.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The data source ID. For more information about how to obtain the ID of a job, see [ListJobs](https://help.aliyun.com/document_detail/459676.html).
   * 
   * @example
   * dlc-xxxxxx
   */
  sourceId?: string;
  /**
   * @remarks
   * The data source associated with the TensorBoard instance. This parameter is no longer used. Only Deep Learning Containers (DLC) training jobs are supported.
   * 
   * @example
   * job
   */
  sourceType?: string;
  /**
   * @remarks
   * The start time of the query. Use the UTC time when the TensorBoard instance is created to filter data. If you leave this parameter empty, the default value is seven days before the current time.
   * 
   * @example
   * 2020-11-08T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The TensorBoard instance status. Valid values:
   * 
   * *   Creating
   * *   Running
   * *   Stopped
   * *   Succeeded
   * *   Failed
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The TensorBoard instance ID used to filter TensorBoard instances.
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
   * Specifies whether to return the information about the TensorBoard instance.
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  verbose?: boolean;
  /**
   * @remarks
   * The workspace ID. Obtain a list of TensorBoard instances based on the workspace ID.
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

