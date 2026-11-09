// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExportTaskResponseBodyExportTaskModel extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created. The time is in the yyyy-MM-dd HH:mm:ss format, accurate to seconds. The returned string does not contain a time zone offset.
   * 
   * @example
   * 2026-07-27 19:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The download URL of the exported file. When the task is created by calling this operation, the file is not generated and this field is empty. The null in the example represents a JSON null value, not the string "null". You can subsequently call DescribeExportTasks to query the latest download URL of the completed task and use it within the validity period.
   * 
   * @example
   * null
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The error message when the task execution fails. If the task is created by calling this operation, this field is empty. The null in the example represents a JSON null value, not the string "null". When you query the task status and the status is FAILED, you can use this field to identify the cause of the failure.
   * 
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @remarks
   * The progress of the export task, in percentage. Valid values: 0 to 100. If the task is created by calling this operation, 0 is returned. The value is updated based on the execution phase and reaches 100 when the task is completed.
   * 
   * @example
   * 0
   */
  progress?: number;
  /**
   * @remarks
   * The status of the task. If the task is created by calling this operation, INIT (initialized and waiting for execution) is returned. You can subsequently call DescribeExportTasks to query RUNNING (executing), FINISHED (completed), or FAILED (failed). Do not treat INIT as export completion.
   * 
   * @example
   * INIT
   */
  status?: string;
  /**
   * @remarks
   * The ID of the newly created export task, which is a 32-character UUID string without hyphens. You can use this value as the TaskId parameter in DescribeExportTasks to query the task.
   * 
   * @example
   * 8119078c29e948dba2e0a9917995332a
   */
  taskId?: string;
  /**
   * @remarks
   * The type of the export task, which is the same as the TaskType in the request. For the meaning of each type, see the TaskType request parameter.
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

export class CreateExportTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the newly created export task. If the task is created, Status is INIT, Progress is 0, and the download URL and error message are empty.
   */
  exportTaskModel?: CreateExportTaskResponseBodyExportTaskModel;
  /**
   * @remarks
   * The ID of the request, which is used to locate call records and troubleshoot issues. The example value is partially desensitized.
   * 
   * @example
   * 7D30C5D6-****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exportTaskModel: 'ExportTaskModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportTaskModel: CreateExportTaskResponseBodyExportTaskModel,
      requestId: 'string',
    };
  }

  validate() {
    if(this.exportTaskModel && typeof (this.exportTaskModel as any).validate === 'function') {
      (this.exportTaskModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

