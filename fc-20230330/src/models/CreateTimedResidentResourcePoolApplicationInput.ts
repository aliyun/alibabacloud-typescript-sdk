// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TimedPoolConfig } from "./TimedPoolConfig";


export class CreateTimedResidentResourcePoolApplicationInput extends $dara.Model {
  associatedPoolId?: string;
  diskSizeInGB?: number;
  gpuType?: string;
  memorySizeInGB?: number;
  operationType?: string;
  poolName?: string;
  reason?: string;
  timedConfig?: TimedPoolConfig;
  timedPoolId?: string;
  totalGPUCards?: number;
  vCpuCores?: number;
  static names(): { [key: string]: string } {
    return {
      associatedPoolId: 'associatedPoolId',
      diskSizeInGB: 'diskSizeInGB',
      gpuType: 'gpuType',
      memorySizeInGB: 'memorySizeInGB',
      operationType: 'operationType',
      poolName: 'poolName',
      reason: 'reason',
      timedConfig: 'timedConfig',
      timedPoolId: 'timedPoolId',
      totalGPUCards: 'totalGPUCards',
      vCpuCores: 'vCpuCores',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedPoolId: 'string',
      diskSizeInGB: 'number',
      gpuType: 'string',
      memorySizeInGB: 'number',
      operationType: 'string',
      poolName: 'string',
      reason: 'string',
      timedConfig: TimedPoolConfig,
      timedPoolId: 'string',
      totalGPUCards: 'number',
      vCpuCores: 'number',
    };
  }

  validate() {
    if(this.timedConfig && typeof (this.timedConfig as any).validate === 'function') {
      (this.timedConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

