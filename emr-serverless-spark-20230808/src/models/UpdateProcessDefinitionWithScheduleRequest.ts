// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProcessDefinitionWithScheduleRequestGlobalParams extends $dara.Model {
  /**
   * @remarks
   * The parameter direction. Valid values: IN (input) and OUT (output).
   * 
   * @example
   * IN
   */
  direct?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * testGlobalParam
   */
  prop?: string;
  /**
   * @remarks
   * The data type of the parameter.
   * 
   * @example
   * VARCHAR
   */
  type?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * testGlobalParam
   */
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

export class UpdateProcessDefinitionWithScheduleRequestSchedule extends $dara.Model {
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
   * The start time. Format: YYYY-MM-DD HH:mm:ss.
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

export class UpdateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParamsLocalParams extends $dara.Model {
  /**
   * @remarks
   * The parameter direction. Valid values: IN (input) and OUT (output).
   * 
   * @example
   * IN
   */
  direct?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * testGlobalParam
   */
  prop?: string;
  /**
   * @remarks
   * The data type of the parameter.
   * 
   * @example
   * VARCHAR
   */
  type?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * testGlobalParam
   */
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

export class UpdateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParamsSparkConf extends $dara.Model {
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

export class UpdateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParams extends $dara.Model {
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
   * ev-h*************
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
  /**
   * @remarks
   * The list of local parameters for the task.
   */
  localParams?: UpdateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParamsLocalParams[];
  /**
   * @remarks
   * The name of the queue used to run the task.
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
  sparkConf?: UpdateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParamsSparkConf[];
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
   * The log path for the Spark node.
   */
  sparkLogPath?: string;
  /**
   * @remarks
   * The Spark engine version.
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
   * The Spark job type.
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
      localParams: { 'type': 'array', 'itemType': UpdateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParamsLocalParams },
      resourceQueueId: 'string',
      sparkConf: { 'type': 'array', 'itemType': UpdateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParamsSparkConf },
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

export class UpdateProcessDefinitionWithScheduleRequestTaskDefinitionJson extends $dara.Model {
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
   * 23************
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
   * true
   */
  failAlertEnable?: boolean;
  /**
   * @remarks
   * The number of retries allowed after a task failure.
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
   * true
   */
  startAlertEnable?: boolean;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"tagkey":"tagvalue"}
   */
  tags?: { [key: string]: string };
  /**
   * @remarks
   * The task definition parameters.
   * 
   * This parameter is required.
   */
  taskParams?: UpdateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParams;
  /**
   * @remarks
   * The workflow node type.
   * 
   * This parameter is required.
   * 
   * @example
   * EMR-SERVERLESS-SPARK
   */
  taskType?: string;
  /**
   * @remarks
   * The default timeout period for task execution.
   * 
   * @example
   * 30
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
      taskParams: UpdateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParams,
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

export class UpdateProcessDefinitionWithScheduleRequestTaskRelationJson extends $dara.Model {
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
   * 19************
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

export class UpdateProcessDefinitionWithScheduleRequest extends $dara.Model {
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
  /**
   * @remarks
   * The list of global parameters for the workflow.
   */
  globalParams?: UpdateProcessDefinitionWithScheduleRequestGlobalParams[];
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
   * The online status of the workflow.
   * 
   * @example
   * ONLINE
   */
  releaseState?: string;
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
   * The execution user.
   * 
   * @example
   * 113***************
   */
  runAs?: string;
  /**
   * @remarks
   * The schedule structure.
   */
  schedule?: UpdateProcessDefinitionWithScheduleRequestSchedule;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"tagkey":"tagvalue"}
   */
  tags?: { [key: string]: string };
  /**
   * @remarks
   * The JSON array of task definitions, which contains the description of all tasks in the workflow.
   * 
   * This parameter is required.
   */
  taskDefinitionJson?: UpdateProcessDefinitionWithScheduleRequestTaskDefinitionJson[];
  /**
   * @remarks
   * The concurrency level for workflow node execution.
   * 
   * @example
   * 1
   */
  taskParallelism?: number;
  /**
   * @remarks
   * The JSON array of task dependencies, which contains the dependencies among all tasks in the workflow. preTaskCode specifies the upstream task ID, and postTaskCode specifies the downstream task ID. Each task must have a unique ID. If a task node does not have an upstream task, you must add a dependency with preTaskCode set to 0.
   * 
   * This parameter is required.
   */
  taskRelationJson?: UpdateProcessDefinitionWithScheduleRequestTaskRelationJson[];
  /**
   * @remarks
   * The default timeout period for workflow execution.
   * 
   * @example
   * 300
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
      releaseState: 'releaseState',
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
      globalParams: { 'type': 'array', 'itemType': UpdateProcessDefinitionWithScheduleRequestGlobalParams },
      name: 'string',
      productNamespace: 'string',
      publish: 'boolean',
      regionId: 'string',
      releaseState: 'string',
      resourceQueue: 'string',
      retryTimes: 'number',
      runAs: 'string',
      schedule: UpdateProcessDefinitionWithScheduleRequestSchedule,
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      taskDefinitionJson: { 'type': 'array', 'itemType': UpdateProcessDefinitionWithScheduleRequestTaskDefinitionJson },
      taskParallelism: 'number',
      taskRelationJson: { 'type': 'array', 'itemType': UpdateProcessDefinitionWithScheduleRequestTaskRelationJson },
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

