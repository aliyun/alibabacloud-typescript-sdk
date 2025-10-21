// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceClassRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @example
   * 2
   */
  nodeCount?: number;
  /**
   * @example
   * 4
   */
  nodeScaleMax?: number;
  /**
   * @example
   * 32
   */
  nodeScaleMin?: number;
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
   * The maximum capacity for elastic scaling.
   * 
   * @example
   * 32
   */
  scaleMax?: number;
  /**
   * @remarks
   * The minimum capacity for elastic scaling.
   * 
   * @example
   * 2
   */
  scaleMin?: number;
  /**
   * @example
   * 100
   */
  storageQuota?: number;
  /**
   * @example
   * OSS
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
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

