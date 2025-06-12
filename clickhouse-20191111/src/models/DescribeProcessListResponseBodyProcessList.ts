// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeProcessListResponseBodyProcessListData } from "./DescribeProcessListResponseBodyProcessListData";
import { DescribeProcessListResponseBodyProcessListStatistics } from "./DescribeProcessListResponseBodyProcessListStatistics";
import { DescribeProcessListResponseBodyProcessListTableSchema } from "./DescribeProcessListResponseBodyProcessListTableSchema";


export class DescribeProcessListResponseBodyProcessList extends $dara.Model {
  /**
   * @remarks
   * The details of the query.
   */
  data?: DescribeProcessListResponseBodyProcessListData;
  /**
   * @remarks
   * The number of rows returned for the query.
   * 
   * @example
   * 1145700
   */
  rows?: string;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 1
   */
  rowsBeforeLimitAtLeast?: string;
  /**
   * @remarks
   * The statistics of the results.
   */
  statistics?: DescribeProcessListResponseBodyProcessListStatistics;
  /**
   * @remarks
   * Details of the columns.
   */
  tableSchema?: DescribeProcessListResponseBodyProcessListTableSchema;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      rows: 'Rows',
      rowsBeforeLimitAtLeast: 'RowsBeforeLimitAtLeast',
      statistics: 'Statistics',
      tableSchema: 'TableSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeProcessListResponseBodyProcessListData,
      rows: 'string',
      rowsBeforeLimitAtLeast: 'string',
      statistics: DescribeProcessListResponseBodyProcessListStatistics,
      tableSchema: DescribeProcessListResponseBodyProcessListTableSchema,
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(this.statistics && typeof (this.statistics as any).validate === 'function') {
      (this.statistics as any).validate();
    }
    if(this.tableSchema && typeof (this.tableSchema as any).validate === 'function') {
      (this.tableSchema as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

