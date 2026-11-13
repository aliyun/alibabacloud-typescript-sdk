// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SparkConf } from "./SparkConf";


export class Template extends $dara.Model {
  /**
   * @remarks
   * The business ID of the Spark task template.
   * 
   * @example
   * template-example-****
   */
  bizId?: string;
  /**
   * @remarks
   * The creator UID.
   * 
   * This parameter is required.
   * 
   * @example
   * 150978934701****
   */
  creator?: number;
  /**
   * @remarks
   * The display version of the Spark engine.
   * 
   * @example
   * esr-4.1.1
   */
  displaySparkVersion?: string;
  /**
   * @remarks
   * Specifies whether Fusion is enabled.
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
   * The last updated time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-03-10T02:02:41.000+00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * Specifies whether the template is the default template.
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The last updater UID.
   * 
   * This parameter is required.
   * 
   * @example
   * 150978934701****
   */
  modifier?: number;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * spark-task-template
   */
  name?: string;
  /**
   * @remarks
   * Spark Conf
   */
  sparkConf?: SparkConf[];
  /**
   * @remarks
   * The number of Spark driver cores.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  sparkDriverCores?: number;
  /**
   * @remarks
   * The Spark driver memory.
   * 
   * This parameter is required.
   * 
   * @example
   * 1073741824
   */
  sparkDriverMemory?: number;
  /**
   * @remarks
   * The number of Spark executor cores.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  sparkExecutorCores?: number;
  /**
   * @remarks
   * The Spark executor memory.
   * 
   * This parameter is required.
   * 
   * @example
   * 1073741824
   */
  sparkExecutorMemory?: number;
  /**
   * @remarks
   * The Spark log level.
   * 
   * This parameter is required.
   * 
   * @example
   * INFO
   */
  sparkLogLevel?: string;
  /**
   * @remarks
   * The Spark log path.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://your_bucket/path/to/your/log
   */
  sparkLogPath?: string;
  /**
   * @remarks
   * The Spark internal release version.
   * 
   * This parameter is required.
   * 
   * @example
   * esr-4.1.1
   */
  sparkVersion?: string;
  /**
   * @remarks
   * The templatetype.
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

