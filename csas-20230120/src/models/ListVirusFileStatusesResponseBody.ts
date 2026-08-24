// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirusFileStatusesResponseBodyFileStatuses extends $dara.Model {
  /**
   * @remarks
   * The time when the administrator initiated the disposition, in the format yyyy-MM-dd HH:mm:ss (UTC+8). An empty string is returned when the disposition was not initiated by an administrator.
   * 
   * @example
   * 2026-08-21 09:30:12
   */
  consoleOperationTime?: string;
  /**
   * @remarks
   * The name of the department to which the user belongs. Multiple departments are separated by commas (,). The nearest department name in the organizational structure is returned, not the full path.
   * 
   * @example
   * R&D Department,Security Team
   */
  department?: string;
  /**
   * @remarks
   * The unique identifier of the user\\"s endpoint device that detected this virus file.
   * 
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  devTag?: string;
  /**
   * @remarks
   * The operating system type of the user terminal device. Valid values:
   * - **windows**: Windows.
   * - **macOS**: macOS.
   * 
   * @example
   * windows
   */
  devType?: string;
  /**
   * @remarks
   * The time when the virus file was discovered, in the format yyyy-MM-dd HH:mm:ss (UTC+8). A hyphen (-) is returned when no record exists.
   * 
   * @example
   * 2026-08-21 03:12:07
   */
  discoveryTime?: string;
  /**
   * @remarks
   * The MD5 hash of the virus file.
   * 
   * @example
   * d41d8cd98f00b204e9800998ecf8427e
   */
  fileMd5?: string;
  /**
   * @remarks
   * The absolute path of the virus file on the user\\"s endpoint device.
   * 
   * @example
   * C:\\Users\\Public\\Downloads\\setup.exe
   */
  filePath?: string;
  /**
   * @remarks
   * The disposition status. Valid values:
   * - **Pending**: Pending disposition.
   * - **Processed**: Disposed.
   * 
   * @example
   * Pending
   */
  fileProcessStatus?: string;
  /**
   * @remarks
   * The size of the virus file, in bytes.
   * 
   * @example
   * 20480
   */
  fileSize?: number;
  /**
   * @remarks
   * The hostname of the user\\"s endpoint device.
   * 
   * @example
   * DESKTOP-8A3F
   */
  hostname?: string;
  /**
   * @remarks
   * The disposition action that has been performed. An empty string is returned when no disposition has been performed. Valid values:
   * - **AdminQuarantine**: Quarantined by administrator.
   * - **AdminTrust**: Trusted by administrator.
   * - **UserQuarantine**: Quarantined by endpoint user.
   * - **UserTrust**: Trusted by endpoint user.
   * - **AutoQuarantine**: Automatically quarantined based on policy.
   * - **Fail**: Disposition failed.
   * 
   * @example
   * AdminQuarantine
   */
  operation?: string;
  /**
   * @remarks
   * The effective period of the disposition, in the format yyyy-MM-dd HH:mm:ss (UTC+8). The later of the actual disposition time on the user\\"s endpoint device and the time when the administrator initiated the disposition is used. A hyphen (-) is returned when no disposition has been performed.
   * 
   * @example
   * 2026-08-21 09:31:45
   */
  operationTime?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * - **High**: High risk.
   * - **Mid**: Medium risk.
   * - **Low**: Low risk.
   * 
   * @example
   * High
   */
  riskLevel?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @remarks
   * The ID of the virus scan task that detected this virus file. An empty string is returned when the file is detected by real-time protection.
   * 
   * @example
   * v1:1024772
   */
  scanTaskId?: string;
  /**
   * @remarks
   * The execution result description of the disposition or scan, reported by the user\\"s endpoint device. If a disposition record exists, the execution result of the disposition task is returned. Otherwise, the execution result of the scan task is returned.
   * 
   * @example
   * quarantine success
   */
  taskExecutionInfo?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * John Smith
   */
  username?: string;
  /**
   * @remarks
   * The detection source of the virus file. Valid values:
   * - **Task**: Detected by a virus scan task.
   * - **Download**: Detected by real-time protection during file download.
   * - **Process**: Detected by real-time protection during process execution.
   * 
   * @example
   * Task
   */
  virusFileSource?: string;
  /**
   * @remarks
   * The virus type. Valid values:
   * - **Backdoor**: Backdoor program.
   * - **DDoS**: DDoS Trojan.
   * - **Downloader**: Downloader Trojan.
   * - **Engtest**: DPI engine test program.
   * - **Hacktool**: Hacking tool.
   * - **Trojan**: Self-mutating Trojan.
   * - **Malbaseware**: Contaminated base software.
   * - **MalScript**: Malicious script.
   * - **Malware**: Malicious program.
   * - **Miner**: Mining programs.
   * - **Proxytool**: Proxy tool.
   * - **RansomWare**: Ransomware.
   * - **RiskWare**: Risky software.
   * - **Rootkit**: Kernel-hidden program.
   * - **Stealer**: Credential-stealing tool.
   * - **Scanner**: Scanner.
   * - **Suspicious**: Suspicious program.
   * - **Virus**: File-infecting virus.
   * - **WebShell**: Web shell.
   * - **Worm**: Worms.
   * - **BlackList**: File that hit the blacklist.
   * - **Exp**: Vulnerability exploits program.
   * - **Patcher**: Cracking program.
   * - **Gametool**: Private server tool.
   * - **AdWare**: Adware.
   * - **Maldoc**: Malicious document.
   * 
   * @example
   * Virus
   */
  virusType?: string;
  static names(): { [key: string]: string } {
    return {
      consoleOperationTime: 'ConsoleOperationTime',
      department: 'Department',
      devTag: 'DevTag',
      devType: 'DevType',
      discoveryTime: 'DiscoveryTime',
      fileMd5: 'FileMd5',
      filePath: 'FilePath',
      fileProcessStatus: 'FileProcessStatus',
      fileSize: 'FileSize',
      hostname: 'Hostname',
      operation: 'Operation',
      operationTime: 'OperationTime',
      riskLevel: 'RiskLevel',
      saseUserId: 'SaseUserId',
      scanTaskId: 'ScanTaskId',
      taskExecutionInfo: 'TaskExecutionInfo',
      username: 'Username',
      virusFileSource: 'VirusFileSource',
      virusType: 'VirusType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleOperationTime: 'string',
      department: 'string',
      devTag: 'string',
      devType: 'string',
      discoveryTime: 'string',
      fileMd5: 'string',
      filePath: 'string',
      fileProcessStatus: 'string',
      fileSize: 'number',
      hostname: 'string',
      operation: 'string',
      operationTime: 'string',
      riskLevel: 'string',
      saseUserId: 'string',
      scanTaskId: 'string',
      taskExecutionInfo: 'string',
      username: 'string',
      virusFileSource: 'string',
      virusType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirusFileStatusesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of virus files.
   */
  fileStatuses?: ListVirusFileStatusesResponseBodyFileStatuses[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3D7EC0AF-DB2A-5D9C-90EC-F090A6BAAEA7
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of virus files that match the query conditions.
   * 
   * @example
   * 37
   */
  totalNum?: string;
  static names(): { [key: string]: string } {
    return {
      fileStatuses: 'FileStatuses',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileStatuses: { 'type': 'array', 'itemType': ListVirusFileStatusesResponseBodyFileStatuses },
      requestId: 'string',
      totalNum: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fileStatuses)) {
      $dara.Model.validateArray(this.fileStatuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

