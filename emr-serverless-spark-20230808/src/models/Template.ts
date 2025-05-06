// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SparkConf } from "./SparkConf";


export class Template extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  creator?: number;
  displaySparkVersion?: string;
  fusion?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  gmtCreated?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  gmtModified?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  modifier?: number;
  sparkConf?: SparkConf[];
  /**
   * @remarks
   * This parameter is required.
   */
  sparkDriverCores?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  sparkDriverMemory?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  sparkExecutorCores?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  sparkExecutorMemory?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  sparkLogLevel?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sparkLogPath?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sparkVersion?: string;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'creator',
      displaySparkVersion: 'displaySparkVersion',
      fusion: 'fusion',
      gmtCreated: 'gmtCreated',
      gmtModified: 'gmtModified',
      modifier: 'modifier',
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
      creator: 'number',
      displaySparkVersion: 'string',
      fusion: 'boolean',
      gmtCreated: 'string',
      gmtModified: 'string',
      modifier: 'number',
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

