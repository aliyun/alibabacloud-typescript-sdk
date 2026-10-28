// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The visibility of the job. Valid values:
   * - PUBLIC: visible to all users in the workspace.
   * - PRIVATE: visible only to you and administrators in the workspace. This is the default value.
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
   * The keyword used for full text search in the node description.
   * 
   * @example
   * This is a training job
   */
  description?: string;
  /**
   * @remarks
   * The job name. Fuzzy match is supported. The match is case-insensitive and does not support wildcards. For example, if you enter test, it can match test-job1, job-test, job-test2, or job-Test, but cannot match job-t1. Default value: empty, which indicates any job name.
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
   * Specifies whether to filter jobs that run on specified nodes.
   * 
   * @example
   * true
   */
  enableAssignNode?: string;
  /**
   * @remarks
   * The end time of the query interval. The creation time of the job is used for filtering. Default value: the current time.
   * 
   * @example
   * 2025-04-16T07:26:41Z
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to retrieve jobs across workspaces. This parameter must be used together with ShowOwn=true to query the jobs recently submitted by the current user.
   * 
   * @example
   * false
   */
  fromAllWorkspaces?: boolean;
  /**
   * @remarks
   * Uses the full-text index to retrieve data in the images field. Chinese and English tokenization are supported.
   * 
   * @example
   * pytorch
   */
  imageSearch?: string;
  /**
   * @remarks
   * The job ID. Fuzzy match is not supported. The match is case-insensitive and does not support wildcards. Default value: empty, which indicates any job ID.
   * 
   * @example
   * dlc********
   */
  jobId?: string;
  /**
   * @remarks
   * The list of job IDs. Separate multiple IDs with commas (,). If both JobIds and JobId are specified, JobId takes precedence.
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
   * The field name for numeric range filtering. This parameter must be used together with NumericRangeMin and NumericRangeMax.
   * 
   * @example
   * RequestGPU
   */
  numericRangeField?: string;
  /**
   * @remarks
   * The maximum value for numeric range filtering, inclusive. This parameter must be used together with NumericRangeField.
   * 
   * @example
   * 8
   */
  numericRangeMax?: number;
  /**
   * @remarks
   * The minimum value for numeric range filtering, inclusive. This parameter must be used together with NumericRangeField.
   * 
   * @example
   * 4
   */
  numericRangeMin?: number;
  /**
   * @remarks
   * The sort order. Valid values:
   * - desc: descending order. This is the default value.
   * - asc: ascending order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The idle resource information. Valid values:
   * - ForbiddenQuotaOverSold
   * - ForceQuotaOverSold
   * - AcceptQuotaOverSold-true: true indicates that the job actually used idle resources.
   * - AcceptQuotaOverSold-false: false indicates that the job actually used guaranteed resources.
   * 
   * @example
   * ForbiddenQuotaOverSold
   */
  oversoldInfo?: string;
  /**
   * @remarks
   * The page number for paging in a paged query. The start value is 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of jobs to return on each page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource type. Valid values:
   * - PrePaid: resource quota
   * - Spot: preemptible resources
   * - PostPaid: public resources
   * 
   * @example
   * PostPaid
   */
  paymentType?: string;
  /**
   * @remarks
   * The pipeline ID used to filter jobs.
   * 
   * @example
   * flow-*******
   */
  pipelineId?: string;
  /**
   * @remarks
   * Uses the full-text index to retrieve data in the reason field of the failed node. Chinese and English tokenization are supported.
   * 
   * @example
   * OOM
   */
  reasonSearch?: string;
  /**
   * @remarks
   * The resource group ID. For more information about how to query the ID of a dedicated resource group, see [Manage resource quotas](https://help.aliyun.com/document_detail/2651299.html).
   * 
   * @example
   * r*****
   */
  resourceId?: string;
  /**
   * @remarks
   * The list of resource IDs used to filter jobs.
   */
  resourceIds?: string;
  /**
   * @remarks
   * The name of the resource quota used to filter the job list. Fuzzy match is supported, but wildcards are not supported. Default value: empty, which indicates no filtering by resource quota.
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
   * The field by which to sort. Valid values:
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
   * The start time of the query interval. The creation time of the job is used for filtering. Default value: the current time minus 7 days. If neither StartTime nor EndTime is configured, the jobs created in the last 7 days are queried by default.
   * 
   * @example
   * 2025-04-16T07:25:34Z
   */
  startTime?: string;
  /**
   * @remarks
   * The running status of the job. Valid values:
   * - Creating
   * - Queuing
   * - Bidding (currently limited to Lingjun spot jobs)
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
  tagsShrink?: string;
  /**
   * @remarks
   * The template ID used to filter jobs created by the specified template.
   * 
   * @example
   * tmlabc123
   */
  templateId?: string;
  /**
   * @remarks
   * The time field used for StartTime and EndTime filtering. Default value: creation time.
   * 
   * @example
   * GmtFinishTime
   */
  timeRangeField?: string;
  /**
   * @remarks
   * Uses the full-text index to retrieve data in the user_command field. Chinese and English tokenization are supported.
   * 
   * @example
   * python train.py
   */
  userCommandSearch?: string;
  /**
   * @remarks
   * The user ID of the job submitter used to filter the job list.
   * 
   * @example
   * 20**************
   */
  userIdForFilter?: string;
  /**
   * @remarks
   * The username of the job submitter used to filter the job list. Fuzzy match is supported, but wildcards are not supported. Default value: empty, which indicates no filtering by username.
   * 
   * @example
   * test***
   */
  username?: string;
  /**
   * @remarks
   * The workspace ID. <props="china">For more information about how to obtain the workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
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
      tagsShrink: 'Tags',
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
      tagsShrink: 'string',
      templateId: 'string',
      timeRangeField: 'string',
      userCommandSearch: 'string',
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

