// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProcessDefinitionWithScheduleRequestGlobalParams extends $dara.Model {
  direct?: string;
  prop?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      direct: 'direct',
      prop: 'prop',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direct: 'string',
      prop: 'string',
      type: 'string',
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

export class CreateProcessDefinitionWithScheduleRequestSchedule extends $dara.Model {
  /**
   * @remarks
   * The cron expression for the schedule.
   * 
   * @example
   * 0 0 0 * * ?
   */
  crontab?: string;
  /**
   * @remarks
   * The end time of the schedule. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2025-12-23 16:13:27
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the schedule. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2024-12-23 16:13:27
   */
  startTime?: string;
  /**
   * @remarks
   * The time zone ID.
   * 
   * @example
   * Asia/Shanghai
   */
  timezoneId?: string;
  static names(): { [key: string]: string } {
    return {
      crontab: 'crontab',
      endTime: 'endTime',
      startTime: 'startTime',
      timezoneId: 'timezoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crontab: 'string',
      endTime: 'string',
      startTime: 'string',
      timezoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParamsLocalParams extends $dara.Model {
  direct?: string;
  prop?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      direct: 'direct',
      prop: 'prop',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direct: 'string',
      prop: 'string',
      type: 'string',
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

export class CreateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParamsSparkConf extends $dara.Model {
  /**
   * @remarks
   * The key of the Spark configuration.
   * 
   * @example
   * spark.dynamicAllocation.enabled
   */
  key?: string;
  /**
   * @remarks
   * The value of the Spark configuration.
   * 
   * @example
   * true
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

export class CreateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParams extends $dara.Model {
  /**
   * @remarks
   * The display version of the Spark engine.
   * 
   * @example
   * esr-4.0.0 (Spark 3.5.2, Scala 2.12)
   */
  displaySparkVersion?: string;
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * env-crhq2h5lhtgju93buhkg
   */
  environmentId?: string;
  /**
   * @remarks
   * Specifies whether to enable Fusion engine acceleration.
   * 
   * @example
   * false
   */
  fusion?: boolean;
  localParams?: CreateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParamsLocalParams[];
  /**
   * @remarks
   * The resource queue for running the Spark task.
   * 
   * This parameter is required.
   * 
   * @example
   * root_queue
   */
  resourceQueueId?: string;
  /**
   * @remarks
   * The Spark task configurations.
   */
  sparkConf?: CreateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParamsSparkConf[];
  /**
   * @remarks
   * The number of cores for the Spark driver.
   * 
   * @example
   * 1
   */
  sparkDriverCores?: number;
  /**
   * @remarks
   * The memory size for the Spark driver.
   * 
   * @example
   * 4g
   */
  sparkDriverMemory?: number;
  /**
   * @remarks
   * The number of cores for the Spark executor.
   * 
   * @example
   * 1
   */
  sparkExecutorCores?: number;
  /**
   * @remarks
   * The memory size for the Spark executor.
   * 
   * @example
   * 4g
   */
  sparkExecutorMemory?: number;
  /**
   * @remarks
   * The Spark log level.
   * 
   * @example
   * INFO
   */
  sparkLogLevel?: string;
  /**
   * @remarks
   * The path to the task logs of the Spark node.
   */
  sparkLogPath?: string;
  /**
   * @remarks
   * The database engine version of the Spark DPI engine.
   * 
   * @example
   * esr-4.0.0 (Spark 3.5.2, Scala 2.12)
   */
  sparkVersion?: string;
  /**
   * @remarks
   * The data development task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * TSK-d87******************
   */
  taskBizId?: string;
  /**
   * @remarks
   * The Spark task type.
   * 
   * @example
   * SQL
   */
  type?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * w-d8********
   */
  workspaceBizId?: string;
  static names(): { [key: string]: string } {
    return {
      displaySparkVersion: 'displaySparkVersion',
      environmentId: 'environmentId',
      fusion: 'fusion',
      localParams: 'localParams',
      resourceQueueId: 'resourceQueueId',
      sparkConf: 'sparkConf',
      sparkDriverCores: 'sparkDriverCores',
      sparkDriverMemory: 'sparkDriverMemory',
      sparkExecutorCores: 'sparkExecutorCores',
      sparkExecutorMemory: 'sparkExecutorMemory',
      sparkLogLevel: 'sparkLogLevel',
      sparkLogPath: 'sparkLogPath',
      sparkVersion: 'sparkVersion',
      taskBizId: 'taskBizId',
      type: 'type',
      workspaceBizId: 'workspaceBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displaySparkVersion: 'string',
      environmentId: 'string',
      fusion: 'boolean',
      localParams: { 'type': 'array', 'itemType': CreateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParamsLocalParams },
      resourceQueueId: 'string',
      sparkConf: { 'type': 'array', 'itemType': CreateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParamsSparkConf },
      sparkDriverCores: 'number',
      sparkDriverMemory: 'number',
      sparkExecutorCores: 'number',
      sparkExecutorMemory: 'number',
      sparkLogLevel: 'string',
      sparkLogPath: 'string',
      sparkVersion: 'string',
      taskBizId: 'string',
      type: 'string',
      workspaceBizId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.localParams)) {
      $dara.Model.validateArray(this.localParams);
    }
    if(Array.isArray(this.sparkConf)) {
      $dara.Model.validateArray(this.sparkConf);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProcessDefinitionWithScheduleRequestTaskDefinitionJson extends $dara.Model {
  /**
   * @remarks
   * The email address for alert notifications.
   * 
   * @example
   * foo_bar@spark.alert.invalid.com
   */
  alertEmailAddress?: string;
  /**
   * @remarks
   * The task definition ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 36************
   */
  code?: number;
  /**
   * @remarks
   * The task definition description.
   * 
   * @example
   * ods transform task
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable alerts for task failures.
   * 
   * @example
   * false
   */
  failAlertEnable?: boolean;
  /**
   * @remarks
   * The number of retries after a task fails.
   * 
   * @example
   * 1
   */
  failRetryTimes?: number;
  /**
   * @remarks
   * The task name.
   * 
   * This parameter is required.
   * 
   * @example
   * ods_transform_task
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to enable alerts for task startup.
   * 
   * @example
   * false
   */
  startAlertEnable?: boolean;
  /**
   * @remarks
   * The tags.
   */
  tags?: { [key: string]: string };
  /**
   * @remarks
   * The task definition parameters.
   * 
   * This parameter is required.
   */
  taskParams?: CreateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParams;
  /**
   * @remarks
   * The workflow node type.
   * 
   * This parameter is required.
   * 
   * @example
   * EMR_SERVERLESS_SPARK
   */
  taskType?: string;
  /**
   * @remarks
   * The timeout period for the callback method, in seconds.
   * 
   * @example
   * 1200
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      alertEmailAddress: 'alertEmailAddress',
      code: 'code',
      description: 'description',
      failAlertEnable: 'failAlertEnable',
      failRetryTimes: 'failRetryTimes',
      name: 'name',
      startAlertEnable: 'startAlertEnable',
      tags: 'tags',
      taskParams: 'taskParams',
      taskType: 'taskType',
      timeout: 'timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertEmailAddress: 'string',
      code: 'number',
      description: 'string',
      failAlertEnable: 'boolean',
      failRetryTimes: 'number',
      name: 'string',
      startAlertEnable: 'boolean',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      taskParams: CreateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParams,
      taskType: 'string',
      timeout: 'number',
    };
  }

  validate() {
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    if(this.taskParams && typeof (this.taskParams as any).validate === 'function') {
      (this.taskParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProcessDefinitionWithScheduleRequestTaskRelationJson extends $dara.Model {
  /**
   * @remarks
   * The name of the task topology relationship. Set this parameter to the workflow name.
   * 
   * This parameter is required.
   * 
   * @example
   * ods batch workflow
   */
  name?: string;
  /**
   * @remarks
   * The downstream task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 28************
   */
  postTaskCode?: number;
  /**
   * @remarks
   * The downstream task version.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  postTaskVersion?: number;
  /**
   * @remarks
   * The upstream task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 16************
   */
  preTaskCode?: number;
  /**
   * @remarks
   * The upstream task version.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  preTaskVersion?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      postTaskCode: 'postTaskCode',
      postTaskVersion: 'postTaskVersion',
      preTaskCode: 'preTaskCode',
      preTaskVersion: 'preTaskVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      postTaskCode: 'number',
      postTaskVersion: 'number',
      preTaskCode: 'number',
      preTaskVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProcessDefinitionWithScheduleRequest extends $dara.Model {
  /**
   * @remarks
   * The email address for alert notifications.
   * 
   * @example
   * foo_bar@spark.alert.invalid.com
   */
  alertEmailAddress?: string;
  /**
   * @remarks
   * The workflow description.
   * 
   * This parameter is required.
   * 
   * @example
   * ods batch workflow
   */
  description?: string;
  /**
   * @remarks
   * The execution strategy.
   * 
   * This parameter is required.
   * 
   * @example
   * PARALLEL
   */
  executionType?: string;
  globalParams?: CreateProcessDefinitionWithScheduleRequestGlobalParams[];
  /**
   * @remarks
   * The workflow name.
   * 
   * This parameter is required.
   * 
   * @example
   * ods_batch_workflow
   */
  name?: string;
  /**
   * @remarks
   * The product code.
   * 
   * This parameter is required.
   * 
   * @example
   * SS
   */
  productNamespace?: string;
  /**
   * @remarks
   * Specifies whether to publish the workflow.
   * 
   * @example
   * true
   */
  publish?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource queue.
   * 
   * @example
   * root_queue
   */
  resourceQueue?: string;
  /**
   * @remarks
   * The number of retries.
   * 
   * @example
   * 1
   */
  retryTimes?: number;
  /**
   * @remarks
   * The Alibaba Cloud UID of the execution user.
   * 
   * @example
   * 113***************
   */
  runAs?: string;
  /**
   * @remarks
   * The scheduling structure.
   */
  schedule?: CreateProcessDefinitionWithScheduleRequestSchedule;
  /**
   * @remarks
   * The tags.
   */
  tags?: { [key: string]: string };
  /**
   * @remarks
   * The JSON array of task definitions. It contains the description information of all tasks in the workflow.
   * 
   * This parameter is required.
   */
  taskDefinitionJson?: CreateProcessDefinitionWithScheduleRequestTaskDefinitionJson[];
  /**
   * @remarks
   * The task concurrency.
   * 
   * @example
   * 1
   */
  taskParallelism?: number;
  /**
   * @remarks
   * The JSON array of task dependencies. It contains the dependencies among all tasks in the workflow. preTaskCode specifies the upstream task ID, and postTaskCode specifies the downstream task ID. Each task must have a unique ID. If a task node does not have an upstream task, you must add a dependency with preTaskCode set to 0.
   * 
   * This parameter is required.
   */
  taskRelationJson?: CreateProcessDefinitionWithScheduleRequestTaskRelationJson[];
  /**
   * @remarks
   * The default timeout period for workflow execution, in seconds.
   * 
   * @example
   * 60
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      alertEmailAddress: 'alertEmailAddress',
      description: 'description',
      executionType: 'executionType',
      globalParams: 'globalParams',
      name: 'name',
      productNamespace: 'productNamespace',
      publish: 'publish',
      regionId: 'regionId',
      resourceQueue: 'resourceQueue',
      retryTimes: 'retryTimes',
      runAs: 'runAs',
      schedule: 'schedule',
      tags: 'tags',
      taskDefinitionJson: 'taskDefinitionJson',
      taskParallelism: 'taskParallelism',
      taskRelationJson: 'taskRelationJson',
      timeout: 'timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertEmailAddress: 'string',
      description: 'string',
      executionType: 'string',
      globalParams: { 'type': 'array', 'itemType': CreateProcessDefinitionWithScheduleRequestGlobalParams },
      name: 'string',
      productNamespace: 'string',
      publish: 'boolean',
      regionId: 'string',
      resourceQueue: 'string',
      retryTimes: 'number',
      runAs: 'string',
      schedule: CreateProcessDefinitionWithScheduleRequestSchedule,
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      taskDefinitionJson: { 'type': 'array', 'itemType': CreateProcessDefinitionWithScheduleRequestTaskDefinitionJson },
      taskParallelism: 'number',
      taskRelationJson: { 'type': 'array', 'itemType': CreateProcessDefinitionWithScheduleRequestTaskRelationJson },
      timeout: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.globalParams)) {
      $dara.Model.validateArray(this.globalParams);
    }
    if(this.schedule && typeof (this.schedule as any).validate === 'function') {
      (this.schedule as any).validate();
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    if(Array.isArray(this.taskDefinitionJson)) {
      $dara.Model.validateArray(this.taskDefinitionJson);
    }
    if(Array.isArray(this.taskRelationJson)) {
      $dara.Model.validateArray(this.taskRelationJson);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

