// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetricDefRespDTO } from "./MetricDefRespDto";
import { BillingCostBreakdownRowDTO } from "./BillingCostBreakdownRowDto";


export class BillingCostBreakdownRespDTO extends $dara.Model {
  /**
   * @example
   * []
   */
  columns?: MetricDefRespDTO[];
  /**
   * @remarks
   * Aggregation granularity: hourly or daily
   * 
   * @example
   * hourly
   */
  granularity?: string;
  /**
   * @remarks
   * Current page number
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * Number of entries per page
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * List of billing details data
   * 
   * @example
   * []
   */
  rows?: BillingCostBreakdownRowDTO[];
  /**
   * @remarks
   * Total number of entries
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      columns: 'columns',
      granularity: 'granularity',
      page: 'page',
      pageSize: 'pageSize',
      rows: 'rows',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': MetricDefRespDTO },
      granularity: 'string',
      page: 'number',
      pageSize: 'number',
      rows: { 'type': 'array', 'itemType': BillingCostBreakdownRowDTO },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(Array.isArray(this.rows)) {
      $dara.Model.validateArray(this.rows);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

