// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SparkConf } from "./SparkConf";


export class Template extends $dara.Model {
  bizId?: string;
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
  isDefault?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  modifier?: number;
  name?: string;
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

