// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMetricByPageRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The key of the filter condition. You must set the key to `pid` or `regionId`.
   * 
   * @example
   * pid
   */
  key?: string;
  /**
   * @remarks
   * The value of the filter condition. You must set the value of the `pid` or `regionId` condition. For information about how to obtain the `pid`, see the "Obtain the PID of an application" section.
   * 
   * @example
   * xxx@74xxx
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMetricByPageRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: `1`.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Custom filter conditions.
   */
  customFilters?: string[];
  /**
   * @remarks
   * The dimensions of the metric that you want to query.
   * 
   * @example
   * ["detector_browser","detector_device"]
   */
  dimensions?: string[];
  /**
   * @remarks
   * The end of the time range to query. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1667546895000
   */
  endTime?: number;
  /**
   * @remarks
   * The filter conditions.
   */
  filters?: QueryMetricByPageRequestFilters[];
  /**
   * @remarks
   * The time interval at which you want to query metric data. Unit: milliseconds. Minimum value: 60000.
   * 
   * @example
   * 100000
   */
  intervalInSec?: number;
  /**
   * @remarks
   * The measures of the metric that you want to query.
   * 
   * @example
   * pv
   */
  measures?: string[];
  /**
   * @remarks
   * The metric that you want to query. You cannot specify a custom metric. For more information, see the "Application monitoring metrics that can be queried" section.
   * 
   * This parameter is required.
   * 
   * @example
   * appstat.host
   */
  metric?: string;
  /**
   * @remarks
   * The order in which measures are sorted. Valid values:
   * 
   * *   `ASC`: ascending order
   * *   `DESC`: descending order
   * 
   * > If you do not specify the parameter, data is not sorted.
   * 
   * @example
   * ASC
   */
  order?: string;
  /**
   * @remarks
   * The dimension for arranging metrics in sequence. For more information, see the supplementary metrics.
   * 
   * @example
   * pid
   */
  orderBy?: string;
  /**
   * @remarks
   * This parameter is no longer supported. The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start of the time range to query. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1667287695000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      customFilters: 'CustomFilters',
      dimensions: 'Dimensions',
      endTime: 'EndTime',
      filters: 'Filters',
      intervalInSec: 'IntervalInSec',
      measures: 'Measures',
      metric: 'Metric',
      order: 'Order',
      orderBy: 'OrderBy',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      customFilters: { 'type': 'array', 'itemType': 'string' },
      dimensions: { 'type': 'array', 'itemType': 'string' },
      endTime: 'number',
      filters: { 'type': 'array', 'itemType': QueryMetricByPageRequestFilters },
      intervalInSec: 'number',
      measures: { 'type': 'array', 'itemType': 'string' },
      metric: 'string',
      order: 'string',
      orderBy: 'string',
      pageSize: 'number',
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.customFilters)) {
      $dara.Model.validateArray(this.customFilters);
    }
    if(Array.isArray(this.dimensions)) {
      $dara.Model.validateArray(this.dimensions);
    }
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    if(Array.isArray(this.measures)) {
      $dara.Model.validateArray(this.measures);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

