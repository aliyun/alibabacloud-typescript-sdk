// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInspectionScheduleReportsResponseBodyDataItems extends $dara.Model {
  /**
   * @example
   * 1773211755000
   */
  createTime?: string;
  /**
   * @example
   * 2026-06-29T02:12:02Z
   */
  endTime?: string;
  /**
   * @example
   * 2026-06-16T13:52:35+08:00
   */
  finishTime?: string;
  /**
   * @example
   * {\\"Normal\\":10,\\"Warning\\":0,\\"Error\\":0,\\"Failed\\":0}
   */
  levelSummary?: string;
  /**
   * @example
   * en-US
   */
  reportLanguage?: string;
  /**
   * @example
   * 2025-09-26T21:10Z
   */
  startTime?: string;
  /**
   * @example
   * success
   */
  status?: string;
  /**
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
  items?: DescribeInspectionScheduleReportsResponseBodyDataItems[];
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
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
  data?: DescribeInspectionScheduleReportsResponseBodyData;
  /**
   * @example
   * A057C066-C3F5-4CC9-9FE4-A8D8B0DC****
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

