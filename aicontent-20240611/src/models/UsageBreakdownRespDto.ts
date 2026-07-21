// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UsageBreakdownRowDTO } from "./UsageBreakdownRowDto";


export class UsageBreakdownRespDTO extends $dara.Model {
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
   * List of detailed data entries
   * 
   * @example
   * []
   */
  rows?: UsageBreakdownRowDTO[];
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
      granularity: 'granularity',
      page: 'page',
      pageSize: 'pageSize',
      rows: 'rows',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      granularity: 'string',
      page: 'number',
      pageSize: 'number',
      rows: { 'type': 'array', 'itemType': UsageBreakdownRowDTO },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.rows)) {
      $dara.Model.validateArray(this.rows);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

