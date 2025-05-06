// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParamsLocalParams } from "./UpdateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParamsLocalParams";
import { UpdateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParamsSparkConf } from "./UpdateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParamsSparkConf";


export class UpdateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParams extends $dara.Model {
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
   * ev-h*************
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
  localParams?: UpdateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParamsLocalParams[];
  /**
   * @remarks
   * The name of the queue on which the job runs.
   * 
   * This parameter is required.
   * 
   * @example
   * root_queue
   */
  resourceQueueId?: string;
  /**
   * @remarks
   * The configurations of the Spark jobs.
   */
  sparkConf?: UpdateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParamsSparkConf[];
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

