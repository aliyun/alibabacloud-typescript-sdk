// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTensorboardsRequest extends $dara.Model {
  /**
   * @remarks
   * The visibility of the Tensorboard instance. Valid values:
   * - PUBLIC: visible to all members in the workspace.
   * - PRIVATE: visible only to you and administrators in the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The display name of the Tensorboard instance.
   * 
   * @example
   * TestTensorboard
   */
  displayName?: string;
  /**
   * @remarks
   * The end time of the query range. Tensorboard instances are filtered by their creation time in UTC. If this parameter is left empty, the default value is the current time.
   * 
   * @example
   * 2020-11-09T14:45:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The DLC job ID used to filter Tensorboard instances. Call [ListJobs](https://help.aliyun.com/document_detail/459676.html) to obtain the job ID.
   * 
   * @example
   * dlc-xxx
   */
  jobId?: string;
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
   * The page number for paging. The value starts from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of Tensorboard instances to return on each page for paging.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The billing method of the Tensorboard instance. Valid values:
   * - Free: a Tensorboard instance that uses free resources.
   * - Postpaid: a Tensorboard instance that uses pay-as-you-go resources.
   * 
   * @example
   * Postpaid
   */
  paymentType?: string;
  /**
   * @remarks
   * The resource quota ID.
   * > - Currently, only whitelisted users can use resource quota resources to create Tensorboard instances. To use this feature, contact us.
   * > - This parameter takes effect only when the Tensorboard instance uses resource quota resources.
   * 
   * @example
   * quota12***
   */
  quotaId?: string;
  /**
   * @remarks
   * Specifies whether to return only Tensorboard instances created by the current user.
   * 
   * @example
   * false
   */
  showOwn?: boolean;
  /**
   * @remarks
   * The field by which the results are sorted. Valid values:
   * - DisplayName: the job name.
   * - GmtCreateTime: the job creation time.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The data source ID. Call [ListJobs](https://help.aliyun.com/document_detail/459676.html) to obtain the job ID.
   * 
   * @example
   * dlc-xxxxxx
   */
  sourceId?: string;
  /**
   * @remarks
   * The data source type. Currently, only DLC training jobs are supported, which means the value is job.
   * 
   * @example
   * job
   */
  sourceType?: string;
  /**
   * @remarks
   * The start time of the query range. Tensorboard instances are filtered by their creation time in UTC. If this parameter is left empty, the default value is 7 days before the current time.
   * 
   * @example
   * 2020-11-08T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The Tensorboard status. Valid values:
   * - Creating: being created.
   * - Running: running.
   * - Stopped: stopped.
   * - Succeeded: succeeded.
   * - Failed: failed.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The Tensorboard ID used to filter the Tensorboard list.
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
   * Specifies whether to display details.
   * - true: Display details.
   * - false: Do not display details.
   * 
   * @example
   * true
   */
  verbose?: boolean;
  /**
   * @remarks
   * The workspace ID. Tensorboard instances are filtered by workspace ID. <props="china">Call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID..
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

