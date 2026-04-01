// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataFlowSubTasksResponseBodyDataFlowSubTaskDataFlowSubTaskFileDetail extends $dara.Model {
  checksum?: string;
  modifyTime?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      checksum: 'Checksum',
      modifyTime: 'ModifyTime',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checksum: 'string',
      modifyTime: 'number',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataFlowSubTasksResponseBodyDataFlowSubTaskDataFlowSubTaskProgressStats extends $dara.Model {
  actualBytes?: number;
  averageSpeed?: number;
  bytesDone?: number;
  bytesTotal?: number;
  static names(): { [key: string]: string } {
    return {
      actualBytes: 'ActualBytes',
      averageSpeed: 'AverageSpeed',
      bytesDone: 'BytesDone',
      bytesTotal: 'BytesTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualBytes: 'number',
      averageSpeed: 'number',
      bytesDone: 'number',
      bytesTotal: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataFlowSubTasksResponseBodyDataFlowSubTaskDataFlowSubTask extends $dara.Model {
  createTime?: string;
  dataFlowId?: string;
  dataFlowSubTaskId?: string;
  dataFlowTaskId?: string;
  dstFilePath?: string;
  endTime?: string;
  errorMsg?: string;
  fileDetail?: DescribeDataFlowSubTasksResponseBodyDataFlowSubTaskDataFlowSubTaskFileDetail;
  fileSystemId?: string;
  progress?: number;
  progressStats?: DescribeDataFlowSubTasksResponseBodyDataFlowSubTaskDataFlowSubTaskProgressStats;
  srcFilePath?: string;
  startTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dataFlowId: 'DataFlowId',
      dataFlowSubTaskId: 'DataFlowSubTaskId',
      dataFlowTaskId: 'DataFlowTaskId',
      dstFilePath: 'DstFilePath',
      endTime: 'EndTime',
      errorMsg: 'ErrorMsg',
      fileDetail: 'FileDetail',
      fileSystemId: 'FileSystemId',
      progress: 'Progress',
      progressStats: 'ProgressStats',
      srcFilePath: 'SrcFilePath',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dataFlowId: 'string',
      dataFlowSubTaskId: 'string',
      dataFlowTaskId: 'string',
      dstFilePath: 'string',
      endTime: 'string',
      errorMsg: 'string',
      fileDetail: DescribeDataFlowSubTasksResponseBodyDataFlowSubTaskDataFlowSubTaskFileDetail,
      fileSystemId: 'string',
      progress: 'number',
      progressStats: DescribeDataFlowSubTasksResponseBodyDataFlowSubTaskDataFlowSubTaskProgressStats,
      srcFilePath: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.fileDetail && typeof (this.fileDetail as any).validate === 'function') {
      (this.fileDetail as any).validate();
    }
    if(this.progressStats && typeof (this.progressStats as any).validate === 'function') {
      (this.progressStats as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataFlowSubTasksResponseBodyDataFlowSubTask extends $dara.Model {
  dataFlowSubTask?: DescribeDataFlowSubTasksResponseBodyDataFlowSubTaskDataFlowSubTask[];
  static names(): { [key: string]: string } {
    return {
      dataFlowSubTask: 'DataFlowSubTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFlowSubTask: { 'type': 'array', 'itemType': DescribeDataFlowSubTasksResponseBodyDataFlowSubTaskDataFlowSubTask },
    };
  }

  validate() {
    if(Array.isArray(this.dataFlowSubTask)) {
      $dara.Model.validateArray(this.dataFlowSubTask);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataFlowSubTasksResponseBody extends $dara.Model {
  dataFlowSubTask?: DescribeDataFlowSubTasksResponseBodyDataFlowSubTask;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * pUJaUwAAAABhdGUyNTk1MQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataFlowSubTask: 'DataFlowSubTask',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFlowSubTask: DescribeDataFlowSubTasksResponseBodyDataFlowSubTask,
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.dataFlowSubTask && typeof (this.dataFlowSubTask as any).validate === 'function') {
      (this.dataFlowSubTask as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

