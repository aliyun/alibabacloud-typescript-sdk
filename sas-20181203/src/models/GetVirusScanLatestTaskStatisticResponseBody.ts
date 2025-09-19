// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVirusScanLatestTaskStatisticResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of machines on which the virus scan task is complete.
   * 
   * @example
   * 2
   */
  completeMachine?: number;
  /**
   * @remarks
   * The name of the machine.
   * 
   * @example
   * testMahine1
   */
  machineName?: string;
  /**
   * @remarks
   * The progress of the virus scan task in percentage.
   * 
   * @example
   * 92
   */
  progress?: string;
  /**
   * @remarks
   * The highest risk level of the detected alerts. Valid values:
   * 
   * *   **high**
   * *   **medium**
   * *   **low**
   * 
   * @example
   * medium
   */
  riskLevel?: string;
  /**
   * @remarks
   * The number of safe machines that are detected.
   * 
   * @example
   * 1
   */
  safeMachine?: number;
  /**
   * @remarks
   * The number of machines that are scanned.
   * 
   * @example
   * 3
   */
  scanMachine?: number;
  /**
   * @remarks
   * The paths of files that were scanned. This value is returned only when ScanType is set to user.
   */
  scanPath?: string[];
  /**
   * @remarks
   * The timestamp generated when the virus scan task was performed. Unit: milliseconds.
   * 
   * @example
   * 1681145862000
   */
  scanTime?: number;
  /**
   * @remarks
   * The type of the virus scan. Valid values:
   * 
   * *   **system**: automatic scan.
   * *   **user**: custom scan.
   * 
   * @example
   * system
   */
  scanType?: string;
  /**
   * @remarks
   * The status of the virus scan task.
   * 
   * **Valid values for a main task**:
   * 
   * *   **0**: The main task is to be started.
   * *   **10**: The main task is running.
   * *   **100**: The main task is complete.
   * 
   * **Valid values for a subtask**:
   * 
   * *   **0**: The subtask is to be started.
   * *   **20**: The scan script is sent.
   * *   **50**: The subtask is running.
   * *   **100**: The subtask is complete.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The number of alerts that are detected.
   * 
   * @example
   * 2
   */
  suspiciousCount?: number;
  /**
   * @remarks
   * The number of suspicious machines that are detected.
   * 
   * @example
   * 2
   */
  suspiciousMachine?: number;
  /**
   * @remarks
   * The ID of the virus scan task.
   * 
   * @example
   * fc98d58eb56f699d49bf7ebbd6d7****
   */
  taskId?: string;
  /**
   * @remarks
   * The number of machines on which the virus scan task was not complete or failed.
   * 
   * @example
   * 1
   */
  unCompleteMachine?: number;
  static names(): { [key: string]: string } {
    return {
      completeMachine: 'CompleteMachine',
      machineName: 'MachineName',
      progress: 'Progress',
      riskLevel: 'RiskLevel',
      safeMachine: 'SafeMachine',
      scanMachine: 'ScanMachine',
      scanPath: 'ScanPath',
      scanTime: 'ScanTime',
      scanType: 'ScanType',
      status: 'Status',
      suspiciousCount: 'SuspiciousCount',
      suspiciousMachine: 'SuspiciousMachine',
      taskId: 'TaskId',
      unCompleteMachine: 'UnCompleteMachine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeMachine: 'number',
      machineName: 'string',
      progress: 'string',
      riskLevel: 'string',
      safeMachine: 'number',
      scanMachine: 'number',
      scanPath: { 'type': 'array', 'itemType': 'string' },
      scanTime: 'number',
      scanType: 'string',
      status: 'number',
      suspiciousCount: 'number',
      suspiciousMachine: 'number',
      taskId: 'string',
      unCompleteMachine: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.scanPath)) {
      $dara.Model.validateArray(this.scanPath);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVirusScanLatestTaskStatisticResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the virus scan task.
   */
  data?: GetVirusScanLatestTaskStatisticResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7532B7EE-7CE7-5F4D-BF04-B12447DDCAE1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetVirusScanLatestTaskStatisticResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

