// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataFlowTasksResponseBodyTaskInfoTaskProgressStats extends $dara.Model {
  actualBytes?: number;
  actualFiles?: number;
  averageSpeed?: number;
  bytesDone?: number;
  bytesTotal?: number;
  filesDone?: number;
  filesTotal?: number;
  remainTime?: number;
  static names(): { [key: string]: string } {
    return {
      actualBytes: 'ActualBytes',
      actualFiles: 'ActualFiles',
      averageSpeed: 'AverageSpeed',
      bytesDone: 'BytesDone',
      bytesTotal: 'BytesTotal',
      filesDone: 'FilesDone',
      filesTotal: 'FilesTotal',
      remainTime: 'RemainTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualBytes: 'number',
      actualFiles: 'number',
      averageSpeed: 'number',
      bytesDone: 'number',
      bytesTotal: 'number',
      filesDone: 'number',
      filesTotal: 'number',
      remainTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataFlowTasksResponseBodyTaskInfoTaskReportsReport extends $dara.Model {
  name?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataFlowTasksResponseBodyTaskInfoTaskReports extends $dara.Model {
  report?: DescribeDataFlowTasksResponseBodyTaskInfoTaskReportsReport[];
  static names(): { [key: string]: string } {
    return {
      report: 'Report',
    };
  }

  static types(): { [key: string]: any } {
    return {
      report: { 'type': 'array', 'itemType': DescribeDataFlowTasksResponseBodyTaskInfoTaskReportsReport },
    };
  }

  validate() {
    if(Array.isArray(this.report)) {
      $dara.Model.validateArray(this.report);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataFlowTasksResponseBodyTaskInfoTask extends $dara.Model {
  /**
   * @example
   * KEEP_LATEST
   */
  conflictPolicy?: string;
  createTime?: string;
  dataFlowId?: string;
  dataType?: string;
  directory?: string;
  dstDirectory?: string;
  endTime?: string;
  errorMsg?: string;
  fileSystemPath?: string;
  filesystemId?: string;
  fsPath?: string;
  includes?: string;
  originator?: string;
  progress?: number;
  progressStats?: DescribeDataFlowTasksResponseBodyTaskInfoTaskProgressStats;
  /**
   * @deprecated
   */
  reportPath?: string;
  reports?: DescribeDataFlowTasksResponseBodyTaskInfoTaskReports;
  sourceStorage?: string;
  startTime?: string;
  status?: string;
  taskAction?: string;
  taskId?: string;
  transferFileListPath?: string;
  static names(): { [key: string]: string } {
    return {
      conflictPolicy: 'ConflictPolicy',
      createTime: 'CreateTime',
      dataFlowId: 'DataFlowId',
      dataType: 'DataType',
      directory: 'Directory',
      dstDirectory: 'DstDirectory',
      endTime: 'EndTime',
      errorMsg: 'ErrorMsg',
      fileSystemPath: 'FileSystemPath',
      filesystemId: 'FilesystemId',
      fsPath: 'FsPath',
      includes: 'Includes',
      originator: 'Originator',
      progress: 'Progress',
      progressStats: 'ProgressStats',
      reportPath: 'ReportPath',
      reports: 'Reports',
      sourceStorage: 'SourceStorage',
      startTime: 'StartTime',
      status: 'Status',
      taskAction: 'TaskAction',
      taskId: 'TaskId',
      transferFileListPath: 'TransferFileListPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conflictPolicy: 'string',
      createTime: 'string',
      dataFlowId: 'string',
      dataType: 'string',
      directory: 'string',
      dstDirectory: 'string',
      endTime: 'string',
      errorMsg: 'string',
      fileSystemPath: 'string',
      filesystemId: 'string',
      fsPath: 'string',
      includes: 'string',
      originator: 'string',
      progress: 'number',
      progressStats: DescribeDataFlowTasksResponseBodyTaskInfoTaskProgressStats,
      reportPath: 'string',
      reports: DescribeDataFlowTasksResponseBodyTaskInfoTaskReports,
      sourceStorage: 'string',
      startTime: 'string',
      status: 'string',
      taskAction: 'string',
      taskId: 'string',
      transferFileListPath: 'string',
    };
  }

  validate() {
    if(this.progressStats && typeof (this.progressStats as any).validate === 'function') {
      (this.progressStats as any).validate();
    }
    if(this.reports && typeof (this.reports as any).validate === 'function') {
      (this.reports as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataFlowTasksResponseBodyTaskInfo extends $dara.Model {
  task?: DescribeDataFlowTasksResponseBodyTaskInfoTask[];
  static names(): { [key: string]: string } {
    return {
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      task: { 'type': 'array', 'itemType': DescribeDataFlowTasksResponseBodyTaskInfoTask },
    };
  }

  validate() {
    if(Array.isArray(this.task)) {
      $dara.Model.validateArray(this.task);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataFlowTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * TGlzdFJlc291cmNlU****mVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D69A58F-345C-4FDE-88E4-BF518948****
   */
  requestId?: string;
  taskInfo?: DescribeDataFlowTasksResponseBodyTaskInfo;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      taskInfo: 'TaskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      taskInfo: DescribeDataFlowTasksResponseBodyTaskInfo,
    };
  }

  validate() {
    if(this.taskInfo && typeof (this.taskInfo as any).validate === 'function') {
      (this.taskInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

