// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirusScanTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the results to return. Default value: **1**, which indicates that results start from page 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The timestamp of the task end time to query, in milliseconds.
   * 
   * @example
   * 1680919232999
   */
  endTime?: number;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 120.27.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 172.26.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The language type of the request and response. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English.
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
   * The number of tasks per page in a paged query. Default value: **20**, which indicates that each page contains 20 tasks.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether the task is the root task of the virus scan.
   * 
   * @example
   * true
   */
  rootTask?: boolean;
  /**
   * @remarks
   * The root task ID.
   * > Call [GetVirusScanLatestTaskStatistic](~~GetVirusScanLatestTaskStatistic~~) to obtain this parameter.
   * 
   * @example
   * 89f5d7813bd59dd237580a8664b3xxxx
   */
  rootTaskId?: string;
  /**
   * @remarks
   * The scan type of the virus scan task to query. Valid values:
   * 
   * - **system**: automatic system scan
   * - **user**: custom user scan.
   * 
   * @example
   * user
   */
  scanType?: string;
  /**
   * @remarks
   * The timestamp of the task start time to query, in milliseconds.
   * 
   * @example
   * 1680919232000
   */
  startTime?: number;
  /**
   * @remarks
   * The execution status of the virus scan task. Valid values:
   * - **1**: Scanning.
   * - **2**: Completed.
   * - **3**: Failed.
   * - **4**: Timed out.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The list of statuses used to filter tasks by multiple statuses.
   */
  statusList?: number[];
  /**
   * @remarks
   * The ID of the virus scan task to query.
   * > Call [ListVirusScanTask](~~ListVirusScanTask~~) to obtain this parameter.
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

