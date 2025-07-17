// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCommercialUsageRequestAdvancedFilters extends $dara.Model {
  /**
   * @remarks
   * The key of the filter condition.
   * 
   * @example
   * regionId
   */
  key?: string;
  /**
   * @remarks
   * The operator. Valid values: eq and in.
   * 
   * @example
   * eq
   */
  opType?: string;
  /**
   * @remarks
   * The value of the filter condition.
   * 
   * @example
   * cn-hangzhou
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      opType: 'OpType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      opType: 'string',
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

export class QueryCommercialUsageRequest extends $dara.Model {
  /**
   * @remarks
   * The filter conditions.
   */
  advancedFilters?: QueryCommercialUsageRequestAdvancedFilters[];
  /**
   * @remarks
   * The dimensions of the metric that you want to query. Valid values:
   * 
   * *   dataType: data type
   * *   productType: product type
   * *   instanceId: instance ID
   * *   instanceName: instance name
   * *   instanceType: instance type
   */
  dimensions?: string[];
  /**
   * @remarks
   * The end of the time range to query. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1699286400000
   */
  endTime?: number;
  /**
   * @remarks
   * The time interval between data slices. Unit: seconds. Minimum value: 3600.
   * 
   * Valid values:
   * 
   * *   3600: 1 hour
   * *   86400: 1 day
   * 
   * @example
   * 3600
   */
  intervalInSec?: number;
  /**
   * @remarks
   * The measures of the metric that you want to query.
   */
  measures?: string[];
  /**
   * @remarks
   * The name of the metric. Valid value: USAGEFEE.STAT.
   * 
   * This parameter is required.
   * 
   * @example
   * USAGEFEE.STAT
   */
  metric?: string;
  /**
   * @remarks
   * The order in which data is sorted. Valid value:
   * 
   * *   `ASC`: ascending order
   * *   `DESC`: descending order
   * 
   * @example
   * ASC
   */
  order?: string;
  /**
   * @remarks
   * The dimension by which data is sorted.
   * 
   * Valid value:
   * 
   * *   dataType
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * dataType
   */
  orderBy?: string;
  /**
   * @remarks
   * The data type. Valid values:
   * 
   * *   instantQuery: non-time series
   * *   timeSeriesQuery: time series
   * 
   * This parameter is required.
   * 
   * @example
   * instantQuery
   */
  queryType?: string;
  /**
   * @remarks
   * The start of the time range to query. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1699200000000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      advancedFilters: 'AdvancedFilters',
      dimensions: 'Dimensions',
      endTime: 'EndTime',
      intervalInSec: 'IntervalInSec',
      measures: 'Measures',
      metric: 'Metric',
      order: 'Order',
      orderBy: 'OrderBy',
      queryType: 'QueryType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedFilters: { 'type': 'array', 'itemType': QueryCommercialUsageRequestAdvancedFilters },
      dimensions: { 'type': 'array', 'itemType': 'string' },
      endTime: 'number',
      intervalInSec: 'number',
      measures: { 'type': 'array', 'itemType': 'string' },
      metric: 'string',
      order: 'string',
      orderBy: 'string',
      queryType: 'string',
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.advancedFilters)) {
      $dara.Model.validateArray(this.advancedFilters);
    }
    if(Array.isArray(this.dimensions)) {
      $dara.Model.validateArray(this.dimensions);
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

