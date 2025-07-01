// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataFlowSubTasksResponseBodyDataFlowSubTaskDataFlowSubTaskFileDetail } from "./DescribeDataFlowSubTasksResponseBodyDataFlowSubTaskDataFlowSubTaskFileDetail";
import { DescribeDataFlowSubTasksResponseBodyDataFlowSubTaskDataFlowSubTaskProgressStats } from "./DescribeDataFlowSubTasksResponseBodyDataFlowSubTaskDataFlowSubTaskProgressStats";


export class DescribeDataFlowSubTasksResponseBodyDataFlowSubTaskDataFlowSubTask extends $dara.Model {
  /**
   * @remarks
   * The time when the data streaming task was created.
   * 
   * @example
   * 2024-07-01 19:59:29
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the data flow.
   * 
   * @example
   * df-194433a5be31****
   */
  dataFlowId?: string;
  /**
   * @remarks
   * The ID of the data streaming task.
   * 
   * @example
   * subTaskId-370kyfmyknxcyzw****
   */
  dataFlowSubTaskId?: string;
  /**
   * @remarks
   * The ID of the data flow task.
   * 
   * @example
   * task-38aa8e890f45****
   */
  dataFlowTaskId?: string;
  /**
   * @remarks
   * The path of the destination file. Limits:
   * 
   * *   The path must be 1 to 1,023 characters in length.
   * *   The path must be encoded in UTF-8.
   * *   The path must start with a forward slash (/).
   * *   The path must end with the file name.
   * 
   * @example
   * /mnt/file.png
   */
  dstFilePath?: string;
  /**
   * @remarks
   * The time when the data streaming task ended.
   * 
   * @example
   * 2024-07-04 11:14:22
   */
  endTime?: string;
  /**
   * @remarks
   * The error message returned when the task failed.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The file information.
   */
  fileDetail?: DescribeDataFlowSubTasksResponseBodyDataFlowSubTaskDataFlowSubTaskFileDetail;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * bmcpfs-370lx1ev9ss27o0****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The progress of the data streaming task. Valid values: 0 to 10000.
   * 
   * @example
   * 10000
   */
  progress?: number;
  /**
   * @remarks
   * The progress information about data streaming tasks.
   */
  progressStats?: DescribeDataFlowSubTasksResponseBodyDataFlowSubTaskDataFlowSubTaskProgressStats;
  /**
   * @remarks
   * The path of the source file. Limits:
   * 
   * *   The path must be 1 to 1,023 characters in length.
   * *   The path must be encoded in UTF-8.
   * *   The path must start with a forward slash (/).
   * *   The path must end with the file name.
   * 
   * @example
   * /test/file.png
   */
  srcFilePath?: string;
  /**
   * @remarks
   * The time when the data streaming task started.
   * 
   * @example
   * 2024-07-03 10:43:16
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the data streaming task. Valid values:
   * 
   * *   EXPIRED: The task is terminated.
   * *   CREATED: The task is created.
   * *   RUNNING: The task is running.
   * *   COMPLETE: The task is complete.
   * *   CANCELING: The task is being canceled.
   * *   FAILED: The task failed to be executed.
   * *   CANCELED: The task is canceled.
   * 
   * @example
   * COMPLETE
   */
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

