// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMetricByPageRequestFilters extends $dara.Model {
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

export class QueryMetricByPageRequest extends $dara.Model {
  currentPage?: number;
  customFilters?: string[];
  dimensions?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  endTime?: number;
  filters?: QueryMetricByPageRequestFilters[];
  intervalInSec?: number;
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
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
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

