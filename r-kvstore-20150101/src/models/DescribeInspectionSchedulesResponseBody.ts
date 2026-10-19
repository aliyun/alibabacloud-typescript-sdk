// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInspectionSchedulesResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The time when the scheduled task configuration was created.
   * 
   * The time is displayed in the YYYY-MM-DDTHH:mm:ssZ format in UTC.
   * 
   * @example
   * 2026-04-21T02:26:18Z
   */
  createTime?: string;
  /**
   * @remarks
   * The cron expression.
   * 
   * @example
   * 0 0 3 * * ?
   */
  cronExpression?: string;
  /**
   * @remarks
   * Indicates whether the task is enabled.
   * 
   * @example
   * true
   */
  enabled?: number;
  /**
   * @remarks
   * The inspection items.
   * > 
   * > - Supported inspection items include RESOURCE_USAGE, BIGKEY, HOTKEY, PERFORMANCE_METRICS, and SLOWLOG.
   * 
   * @example
   * HOTKEY
   */
  inspectionItems?: string;
  /**
   * @remarks
   * The time window.
   * 
   * @example
   * 1h
   */
  inspectionWindow?: string;
  /**
   * @remarks
   * The list of associated instance IDs.
   * 
   * @example
   * r-2zed6typz5j6djmb2x
   */
  instanceIds?: string;
  /**
   * @remarks
   * The next time the task is scheduled to run.
   * 
   * The time is displayed in the YYYY-MM-DDTHH:mm:ssZ format in UTC.
   * 
   * @example
   * 2026-07-29T10:00:00Z
   */
  nextFireTime?: string;
  /**
   * @remarks
   * The notification configuration.
   * 
   * @example
   * {}
   */
  notifyConfig?: string;
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
   * The ID of the timed scheduling.
   * 
   * @example
   * sch-b45811bf4bba46c8b6d233551da9xxxx
   */
  scheduleId?: string;
  /**
   * @remarks
   * The name of the timed scheduling.
   * 
   * @example
   * sch-test
   */
  scheduleName?: string;
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * The update time.
   * 
   * The time is displayed in the YYYY-MM-DDTHH:mm:ssZ format in UTC.
   * 
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
  /**
   * @remarks
   * The array of scheduled task configurations.
   */
  items?: DescribeInspectionSchedulesResponseBodyDataItems[];
  /**
   * @remarks
   * The current page number.
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
   * 20
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
  /**
   * @remarks
   * The data.
   */
  data?: DescribeInspectionSchedulesResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A501A191-BD70-5E50-98A9-C2A486A82****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
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

