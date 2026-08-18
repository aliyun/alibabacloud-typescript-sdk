// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetricDefRespDTO } from "./MetricDefRespDto";
import { BillingDetailRowDTO } from "./BillingDetailRowDto";


export class BillingDetailListRespDTO extends $dara.Model {
  /**
   * @remarks
   * The column definitions, which are dynamically generated based on the model types that appear in the query results.
   * 
   * @example
   * []
   */
  columns?: MetricDefRespDTO[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of bill details data.
   * 
   * @example
   * []
   */
  rows?: BillingDetailRowDTO[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      columns: 'columns',
      page: 'page',
      pageSize: 'pageSize',
      rows: 'rows',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': MetricDefRespDTO },
      page: 'number',
      pageSize: 'number',
      rows: { 'type': 'array', 'itemType': BillingDetailRowDTO },
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

