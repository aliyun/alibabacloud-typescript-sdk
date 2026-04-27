// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceClassRequestAutoScaleConfigVSwitchInfos extends $dara.Model {
  vSwitchIds?: string[];
  /**
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
   * @example
   * 2
   */
  burstNum?: number;
  /**
   * @example
   * enable
   */
  status?: string;
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
   * **if can be null:**
   * true
   */
  autoScaleConfig?: ModifyDBInstanceClassRequestAutoScaleConfig;
  computingGroupId?: string;
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

