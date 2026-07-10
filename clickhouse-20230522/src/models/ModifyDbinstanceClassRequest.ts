// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceClassRequestAutoScaleConfigVSwitchInfos extends $dara.Model {
  /**
   * @remarks
   * The VSwitch IDs.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-beijing-XXX
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchIds: 'VSwitchIds',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceClassRequestAutoScaleConfig extends $dara.Model {
  /**
   * @remarks
   * The number of burstable nodes for autoscaling.
   * 
   * @example
   * 2
   */
  burstNum?: number;
  /**
   * @remarks
   * Specifies whether to enable or disable autoscaling. Valid values: `enable` and `disable`.
   * 
   * @example
   * enable
   */
  status?: string;
  /**
   * @remarks
   * Information about the VSwitches.
   */
  vSwitchInfos?: ModifyDBInstanceClassRequestAutoScaleConfigVSwitchInfos[];
  static names(): { [key: string]: string } {
    return {
      burstNum: 'BurstNum',
      status: 'Status',
      vSwitchInfos: 'VSwitchInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      burstNum: 'number',
      status: 'string',
      vSwitchInfos: { 'type': 'array', 'itemType': ModifyDBInstanceClassRequestAutoScaleConfigVSwitchInfos },
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchInfos)) {
      $dara.Model.validateArray(this.vSwitchInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceClassRequest extends $dara.Model {
  /**
   * @remarks
   * The autoscaling configuration for the compute group.
   * 
   * **if can be null:**
   * true
   */
  autoScaleConfig?: ModifyDBInstanceClassRequestAutoScaleConfig;
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
   * The maximum capacity per node for serverless autoscaling. Valid values: 4 to 32. This value must be greater than the minimum value.
   * 
   * @example
   * 4
   */
  nodeScaleMax?: number;
  /**
   * @remarks
   * The minimum capacity per node for serverless autoscaling. Valid values: 4 to 32.
   * 
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
   * The maximum capacity for serverless autoscaling.
   * 
   * @example
   * 32
   */
  scaleMax?: number;
  /**
   * @remarks
   * The minimum capacity for serverless autoscaling.
   * 
   * @example
   * 8
   */
  scaleMin?: number;
  /**
   * @remarks
   * The pre-purchased storage capacity in GB.
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
      autoScaleConfig: 'AutoScaleConfig',
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
      autoScaleConfig: ModifyDBInstanceClassRequestAutoScaleConfig,
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
    if(this.autoScaleConfig && typeof (this.autoScaleConfig as any).validate === 'function') {
      (this.autoScaleConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

