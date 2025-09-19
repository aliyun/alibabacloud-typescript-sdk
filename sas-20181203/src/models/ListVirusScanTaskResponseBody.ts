// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirusScanTaskResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the virus scan task ended. Unit: milliseconds.
   * 
   * @example
   * 1662343860051
   */
  endTime?: number;
  /**
   * @remarks
   * The name of the server.
   * 
   * @example
   * sql-test-0****
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the server.
   * 
   * @example
   * 8.210.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the server.
   * 
   * @example
   * 172.25.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The progress of the task in percentage.
   * 
   * @example
   * 62
   */
  progress?: number;
  /**
   * @remarks
   * The information about the file that is scanned.
   */
  scanPath?: string[];
  /**
   * @remarks
   * The type of the virus scan task. Valid values:
   * 
   * *   **system**: automatic scan task
   * *   **user**: custom scan task
   * 
   * @example
   * system
   */
  scanType?: string;
  /**
   * @remarks
   * The timestamp when the virus scan task started. Unit: milliseconds.
   * 
   * @example
   * 1651290987000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the virus scan task. Valid values:
   * 
   * *   **1**: running
   * *   **2**: complete
   * *   **3**: failed
   * *   **4**: timed out
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The ID of the virus scan task.
   * 
   * @example
   * 2e75557bfa570381f5c516cad9b6xxxx
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the virus scan task.
   * 
   * *   The value is fixed as **VIRUS_VUL_SCHEDULE_SCAN**, which indicates a virus scan task.
   * 
   * @example
   * VIRUS_VUL_SCHEDULE_SCAN
   */
  taskName?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * 49e25e0f-bb51-4a5a-a1b3-13a4ddaa****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      progress: 'Progress',
      scanPath: 'ScanPath',
      scanType: 'ScanType',
      startTime: 'StartTime',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      progress: 'number',
      scanPath: { 'type': 'array', 'itemType': 'string' },
      scanType: 'string',
      startTime: 'number',
      status: 'number',
      taskId: 'string',
      taskName: 'string',
      uuid: 'string',
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

export class ListVirusScanTaskResponseBodyPageInfo extends $dara.Model {
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
   * 224
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

export class ListVirusScanTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned virus scan tasks.
   */
  list?: ListVirusScanTaskResponseBodyList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListVirusScanTaskResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A4EB8B1C-1DEC-5E18-BCD0-D1BBB3936FA7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListVirusScanTaskResponseBodyList },
      pageInfo: ListVirusScanTaskResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

