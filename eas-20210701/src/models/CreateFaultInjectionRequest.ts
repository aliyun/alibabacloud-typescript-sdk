// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFaultInjectionRequest extends $dara.Model {
  /**
   * @remarks
   * Detailed parameters for each fault type:
   * 1. CpuFullloadTask (CPU full-load fault)
   * `
   * {
   *   "FaultType": "CpuFullloadTask",
   *   "FaultArgs": {
   *     "FaultAction": "fullload",
   *     "CpuPercent": 50
   *   }
   * }
   * `
   * 2. MemLoadTask (Memory load fault)
   * `
   * {
   *   "FaultType": "MemLoadTask",
   *   "FaultArgs": {
   *     "FaultAction": "load",
   *     "MemPercent": 80
   *   }
   * }
   * `
   * 3. NetworkTask (Network fault)
   * 3.a. NetworkDelayAction (Network delay)
   * `
   * {
   *   "FaultType": "NetworkTask",
   *   "FaultArgs": {
   *     "FaultAction": "delay",
   *     "Time": 3000,
   *     "Offset": 100
   *   }
   * }
   * `
   * 3.b. NetworkCorruptAction (Network packet corruption)
   * `
   * {
   *   "FaultType": "NetworkTask",
   *   "FaultArgs": {
   *     "FaultAction": "corrupt",
   *     "Percent": 50
   *   }
   * }
   * `
   * 3.c. NetworkLossAction (Network packet loss)
   * `
   * {
   *   "FaultType": "NetworkTask",
   *   "FaultArgs": {
   *     "FaultAction": "loss",
   *     "Percent": 30
   *   }
   * }
   * `
   * 4. DiskBurnTask (Disk read/write fault)
   * `
   * {
   *   "FaultType": "DiskBurnTask",
   *   "FaultArgs": {
   *     "FaultAction": "burn",
   *     "Read": true,
   *     "Write": true,
   *     "Size": 100
   *   }
   * }
   * `
   * 5. DiskFillTask (Disk fill fault)
   * `
   * {
   *   "FaultType": "DiskFillTask",
   *   "FaultArgs": {
   *     "FaultAction": "fill",
   *     "Percent": 80
   *   }
   * }
   * `
   * 
   * @example
   * {
   *   "FaultType": "DiskFillTask",
   *   "FaultArgs": {
   *     "FaultAction": "fill",
   *     "Percent": 80
   *   }
   * }
   */
  faultArgs?: any;
  /**
   * @remarks
   * The fault type. Device faults include CPU full load, memory load, network fault, disk read/write hang, and disk fill.
   * 
   * @example
   * CpuFullloadTask
   */
  faultType?: string;
  static names(): { [key: string]: string } {
    return {
      faultArgs: 'FaultArgs',
      faultType: 'FaultType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faultArgs: 'any',
      faultType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

