// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWorkflowResponseBodySchedule extends $dara.Model {
  /**
   * @example
   * ag-n72kong0832****
   */
  alertGroupId?: string;
  /**
   * @example
   * NONE
   */
  alertStrategy?: string;
  /**
   * @example
   * 0 0 * * * ? *
   */
  cronExpr?: string;
  /**
   * @example
   * C-15F7AB9B53F1****
   */
  emrClusterId?: string;
  /**
   * @example
   * END
   */
  failureStrategy?: string;
  /**
   * @example
   * wg-susqimrr649x****
   */
  resourceGroupId?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  scheduleEndTime?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  scheduleStartTime?: string;
  /**
   * @example
   * OFFLINE
   */
  scheduleState?: string;
  /**
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  /**
   * @example
   * MEDIUM
   */
  workflowInstancePriority?: string;
  static names(): { [key: string]: string } {
    return {
      alertGroupId: 'alertGroupId',
      alertStrategy: 'alertStrategy',
      cronExpr: 'cronExpr',
      emrClusterId: 'emrClusterId',
      failureStrategy: 'failureStrategy',
      resourceGroupId: 'resourceGroupId',
      scheduleEndTime: 'scheduleEndTime',
      scheduleStartTime: 'scheduleStartTime',
      scheduleState: 'scheduleState',
      timeZone: 'timeZone',
      workflowInstancePriority: 'workflowInstancePriority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertGroupId: 'string',
      alertStrategy: 'string',
      cronExpr: 'string',
      emrClusterId: 'string',
      failureStrategy: 'string',
      resourceGroupId: 'string',
      scheduleEndTime: 'string',
      scheduleStartTime: 'string',
      scheduleState: 'string',
      timeZone: 'string',
      workflowInstancePriority: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkflowResponseBodyTaskRelations extends $dara.Model {
  /**
   * @example
   * t-n72kong0832****
   */
  postTaskId?: string;
  /**
   * @example
   * t-n72kong0832****
   */
  preTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      postTaskId: 'postTaskId',
      preTaskId: 'preTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      postTaskId: 'string',
      preTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkflowResponseBodyTasks extends $dara.Model {
  /**
   * @example
   * task description
   */
  description?: string;
  /**
   * @example
   * task_name
   */
  name?: string;
  /**
   * @example
   * t-n72kong0832****
   */
  taskId?: string;
  /**
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      taskId: 'taskId',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      taskId: 'string',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkflowResponseBodyWorkflow extends $dara.Model {
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  createTime?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * PARALLEL
   */
  executionType?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * wd-n72kong0832****
   */
  parentDirectoryId?: string;
  /**
   * @example
   * 0
   */
  timeout?: number;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  updateTime?: string;
  /**
   * @example
   * w-n72kong0832****
   */
  workflowId?: string;
  /**
   * @example
   * [{"prop":"key1","value":"value1"}]
   */
  workflowParams?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      executionType: 'executionType',
      name: 'name',
      parentDirectoryId: 'parentDirectoryId',
      timeout: 'timeout',
      updateTime: 'updateTime',
      workflowId: 'workflowId',
      workflowParams: 'workflowParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      executionType: 'string',
      name: 'string',
      parentDirectoryId: 'string',
      timeout: 'number',
      updateTime: 'string',
      workflowId: 'string',
      workflowParams: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkflowResponseBody extends $dara.Model {
  /**
   * @example
   * 611AD6E6-BFE3-5897-AA12-569F79DBAF9B
   */
  requestId?: string;
  schedule?: DescribeWorkflowResponseBodySchedule;
  taskRelations?: DescribeWorkflowResponseBodyTaskRelations[];
  tasks?: DescribeWorkflowResponseBodyTasks[];
  workflow?: DescribeWorkflowResponseBodyWorkflow;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      schedule: 'schedule',
      taskRelations: 'taskRelations',
      tasks: 'tasks',
      workflow: 'workflow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      schedule: DescribeWorkflowResponseBodySchedule,
      taskRelations: { 'type': 'array', 'itemType': DescribeWorkflowResponseBodyTaskRelations },
      tasks: { 'type': 'array', 'itemType': DescribeWorkflowResponseBodyTasks },
      workflow: DescribeWorkflowResponseBodyWorkflow,
    };
  }

  validate() {
    if(this.schedule && typeof (this.schedule as any).validate === 'function') {
      (this.schedule as any).validate();
    }
    if(Array.isArray(this.taskRelations)) {
      $dara.Model.validateArray(this.taskRelations);
    }
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    if(this.workflow && typeof (this.workflow as any).validate === 'function') {
      (this.workflow as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

