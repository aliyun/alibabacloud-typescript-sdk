// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirusScanTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The timestamp when the virus scan task ended. Unit: milliseconds.
   * 
   * @example
   * 1680919232999
   */
  endTime?: number;
  /**
   * @remarks
   * The public IP address of the server.
   * 
   * @example
   * 120.27.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the server.
   * 
   * @example
   * 172.26.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The name of the server.
   * 
   * @example
   * oracle-win-001****
   */
  machineName?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether the virus scan task is the root task.
   * 
   * @example
   * true
   */
  rootTask?: boolean;
  /**
   * @remarks
   * The ID of the root task.
   * 
   * >  You can call the [GetVirusScanLatestTaskStatistic](~~GetVirusScanLatestTaskStatistic~~) operation to query the ID.
   * 
   * @example
   * 89f5d7813bd59dd237580a8664b3xxxx
   */
  rootTaskId?: string;
  /**
   * @remarks
   * The type of the virus scan task. Valid values:
   * 
   * *   **system**: automatic scan task
   * *   **user**: custom scan task
   * 
   * @example
   * user
   */
  scanType?: string;
  /**
   * @remarks
   * The timestamp when the virus scan task started. Unit: milliseconds.
   * 
   * @example
   * 1680919232000
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
   * The statuses of virus scan tasks.
   */
  statusList?: number[];
  /**
   * @remarks
   * The ID of the virus scan task.
   * 
   * >  You can call the [ListVirusScanTask](~~ListVirusScanTask~~) operation to query the ID.
   * 
   * @example
   * 1471d8ebb96795b41ede090b9758****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      lang: 'Lang',
      machineName: 'MachineName',
      pageSize: 'PageSize',
      rootTask: 'RootTask',
      rootTaskId: 'RootTaskId',
      scanType: 'ScanType',
      startTime: 'StartTime',
      status: 'Status',
      statusList: 'StatusList',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endTime: 'number',
      internetIp: 'string',
      intranetIp: 'string',
      lang: 'string',
      machineName: 'string',
      pageSize: 'number',
      rootTask: 'boolean',
      rootTaskId: 'string',
      scanType: 'string',
      startTime: 'number',
      status: 'number',
      statusList: { 'type': 'array', 'itemType': 'number' },
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

