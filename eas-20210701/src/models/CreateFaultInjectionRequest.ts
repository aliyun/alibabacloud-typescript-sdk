// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFaultInjectionRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters for each fault type are described as follows:
   * 
   * 1. CpuFullloadTask (CPU full load fault)
   *    `{ "FaultType": "CpuFullloadTask", "FaultArgs": { "FaultAction": "fullload", "CpuPercent": 50 } }`
   * 
   * 2. MemLoadTask (Memory load fault)
   *    `{ "FaultType": "MemLoadTask", "FaultArgs": { "FaultAction": "load", "MemPercent": 80 } }`
   * 
   * 3. NetworkTask (Network fault)
   *    3.a. NetworkDelayAction (Network delay)
   *    `{ "FaultType": "NetworkTask", "FaultArgs": { "FaultAction": "delay", "Time": 3000, "Offset": 100 } }`
   *    3.b. NetworkCorruptAction (Network packet corruption)
   *    `{ "FaultType": "NetworkTask", "FaultArgs": { "FaultAction": "corrupt", "Percent": 50 } }`
   *    3.c. NetworkLossAction (Network packet loss)
   *    `{ "FaultType": "NetworkTask", "FaultArgs": { "FaultAction": "loss", "Percent": 30 } }`
   * 
   * 4. DiskBurnTask (Disk read/write fault)
   *    `{ "FaultType": "DiskBurnTask", "FaultArgs": { "FaultAction": "burn", "Read": true, "Write": true, "Size": 100 } }`
   * 
   * 5. DiskFillTask (Disk fill fault)
   *    `{ "FaultType": "DiskFillTask", "FaultArgs": { "FaultAction": "fill", "Percent": 80 } }`
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
   * The fault type.
   * Device faults: 1. CPU full load fault. 2. Memory load fault. 3. Network fault. 4. Disk read/write fault. 5. Disk fill fault.
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

