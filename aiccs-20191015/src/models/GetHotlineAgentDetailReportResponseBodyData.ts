// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetHotlineAgentDetailReportResponseBodyDataColumns } from "./GetHotlineAgentDetailReportResponseBodyDataColumns";


export class GetHotlineAgentDetailReportResponseBodyData extends $dara.Model {
  columns?: GetHotlineAgentDetailReportResponseBodyDataColumns[];
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  rows?: { [key: string]: any }[];
  /**
   * @example
   * 7
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      page: 'Page',
      pageSize: 'PageSize',
      rows: 'Rows',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': GetHotlineAgentDetailReportResponseBodyDataColumns },
      page: 'number',
      pageSize: 'number',
      rows: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
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

