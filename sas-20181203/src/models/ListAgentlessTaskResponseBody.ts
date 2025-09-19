// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentlessTaskResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The end timestamp of the task. Unit: milliseconds.
   * 
   * @example
   * 1678895999999
   */
  endTime?: number;
  /**
   * @remarks
   * The instance ID of the asset.
   * 
   * @example
   * s-wz95vuqky0ada4******
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the asset.
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
   * The amount of data detected. Unit: MB.
   * 
   * @example
   * 154.11
   */
  measureSpace?: number;
  /**
   * @remarks
   * The progress of the task.
   * 
   * @example
   * 60
   */
  progress?: number;
  /**
   * @remarks
   * The execution progress of the check items.
   * 
   * @example
   * "{\\"scaVul\\":100,\\"binary\\":100,\\"baseline\\":100,\\"vul\\":100,\\"webshell\\":100,\\"script\\":100,\\"sensitiveInfo\\":100}"
   */
  progressByProject?: string;
  /**
   * @remarks
   * The download URL of the report.
   * 
   * @example
   * http://newsas-oss-bucket.oss-cn-hangzhou.aliyuncs.com/agent_less_single_report****
   */
  reportDownloadUrl?: string;
  /**
   * @remarks
   * The status of the report. Valid values:
   * 
   * *   **PREPARED**: preparing
   * *   **RUNNING**: running
   * *   **SUCCESS**: succeeded
   * *   **TIMEOUT**: timed out
   * *   **FAILED**: failed
   * 
   * @example
   * SUCCESS
   */
  reportStatus?: string;
  /**
   * @remarks
   * The result of the detection.
   * 
   * @example
   * True
   */
  result?: string;
  /**
   * @remarks
   * The start timestamp of the task. Unit: milliseconds.
   * 
   * @example
   * 1672741657897
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the detection task.
   * 
   * *   **1**: The detection task is in progress.
   * *   **2**: The detection task is complete.
   * *   **3**: The detection task fails.
   * *   **4**: The detection task times out.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The name of the asset that is detected.
   * 
   * @example
   * hkdevt****
   */
  targetName?: string;
  /**
   * @remarks
   * The type of the asset that is detected. Valid values:
   * 
   * *   **1**: snapshot
   * *   **2**: image
   * 
   * @example
   * 2
   */
  targetType?: number;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 1538****
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the detection task.
   * 
   * @example
   * AGENTLESS_SCAN
   */
  taskName?: string;
  /**
   * @remarks
   * The UUID of the asset.
   * 
   * @example
   * 49e25e0f-bb51-4a5a-a1b3-13a4ddaa****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      measureSpace: 'MeasureSpace',
      progress: 'Progress',
      progressByProject: 'ProgressByProject',
      reportDownloadUrl: 'ReportDownloadUrl',
      reportStatus: 'ReportStatus',
      result: 'Result',
      startTime: 'StartTime',
      status: 'Status',
      targetName: 'TargetName',
      targetType: 'TargetType',
      taskId: 'TaskId',
      taskName: 'TaskName',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      measureSpace: 'number',
      progress: 'number',
      progressByProject: 'string',
      reportDownloadUrl: 'string',
      reportStatus: 'string',
      result: 'string',
      startTime: 'number',
      status: 'number',
      targetName: 'string',
      targetType: 'number',
      taskId: 'string',
      taskName: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentlessTaskResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
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

export class ListAgentlessTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The tasks.
   */
  list?: ListAgentlessTaskResponseBodyList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListAgentlessTaskResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1A975D03-5F49-5354-B2CB-3918D5DA****
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
      list: { 'type': 'array', 'itemType': ListAgentlessTaskResponseBodyList },
      pageInfo: ListAgentlessTaskResponseBodyPageInfo,
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

