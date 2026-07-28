// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The visibility of the job. Valid values:
   * - PUBLIC: Visible to all members in the workspace.
   * - PRIVATE (default): Visible only to you and administrators in the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The user ID associated with the job.
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
  description?: string;
  /**
   * @remarks
   * The job name. Supports fuzzy match and is case-insensitive. Wildcards are not supported.
   * For example, entering test matches test-job1, job-test, job-test2, or job-Test, but does not match job-t1.
   * Default value: empty, which indicates all job names.
   * 
   * @example
   * tf-mnist-test
   */
  displayName?: string;
  /**
   * @remarks
   * The search mode for DisplayName. Default value: wildcard match.
   * 
   * @example
   * wildcard
   */
  displayNameSearchMode?: string;
  /**
   * @remarks
   * Specifies whether to filter jobs that have assigned-node execution enabled.
   * 
   * @example
   * true
   */
  enableAssignNode?: string;
  /**
   * @remarks
   * The end time of the query range. The job creation time is used for filtering. Default value: the current time.
   * 
   * @example
   * 2025-04-16T07:26:41Z
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to retrieve jobs across all workspaces. This parameter must be used together with `ShowOwn=true` to query jobs recently submitted by the current user.
   * 
   * @example
   * false
   */
  fromAllWorkspaces?: boolean;
  /**
   * @remarks
   * Uses full-text index to retrieve the images field. Supports Chinese and English tokenization.
   * 
   * @example
   * pytorch
   */
  imageSearch?: string;
  /**
   * @remarks
   * The job ID. Fuzzy match is not supported. Case-insensitive. Wildcards are not supported.
   * Default value: empty, which indicates all job IDs.
   * 
   * @example
   * dlc********
   */
  jobId?: string;
  /**
   * @remarks
   * A list of job IDs separated by commas. If both JobIds and JobId are specified, JobId takes precedence.
   * 
   * @example
   * dlc123abc
   */
  jobIds?: string;
  /**
   * @remarks
   * The job type. Default value: empty, which indicates all types. Valid values:
   * - TFJob
   * - PyTorchJob
   * - XGBoostJob
   * - OneFlowJob
   * - ElasticBatchJob
   * 
   * @example
   * TFJob
   */
  jobType?: string;
  /**
   * @remarks
   * The field name for numeric range filtering. Must be used together with NumericRangeMin or NumericRangeMax.
   * 
   * @example
   * RequestGPU
   */
  numericRangeField?: string;
  /**
   * @remarks
   * The maximum value (inclusive) for numeric range filtering. Must be used together with NumericRangeField.
   * 
   * @example
   * 8
   */
  numericRangeMax?: number;
  /**
   * @remarks
   * The minimum value (inclusive) for numeric range filtering. Must be used together with NumericRangeField.
   * 
   * @example
   * 4
   */
  numericRangeMin?: number;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - desc: Descending order. This is the default value.
   * - asc: Ascending order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The off-peak resource information. Valid values:
   * - ForbiddenQuotaOverSold
   * - ForceQuotaOverSold
   * - AcceptQuotaOverSold-true (true indicates the job actually used off-peak resources)
   * - AcceptQuotaOverSold-false (false indicates the job actually used guaranteed resources)
   * 
   * @example
   * ForbiddenQuotaOverSold
   */
  oversoldInfo?: string;
  /**
   * @remarks
   * The page number to return in a paged query. Minimum value: 1. Default value: 1. Paging starts from page 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of jobs to return per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource type. Valid values:
   * - PrePaid: resource quota.
   * - Spot: preemptible resources.
   * - PostPaid: public resources.
   * 
   * @example
   * PostPaid
   */
  paymentType?: string;
  /**
   * @remarks
   * Filters jobs created by the specified pipeline ID.
   * 
   * @example
   * flow-*******
   */
  pipelineId?: string;
  /**
   * @remarks
   * Uses full-text index to retrieve the node failed reason field. Supports Chinese and English tokenization.
   * 
   * @example
   * OOM
   */
  reasonSearch?: string;
  /**
   * @remarks
   * The resource group ID. For information about how to obtain the dedicated resource group ID, see [Manage resource quotas](https://help.aliyun.com/document_detail/2651299.html).
   * 
   * @example
   * r*****
   */
  resourceId?: string;
  resourceIds?: string;
  /**
   * @remarks
   * The name of the resource quota, used to filter the job list. Supports fuzzy match. Wildcards are not supported. Default value: empty, which indicates no filtering by resource quota.
   * 
   * @example
   * quota***
   */
  resourceQuotaName?: string;
  /**
   * @remarks
   * Specifies whether to return only jobs submitted by the current user.
   * 
   * @example
   * true
   */
  showOwn?: boolean;
  /**
   * @remarks
   * The field by which to sort results. Valid values:
   * 
   * - DisplayName
   * - JobType
   * - Status
   * - GmtCreateTime
   * - GmtFinishTime
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The start time of the query range. The job creation time is used for filtering. Default value: the current time minus 7 days. If neither StartTime nor EndTime is specified, jobs created in the last 7 days are returned by default.
   * 
   * @example
   * 2025-04-16T07:25:34Z
   */
  startTime?: string;
  /**
   * @remarks
   * The job status. Valid values:
   * - Creating
   * - Queuing
   * - Bidding (currently only for Lingjun Spot jobs)
   * - EnvPreparing
   * - SanityChecking
   * - Running
   * - Restarting
   * - Stopping
   * - SucceededReserving
   * - FailedReserving
   * - Succeeded
   * - Failed
   * - Stopped
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The tags used for filtering.
   */
  tags?: { [key: string]: string };
  /**
   * @remarks
   * The template ID, used to filter jobs created from the specified template.
   * 
   * @example
   * tmlabc123
   */
  templateId?: string;
  /**
   * @remarks
   * The time field used for StartTime/EndTime filtering. Default value: creation time.
   * 
   * @example
   * GmtFinishTime
   */
  timeRangeField?: string;
  /**
   * @remarks
   * Uses full-text index to retrieve the user_command field. Supports Chinese and English tokenization.
   * 
   * @example
   * python train.py
   */
  userCommandSearch?: string;
  /**
   * @remarks
   * The user ID of the job submitter, used to filter the job list.
   * 
   * @example
   * 20**************
   */
  userIdForFilter?: string;
  /**
   * @remarks
   * The username of the job submitter, used to filter the job list. Supports fuzzy match. Wildcards are not supported. Default value: empty, which indicates no filtering by username.
   * 
   * @example
   * test***
   */
  username?: string;
  /**
   * @remarks
   * The workspace ID.<props="china"> For information about how to obtain the workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
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
      description: 'Description',
      displayName: 'DisplayName',
      displayNameSearchMode: 'DisplayNameSearchMode',
      enableAssignNode: 'EnableAssignNode',
      endTime: 'EndTime',
      fromAllWorkspaces: 'FromAllWorkspaces',
      imageSearch: 'ImageSearch',
      jobId: 'JobId',
      jobIds: 'JobIds',
      jobType: 'JobType',
      numericRangeField: 'NumericRangeField',
      numericRangeMax: 'NumericRangeMax',
      numericRangeMin: 'NumericRangeMin',
      order: 'Order',
      oversoldInfo: 'OversoldInfo',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      paymentType: 'PaymentType',
      pipelineId: 'PipelineId',
      reasonSearch: 'ReasonSearch',
      resourceId: 'ResourceId',
      resourceIds: 'ResourceIds',
      resourceQuotaName: 'ResourceQuotaName',
      showOwn: 'ShowOwn',
      sortBy: 'SortBy',
      startTime: 'StartTime',
      status: 'Status',
      tags: 'Tags',
      templateId: 'TemplateId',
      timeRangeField: 'TimeRangeField',
      userCommandSearch: 'UserCommandSearch',
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
      description: 'string',
      displayName: 'string',
      displayNameSearchMode: 'string',
      enableAssignNode: 'string',
      endTime: 'string',
      fromAllWorkspaces: 'boolean',
      imageSearch: 'string',
      jobId: 'string',
      jobIds: 'string',
      jobType: 'string',
      numericRangeField: 'string',
      numericRangeMax: 'number',
      numericRangeMin: 'number',
      order: 'string',
      oversoldInfo: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      paymentType: 'string',
      pipelineId: 'string',
      reasonSearch: 'string',
      resourceId: 'string',
      resourceIds: 'string',
      resourceQuotaName: 'string',
      showOwn: 'boolean',
      sortBy: 'string',
      startTime: 'string',
      status: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      templateId: 'string',
      timeRangeField: 'string',
      userCommandSearch: 'string',
      userIdForFilter: 'string',
      username: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

