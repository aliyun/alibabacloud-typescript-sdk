// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIssuesShrinkRequestTimeRange extends $dara.Model {
  /**
   * @example
   * 2024-09-04T02:15:00Z
   */
  endTime?: number;
  /**
   * @example
   * Host
   */
  granularity?: number;
  /**
   * @example
   * day
   */
  granularityUnit?: string;
  /**
   * @example
   * 2024-11-05T16:00:00Z
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      granularity: 'Granularity',
      granularityUnit: 'GranularityUnit',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      granularity: 'number',
      granularityUnit: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIssuesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 233588686
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * h5Resource
   */
  bizModule?: string;
  filterShrink?: string;
  /**
   * @example
   * GUI-TEST1711072832000
   */
  name?: string;
  /**
   * @example
   * instances
   */
  orderBy?: string;
  /**
   * @example
   * 1
   */
  orderType?: string;
  /**
   * @example
   * h5
   */
  os?: string;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * FE_RUNNING
   */
  status?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  timeRange?: GetIssuesShrinkRequestTimeRange;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      bizModule: 'BizModule',
      filterShrink: 'Filter',
      name: 'Name',
      orderBy: 'OrderBy',
      orderType: 'OrderType',
      os: 'Os',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      status: 'Status',
      timeRange: 'TimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      bizModule: 'string',
      filterShrink: 'string',
      name: 'string',
      orderBy: 'string',
      orderType: 'string',
      os: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      status: 'number',
      timeRange: GetIssuesShrinkRequestTimeRange,
    };
  }

  validate() {
    if(this.timeRange && typeof (this.timeRange as any).validate === 'function') {
      (this.timeRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

