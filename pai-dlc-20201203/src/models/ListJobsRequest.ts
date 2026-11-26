// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The visibility of the job. Valid values:
   * - PUBLIC: The job is visible to all users in the workspace.
   * - PRIVATE: The job is visible only to you and administrators in the workspace. This is the default value.
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
   * The job name. Fuzzy search is supported. The search is case-insensitive and does not support wildcards.
   * For example, if you enter test, it can match test-job1, job-test, job-test2, or job-Test, but cannot match job-t1.
   * If this parameter is left empty, all job names are matched.
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
   * Specifies whether to filter jobs that are configured to run on specific nodes.
   * 
   * @example
   * true
   */
  enableAssignNode?: string;
  /**
   * @remarks
   * The end time of the query interval. Jobs are filtered based on their creation time. The default value is the current time.
   * 
   * @example
   * 2025-04-16T07:26:41Z
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to retrieve the job list across workspaces. This parameter must be used together with the `ShowOwn=true` parameter to query the jobs recently submitted by the current user.
   * 
   * @example
   * false
   */
  fromAllWorkspaces?: boolean;
  /**
   * @remarks
   * Retrieves data by using the full-text index in the image (images) field. Chinese and English tokenization is supported.
   * 
   * @example
   * pytorch
   */
  imageSearch?: string;
  /**
   * @remarks
   * The job ID. Fuzzy search is not supported. The search is case-insensitive and does not support wildcards.
   * If this parameter is left empty, all job IDs are matched.
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
   * The job type. If this parameter is left empty, all job types are queried. Valid values:
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
   * The maximum value (inclusive) for numeric range filtering. This parameter must be used together with NumericRangeField.
   * 
   * @example
   * 8
   */
  numericRangeMax?: number;
  /**
   * @remarks
   * The minimum value (inclusive) for numeric range filtering. This parameter must be used together with NumericRangeField.
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
   * The oversold resource information. Valid values:
   * - ForbiddenQuotaOverSold
   * - ForceQuotaOverSold
   * - AcceptQuotaOverSold-true: The value true indicates that the job actually used oversold resources.
   * - AcceptQuotaOverSold-false: The value false indicates that the job actually used guaranteed resources.
   * 
   * @example
   * ForbiddenQuotaOverSold
   */
  oversoldInfo?: string;
  /**
   * @remarks
   * The page number for the paged query. Specify the page number to return for paging. The starting value is 1. Default value: 1.
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
   * The ID of the pipeline used to filter jobs.
   * 
   * @example
   * flow-*******
   */
  pipelineId?: string;
  /**
   * @remarks
   * Retrieves data by using the full-text index in the node failed reason (reason) field. Chinese and English tokenization is supported.
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
   * 
   * @example
   * r1,r2
   */
  resourceIds?: string;
  /**
   * @remarks
   * The name of the resource quota used to filter the job list. Fuzzy match is supported, but wildcards are not supported. If this parameter is left empty, jobs are not filtered by resource quota.
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
   * The field by which to sort the results. Valid values:
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
   * The start time of the query interval. Jobs are filtered based on their creation time. The default value is the current time minus 7 days. If neither StartTime nor EndTime is specified, the jobs created in the last 7 days are queried by default.
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
   * - Bidding (currently applicable only to Lingjun spot jobs)
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
   * 
   * @example
   * {"app":"recommandation"}
   */
  tags?: { [key: string]: string };
  /**
   * @remarks
   * The template ID used to filter jobs created by a specified template.
   * 
   * @example
   * tmlabc123
   */
  templateId?: string;
  /**
   * @remarks
   * The time field used for StartTime and EndTime filtering. If this parameter is left empty, the creation time is used by default.
   * 
   * @example
   * GmtFinishTime
   */
  timeRangeField?: string;
  /**
   * @remarks
   * Retrieves data by using the full-text index in the user command (user_command) field. Chinese and English tokenization is supported.
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
   * The username of the job submitter used to filter the job list. Fuzzy search is supported, but wildcards are not supported. If this parameter is left empty, jobs are not filtered by username.
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

