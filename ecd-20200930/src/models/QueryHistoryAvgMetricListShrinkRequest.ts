// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryHistoryAvgMetricListShrinkRequest extends $dara.Model {
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
  rangeShrink?: string;
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
      rangeShrink: 'Range',
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
      rangeShrink: 'string',
      resourceRegionId: 'string',
      sortType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopId)) {
      $dara.Model.validateArray(this.desktopId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

