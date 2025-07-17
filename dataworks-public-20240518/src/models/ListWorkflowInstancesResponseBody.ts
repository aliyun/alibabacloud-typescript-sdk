// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkflowInstancesResponseBodyPagingInfoWorkflowInstances extends $dara.Model {
  /**
   * @example
   * 1710239005403
   */
  bizDate?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1710239005403
   */
  createTime?: number;
  /**
   * @remarks
   * The account ID of the creator.
   * 
   * @example
   * 100
   */
  createUser?: string;
  /**
   * @remarks
   * The environment of the workspace. Valid values:
   * 
   * *   Prod
   * *   Dev
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The time when the instance finished running.
   * 
   * @example
   * 1710239005403
   */
  finishedTime?: number;
  /**
   * @remarks
   * The workflow instance ID.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 1710239005403
   */
  modifyTime?: number;
  /**
   * @remarks
   * The account ID of the modifier.
   * 
   * @example
   * 100
   */
  modifyUser?: string;
  /**
   * @remarks
   * The name of the workflow instance.
   * 
   * @example
   * WorkflowInstance1
   */
  name?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * The time when the instance started to run.
   * 
   * @example
   * 1710239005403
   */
  startedTime?: number;
  /**
   * @remarks
   * The status of the workflow instance. Valid values:
   * 
   * *   NotRun: The instance is not run.
   * *   Running: The instance is running.
   * *   WaitTime: The instance is waiting for the scheduling time to arrive.
   * *   CheckingCondition: Branch conditions are being checked for the instance.
   * *   WaitResource: The instance is waiting for resources.
   * *   Failure: The instance fails to be run.
   * *   Success: The instance is successfully run.
   * *   Checking: Data quality is being checked for the instance.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @example
   * Normal
   */
  type?: string;
  /**
   * @remarks
   * The ID of the workflow to which the instance belongs.
   * 
   * @example
   * 1234
   */
  workflowId?: number;
  workflowParameters?: string;
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
      projectId: 'ProjectId',
      startedTime: 'StartedTime',
      status: 'Status',
      type: 'Type',
      workflowId: 'WorkflowId',
      workflowParameters: 'WorkflowParameters',
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
      projectId: 'number',
      startedTime: 'number',
      status: 'string',
      type: 'string',
      workflowId: 'number',
      workflowParameters: 'string',
    };
  }

  validate() {
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
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The workflow instances.
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
   * The request ID.
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

