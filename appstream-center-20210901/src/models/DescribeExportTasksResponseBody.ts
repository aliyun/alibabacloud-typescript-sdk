// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExportTasksResponseBodyExportTaskModel extends $dara.Model {
  /**
   * @remarks
   * The creation time of the task, in yyyy-MM-dd HH:mm:ss format, accurate to seconds. The returned string does not include the time zone offset.
   * 
   * @example
   * 2026-07-27 19:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The OSS pre-signed download URL of the export file, which is returned only for tasks whose Status is FINISHED. The default maximum validity period of the signature is 1 hour and does not exceed the 24-hour validity period after the task is created. When the remaining validity period is less than 10 minutes, the server automatically refreshes and returns a new URL. If the task is not completed, the task has expired, or the URL refresh fails, this field is empty. The domain name and path in the example URL are for demonstration purposes. The actual returned value is a complete URL with signature parameters. Use the URL returned by the most recent query for downloading.
   * 
   * @example
   * https://example.oss-cn-hangzhou.aliyuncs.com/...
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The cause of the task execution failure, which is returned only when Status is FAILED. The content is the English error description recorded by the server and can be directly displayed to users or used for troubleshooting. This field is empty in other states.
   * 
   * @example
   * The export sub type is not supported.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The name of the export file, which consists of the task type, task creation time (in yyyyMMddHHmmss format), and the first 8 characters of the task ID, connected by underscores. The file extension is .xlsx. If the file is not generated, this field is empty.
   * 
   * @example
   * WUYING_SERVER_LIST_20260727190000_8119078c.xlsx
   */
  exportFileName?: string;
  /**
   * @remarks
   * The progress of the export task, in percentage. Valid values: 0 to 100. The value is updated based on the execution stage and reaches 100 when the task is completed.
   * 
   * @example
   * 100
   */
  progress?: number;
  /**
   * @remarks
   * The status of the export task. This operation returns the following valid values:
   * - INIT: The task is created and waiting to be executed. Continue polling.
   * - RUNNING: The export file is being generated. You can use Progress to display the progress and continue polling.
   * - FINISHED: The export file is generated. Stop polling and use DownloadUrl to download the file.
   * - FAILED: The task execution failed. Stop polling and check ErrorMsg.
   * 
   * The server also has an internal EXPIRED state, but this operation does not return tasks in this state.
   * 
   * @example
   * FINISHED
   */
  status?: string;
  /**
   * @remarks
   * The ID of the export task, which is a 32-character UUID string without hyphens. You can use this value as the TaskId parameter to poll this task.
   * 
   * @example
   * 8119078c29e948dba2e0a9917995332a
   */
  taskId?: string;
  /**
   * @remarks
   * The type of the export task. For the meaning of each value, see the TaskType request parameter.
   * 
   * @example
   * WUYING_SERVER_LIST
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      downloadUrl: 'DownloadUrl',
      errorMsg: 'ErrorMsg',
      exportFileName: 'ExportFileName',
      progress: 'Progress',
      status: 'Status',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      downloadUrl: 'string',
      errorMsg: 'string',
      exportFileName: 'string',
      progress: 'number',
      status: 'string',
      taskId: 'string',
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

export class DescribeExportTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of tasks that meet the query conditions, regardless of the number of tasks returned on the current page. You can use this value and PageSize to calculate the total number of pages. If no tasks meet the conditions, 0 is returned.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The list of export tasks, sorted in descending order of task creation time, with the most recently created tasks listed first. If no tasks meet the conditions, an empty array is returned.
   */
  exportTaskModel?: DescribeExportTasksResponseBodyExportTaskModel[];
  /**
   * @remarks
   * The actual page number used in this query, which is the echoed value of the PageNumber request parameter.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The actual number of tasks per page used in this query, which is the echoed value of the PageSize request parameter.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate call records and troubleshoot issues. The example value is partially desensitized.
   * 
   * @example
   * D4A13D91-****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      exportTaskModel: 'ExportTaskModel',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      exportTaskModel: { 'type': 'array', 'itemType': DescribeExportTasksResponseBodyExportTaskModel },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.exportTaskModel)) {
      $dara.Model.validateArray(this.exportTaskModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

