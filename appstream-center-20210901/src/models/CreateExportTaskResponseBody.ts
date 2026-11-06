// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExportTaskResponseBodyExportTaskModel extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created. The time is in the yyyy-MM-dd HH:mm:ss format, accurate to seconds. The returned string does not include the time zone offset.
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
   * The error message when the task execution fails. When the task is created by calling this operation, this field is empty. The null in the example represents a JSON null value, not the string "null". When you query the task status and it is FAILED, you can use this field to identify the cause of the failure.
   * 
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @remarks
   * The progress of the export task. The value is a percentage ranging from 0 to 100. When the task is created by calling this operation, 0 is returned. The value is updated based on the execution phase and reaches 100 when the task is completed.
   * 
   * @example
   * 0
   */
  progress?: number;
  /**
   * @remarks
   * The status of the task. When the task is created by calling this operation, INIT (initialized and waiting for execution) is returned. You can subsequently call DescribeExportTasks to query RUNNING (executing), FINISHED (completed), or FAILED (failed). Do not treat INIT as export completion.
   * 
   * @example
   * INIT
   */
  status?: string;
  /**
   * @remarks
   * The ID of the newly created export task. The value is a 32-character UUID string without hyphens. You can use this value as the TaskId parameter to query the task in DescribeExportTasks.
   * 
   * @example
   * 8119078c29e948dba2e0a9917995332a
   */
  taskId?: string;
  /**
   * @remarks
   * The type of the export task. The value is the same as the TaskType in the request. For the meaning of each type, see the TaskType request parameter.
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

