// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryHistoryAvgMetricListRequestRange extends $dara.Model {
  /**
   * @example
   * false
   */
  includeMax?: boolean;
  /**
   * @example
   * true
   */
  includeMin?: boolean;
  /**
   * @example
   * label-02\\"
   */
  label?: string;
  /**
   * @example
   * 20
   */
  max?: number;
  /**
   * @example
   * 0
   */
  min?: number;
  static names(): { [key: string]: string } {
    return {
      includeMax: 'IncludeMax',
      includeMin: 'IncludeMin',
      label: 'Label',
      max: 'Max',
      min: 'Min',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeMax: 'boolean',
      includeMin: 'boolean',
      label: 'string',
      max: 'number',
      min: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHistoryAvgMetricListRequest extends $dara.Model {
  /**
   * @example
   * 2026-04-01
   */
  dataDate?: string;
  desktopId?: string[];
  /**
   * @example
   * LOAD_SCORE
   */
  metricName?: string;
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
  range?: QueryHistoryAvgMetricListRequestRange;
  /**
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  /**
   * @example
   * ASC
   */
  sortType?: string;
  static names(): { [key: string]: string } {
    return {
      dataDate: 'DataDate',
      desktopId: 'DesktopId',
      metricName: 'MetricName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      range: 'Range',
      resourceRegionId: 'ResourceRegionId',
      sortType: 'SortType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDate: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      metricName: 'string',
      pageNum: 'number',
      pageSize: 'number',
      range: QueryHistoryAvgMetricListRequestRange,
      resourceRegionId: 'string',
      sortType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopId)) {
      $dara.Model.validateArray(this.desktopId);
    }
    if(this.range && typeof (this.range as any).validate === 'function') {
      (this.range as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

