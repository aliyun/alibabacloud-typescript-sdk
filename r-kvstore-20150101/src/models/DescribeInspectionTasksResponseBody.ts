// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInspectionTasksResponseBodyDataItems extends $dara.Model {
  /**
   * @example
   * 2024-07-01T02:06:34Z
   */
  createTime?: string;
  /**
   * @example
   * 2025-09-23T00:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 2026-01-09T02:13:01Z
   */
  finishTime?: string;
  /**
   * @example
   * PERFORMANCE_METRICS
   */
  inspectionItems?: string;
  /**
   * @example
   * r-uf6ns8txov3mp9jxxx
   */
  instanceIds?: string;
  /**
   * @example
   * zh-CN
   */
  reportLanguage?: string;
  /**
   * @example
   * sch-4dfb08ddf9f84855bacca35axxx
   */
  scheduleId?: string;
  /**
   * @example
   * scheduler|
   */
  source?: string;
  /**
   * @example
   * 2026-05-30T02:11:01Z
   */
  startTime?: string;
  /**
   * @example
   * SUCCEEDED
   */
  status?: string;
  /**
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
  items?: DescribeInspectionTasksResponseBodyDataItems[];
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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
  data?: DescribeInspectionTasksResponseBodyData;
  /**
   * @example
   * 2D9F3768-EDA9-4811-943E-42C8006E****
   */
  requestId?: string;
  /**
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

