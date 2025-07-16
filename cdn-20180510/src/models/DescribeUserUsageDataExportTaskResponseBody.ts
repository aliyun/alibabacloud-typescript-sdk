// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageDataDataItemTaskConfig extends $dara.Model {
  /**
   * @remarks
   * The end of the time range that was queried.
   * 
   * @example
   * 2019-12-30T15:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The start of the time range during which data was queried.
   * 
   * @example
   * 2019-12-29T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageDataDataItem extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2019-12-31T08:43:21Z
   */
  createTime?: string;
  /**
   * @remarks
   * The download URL.
   * 
   * @example
   * https://cdn-polaris.xxxx
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The state of the task.
   * 
   * *   created: The task is being created.
   * *   success: The task is successful.
   * *   failed: The task failed.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The configurations of the task.
   */
  taskConfig?: DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageDataDataItemTaskConfig;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * A91BE91F-0B34-4CBF-8E0F-A2977
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * Refresh
   */
  taskName?: string;
  /**
   * @remarks
   * The time when the task was last modified.
   * 
   * @example
   * 2019-12-31T08:45:02Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      downloadUrl: 'DownloadUrl',
      status: 'Status',
      taskConfig: 'TaskConfig',
      taskId: 'TaskId',
      taskName: 'TaskName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      downloadUrl: 'string',
      status: 'string',
      taskConfig: DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageDataDataItemTaskConfig,
      taskId: 'string',
      taskName: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.taskConfig && typeof (this.taskConfig as any).validate === 'function') {
      (this.taskConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageData extends $dara.Model {
  dataItem?: DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageDataDataItem[];
  static names(): { [key: string]: string } {
    return {
      dataItem: 'DataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataItem: { 'type': 'array', 'itemType': DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageDataDataItem },
    };
  }

  validate() {
    if(Array.isArray(this.dataItem)) {
      $dara.Model.validateArray(this.dataItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPage extends $dara.Model {
  /**
   * @remarks
   * The information about the tasks.
   */
  data?: DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageData;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageData,
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserUsageDataExportTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A91BE91F-0B34-4CBF-8E0F-A2977E15AA52
   */
  requestId?: string;
  /**
   * @remarks
   * The usage details returned per page.
   */
  usageDataPerPage?: DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPage;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      usageDataPerPage: 'UsageDataPerPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      usageDataPerPage: DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPage,
    };
  }

  validate() {
    if(this.usageDataPerPage && typeof (this.usageDataPerPage as any).validate === 'function') {
      (this.usageDataPerPage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

