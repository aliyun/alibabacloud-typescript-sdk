// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWhiteListProcessResponseBodyProcesses extends $dara.Model {
  /**
   * @remarks
   * The path to the process startup file.
   * 
   * @example
   * /root/bash1
   */
  filePath?: string;
  /**
   * @remarks
   * The primary key of the process information.
   * 
   * @example
   * 2100019
   */
  id?: number;
  /**
   * @remarks
   * The trust score of the process.
   * 
   * @example
   * 99
   */
  level?: number;
  /**
   * @remarks
   * The MD5 hash value of the process startup file.
   * 
   * @example
   * a28e8eba54ece1f3748d80e57dc89400
   */
  md5?: string;
  /**
   * @remarks
   * The ID of the process.
   * 
   * @example
   * 53090
   */
  processId?: number;
  /**
   * @remarks
   * The name of the process.
   * 
   * @example
   * vim
   */
  processName?: string;
  /**
   * @remarks
   * The type of the process. Valid values:
   * 
   * *   **1**: trusted
   * *   **2**: suspicious
   * *   **3**: malicious
   * 
   * @example
   * 1
   */
  processType?: number;
  /**
   * @remarks
   * Indicates whether the process is trusted. Valid values:
   * 
   * *   **1**: no
   * *   **2**: yes
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      filePath: 'FilePath',
      id: 'Id',
      level: 'Level',
      md5: 'Md5',
      processId: 'ProcessId',
      processName: 'ProcessName',
      processType: 'ProcessType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
      id: 'number',
      level: 'number',
      md5: 'string',
      processId: 'number',
      processName: 'string',
      processType: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhiteListProcessResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 1
   */
  count?: number;
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
   * 200
   */
  pageSize?: number;
  /**
   * @remarks
   * The information about the processes.
   */
  processes?: DescribeWhiteListProcessResponseBodyProcesses[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D81DD78E-E006-5C65-A171-C8CB09XXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 44
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      processes: 'Processes',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      processes: { 'type': 'array', 'itemType': DescribeWhiteListProcessResponseBodyProcesses },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.processes)) {
      $dara.Model.validateArray(this.processes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

