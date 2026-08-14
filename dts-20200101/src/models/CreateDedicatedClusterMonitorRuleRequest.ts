// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDedicatedClusterMonitorRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The CPU alert threshold. Unit: %.
   * 
   * @example
   * 30
   */
  cpuAlarmThreshold?: number;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dts-dasd22******
   */
  dedicatedClusterId?: string;
  /**
   * @remarks
   * The disk alert threshold. Unit: %.
   * 
   * @example
   * 100
   */
  diskAlarmThreshold?: number;
  /**
   * @remarks
   * The DU alert threshold. Unit: %.
   * 
   * @example
   * 20
   */
  duAlarmThreshold?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-bp1162kryivb8****
   */
  instanceId?: string;
  /**
   * @remarks
   * The memory alert threshold. Unit: %.
   * 
   * @example
   * 40
   */
  memAlarmThreshold?: number;
  /**
   * @remarks
   * The alert switch. Valid values:
   * 
   * - **1**: on.
   * - **0**: off.
   * 
   * @example
   * 1
   */
  noticeSwitch?: number;
  ownerId?: string;
  /**
   * @remarks
   * The alert phone numbers. Separate multiple phone numbers with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 186****7654
   */
  phones?: string;
  /**
   * @remarks
   * The region in which the DTS instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. This is a global parameter and does not need to be passed in for this API operation.
   * 
   * @example
   * 资源组ID，全局参数，当前API无需传入。
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      cpuAlarmThreshold: 'CpuAlarmThreshold',
      dedicatedClusterId: 'DedicatedClusterId',
      diskAlarmThreshold: 'DiskAlarmThreshold',
      duAlarmThreshold: 'DuAlarmThreshold',
      instanceId: 'InstanceId',
      memAlarmThreshold: 'MemAlarmThreshold',
      noticeSwitch: 'NoticeSwitch',
      ownerId: 'OwnerId',
      phones: 'Phones',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuAlarmThreshold: 'number',
      dedicatedClusterId: 'string',
      diskAlarmThreshold: 'number',
      duAlarmThreshold: 'number',
      instanceId: 'string',
      memAlarmThreshold: 'number',
      noticeSwitch: 'number',
      ownerId: 'string',
      phones: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

