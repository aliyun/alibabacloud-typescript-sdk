// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInspectionTasksResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created.
   * 
   * The time is displayed in UTC time in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2024-07-01T02:06:34Z
   */
  createTime?: string;
  /**
   * @remarks
   * The end time of the task.
   * 
   * The time is displayed in UTC time in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2025-09-23T00:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The completion time of the task.
   * 
   * The time is displayed in UTC time in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2026-01-09T02:13:01Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The specified inspection items. The following inspection items are supported:
   * - RESOURCE_USAGE
   * - BIGKEY
   * - HOTKEY
   * - PERFORMANCE_METRICS
   * - SLOWLOG
   * 
   * @example
   * PERFORMANCE_METRICS
   */
  inspectionItems?: string;
  /**
   * @remarks
   * The list of associated instance IDs.
   * 
   * @example
   * r-uf6ns8txov3mp9jxxx
   */
  instanceIds?: string;
  /**
   * @remarks
   * The language of the report.
   * 
   * @example
   * zh-CN
   */
  reportLanguage?: string;
  /**
   * @remarks
   * The ID of the scheduled task.
   * 
   * @example
   * sch-4dfb08ddf9f84855bacca35axxx
   */
  scheduleId?: string;
  /**
   * @remarks
   * The source of the task.
   * 
   * @example
   * scheduler|
   */
  source?: string;
  /**
   * @remarks
   * The start time of the task.
   * 
   * The time is displayed in UTC time in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2026-05-30T02:11:01Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the task.
   * 
   * @example
   * SUCCEEDED
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * tit-dca42f85c73644e0ab5c80ef641xxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      endTime: 'EndTime',
      finishTime: 'FinishTime',
      inspectionItems: 'InspectionItems',
      instanceIds: 'InstanceIds',
      reportLanguage: 'ReportLanguage',
      scheduleId: 'ScheduleId',
      source: 'Source',
      startTime: 'StartTime',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      endTime: 'string',
      finishTime: 'string',
      inspectionItems: 'string',
      instanceIds: 'string',
      reportLanguage: 'string',
      scheduleId: 'string',
      source: 'string',
      startTime: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInspectionTasksResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of tasks.
   */
  items?: DescribeInspectionTasksResponseBodyDataItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 6
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeInspectionTasksResponseBodyDataItems },
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInspectionTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The task data.
   */
  data?: DescribeInspectionTasksResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D9F3768-EDA9-4811-943E-42C8006E****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeInspectionTasksResponseBodyData,
      requestId: 'string',
      success: 'boolean',
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

