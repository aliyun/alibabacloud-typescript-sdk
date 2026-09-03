// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryHistoryAvgMetricListRequestRange extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to include the maximum value. Default value: false.
   * 
   * @example
   * false
   */
  includeMax?: boolean;
  /**
   * @remarks
   * Specifies whether to include the minimum value. Default value: true.
   * 
   * @example
   * true
   */
  includeMin?: boolean;
  /**
   * @remarks
   * The range label, which is used in the response.
   * 
   * @example
   * label-02\\"
   */
  label?: string;
  /**
   * @remarks
   * The maximum value.
   * 
   * @example
   * 20
   */
  max?: number;
  /**
   * @remarks
   * The minimum value.
   * 
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
   * @remarks
   * The start date for statistics. Format: "YYYY-MM-DD". Default value: T-1.
   * 
   * @example
   * 2026-04-01
   */
  dataDate?: string;
  /**
   * @remarks
   * The list of desktop IDs. A maximum of 100 IDs are supported.
   */
  desktopId?: string[];
  /**
   * @remarks
   * The type of monitoring metrics.
   * 
   * @example
   * LOAD_SCORE
   */
  metricName?: string;
  /**
   * @remarks
   * The page number. Default value: 1. The value must be greater than 0.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Valid values: 1 to 200.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of custom numeric ranges.
   */
  range?: QueryHistoryAvgMetricListRequestRange;
  /**
   * @remarks
   * The region of the desktop.
   * 
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The sort order.
   * 
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

