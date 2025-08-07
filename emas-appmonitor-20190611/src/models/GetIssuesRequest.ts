// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIssuesRequestFilter extends $dara.Model {
  /**
   * @example
   * erConfig
   */
  key?: string;
  /**
   * @example
   * BeginWith
   */
  operator?: string;
  subFilters?: string[];
  values?: any[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      subFilters: 'SubFilters',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      subFilters: { 'type': 'array', 'itemType': 'string' },
      values: { 'type': 'array', 'itemType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.subFilters)) {
      $dara.Model.validateArray(this.subFilters);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIssuesRequestTimeRange extends $dara.Model {
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

export class GetIssuesRequest extends $dara.Model {
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
  filter?: GetIssuesRequestFilter;
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
  timeRange?: GetIssuesRequestTimeRange;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      bizModule: 'BizModule',
      filter: 'Filter',
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
      filter: GetIssuesRequestFilter,
      name: 'string',
      orderBy: 'string',
      orderType: 'string',
      os: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      status: 'number',
      timeRange: GetIssuesRequestTimeRange,
    };
  }

  validate() {
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    if(this.timeRange && typeof (this.timeRange as any).validate === 'function') {
      (this.timeRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

