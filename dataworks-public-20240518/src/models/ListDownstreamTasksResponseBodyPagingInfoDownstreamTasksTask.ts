// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDownstreamTasksResponseBodyPagingInfoDownstreamTasksTaskDataSource } from "./ListDownstreamTasksResponseBodyPagingInfoDownstreamTasksTaskDataSource";
import { ListDownstreamTasksResponseBodyPagingInfoDownstreamTasksTaskRuntimeResource } from "./ListDownstreamTasksResponseBodyPagingInfoDownstreamTasksTaskRuntimeResource";
import { ListDownstreamTasksResponseBodyPagingInfoDownstreamTasksTaskTrigger } from "./ListDownstreamTasksResponseBodyPagingInfoDownstreamTasksTaskTrigger";


export class ListDownstreamTasksResponseBodyPagingInfoDownstreamTasksTask extends $dara.Model {
  /**
   * @remarks
   * The baseline ID.
   * 
   * @example
   * 1234
   */
  baselineId?: number;
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
   * The information about the associated data source.
   */
  dataSource?: ListDownstreamTasksResponseBodyPagingInfoDownstreamTasksTaskDataSource;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
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
   * The task ID.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The instance generation mode. Valid values:
   * 
   * *   T+1
   * *   Immediately
   * 
   * @example
   * T+1
   */
  instanceMode?: string;
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
   * The name of the task.
   * 
   * @example
   * SQL node
   */
  name?: string;
  /**
   * @remarks
   * The account ID of the task owner.
   * 
   * @example
   * 1000
   */
  owner?: string;
  /**
   * @remarks
   * The priority of the task. Valid values: 1 to 8.
   * 
   * @example
   * 1
   */
  priority?: number;
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
   * The rerun interval. Unit: seconds.
   * 
   * @example
   * 60
   */
  rerunInterval?: number;
  /**
   * @remarks
   * The rerun mode. Valid values:
   * 
   * *   AllDenied: The task cannot be rerun regardless of whether the task is successfully run or fails to run.
   * *   FailureAllowed: The task can be rerun only after it fails to run.
   * *   AllAllowed: The task can be rerun regardless of whether it is successfully run or fails to run.
   * 
   * @example
   * AllAllowed
   */
  rerunMode?: string;
  /**
   * @remarks
   * The number of times that the task is rerun. This parameter takes effect only if the RerunMode parameter is set to AllAllowed or FailureAllowed.
   * 
   * @example
   * 3
   */
  rerunTimes?: number;
  /**
   * @remarks
   * The configurations of the runtime environment, such as the resource group information.
   */
  runtimeResource?: ListDownstreamTasksResponseBodyPagingInfoDownstreamTasksTaskRuntimeResource;
  /**
   * @remarks
   * The timeout period of task running. Unit: seconds.
   * 
   * @example
   * 3600
   */
  timeout?: number;
  /**
   * @remarks
   * The trigger method.
   */
  trigger?: ListDownstreamTasksResponseBodyPagingInfoDownstreamTasksTaskTrigger;
  /**
   * @remarks
   * The type of the task.
   * 
   * @example
   * ODPS_SQL
   */
  type?: string;
  /**
   * @remarks
   * The ID of the workflow to which the task belongs.
   * 
   * @example
   * 1234
   */
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      dataSource: 'DataSource',
      description: 'Description',
      envType: 'EnvType',
      id: 'Id',
      instanceMode: 'InstanceMode',
      modifyTime: 'ModifyTime',
      modifyUser: 'ModifyUser',
      name: 'Name',
      owner: 'Owner',
      priority: 'Priority',
      projectId: 'ProjectId',
      rerunInterval: 'RerunInterval',
      rerunMode: 'RerunMode',
      rerunTimes: 'RerunTimes',
      runtimeResource: 'RuntimeResource',
      timeout: 'Timeout',
      trigger: 'Trigger',
      type: 'Type',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      createTime: 'number',
      createUser: 'string',
      dataSource: ListDownstreamTasksResponseBodyPagingInfoDownstreamTasksTaskDataSource,
      description: 'string',
      envType: 'string',
      id: 'number',
      instanceMode: 'string',
      modifyTime: 'number',
      modifyUser: 'string',
      name: 'string',
      owner: 'string',
      priority: 'number',
      projectId: 'number',
      rerunInterval: 'number',
      rerunMode: 'string',
      rerunTimes: 'number',
      runtimeResource: ListDownstreamTasksResponseBodyPagingInfoDownstreamTasksTaskRuntimeResource,
      timeout: 'number',
      trigger: ListDownstreamTasksResponseBodyPagingInfoDownstreamTasksTaskTrigger,
      type: 'string',
      workflowId: 'number',
    };
  }

  validate() {
    if(this.dataSource && typeof (this.dataSource as any).validate === 'function') {
      (this.dataSource as any).validate();
    }
    if(this.runtimeResource && typeof (this.runtimeResource as any).validate === 'function') {
      (this.runtimeResource as any).validate();
    }
    if(this.trigger && typeof (this.trigger as any).validate === 'function') {
      (this.trigger as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

