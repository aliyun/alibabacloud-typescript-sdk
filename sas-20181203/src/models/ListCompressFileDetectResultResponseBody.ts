// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCompressFileDetectResultResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 55
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCompressFileDetectResultResponseBodyResultList extends $dara.Model {
  /**
   * @remarks
   * The extended information about the file detection result.
   * 
   * @example
   * {
   *     "HighLight":
   *     [
   *         [
   *             23245,
   *             23212
   *         ]
   *     ],
   *     "FileLabel":
   *     [
   *         "PE32",
   *         "Zip",
   *         "SFX",
   *         "encrypted"
   *     ]
   * }
   */
  ext?: string;
  /**
   * @remarks
   * The identifier of the file.
   * 
   * @example
   * 0a212417e65c26ff133cfff28f6c****
   */
  hashKey?: string;
  /**
   * @remarks
   * The path to the file within the package.
   * 
   * @example
   * /root/1.zip/test****
   */
  path?: string;
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
   * The score of the file detection result. The following list describes mappings between the score ranges and risk levels:
   * 
   * *   0 to 60: normal
   * *   61 to 70: risky
   * *   71 to 80: suspicious
   * *   81 to 100: malicious
   * 
   * >  A higher score indicates a more suspicious file.
   * 
   * @example
   * 100
   */
  score?: number;
  /**
   * @remarks
   * The type of the virus. Valid values:
   * 
   * *   **Trojan**: self-mutating trojan
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
   * *   **Backdoor**: reverse shell
   * *   **RiskWare**: software that has risks
   * *   **Proxytool**: proxy
   * *   **Suspicious**: suspicious program
   * *   **MalScript**: malicious script
   * *   **Rootkit**: rootkit
   * *   **Exploit**: exploit
   * 
   * @example
   * WebShell
   */
  virusType?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'Ext',
      hashKey: 'HashKey',
      path: 'Path',
      result: 'Result',
      score: 'Score',
      virusType: 'VirusType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: 'string',
      hashKey: 'string',
      path: 'string',
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

export class ListCompressFileDetectResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListCompressFileDetectResultResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E10BAF1C-A6C5-51E2-866C-76D5922E****
   */
  requestId?: string;
  /**
   * @remarks
   * The detection results of files.
   */
  resultList?: ListCompressFileDetectResultResponseBodyResultList[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      resultList: 'ResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: ListCompressFileDetectResultResponseBodyPageInfo,
      requestId: 'string',
      resultList: { 'type': 'array', 'itemType': ListCompressFileDetectResultResponseBodyResultList },
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.resultList)) {
      $dara.Model.validateArray(this.resultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

