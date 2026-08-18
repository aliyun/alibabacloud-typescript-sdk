// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkflowInstancesResponseBodyPagingInfoWorkflowInstancesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowInstancesResponseBodyPagingInfoWorkflowInstances extends $dara.Model {
  /**
   * @remarks
   * The business date.
   * 
   * The value is a 13-digit number, such as `1710239005403`.
   * 
   * @example
   * 1710239005403
   */
  bizDate?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * The value is a 13-digit number, such as `1710239005403`.
   * 
   * @example
   * 1710239005403
   */
  createTime?: number;
  /**
   * @remarks
   * The account ID of the user who created the instance.
   * 
   * @example
   * 100
   */
  createUser?: string;
  /**
   * @remarks
   * The project environment. Valid values:
   * - Prod (production)
   * - Dev (development)
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The finish time.
   * 
   * The value is a 13-digit number, such as `1710239005403`.
   * 
   * @example
   * 1710239005403
   */
  finishedTime?: number;
  /**
   * @remarks
   * The unique identifier of the workflow instance.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The modification time.
   * 
   * The value is a 13-digit number, such as `1710239005403`.
   * 
   * @example
   * 1710239005403
   */
  modifyTime?: number;
  /**
   * @remarks
   * The account ID of the user who last modified the instance.
   * 
   * @example
   * 100
   */
  modifyUser?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * WorkflowInstance1
   */
  name?: string;
  /**
   * @remarks
   * The account ID of the workflow owner.
   * 
   * @example
   * 1000
   */
  owner?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * The start time.
   * 
   * The value is a 13-digit number, such as `1710239005403`.
   * 
   * @example
   * 1710239005403
   */
  startedTime?: number;
  /**
   * @remarks
   * The running status of the workflow instance. Valid values:
   * - NotRun: not run
   * - Running: running
   * - WaitTime: waiting for TriggerTime
   * - CheckingCondition: checking branch conditions
   * - WaitResource: waiting for resources
   * - Failure: failed
   * - Success: succeeded
   * - Checking: submitted for data quality check
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The node tags.
   */
  tags?: ListWorkflowInstancesResponseBodyPagingInfoWorkflowInstancesTags[];
  /**
   * @remarks
   * The type of the workflow instance. Valid values:
   * - Normal: periodic scheduling
   * - Manual: manual task
   * - SmokeTest: test
   * - SupplementData: data backfill
   * - ManualWorkflow: manual workflow
   * - TriggerWorkflow: trigger-based workflow
   * 
   * @example
   * Normal
   */
  type?: string;
  /**
   * @remarks
   * The unified workflow instance ID. All workflow instances within the same business date under a specific trigger share the same value for this field.
   * 
   * @example
   * 1234
   */
  unifiedWorkflowInstanceId?: number;
  /**
   * @remarks
   * The ID of the workflow to which the instance belongs.
   * 
   * @example
   * 1234
   */
  workflowId?: number;
  /**
   * @remarks
   * The workflow parameters.
   * 
   * @example
   * Periodic workflow:
   * key1=value1 key2=value2
   * Manual workflow:
   * {"key1":"value1", "key2": "value2"}
   */
  workflowParameters?: string;
  /**
   * @remarks
   * The task instance ID corresponding to the workflow instance.
   * 
   * @example
   * 1234
   */
  workflowTaskInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      envType: 'EnvType',
      finishedTime: 'FinishedTime',
      id: 'Id',
      modifyTime: 'ModifyTime',
      modifyUser: 'ModifyUser',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      startedTime: 'StartedTime',
      status: 'Status',
      tags: 'Tags',
      type: 'Type',
      unifiedWorkflowInstanceId: 'UnifiedWorkflowInstanceId',
      workflowId: 'WorkflowId',
      workflowParameters: 'WorkflowParameters',
      workflowTaskInstanceId: 'WorkflowTaskInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'number',
      createTime: 'number',
      createUser: 'string',
      envType: 'string',
      finishedTime: 'number',
      id: 'number',
      modifyTime: 'number',
      modifyUser: 'string',
      name: 'string',
      owner: 'string',
      projectId: 'number',
      startedTime: 'number',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListWorkflowInstancesResponseBodyPagingInfoWorkflowInstancesTags },
      type: 'string',
      unifiedWorkflowInstanceId: 'number',
      workflowId: 'number',
      workflowParameters: 'string',
      workflowTaskInstanceId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowInstancesResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of workflow instances.
   */
  workflowInstances?: ListWorkflowInstancesResponseBodyPagingInfoWorkflowInstances[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      workflowInstances: 'WorkflowInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      workflowInstances: { 'type': 'array', 'itemType': ListWorkflowInstancesResponseBodyPagingInfoWorkflowInstances },
    };
  }

  validate() {
    if(Array.isArray(this.workflowInstances)) {
      $dara.Model.validateArray(this.workflowInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListWorkflowInstancesResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID. Used for locating logs and troubleshooting issues.
   * 
   * @example
   * 22C97E95-F023-56B5-8852-B1A77A17XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListWorkflowInstancesResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

