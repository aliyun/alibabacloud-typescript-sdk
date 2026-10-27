// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirusScanTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end time of the queried task. The value is a UNIX timestamp in milliseconds.
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
   * The language of the request and response. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English
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
   * The paging Settings for the number of nodes per page in a paged query. Default value: **20**, which indicates 20 nodes per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether the queried task is the main virus scan task.
   * 
   * @example
   * true
   */
  rootTask?: boolean;
  /**
   * @remarks
   * The ID of the root task.
   * > You can call the [GetVirusScanLatestTaskStatistic](~~GetVirusScanLatestTaskStatistic~~) operation to obtain the value of this parameter.
   * 
   * @example
   * 89f5d7813bd59dd237580a8664b3xxxx
   */
  rootTaskId?: string;
  /**
   * @remarks
   * The scan type of the virus scan task to query. Valid values:
   * 
   * - **system**: automatic scan
   * - **user**: custom scan
   * 
   * @example
   * user
   */
  scanType?: string;
  /**
   * @remarks
   * The start time of the queried task. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1680919232000
   */
  startTime?: number;
  /**
   * @remarks
   * The execution status of the virus scan task. Valid values:
   * - **1**: scanning
   * - **2**: completed
   * - **3**: failed
   * - **4**: timed out
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The list of statuses used to filter the query results.
   */
  statusList?: number[];
  /**
   * @remarks
   * The ID of the virus scan task to query.
   * > You can call the [ListVirusScanTask](~~ListVirusScanTask~~) operation to obtain the value of this parameter.
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

