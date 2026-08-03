// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInspectionSchedulesResponseBodyDataItems extends $dara.Model {
  /**
   * @example
   * 2026-04-21T02:26:18Z
   */
  createTime?: string;
  /**
   * @example
   * 0 0 3 * * ?
   */
  cronExpression?: string;
  /**
   * @example
   * true
   */
  enabled?: number;
  /**
   * @example
   * HOTKEY
   */
  inspectionItems?: string;
  /**
   * @example
   * 1h
   */
  inspectionWindow?: string;
  /**
   * @example
   * r-2zed6typz5j6djmb2x
   */
  instanceIds?: string;
  /**
   * @example
   * 2026-07-29T10:00:00Z
   */
  nextFireTime?: string;
  /**
   * @example
   * {}
   */
  notifyConfig?: string;
  /**
   * @example
   * zh-CN
   */
  reportLanguage?: string;
  /**
   * @example
   * sch-b45811bf4bba46c8b6d233551da9xxxx
   */
  scheduleId?: string;
  /**
   * @example
   * sch-test
   */
  scheduleName?: string;
  /**
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @example
   * 2026-07-29T06:50:04Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      cronExpression: 'CronExpression',
      enabled: 'Enabled',
      inspectionItems: 'InspectionItems',
      inspectionWindow: 'InspectionWindow',
      instanceIds: 'InstanceIds',
      nextFireTime: 'NextFireTime',
      notifyConfig: 'NotifyConfig',
      reportLanguage: 'ReportLanguage',
      scheduleId: 'ScheduleId',
      scheduleName: 'ScheduleName',
      timezone: 'Timezone',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      cronExpression: 'string',
      enabled: 'number',
      inspectionItems: 'string',
      inspectionWindow: 'string',
      instanceIds: 'string',
      nextFireTime: 'string',
      notifyConfig: 'string',
      reportLanguage: 'string',
      scheduleId: 'string',
      scheduleName: 'string',
      timezone: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInspectionSchedulesResponseBodyData extends $dara.Model {
  items?: DescribeInspectionSchedulesResponseBodyDataItems[];
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
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
      items: { 'type': 'array', 'itemType': DescribeInspectionSchedulesResponseBodyDataItems },
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

export class DescribeInspectionSchedulesResponseBody extends $dara.Model {
  data?: DescribeInspectionSchedulesResponseBodyData;
  /**
   * @example
   * A501A191-BD70-5E50-98A9-C2A486A82****
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
      data: DescribeInspectionSchedulesResponseBodyData,
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

