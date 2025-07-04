// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyComputeBurstConfigRequest extends $dara.Model {
  /**
   * @example
   * disabled
   */
  burstStatus?: string;
  /**
   * @example
   * ETnLKlblzczshOTUbOCziJZNwH****
   */
  clientToken?: string;
  /**
   * @example
   * 80
   */
  cpuEnlargeThreshold?: string;
  /**
   * @example
   * 50
   */
  cpuShrinkThreshold?: string;
  /**
   * @example
   * None
   */
  crontabJobId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pgm-2ze63v2p3o3k****
   */
  DBInstanceId?: string;
  /**
   * @example
   * 80
   */
  memoryEnlargeThreshold?: string;
  /**
   * @example
   * 50
   */
  memoryShrinkThreshold?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * rg-acfmy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  /**
   * @example
   * 2
   */
  scaleMaxCpus?: string;
  /**
   * @example
   * 4
   */
  scaleMaxMemory?: string;
  /**
   * @example
   * 2025-05-06T09:24:00Z
   */
  switchTime?: string;
  /**
   * @example
   * Immediate
   */
  switchTimeMode?: string;
  /**
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

