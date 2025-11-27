// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyComputeBurstConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is set to **disabled** if the assured serverless feature is disabled.
   * 
   * @example
   * disabled
   */
  burstStatus?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of requests and prevent repeated requests from being submitted. You can use the client to generate the value, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCziJZNwH****
   */
  clientToken?: string;
  /**
   * @remarks
   * The CPU utilization threshold for **scale-out**. Valid values: 60 to 90. Unit: %.
   * 
   * @example
   * 80
   */
  cpuEnlargeThreshold?: string;
  /**
   * @remarks
   * The CPU utilization threshold for **scale-in**. Valid values: 30 to 55. Unit: %.
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
   * The memory usage threshold for **scale-out**. Valid values: 60 to 90. Unit: %.
   * 
   * @example
   * 80
   */
  memoryEnlargeThreshold?: string;
  /**
   * @remarks
   * The memory usage threshold for **scale-in**. Valid values: 30 to 55. Unit: %.
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
   * The maximum number of CPU cores for elastic scaling. The maximum value cannot exceed twice the initial CPU configuration.
   * 
   * @example
   * 2
   */
  scaleMaxCpus?: string;
  /**
   * @remarks
   * The maximum memory for elastic scaling. The value cannot exceed twice the instance\\"s initial memory size. Unit: GB. Step size: 2 GB.
   * 
   * @example
   * 4
   */
  scaleMaxMemory?: string;
  /**
   * @remarks
   * The time when the specified entry takes effect. The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * >  This parameter is required only if **SwitchTimeMode** is set to **2**.
   * 
   * @example
   * 2025-05-06T09:24:00Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The effective policy. Valid values:
   * 
   * *   **0**: Immediately takes effect.
   * *   **1**: Takes effect within the maintenance window. You can call the **ModifyDBInstanceMaintainTime** operation to change the maintenance window of an instance.
   * *   **2**: Takes effect at a specified point in time.
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

