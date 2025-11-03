// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEcdReportTasksResponseBodyExportTaskList extends $dara.Model {
  /**
   * @remarks
   * The download URL of the report file.
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * Success
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * No Data.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2025-07-14T07:46:49.000+00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the task was last modified.
   * 
   * @example
   * 2025-07-14T07:46:49.000+00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The progress of the report export task. Unit: %.
   * 
   * @example
   * 80
   */
  progress?: number;
  /**
   * @remarks
   * The name of the report file.
   * 
   * @example
   * TestFileName
   */
  reportFileName?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The sub-type of the report export task.
   * 
   * Valid value:
   * 
   * *   DESKTOP: cloud computer
   * 
   * @example
   * DESKTOP
   */
  subType?: string;
  /**
   * @remarks
   * The ID of the report export task.
   * 
   * @example
   * ret-asdfkjg*****
   */
  taskId?: string;
  /**
   * @remarks
   * The type of the report.
   * 
   * Valid value:
   * 
   * *   RESOURCE_REPORT
   * 
   * @example
   * RESOURCE_REPORT
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      progress: 'Progress',
      reportFileName: 'ReportFileName',
      status: 'Status',
      subType: 'SubType',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      errorCode: 'string',
      errorMsg: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      progress: 'number',
      reportFileName: 'string',
      status: 'string',
      subType: 'string',
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

export class DescribeEcdReportTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The report export tasks.
   */
  exportTaskList?: DescribeEcdReportTasksResponseBodyExportTaskList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      exportTaskList: 'ExportTaskList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportTaskList: { 'type': 'array', 'itemType': DescribeEcdReportTasksResponseBodyExportTaskList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.exportTaskList)) {
      $dara.Model.validateArray(this.exportTaskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

