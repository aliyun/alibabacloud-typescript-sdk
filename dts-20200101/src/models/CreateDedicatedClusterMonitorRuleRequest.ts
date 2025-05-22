// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDedicatedClusterMonitorRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The alert threshold for CPU utilization. Unit: percentage.
   * 
   * @example
   * 30
   */
  cpuAlarmThreshold?: number;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * dts-dasd22******
   */
  dedicatedClusterId?: string;
  /**
   * @remarks
   * The alert threshold for disk usage. Unit: percentage.
   * 
   * @example
   * 100
   */
  diskAlarmThreshold?: number;
  /**
   * @remarks
   * The alert threshold for DTS Unit (DU) usage. Unit: percentage.
   * 
   * @example
   * 20
   */
  duAlarmThreshold?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * rm-bp1162kryivb8****
   */
  instanceId?: string;
  /**
   * @remarks
   * The alert threshold for memory usage. Unit: percentage.
   * 
   * @example
   * 40
   */
  memAlarmThreshold?: number;
  /**
   * @remarks
   * Specifies whether to enable the alert feature. Valid values:
   * 
   * *   **1**: enables the alert feature.
   * *   **0**: disables the alert feature.
   * 
   * @example
   * 1
   */
  noticeSwitch?: number;
  ownerId?: string;
  /**
   * @remarks
   * The mobile phone number to which alerts are sent. Separate multiple mobile phone numbers with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 186****7654
   */
  phones?: string;
  /**
   * @remarks
   * The ID of the region in which the Data Transmission Service (DTS) instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. This parameter is a global parameter and not required.
   * 
   * @example
   * The resource group ID. This parameter is a global parameter and not required.
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

