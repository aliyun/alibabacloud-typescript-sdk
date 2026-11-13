// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchUpdateTasksRequestTasksDataSource extends $dara.Model {
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * odps_test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateTasksRequestTasksRuntimeResource extends $dara.Model {
  /**
   * @remarks
   * The number of compute units (CUs) consumed by the task run configuration.
   * 
   * @example
   * 0.25
   */
  cu?: string;
  /**
   * @remarks
   * The ID of the image configured for task execution.
   * 
   * @example
   * i-xxxxxx
   */
  image?: string;
  /**
   * @remarks
   * The identifier of the scheduling resource group configured for task execution.
   * 
   * @example
   * S_res_group_524258031846018_1684XXXXXXXXX
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      cu: 'Cu',
      image: 'Image',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'string',
      image: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateTasksRequestTasksTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * This parameter is required.
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

export class BatchUpdateTasksRequestTasksTrigger extends $dara.Model {
  /**
   * @remarks
   * The cron expression. This parameter takes effect only when Type is set to Scheduler.
   * 
   * @example
   * 00 00 00 * * ?
   */
  cron?: string;
  /**
   * @remarks
   * The expiration time of the periodic trigger. This parameter takes effect only when Type is set to Scheduler. Format: `yyyy-mm-dd hh:mm:ss`.
   * 
   * @example
   * 9999-01-01 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The run mode when the task is triggered. This parameter takes effect only when Type is set to Scheduler. Valid values:
   * - Pause: Paused.
   * - Skip: Dry run.
   * - Normal: Normal execution.
   * 
   * @example
   * Normal
   */
  recurrence?: string;
  /**
   * @remarks
   * The start time for periodic triggers. This parameter takes effect only when Type is set to Scheduler. Format: `yyyy-mm-dd hh:mm:ss`.
   * 
   * @example
   * 1970-01-01 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The trigger type. Valid values:
   * - Scheduler: Triggered by a scheduling cycle.
   * - Manual: Manually triggered.
   * 
   * @example
   * Scheduler
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cron: 'Cron',
      endTime: 'EndTime',
      recurrence: 'Recurrence',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cron: 'string',
      endTime: 'string',
      recurrence: 'string',
      startTime: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateTasksRequestTasks extends $dara.Model {
  /**
   * @remarks
   * The associated data source information.
   */
  dataSource?: BatchUpdateTasksRequestTasksDataSource;
  /**
   * @remarks
   * The description of the task.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The project environment. Valid values:
   * - Prod: Production.
   * - Dev: Development.
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  id?: number;
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
   * The retry time interval, in seconds.
   * 
   * @example
   * 60
   */
  rerunInterval?: number;
  /**
   * @remarks
   * Specifies whether the task can be rerun. Valid values:
   * - AllDenied: The task cannot be rerun after either success or failure.
   * - FailureAllowed: The task can be rerun only after failure.
   * - AllAllowed: The task can be rerun after either success or failure.
   * 
   * @example
   * AllAllowed
   */
  rerunMode?: string;
  /**
   * @remarks
   * The number of retries. This parameter takes effect only when the task is configured to allow reruns.
   * 
   * @example
   * 3
   */
  rerunTimes?: number;
  /**
   * @remarks
   * The runtime environment configurations, such as the resource group information.
   */
  runtimeResource?: BatchUpdateTasksRequestTasksRuntimeResource;
  /**
   * @remarks
   * The list of task tags.
   */
  tags?: BatchUpdateTasksRequestTasksTags[];
  /**
   * @remarks
   * The timeout period for task execution, in seconds. The value must be greater than 3600.
   * 
   * @example
   * 3600
   */
  timeout?: number;
  /**
   * @remarks
   * The task trigger type.
   */
  trigger?: BatchUpdateTasksRequestTasksTrigger;
  static names(): { [key: string]: string } {
    return {
      dataSource: 'DataSource',
      description: 'Description',
      envType: 'EnvType',
      id: 'Id',
      name: 'Name',
      owner: 'Owner',
      rerunInterval: 'RerunInterval',
      rerunMode: 'RerunMode',
      rerunTimes: 'RerunTimes',
      runtimeResource: 'RuntimeResource',
      tags: 'Tags',
      timeout: 'Timeout',
      trigger: 'Trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSource: BatchUpdateTasksRequestTasksDataSource,
      description: 'string',
      envType: 'string',
      id: 'number',
      name: 'string',
      owner: 'string',
      rerunInterval: 'number',
      rerunMode: 'string',
      rerunTimes: 'number',
      runtimeResource: BatchUpdateTasksRequestTasksRuntimeResource,
      tags: { 'type': 'array', 'itemType': BatchUpdateTasksRequestTasksTags },
      timeout: 'number',
      trigger: BatchUpdateTasksRequestTasksTrigger,
    };
  }

  validate() {
    if(this.dataSource && typeof (this.dataSource as any).validate === 'function') {
      (this.dataSource as any).validate();
    }
    if(this.runtimeResource && typeof (this.runtimeResource as any).validate === 'function') {
      (this.runtimeResource as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
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

export class BatchUpdateTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @remarks
   * The list of tasks.
   */
  tasks?: BatchUpdateTasksRequestTasks[];
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      tasks: { 'type': 'array', 'itemType': BatchUpdateTasksRequestTasks },
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

