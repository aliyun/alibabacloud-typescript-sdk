// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceClassShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The automatic horizontal scaling configuration.
   * 
   * **if can be null:**
   * true
   */
  autoScaleConfigShrink?: string;
  /**
   * @remarks
   * The compute group ID.
   * 
   * @example
   * cc-gs5j3sua77*******-clickhouse
   */
  computingGroupId?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-gs5j3sua77*******
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The number of nodes. Valid values: 2 to 16.
   * 
   * @example
   * 2
   */
  nodeCount?: number;
  /**
   * @remarks
   * The maximum value for serverless node elastic scaling. Valid values: 4 to 32. The value must be greater than the minimum value.
   * 
   * @example
   * 4
   */
  nodeScaleMax?: number;
  /**
   * @remarks
   * The minimum value for serverless node elastic scaling. Valid values: 4 to 32.
   * 
   * @example
   * 32
   */
  nodeScaleMin?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The maximum value for serverless elastic scaling.
   * 
   * @example
   * 32
   */
  scaleMax?: number;
  /**
   * @remarks
   * The minimum value for serverless elastic scaling.
   * 
   * @example
   * 8
   */
  scaleMin?: number;
  /**
   * @remarks
   * The pre-purchased storage quota, in GB.
   * 
   * @example
   * 100
   */
  storageQuota?: number;
  /**
   * @remarks
   * The storage type.
   * 
   * @example
   * OSS
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      autoScaleConfigShrink: 'AutoScaleConfig',
      computingGroupId: 'ComputingGroupId',
      DBInstanceId: 'DBInstanceId',
      nodeCount: 'NodeCount',
      nodeScaleMax: 'NodeScaleMax',
      nodeScaleMin: 'NodeScaleMin',
      regionId: 'RegionId',
      scaleMax: 'ScaleMax',
      scaleMin: 'ScaleMin',
      storageQuota: 'StorageQuota',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScaleConfigShrink: 'string',
      computingGroupId: 'string',
      DBInstanceId: 'string',
      nodeCount: 'number',
      nodeScaleMax: 'number',
      nodeScaleMin: 'number',
      regionId: 'string',
      scaleMax: 'number',
      scaleMin: 'number',
      storageQuota: 'number',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

