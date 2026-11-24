// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVirusFileStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the user terminal device where the virus file is located. The value can be up to 64 characters in length. You can obtain the value from the following source:
   * - [ListVirusFileStatuses](~~ListVirusFileStatuses~~): Queries the statuses of virus files in batches.
   * 
   * This parameter is required.
   * 
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  devTag?: string;
  /**
   * @remarks
   * The MD5 hash value of the virus file. The value must be a 32-character hexadecimal string. You can obtain the value from the following source:
   * - [ListVirusFileStatuses](~~ListVirusFileStatuses~~): Queries the statuses of virus files in batches.
   * 
   * This parameter is required.
   * 
   * @example
   * d41d8cd98f00b204e9800998ecf8427e
   */
  fileMd5?: string;
  /**
   * @remarks
   * The absolute path of the virus file on the user terminal device. You can obtain the value from the following source:
   * - [ListVirusFileStatuses](~~ListVirusFileStatuses~~): Queries the statuses of virus files in batches.
   * 
   * This parameter is required.
   * 
   * @example
   * C:\\Users\\Public\\Downloads\\setup.exe
   */
  filePath?: string;
  /**
   * @remarks
   * The processing action. Valid values:
   * - **AdminQuarantine**: Quarantines the virus file. The server creates a processing task and returns a TaskId. The user terminal device pulls and executes the quarantine task.
   * - **AdminTrust**: Marks the virus file as trusted. This action only updates the processing status and does not create a processing task. An empty string is returned for TaskId.
   * 
   * This parameter is required.
   * 
   * @example
   * AdminQuarantine
   */
  operation?: string;
  /**
   * @remarks
   * The virus type. This parameter is used for synchronization to update the virus type of the file. Valid values:
   * - **Backdoor**: Backdoor program.
   * - **DDoS**: DDoS trojan.
   * - **Downloader**: Downloader trojan.
   * - **Engtest**: DPI engine test program.
   * - **Hacktool**: Hacker tool.
   * - **Trojan**: Self-mutating trojan.
   * - **Malbaseware**: Contaminated basic software.
   * - **MalScript**: Malicious script.
   * - **Malware**: Malicious program.
   * - **Miner**: Mining programs.
   * - **Proxytool**: Proxy tool.
   * - **RansomWare**: Ransomware.
   * - **RiskWare**: Riskware.
   * - **Rootkit**: Kernel hiding program.
   * - **Stealer**: Stealer tool.
   * - **Scanner**: Scanner.
   * - **Suspicious**: Suspicious program.
   * - **Virus**: Infectious virus.
   * - **WebShell**: Web shell.
   * - **Worm**: Worms.
   * - **BlackList**: Files that hit the blacklist.
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
      devTag: 'DevTag',
      fileMd5: 'FileMd5',
      filePath: 'FilePath',
      operation: 'Operation',
      virusType: 'VirusType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devTag: 'string',
      fileMd5: 'string',
      filePath: 'string',
      operation: 'string',
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

