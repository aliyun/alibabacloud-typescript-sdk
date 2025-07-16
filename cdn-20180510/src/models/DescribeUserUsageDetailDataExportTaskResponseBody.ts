// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageDataDataItemTaskConfig extends $dara.Model {
  /**
   * @remarks
   * The end of the time range during which data was queried.
   * 
   * @example
   * 2018-08-31T15:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The start of the time range during which data was queried.
   * 
   * @example
   * 2018-07-31T16:00:00Z
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

export class DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageDataDataItem extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2018-10-09T06:33:38Z
   */
  createTime?: string;
  /**
   * @remarks
   * The download URL.
   * 
   * @example
   * https://test.oss-cn-beijing.aliyuncs.com/billing_data/xxx
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The status of the task.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The configurations of the task.
   */
  taskConfig?: DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageDataDataItemTaskConfig;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 11
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
   * 2018-10-09T06:35:46Z
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
      taskConfig: DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageDataDataItemTaskConfig,
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

export class DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageData extends $dara.Model {
  dataItem?: DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageDataDataItem[];
  static names(): { [key: string]: string } {
    return {
      dataItem: 'DataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataItem: { 'type': 'array', 'itemType': DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageDataDataItem },
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

export class DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPage extends $dara.Model {
  /**
   * @remarks
   * The information about the task.
   */
  data?: DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageData;
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
   * 1
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
      data: DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageData,
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

export class DescribeUserUsageDetailDataExportTaskResponseBody extends $dara.Model {
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
  usageDataPerPage?: DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPage;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      usageDataPerPage: 'UsageDataPerPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      usageDataPerPage: DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPage,
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

