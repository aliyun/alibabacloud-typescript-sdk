// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudBenchTasksResponseBodyDataListCloudbenchTasks extends $dara.Model {
  archiveJobId?: string;
  archiveOssTableName?: string;
  archiveState?: number;
  backupId?: string;
  backupType?: string;
  benchStep?: string;
  benchStepStatus?: string;
  clientGatewayId?: string;
  clientType?: string;
  description?: string;
  dstInstanceUuid?: string;
  dstIp?: string;
  dstPort?: number;
  dstType?: string;
  dtsJobClass?: string;
  dtsJobId?: string;
  dtsJobName?: string;
  dtsJobState?: number;
  dtsJobStatus?: string;
  ecsInstanceId?: string;
  endState?: string;
  errorCode?: string;
  errorMessage?: string;
  external?: string;
  rate?: number;
  requestDuration?: number;
  smartPressureTime?: number;
  source?: string;
  sqlCompleteReuse?: string;
  srcInstanceArea?: string;
  srcInstanceUuid?: string;
  srcPublicIp?: string;
  state?: string;
  status?: string;
  tableSchema?: string;
  taskId?: string;
  taskType?: string;
  topic?: string;
  userId?: string;
  version?: string;
  workDir?: string;
  static names(): { [key: string]: string } {
    return {
      archiveJobId: 'ArchiveJobId',
      archiveOssTableName: 'ArchiveOssTableName',
      archiveState: 'ArchiveState',
      backupId: 'BackupId',
      backupType: 'BackupType',
      benchStep: 'BenchStep',
      benchStepStatus: 'BenchStepStatus',
      clientGatewayId: 'ClientGatewayId',
      clientType: 'ClientType',
      description: 'Description',
      dstInstanceUuid: 'DstInstanceUuid',
      dstIp: 'DstIp',
      dstPort: 'DstPort',
      dstType: 'DstType',
      dtsJobClass: 'DtsJobClass',
      dtsJobId: 'DtsJobId',
      dtsJobName: 'DtsJobName',
      dtsJobState: 'DtsJobState',
      dtsJobStatus: 'DtsJobStatus',
      ecsInstanceId: 'EcsInstanceId',
      endState: 'EndState',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      external: 'External',
      rate: 'Rate',
      requestDuration: 'RequestDuration',
      smartPressureTime: 'SmartPressureTime',
      source: 'Source',
      sqlCompleteReuse: 'SqlCompleteReuse',
      srcInstanceArea: 'SrcInstanceArea',
      srcInstanceUuid: 'SrcInstanceUuid',
      srcPublicIp: 'SrcPublicIp',
      state: 'State',
      status: 'Status',
      tableSchema: 'TableSchema',
      taskId: 'TaskId',
      taskType: 'TaskType',
      topic: 'Topic',
      userId: 'UserId',
      version: 'Version',
      workDir: 'WorkDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveJobId: 'string',
      archiveOssTableName: 'string',
      archiveState: 'number',
      backupId: 'string',
      backupType: 'string',
      benchStep: 'string',
      benchStepStatus: 'string',
      clientGatewayId: 'string',
      clientType: 'string',
      description: 'string',
      dstInstanceUuid: 'string',
      dstIp: 'string',
      dstPort: 'number',
      dstType: 'string',
      dtsJobClass: 'string',
      dtsJobId: 'string',
      dtsJobName: 'string',
      dtsJobState: 'number',
      dtsJobStatus: 'string',
      ecsInstanceId: 'string',
      endState: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      external: 'string',
      rate: 'number',
      requestDuration: 'number',
      smartPressureTime: 'number',
      source: 'string',
      sqlCompleteReuse: 'string',
      srcInstanceArea: 'string',
      srcInstanceUuid: 'string',
      srcPublicIp: 'string',
      state: 'string',
      status: 'string',
      tableSchema: 'string',
      taskId: 'string',
      taskType: 'string',
      topic: 'string',
      userId: 'string',
      version: 'string',
      workDir: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudBenchTasksResponseBodyDataList extends $dara.Model {
  cloudbenchTasks?: DescribeCloudBenchTasksResponseBodyDataListCloudbenchTasks[];
  static names(): { [key: string]: string } {
    return {
      cloudbenchTasks: 'cloudbenchTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudbenchTasks: { 'type': 'array', 'itemType': DescribeCloudBenchTasksResponseBodyDataListCloudbenchTasks },
    };
  }

  validate() {
    if(Array.isArray(this.cloudbenchTasks)) {
      $dara.Model.validateArray(this.cloudbenchTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudBenchTasksResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  extra?: string;
  list?: DescribeCloudBenchTasksResponseBodyDataList;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      extra: 'Extra',
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      list: DescribeCloudBenchTasksResponseBodyDataList,
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(this.list && typeof (this.list as any).validate === 'function') {
      (this.list as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudBenchTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The detailed information, including the error codes and the number of entries that are returned.
   */
  data?: DescribeCloudBenchTasksResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request was successful, **Successful** is returned. If the request failed, an error message such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B6D17591-B48B-4D31-9CD6-9B9796B2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeCloudBenchTasksResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

