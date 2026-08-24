// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVirusFileStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the user terminal device where the virus file is located. The value can be up to 64 characters in length. You can obtain the value from the following operation:
   * - [ListVirusFileStatuses](~~ListVirusFileStatuses~~): lists virus file statuses.
   * 
   * This parameter is required.
   * 
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  devTag?: string;
  /**
   * @remarks
   * The MD5 value of the virus file. The value must be a 32-character hexadecimal string. You can obtain the value from the following operation:
   * - [ListVirusFileStatuses](~~ListVirusFileStatuses~~): lists virus file statuses.
   * 
   * This parameter is required.
   * 
   * @example
   * d41d8cd98f00b204e9800998ecf8427e
   */
  fileMd5?: string;
  /**
   * @remarks
   * The absolute path of the virus file on the user terminal device. You can obtain the value from the following operation:
   * - [ListVirusFileStatuses](~~ListVirusFileStatuses~~): lists virus file statuses.
   * 
   * This parameter is required.
   * 
   * @example
   * C:\\Users\\Public\\Downloads\\setup.exe
   */
  filePath?: string;
  /**
   * @remarks
   * The disposal action. Valid values:
   * - **AdminQuarantine**: quarantines the virus file. The server creates a disposal task and returns a TaskId. The user terminal device pulls and executes the quarantine.
   * - **AdminTrust**: trusts the virus file. Only the disposal status is updated. No disposal task is created, and TaskId returns an empty string.
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
   * - **Backdoor**: backdoor program.
   * - **DDoS**: DDoS Trojan.
   * - **Downloader**: downloader Trojan.
   * - **Engtest**: DPI engine test program.
   * - **Hacktool**: hacker tool.
   * - **Trojan**: self-mutating Trojan.
   * - **Malbaseware**: contaminated base software.
   * - **MalScript**: malicious script.
   * - **Malware**: malicious program.
   * - **Miner**: mining programs.
   * - **Proxytool**: proxy tool.
   * - **RansomWare**: ransomware.
   * - **RiskWare**: riskware.
   * - **Rootkit**: kernel-hidden program.
   * - **Stealer**: credential stealer.
   * - **Scanner**: scanner.
   * - **Suspicious**: suspicious program.
   * - **Virus**: file-infecting virus.
   * - **WebShell**: webshell.
   * - **Worm**: worms.
   * - **BlackList**: file that hit a blacklist entry.
   * - **Exp**: vulnerability exploits program.
   * - **Patcher**: cracking program.
   * - **Gametool**: private server tool.
   * - **AdWare**: adware.
   * - **Maldoc**: malicious document.
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

