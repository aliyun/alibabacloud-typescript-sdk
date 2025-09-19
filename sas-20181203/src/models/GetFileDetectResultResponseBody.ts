// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileDetectResultResponseBodyResultList extends $dara.Model {
  /**
   * @remarks
   * The status code returned. The status code **200** indicates that the request was successful. Other status codes indicate that the request failed. You can identify the cause of the failure based on the status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Whether to identify as a compressed package. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * false
   */
  compress?: boolean;
  /**
   * @remarks
   * The extended information about the file detection result.
   * 
   * @example
   * {"HighLight":[[23245,23212]]}
   */
  ext?: string;
  /**
   * @remarks
   * The identifier of the file. Only MD5 hash values are supported.
   * 
   * @example
   * 0a212417e65c26ff133cfff28f6c****
   */
  hashKey?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The file detection result. Valid values:
   * 
   * *   **0**: The file is normal.
   * *   **1**: The file is suspicious.
   * *   **3**: The detection is in progress.
   * 
   * @example
   * 0
   */
  result?: number;
  /**
   * @remarks
   * The score of file detection result.
   * 
   * > A higher score indicates a more suspicious file.
   * 
   * @example
   * 100
   */
  score?: number;
  /**
   * @remarks
   * The type of the virus. Valid values:
   * 
   * *   **Trojan**: trojan horse
   * *   **WebShell**: webshell
   * *   **Backdoor**: backdoor program
   * *   **RansomWare**: ransomware
   * *   **Scanner**: scanner
   * *   **Stealer**: tool that is used to steal information
   * *   **Malbaseware**: tainted basic software
   * *   **Hacktool**: attacker tool
   * *   **Engtest**: engine test program
   * *   **Downloader**: trojan downloader
   * *   **Virus**: infectious virus
   * *   **Miner**: mining program
   * *   **Worm**: worm
   * *   **DDoS**: DDoS trojan
   * *   **Malware**: malicious program
   * *   **RiskWare**: software that has risks
   * *   **Proxytool**: proxy
   * *   **Suspicious**: suspicious program
   * *   **MalScript**: malicious script
   * *   **Rootkit**: rootkit
   * *   **Exploit**: exploit
   * 
   * @example
   * WEBSHELL
   */
  virusType?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      compress: 'Compress',
      ext: 'Ext',
      hashKey: 'HashKey',
      message: 'Message',
      result: 'Result',
      score: 'Score',
      virusType: 'VirusType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      compress: 'boolean',
      ext: 'string',
      hashKey: 'string',
      message: 'string',
      result: 'number',
      score: 'number',
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

export class GetFileDetectResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 24A20733-10A0-4AF6-BE6B-E3322413BB68
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of file detection results.
   */
  resultList?: GetFileDetectResultResponseBodyResultList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultList: 'ResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultList: { 'type': 'array', 'itemType': GetFileDetectResultResponseBodyResultList },
    };
  }

  validate() {
    if(Array.isArray(this.resultList)) {
      $dara.Model.validateArray(this.resultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

