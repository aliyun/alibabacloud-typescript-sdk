// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTensorboardsRequest extends $dara.Model {
  /**
   * @remarks
   * The visibility of the job. Valid values:
   * - PUBLIC: Visible to all users in this workspace.
   * - PRIVATE: Visible only to you and administrators in this workspace.
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
   * The end time of the query range. The creation time of the Tensorboard instance in UTC is used for filtering. If this parameter is left empty, the default value is the current time.
   * 
   * @example
   * 2020-11-09T14:45:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Filters Tensorboard instances by DLC job ID. See [ListJobs](https://help.aliyun.com/document_detail/459676.html) to obtain the job ID.
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
   * The page number of the page to return in a paged query. The value starts from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of Tensorboard instances to return per page in a paged query.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The billing type of the Tensorboard instance. Valid values:
   * - Free: The Tensorboard instance uses free resources.
   * - Postpaid: The Tensorboard instance uses pay-as-you-go resources.
   * 
   * @example
   * Postpaid
   */
  paymentType?: string;
  /**
   * @remarks
   * The resource quota ID.
   * > - Currently, only whitelisted users can use resource quota resources to create Tensorboard instances. To use this feature, contact us.
   * > - This value is valid only when the Tensorboard instance uses resource quota resources.
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
   * Sorts the results by the following fields. Valid values:
   * - DisplayName: The job name.
   * - GmtCreateTime: The job creation time.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The data source ID. See [ListJobs](https://help.aliyun.com/document_detail/459676.html) to obtain the job ID.
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
   * The start time of the query range. The creation time of the Tensorboard instance in UTC is used for filtering. If this parameter is left empty, the default value is 7 days before the current time.
   * 
   * @example
   * 2020-11-08T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The Tensorboard status. Valid values:
   * - Creating: Being created.
   * - Running: Running.
   * - Stopped: Stopped.
   * - Succeeded: Succeeded.
   * - Failed: Failed.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * Filters the Tensorboard list by Tensorboard ID.
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
   * Specifies whether to show details. Valid values:
   * - true: Show details.
   * - false: Do not show details.
   * 
   * @example
   * true
   */
  verbose?: boolean;
  /**
   * @remarks
   * The workspace ID. The Tensorboard list is retrieved based on the workspace ID. <props="china">See [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
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

