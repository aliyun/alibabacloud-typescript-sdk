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
   * The CRON expression that is used for scheduling.
   * 
   * @example
   * 0 0 0 * * ?
   */
  crontab?: string;
  /**
   * @remarks
   * The end time of the scheduling.
   * 
   * @example
   * 2025-12-23 16:13:27
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the scheduling.
   * 
   * @example
   * 2024-12-23 16:13:27
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the time zone.
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
   * The key of the SparkConf object.
   * 
   * @example
   * spark.dynamicAllocation.enabled
   */
  key?: string;
  /**
   * @remarks
   * The value of the SparkConf object.
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
   * The displayed version of the Spark engine.
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
   * Specifies whether to enable Fusion engine for acceleration.
   * 
   * @example
   * false
   */
  fusion?: boolean;
  localParams?: CreateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParamsLocalParams[];
  /**
   * @remarks
   * The name of the resource queue on which the job runs.
   * 
   * This parameter is required.
   * 
   * @example
   * root_queue
   */
  resourceQueueId?: string;
  /**
   * @remarks
   * The configurations of the Spark job.
   */
  sparkConf?: CreateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParamsSparkConf[];
  /**
   * @remarks
   * The number of driver cores of the Spark job.
   * 
   * @example
   * 1
   */
  sparkDriverCores?: number;
  /**
   * @remarks
   * The size of driver memory of the Spark job.
   * 
   * @example
   * 4g
   */
  sparkDriverMemory?: number;
  /**
   * @remarks
   * The number of executor cores of the Spark job.
   * 
   * @example
   * 1
   */
  sparkExecutorCores?: number;
  /**
   * @remarks
   * The size of executor memory of the Spark job.
   * 
   * @example
   * 4g
   */
  sparkExecutorMemory?: number;
  /**
   * @remarks
   * The level of the Spark log.
   * 
   * @example
   * INFO
   */
  sparkLogLevel?: string;
  /**
   * @remarks
   * The path where the operational logs of the Spark job are stored.
   */
  sparkLogPath?: string;
  /**
   * @remarks
   * The version of the Spark engine.
   * 
   * @example
   * esr-4.0.0 (Spark 3.5.2, Scala 2.12)
   */
  sparkVersion?: string;
  /**
   * @remarks
   * The ID of the data development job.
   * 
   * This parameter is required.
   * 
   * @example
   * TSK-d87******************
   */
  taskBizId?: string;
  /**
   * @remarks
   * The type of the Spark job.
   * 
   * @example
   * VPC
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
   * The email address to receive alerts.
   * 
   * @example
   * foo_bar@spark.alert.invalid.com
   */
  alertEmailAddress?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 36************
   */
  code?: number;
  /**
   * @remarks
   * The node description.
   * 
   * @example
   * ods transform task
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to send alerts when the node fails.
   * 
   * @example
   * false
   */
  failAlertEnable?: boolean;
  /**
   * @remarks
   * The number of retries when the node fails.
   * 
   * @example
   * 1
   */
  failRetryTimes?: number;
  /**
   * @remarks
   * The name of the node.
   * 
   * This parameter is required.
   * 
   * @example
   * ods_transform_task
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to send alerts when the node is started.
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
   * The job parameters.
   * 
   * This parameter is required.
   */
  taskParams?: CreateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParams;
  /**
   * @remarks
   * The type of the node.
   * 
   * This parameter is required.
   * 
   * @example
   * MigrateData
   */
  taskType?: string;
  /**
   * @remarks
   * The timeout period of the callback. Unit: seconds.
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
   * The name of the node topology. You can enter a workflow name.
   * 
   * This parameter is required.
   * 
   * @example
   * ods batch workflow
   */
  name?: string;
  /**
   * @remarks
   * The ID of the downstream node.
   * 
   * This parameter is required.
   * 
   * @example
   * 28************
   */
  postTaskCode?: number;
  /**
   * @remarks
   * The version of the downstream node.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  postTaskVersion?: number;
  /**
   * @remarks
   * The ID of the upstream node.
   * 
   * This parameter is required.
   * 
   * @example
   * 16************
   */
  preTaskCode?: number;
  /**
   * @remarks
   * The version of the upstream node.
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
   * The email address to receive alerts.
   * 
   * @example
   * foo_bar@spark.alert.invalid.com
   */
  alertEmailAddress?: string;
  /**
   * @remarks
   * The description of the workflow.
   * 
   * This parameter is required.
   * 
   * @example
   * ods batch workflow
   */
  description?: string;
  /**
   * @remarks
   * The execution policy
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
   * The name of the workflow.
   * 
   * This parameter is required.
   * 
   * @example
   * ods_batch_workflow
   */
  name?: string;
  /**
   * @remarks
   * The code of the service.
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
   * The ID of the Alibaba Cloud account used by the user who creates the workflow.
   * 
   * @example
   * 113***************
   */
  runAs?: string;
  /**
   * @remarks
   * The scheduling settings.
   */
  schedule?: CreateProcessDefinitionWithScheduleRequestSchedule;
  /**
   * @remarks
   * The tags.
   */
  tags?: { [key: string]: string };
  /**
   * @remarks
   * The descriptions of all nodes in the workflow.
   * 
   * This parameter is required.
   */
  taskDefinitionJson?: CreateProcessDefinitionWithScheduleRequestTaskDefinitionJson[];
  /**
   * @remarks
   * The node parallelism.
   * 
   * @example
   * 1
   */
  taskParallelism?: number;
  /**
   * @remarks
   * The dependencies of all nodes in the workflow. preTaskCode specifies the ID of an upstream node, and postTaskCode specifies the ID of a downstream node. The ID of each node is unique. If a node does not have an upstream node, set preTaskCode to 0.
   * 
   * This parameter is required.
   */
  taskRelationJson?: CreateProcessDefinitionWithScheduleRequestTaskRelationJson[];
  /**
   * @remarks
   * The default timeout period of the workflow.
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

