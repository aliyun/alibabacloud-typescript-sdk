// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyComputeBurstConfigRequest extends $dara.Model {
  /**
   * @remarks
   * To disable the provisioned Serverless feature, set this parameter to **disabled**.
   * 
   * @example
   * disabled
   */
  burstStatus?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can generate the value of this parameter on the client side. The value must be unique across different requests and can contain a maximum of 64 ASCII characters. The value cannot contain non-ASCII characters.
   * 
   * @example
   * ETnLKlblzczshOTUbOCziJZNwH****
   */
  clientToken?: string;
  /**
   * @remarks
   * The CPU utilization threshold for elastic **scale-out**. Valid values: 60 to 90. Unit: %.
   * 
   * @example
   * 80
   */
  cpuEnlargeThreshold?: string;
  /**
   * @remarks
   * The CPU utilization threshold for elastic **scale-in**. Valid values: 30 to 55. Unit: %.
   * 
   * @example
   * 50
   */
  cpuShrinkThreshold?: string;
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  crontabJobId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pgm-2ze63v2p3o3k****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The memory utilization threshold for elastic **scale-out**. Valid values: 60 to 90. Unit: %.
   * 
   * @example
   * 80
   */
  memoryEnlargeThreshold?: string;
  /**
   * @remarks
   * The memory utilization threshold for elastic **scale-in**. Valid values: 30 to 55. Unit: %.
   * 
   * @example
   * 50
   */
  memoryShrinkThreshold?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The upper limit of CPUs for elastic scale-out. The value can be up to twice the initial CPU configuration of the instance.
   * 
   * @example
   * 2
   */
  scaleMaxCpus?: string;
  /**
   * @remarks
   * The upper limit of memory for elastic scale-out. The value can be up to twice the initial memory configuration of the instance. Unit: GB. The adjustment increment is 2 GB.
   * 
   * @example
   * 4
   */
  scaleMaxMemory?: string;
  /**
   * @remarks
   * The upper limit of RCU scaling for ApsaraDB RDS for MySQL provisioned Serverless.
   * 
   * @example
   * 8.0
   */
  scaleMaxRcu?: number;
  /**
   * @remarks
   * The lower limit of RCU scaling for ApsaraDB RDS for MySQL provisioned Serverless.
   * 
   * @example
   * 0.5
   */
  scaleMinRcu?: number;
  /**
   * @remarks
   * The specified time when the modification takes effect. Specify the time in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * >This parameter is required when **SwitchTimeMode** is set to **2**.
   * 
   * @example
   * 2025-05-06T09:24:00Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The effective policy. Valid values:
   * - **0**: Takes effect immediately.
   * - **1**: Takes effect within the maintenance window. You can call the **ModifyDBInstanceMaintainTime** operation to modify the maintenance window.
   * - **2**: Takes effect at a specified point in time.
   * 
   * @example
   * Immediate
   */
  switchTimeMode?: string;
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      burstStatus: 'BurstStatus',
      clientToken: 'ClientToken',
      cpuEnlargeThreshold: 'CpuEnlargeThreshold',
      cpuShrinkThreshold: 'CpuShrinkThreshold',
      crontabJobId: 'CrontabJobId',
      DBInstanceId: 'DBInstanceId',
      memoryEnlargeThreshold: 'MemoryEnlargeThreshold',
      memoryShrinkThreshold: 'MemoryShrinkThreshold',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scaleMaxCpus: 'ScaleMaxCpus',
      scaleMaxMemory: 'ScaleMaxMemory',
      scaleMaxRcu: 'ScaleMaxRcu',
      scaleMinRcu: 'ScaleMinRcu',
      switchTime: 'SwitchTime',
      switchTimeMode: 'SwitchTimeMode',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      burstStatus: 'string',
      clientToken: 'string',
      cpuEnlargeThreshold: 'string',
      cpuShrinkThreshold: 'string',
      crontabJobId: 'string',
      DBInstanceId: 'string',
      memoryEnlargeThreshold: 'string',
      memoryShrinkThreshold: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      scaleMaxCpus: 'string',
      scaleMaxMemory: 'string',
      scaleMaxRcu: 'number',
      scaleMinRcu: 'number',
      switchTime: 'string',
      switchTimeMode: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

