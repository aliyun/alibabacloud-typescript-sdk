// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SparkConf } from "./SparkConf";


export class Template extends $dara.Model {
  bizId?: string;
  /**
   * @remarks
   * Creator UID.
   * 
   * This parameter is required.
   * 
   * @example
   * 150978934701****
   */
  creator?: number;
  /**
   * @remarks
   * Spark engine display version.
   * 
   * @example
   * esr-4.1.1
   */
  displaySparkVersion?: string;
  /**
   * @remarks
   * Whether to enable the fusion switch.
   * 
   * @example
   * false
   */
  fusion?: boolean;
  /**
   * @remarks
   * Creation time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-03-10T02:02:41.000+00:00
   */
  gmtCreated?: string;
  /**
   * @remarks
   * Last modified time.
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
   * Last modifier UID.
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
   * Spark Conf
   */
  sparkConf?: SparkConf[];
  /**
   * @remarks
   * Spark Driver cores.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  sparkDriverCores?: number;
  /**
   * @remarks
   * Spark Driver memory.
   * 
   * This parameter is required.
   * 
   * @example
   * 1073741824
   */
  sparkDriverMemory?: number;
  /**
   * @remarks
   * Spark Executor cores.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  sparkExecutorCores?: number;
  /**
   * @remarks
   * Spark Executor memory.
   * 
   * This parameter is required.
   * 
   * @example
   * 1073741824
   */
  sparkExecutorMemory?: number;
  /**
   * @remarks
   * Spark log level.
   * 
   * This parameter is required.
   * 
   * @example
   * INFO
   */
  sparkLogLevel?: string;
  /**
   * @remarks
   * Spark log path.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://your_bucket/path/to/your/log
   */
  sparkLogPath?: string;
  /**
   * @remarks
   * Spark internal release version.
   * 
   * This parameter is required.
   * 
   * @example
   * esr-4.1.1
   */
  sparkVersion?: string;
  /**
   * @remarks
   * Template type.
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

