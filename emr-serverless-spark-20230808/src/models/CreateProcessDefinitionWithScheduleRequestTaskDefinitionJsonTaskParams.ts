// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParamsLocalParams } from "./CreateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParamsLocalParams";
import { CreateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParamsSparkConf } from "./CreateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParamsSparkConf";


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

