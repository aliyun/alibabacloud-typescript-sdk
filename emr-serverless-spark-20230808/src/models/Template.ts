// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SparkConf } from "./SparkConf";


export class Template extends $dara.Model {
  bizId?: string;
  /**
   * @remarks
   * The user ID of the job creator.
   * 
   * This parameter is required.
   * 
   * @example
   * 150978934701****
   */
  creator?: number;
  /**
   * @remarks
   * The displayed version of the Spark engine.
   * 
   * @example
   * esr-4.1.1
   */
  displaySparkVersion?: string;
  /**
   * @remarks
   * Indicates whether Fusion engine is enabled for acceleration.
   * 
   * @example
   * false
   */
  fusion?: boolean;
  /**
   * @remarks
   * The creation time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-03-10T02:02:41.000+00:00
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The time when the job was last modified.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-03-10T02:02:41.000+00:00
   */
  gmtModified?: string;
  isDefault?: boolean;
  /**
   * @remarks
   * The ID of the user who last modified the job.
   * 
   * This parameter is required.
   * 
   * @example
   * 150978934701****
   */
  modifier?: number;
  name?: string;
  /**
   * @remarks
   * The SparkConf objects.
   */
  sparkConf?: SparkConf[];
  /**
   * @remarks
   * The number of driver cores of the Spark job.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  sparkDriverCores?: number;
  /**
   * @remarks
   * The size of driver memory of the Spark job.
   * 
   * This parameter is required.
   * 
   * @example
   * 1073741824
   */
  sparkDriverMemory?: number;
  /**
   * @remarks
   * The number of executor cores of the Spark job.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  sparkExecutorCores?: number;
  /**
   * @remarks
   * The size of executor memory of the Spark job.
   * 
   * This parameter is required.
   * 
   * @example
   * 1073741824
   */
  sparkExecutorMemory?: number;
  /**
   * @remarks
   * The level of the Spark log.
   * 
   * This parameter is required.
   * 
   * @example
   * INFO
   */
  sparkLogLevel?: string;
  /**
   * @remarks
   * The path where the operational logs of the Spark job are stored.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://your_bucket/path/to/your/log
   */
  sparkLogPath?: string;
  /**
   * @remarks
   * The engine version of Spark.
   * 
   * This parameter is required.
   * 
   * @example
   * esr-4.1.1
   */
  sparkVersion?: string;
  /**
   * @remarks
   * The template type.
   * 
   * @example
   * TASK
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'bizId',
      creator: 'creator',
      displaySparkVersion: 'displaySparkVersion',
      fusion: 'fusion',
      gmtCreated: 'gmtCreated',
      gmtModified: 'gmtModified',
      isDefault: 'isDefault',
      modifier: 'modifier',
      name: 'name',
      sparkConf: 'sparkConf',
      sparkDriverCores: 'sparkDriverCores',
      sparkDriverMemory: 'sparkDriverMemory',
      sparkExecutorCores: 'sparkExecutorCores',
      sparkExecutorMemory: 'sparkExecutorMemory',
      sparkLogLevel: 'sparkLogLevel',
      sparkLogPath: 'sparkLogPath',
      sparkVersion: 'sparkVersion',
      templateType: 'templateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      creator: 'number',
      displaySparkVersion: 'string',
      fusion: 'boolean',
      gmtCreated: 'string',
      gmtModified: 'string',
      isDefault: 'boolean',
      modifier: 'number',
      name: 'string',
      sparkConf: { 'type': 'array', 'itemType': SparkConf },
      sparkDriverCores: 'number',
      sparkDriverMemory: 'number',
      sparkExecutorCores: 'number',
      sparkExecutorMemory: 'number',
      sparkLogLevel: 'string',
      sparkLogPath: 'string',
      sparkVersion: 'string',
      templateType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sparkConf)) {
      $dara.Model.validateArray(this.sparkConf);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

