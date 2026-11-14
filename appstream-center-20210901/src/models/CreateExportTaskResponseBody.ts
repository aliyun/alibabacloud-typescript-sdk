// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExportTaskResponseBodyExportTaskModel extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created. The format is yyyy-MM-dd HH:mm:ss, accurate to seconds. The returned string does not contain a time zone offset.
   * 
   * @example
   * 2026-07-27 19:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The download URL of the exported file. When this operation is called to create a task, the file is not generated and this field is empty. The null in the example indicates a JSON null value, not the string "null". You can subsequently call DescribeExportTasks to query the latest download URL of a completed task and use it within the validity period.
   * 
   * @example
   * null
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The error message when the task execution fails. When this operation is successfully called, this field is empty. The null in the example indicates a JSON null value, not the string "null". When you subsequently query the task and the status is FAILED, you can use this field to learn the cause of the failure.
   * 
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @remarks
   * The progress of the export task. Unit: percentage. Valid values: 0 to 100. When this operation is successfully called, 0 is returned. The value is updated based on the execution phase and reaches 100 when the task is completed.
   * 
   * @example
   * 0
   */
  progress?: number;
  /**
   * @remarks
   * The task status. When this operation is successfully called, INIT (initialized and waiting for execution) is returned. You can subsequently call DescribeExportTasks to query RUNNING (executing), FINISHED (completed), or FAILED (failed). Do not treat INIT as export completion.
   * 
   * @example
   * INIT
   */
  status?: string;
  /**
   * @remarks
   * The ID of the newly created export task. The value is a 32-character UUID string without hyphens. You can use this ID as the TaskId parameter in DescribeExportTasks to query the task.
   * 
   * @example
   * 8119078c29e948dba2e0a9917995332a
   */
  taskId?: string;
  /**
   * @remarks
   * The export task type. The value is the same as the TaskType of the current request. For the meaning of each type, see the TaskType request parameter.
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
   * The information about the newly created export task. When the task is created, Status is INIT, Progress is 0, and the download URL and error message are empty.
   */
  exportTaskModel?: CreateExportTaskResponseBodyExportTaskModel;
  /**
   * @remarks
   * The ID of the request. You can use the ID to locate call records and troubleshoot issues. The example value is partially desensitized.
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

