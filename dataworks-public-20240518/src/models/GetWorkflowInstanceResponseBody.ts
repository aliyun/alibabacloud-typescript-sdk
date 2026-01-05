// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkflowInstanceResponseBodyWorkflowInstanceTags extends $dara.Model {
  /**
   * @remarks
   * The key of a tag.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The value of a tag.
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

export class GetWorkflowInstanceResponseBodyWorkflowInstance extends $dara.Model {
  /**
   * @remarks
   * The data timestamp.
   * 
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
   * 1000
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
   * The ID of the workflow instance.
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
   * 1000
   */
  modifyUser?: string;
  /**
   * @remarks
   * The name of the workflow instance.
   * 
   * @example
   * WorkInstance1
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
   * @remarks
   * The task tag.
   */
  tags?: GetWorkflowInstanceResponseBodyWorkflowInstanceTags[];
  /**
   * @remarks
   * The type of the workflow instance. Valid values:
   * 
   * *   Normal: Scheduled execution
   * *   Manual: Manually triggered node
   * *   SmokeTest: Testing
   * *   SupplementData: Data backfill
   * *   ManualWorkflow: Manually triggered workflow
   * *   TriggerWorkflow: Triggered Workflow
   * 
   * @example
   * Normal
   */
  type?: string;
  /**
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
      tags: { 'type': 'array', 'itemType': GetWorkflowInstanceResponseBodyWorkflowInstanceTags },
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

export class GetWorkflowInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 22C97E95-F023-56B5-8852-B1A77A17XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the workflow instance.
   */
  workflowInstance?: GetWorkflowInstanceResponseBodyWorkflowInstance;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      workflowInstance: 'WorkflowInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      workflowInstance: GetWorkflowInstanceResponseBodyWorkflowInstance,
    };
  }

  validate() {
    if(this.workflowInstance && typeof (this.workflowInstance as any).validate === 'function') {
      (this.workflowInstance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

