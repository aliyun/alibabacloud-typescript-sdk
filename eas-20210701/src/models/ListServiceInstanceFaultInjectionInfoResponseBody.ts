// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceInstanceFaultInjectionInfoResponseBodyFaultInfoListFaultStatus extends $dara.Model {
  /**
   * @remarks
   * The status of the fault. Valid values:
   * 
   * 1. FaultNotInjected: The task was created, but the fault was not successfully injected.
   * 
   * 2. FaultInjectedSuccess: The fault was successfully injected.
   * 
   * 3. FaultInjectedFailure: The fault injection failed. The failure may be caused by parameter errors or system issues.
   * 
   * @example
   * FaultInjectedSuccess
   */
  faultStatus?: string;
  /**
   * @remarks
   * The description of the fault injection.
   * 
   * @example
   * Network interface not found
   */
  faultStatusMessage?: string;
  static names(): { [key: string]: string } {
    return {
      faultStatus: 'FaultStatus',
      faultStatusMessage: 'FaultStatusMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faultStatus: 'string',
      faultStatusMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceFaultInjectionInfoResponseBodyFaultInfoList extends $dara.Model {
  /**
   * @remarks
   * The parameters for each fault type.
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
   *   "FaultType": "DiskBurnTask",
   *   "FaultArgs": {
   *     "FaultAction": "burn",
   *     "Read": true,
   *     "Write": true,
   *     "Size": 100
   *   }
   * }
   */
  faultArgs?: any;
  /**
   * @remarks
   * The fault status.
   */
  faultStatus?: ListServiceInstanceFaultInjectionInfoResponseBodyFaultInfoListFaultStatus;
  /**
   * @remarks
   * The fault type. Valid values:CpuFullloadTask: a CPU full load fault.MemLoadTask: a memory load fault.NetworkTask: a network fault.DiskBurnTask: a disk read/write fault.DiskFillTask: a disk fill fault.
   * 
   * @example
   * DiskFillTask
   */
  faultType?: string;
  static names(): { [key: string]: string } {
    return {
      faultArgs: 'FaultArgs',
      faultStatus: 'FaultStatus',
      faultType: 'FaultType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faultArgs: 'any',
      faultStatus: ListServiceInstanceFaultInjectionInfoResponseBodyFaultInfoListFaultStatus,
      faultType: 'string',
    };
  }

  validate() {
    if(this.faultStatus && typeof (this.faultStatus as any).validate === 'function') {
      (this.faultStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceFaultInjectionInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of injected faults.
   */
  faultInfoList?: ListServiceInstanceFaultInjectionInfoResponseBodyFaultInfoList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      faultInfoList: 'FaultInfoList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faultInfoList: { 'type': 'array', 'itemType': ListServiceInstanceFaultInjectionInfoResponseBodyFaultInfoList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.faultInfoList)) {
      $dara.Model.validateArray(this.faultInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

