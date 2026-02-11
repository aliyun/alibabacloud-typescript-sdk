// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMetricRequestFilters extends $dara.Model {
  key?: string;
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

export class QueryMetricRequest extends $dara.Model {
  consistencyDataKey?: string;
  consistencyQueryStrategy?: string;
  dimensions?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  endTime?: number;
  filters?: QueryMetricRequestFilters[];
  intervalInSec?: number;
  limit?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  measures?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  metric?: string;
  order?: string;
  orderBy?: string;
  proxyUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      consistencyDataKey: 'ConsistencyDataKey',
      consistencyQueryStrategy: 'ConsistencyQueryStrategy',
      dimensions: 'Dimensions',
      endTime: 'EndTime',
      filters: 'Filters',
      intervalInSec: 'IntervalInSec',
      limit: 'Limit',
      measures: 'Measures',
      metric: 'Metric',
      order: 'Order',
      orderBy: 'OrderBy',
      proxyUserId: 'ProxyUserId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consistencyDataKey: 'string',
      consistencyQueryStrategy: 'string',
      dimensions: { 'type': 'array', 'itemType': 'string' },
      endTime: 'number',
      filters: { 'type': 'array', 'itemType': QueryMetricRequestFilters },
      intervalInSec: 'number',
      limit: 'number',
      measures: { 'type': 'array', 'itemType': 'string' },
      metric: 'string',
      order: 'string',
      orderBy: 'string',
      proxyUserId: 'string',
      startTime: 'number',
    };
  }

  validate() {
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

