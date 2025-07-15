// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEcdReportTasksResponseBodyExportTaskList extends $dara.Model {
  downloadUrl?: string;
  /**
   * @example
   * Success
   */
  errorCode?: string;
  /**
   * @example
   * No Data.
   */
  errorMsg?: string;
  /**
   * @example
   * 2025-07-14T07:46:49.000+00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2025-07-14T07:46:49.000+00:00
   */
  gmtModified?: string;
  /**
   * @example
   * 80
   */
  progress?: number;
  /**
   * @example
   * TestFileName
   */
  reportFileName?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * DESKTOP
   */
  subType?: string;
  /**
   * @example
   * ret-asdfkjg*****
   */
  taskId?: string;
  /**
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
  exportTaskList?: DescribeEcdReportTasksResponseBodyExportTaskList[];
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
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

