// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVirusScanLatestTaskStatisticResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of servers that completed the scan.
   * 
   * @example
   * 2
   */
  completeMachine?: number;
  /**
   * @remarks
   * The name of the server.
   * 
   * @example
   * testMahine1
   */
  machineName?: string;
  /**
   * @remarks
   * The progress percentage of the scan task.
   * 
   * @example
   * 92
   */
  progress?: string;
  /**
   * @remarks
   * The highest risk level of the alerts detected by the scan. Valid values:
   * 
   * - **high**: high-risk.
   * - **medium**: medium-risk.
   * - **low**: low-risk.
   * 
   * @example
   * medium
   */
  riskLevel?: string;
  /**
   * @remarks
   * The number of servers on which no risks are detected.
   * 
   * @example
   * 1
   */
  safeMachine?: number;
  /**
   * @remarks
   * The number of servers scanned in this virus scan.
   * 
   * @example
   * 3
   */
  scanMachine?: number;
  /**
   * @remarks
   * The file paths specified for scanning when the scan type is user-defined.
   */
  scanPath?: string[];
  /**
   * @remarks
   * The timestamp of the scan. Unit: milliseconds.
   * 
   * @example
   * 1681145862000
   */
  scanTime?: number;
  /**
   * @remarks
   * The scan type of this virus scan. Valid values:
   * - **system**: automatic system scan.
   * - **user**: user-defined scan.
   * 
   * @example
   * system
   */
  scanType?: string;
  /**
   * @remarks
   * The status of the scan task.
   * 
   * **Valid values for the main task:**
   * - **0**: The task is pending.
   * - **10**: The scan is in progress.
   * - **100**: The scan is complete.
   * 
   * **Valid values for the subtask:**
   * - **0**: The scan is pending.
   * - **20**: The detection script is delivered.
   * - **50**: The scan is running on the server.
   * - **100**: The scan is complete.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The number of security alerts detected by the scan.
   * 
   * @example
   * 2
   */
  suspiciousCount?: number;
  /**
   * @remarks
   * The number of servers on which risks are detected.
   * 
   * @example
   * 2
   */
  suspiciousMachine?: number;
  /**
   * @remarks
   * The ID of the scan task.
   * 
   * @example
   * fc98d58eb56f699d49bf7ebbd6d7****
   */
  taskId?: string;
  /**
   * @remarks
   * The number of servers that have not completed the scan or failed the scan.
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
   * The custom result data.
   */
  data?: GetVirusScanLatestTaskStatisticResponseBodyData;
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use the ID to troubleshoot issues.
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

