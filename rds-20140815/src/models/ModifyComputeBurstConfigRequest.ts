// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyComputeBurstConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Set this parameter to **disabled** to disable the committed serverless feature.
   * 
   * @example
   * disabled
   */
  burstStatus?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
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
   * A reserved parameter. This parameter is not supported.
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
   * The maximum number of CPUs for elastic scale-out. The value can be up to twice the initial CPU configuration of the instance.
   * 
   * @example
   * 2
   */
  scaleMaxCpus?: string;
  /**
   * @remarks
   * The maximum memory for elastic scale-out. The value can be up to twice the initial memory configuration of the instance. Unit: GB. The value is adjusted in increments of 2 GB.
   * 
   * @example
   * 4
   */
  scaleMaxMemory?: string;
  scaleMaxRcu?: number;
  scaleMinRcu?: number;
  /**
   * @remarks
   * The specified time at which the modification takes effect. Format: `yyyy-MM-ddTHH:mm:ssZ` (UTC).
   * > This parameter is required when **SwitchTimeMode** is set to **2**.
   * 
   * @example
   * 2025-05-06T09:24:00Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The effective policy. Valid values:
   * - **0**: The modification takes effect immediately.
   * - **1**: The modification takes effect during the maintenance window. You can call the **ModifyDBInstanceMaintainTime** operation to modify the maintenance window.
   * - **2**: The modification takes effect at a specified point in time.
   * 
   * @example
   * Immediate
   */
  switchTimeMode?: string;
  /**
   * @remarks
   * A reserved parameter. This parameter is not supported.
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

