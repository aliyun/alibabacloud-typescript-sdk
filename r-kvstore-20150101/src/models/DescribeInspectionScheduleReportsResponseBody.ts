// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInspectionScheduleReportsResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The creation time of the task.
   * 
   * The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1773211755000
   */
  createTime?: string;
  /**
   * @remarks
   * The end time of the task.
   * 
   * The time is displayed in the YYYY-MM-DDTHH:mm:ssZ format in UTC.
   * 
   * @example
   * 2026-06-29T02:12:02Z
   */
  endTime?: string;
  /**
   * @remarks
   * The completion time of the task.
   * 
   * The time is displayed in the ISO 8601 format with an explicit time zone offset.
   * 
   * @example
   * 2026-06-16T13:52:35+08:00
   */
  finishTime?: string;
  /**
   * @remarks
   * The summary of risk levels in the inspection results.
   * 
   * @example
   * {\\"Normal\\":10,\\"Warning\\":0,\\"Error\\":0,\\"Failed\\":0}
   */
  levelSummary?: string;
  /**
   * @remarks
   * The language of the report.
   * 
   * @example
   * en-US
   */
  reportLanguage?: string;
  /**
   * @remarks
   * The start time of the task.
   * 
   * The time is displayed in the YYYY-MM-DDTHH:mmZ format in UTC.
   * 
   * @example
   * 2025-09-26T21:10Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the inspection task.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * t-0mqomahp4o4uf3aicu
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      endTime: 'EndTime',
      finishTime: 'FinishTime',
      levelSummary: 'LevelSummary',
      reportLanguage: 'ReportLanguage',
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
      levelSummary: 'string',
      reportLanguage: 'string',
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

export class DescribeInspectionScheduleReportsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The task items.
   */
  items?: DescribeInspectionScheduleReportsResponseBodyDataItems[];
  /**
   * @remarks
   * The returned page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The page size. Default value: 25.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 3
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
      items: { 'type': 'array', 'itemType': DescribeInspectionScheduleReportsResponseBodyDataItems },
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

export class DescribeInspectionScheduleReportsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The task data.
   */
  data?: DescribeInspectionScheduleReportsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A057C066-C3F5-4CC9-9FE4-A8D8B0DC****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - true: The call was successful.
   * - false: The call failed.
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
      data: DescribeInspectionScheduleReportsResponseBodyData,
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

