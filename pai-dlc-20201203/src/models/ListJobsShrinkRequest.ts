// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The job visibility. Valid values:
   * 
   * *   PUBLIC: The job is visible to all members in the workspace.
   * *   PRIVATE: The job is visible only to you and the administrator of the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The ID of the user associated with the job.
   * 
   * @example
   * 16****
   */
  businessUserId?: string;
  /**
   * @remarks
   * The caller.
   * 
   * @example
   * local
   */
  caller?: string;
  /**
   * @remarks
   * The job name. Fuzzy query is supported. The name is case-insensitive. Wildcards are not supported. For example, if you enter test, test-job1, job-test, job-test2, or job-test can be matched, and job-t1 cannot be matched. The default value null indicates any job name.
   * 
   * @example
   * tf-mnist-test
   */
  displayName?: string;
  displayNameSearchMode?: string;
  /**
   * @remarks
   * The end time of the query. Use the job creation time to filter data. The default value is the current time.
   * 
   * @example
   * 2020-11-09T14:45:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to query a list of jobs across workspaces. This parameter must be used together with `ShowOwn=true`. You can use this parameter to query a list of jobs recently submitted by the current user.
   * 
   * @example
   * false
   */
  fromAllWorkspaces?: boolean;
  /**
   * @remarks
   * The job ID. Fuzzy query is supported. The name is case-insensitive. Wildcards are not supported. The default value null indicates any job ID.
   * 
   * @example
   * dlc********
   */
  jobId?: string;
  jobIds?: string;
  /**
   * @remarks
   * The job type. The default value null indicates any type. Valid values:
   * 
   * *   TFJob
   * *   PyTorchJob
   * *   XGBoostJob
   * *   OneFlowJob
   * *   ElasticBatchJob
   * 
   * @example
   * TFJob
   */
  jobType?: string;
  /**
   * @remarks
   * The sorting order. Valid values:
   * 
   * *   desc (default)
   * *   asc
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The Idle resource information. Valid values:
   * 
   * *   ForbiddenQuotaOverSold
   * *   ForceQuotaOverSold
   * *   AcceptQuotaOverSold-true (true indicates that the job uses idle resources.)
   * *   AcceptQuotaOverSold-false (false indicates that the job uses guaranteed resources.)
   * 
   * @example
   * ForbiddenQuotaOverSold
   */
  oversoldInfo?: string;
  /**
   * @remarks
   * The number of the page to return for the current query. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of jobs per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   PrePaid: Resource quota
   * *   Spot: Preemptible resources
   * *   PostPaid: Public resources
   * 
   * @example
   * PostPaid
   */
  paymentType?: string;
  /**
   * @remarks
   * The specific pipeline ID used to filter jobs.
   * 
   * @example
   * flow-*******
   */
  pipelineId?: string;
  /**
   * @remarks
   * The resource group ID. For information about how to obtain the ID of a dedicated resource group, see [Manage resource quota](https://help.aliyun.com/document_detail/2651299.html).
   * 
   * @example
   * r*****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource quota name used to filter jobs. Fuzzy search is supported. Wildcards are not supported. The default value null indicates that jobs are not filtered by resource quota name.
   * 
   * @example
   * quota***
   */
  resourceQuotaName?: string;
  /**
   * @remarks
   * Specifies whether to query only the jobs submitted by the current user.
   * 
   * @example
   * true
   */
  showOwn?: boolean;
  /**
   * @remarks
   * The sorting field. Valid values:
   * 
   * *   DisplayName
   * *   JobType
   * *   Status
   * *   GmtCreateTime
   * *   GmtFinishTime
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The start time of the query. Use the job creation time to filter data. The default value is the current time minus seven days. In other words, if you do not configure the StartTime and EndTime parameters, the system queries the job list in the last seven days.
   * 
   * @example
   * 2020-11-08T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The job status. Valid values:
   * 
   * *   Creating
   * *   Queuing
   * *   Bidding (only available for spot jobs that use Lingjun resources)
   * *   EnvPreparing
   * *   SanityChecking
   * *   Running
   * *   Restarting
   * *   Stopping
   * *   SucceededReserving
   * *   FailedReserving
   * *   Succeeded
   * *   Failed
   * *   Stopped
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The user ID used to filter jobs.
   * 
   * @example
   * 20**************
   */
  userIdForFilter?: string;
  /**
   * @remarks
   * The username used to filter jobs. Fuzzy search is supported. Wildcards are not supported. The default value null indicates that jobs are not filtered by username.
   * 
   * @example
   * test***
   */
  username?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 1****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      businessUserId: 'BusinessUserId',
      caller: 'Caller',
      displayName: 'DisplayName',
      displayNameSearchMode: 'DisplayNameSearchMode',
      endTime: 'EndTime',
      fromAllWorkspaces: 'FromAllWorkspaces',
      jobId: 'JobId',
      jobIds: 'JobIds',
      jobType: 'JobType',
      order: 'Order',
      oversoldInfo: 'OversoldInfo',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      paymentType: 'PaymentType',
      pipelineId: 'PipelineId',
      resourceId: 'ResourceId',
      resourceQuotaName: 'ResourceQuotaName',
      showOwn: 'ShowOwn',
      sortBy: 'SortBy',
      startTime: 'StartTime',
      status: 'Status',
      tagsShrink: 'Tags',
      userIdForFilter: 'UserIdForFilter',
      username: 'Username',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      businessUserId: 'string',
      caller: 'string',
      displayName: 'string',
      displayNameSearchMode: 'string',
      endTime: 'string',
      fromAllWorkspaces: 'boolean',
      jobId: 'string',
      jobIds: 'string',
      jobType: 'string',
      order: 'string',
      oversoldInfo: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      paymentType: 'string',
      pipelineId: 'string',
      resourceId: 'string',
      resourceQuotaName: 'string',
      showOwn: 'boolean',
      sortBy: 'string',
      startTime: 'string',
      status: 'string',
      tagsShrink: 'string',
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

