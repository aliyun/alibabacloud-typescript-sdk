// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDownloadTaskResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1706595827
   */
  createTime?: number;
  /**
   * @remarks
   * The time when the task expires. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1714371828
   */
  expireTime?: number;
  /**
   * @remarks
   * The size of the file.
   * 
   * @example
   * 24.04KB
   */
  fileSize?: string;
  /**
   * @remarks
   * The URL of the OSS file.
   * 
   * @example
   * https://cfw-table-download-cn.oss-cn-hangzhou.aliyuncs.com/%E4%BA%92%E8%81%94%E7%BD%91%E8%BE%B9%E7%95%8C%E9%98%B2%E7%81%AB%E5%A2%99%E8%B5%84%E4%BA%A7-IPv4_1069.csv?Expires=1708583913&OSSAccessKeyId=****&Signature=******%3D
   */
  fileURL?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   **finish**
   * *   **start**
   * *   **error**
   * *   **expire**: The task file is invalid and cannot be downloaded.
   * 
   * @example
   * finish
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 1111
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * Internet Boundary Firewall Assets - IPv4
   */
  taskName?: string;
  /**
   * @remarks
   * The type of the task.
   * 
   * @example
   * InternetFirewallAsset
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      fileSize: 'FileSize',
      fileURL: 'FileURL',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      expireTime: 'number',
      fileSize: 'string',
      fileURL: 'string',
      status: 'string',
      taskId: 'string',
      taskName: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3F2BED13-F3D0-5984-80D6-D5F298CFEA88
   */
  requestId?: string;
  /**
   * @remarks
   * The tasks.
   */
  tasks?: DescribeDownloadTaskResponseBodyTasks[];
  /**
   * @remarks
   * The total number of tasks.
   * 
   * @example
   * 132
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tasks: 'Tasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': DescribeDownloadTaskResponseBodyTasks },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

