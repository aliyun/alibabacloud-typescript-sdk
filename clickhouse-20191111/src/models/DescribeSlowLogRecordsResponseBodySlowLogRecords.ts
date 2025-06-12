// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSlowLogRecordsResponseBodySlowLogRecordsData } from "./DescribeSlowLogRecordsResponseBodySlowLogRecordsData";
import { DescribeSlowLogRecordsResponseBodySlowLogRecordsStatistics } from "./DescribeSlowLogRecordsResponseBodySlowLogRecordsStatistics";
import { DescribeSlowLogRecordsResponseBodySlowLogRecordsTableSchema } from "./DescribeSlowLogRecordsResponseBodySlowLogRecordsTableSchema";


export class DescribeSlowLogRecordsResponseBodySlowLogRecords extends $dara.Model {
  /**
   * @remarks
   * Details about the slow query logs.
   */
  data?: DescribeSlowLogRecordsResponseBodySlowLogRecordsData;
  /**
   * @remarks
   * The number of rows in the result set.
   * 
   * @example
   * 1
   */
  rows?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  rowsBeforeLimitAtLeast?: string;
  /**
   * @remarks
   * The statistics of the results.
   */
  statistics?: DescribeSlowLogRecordsResponseBodySlowLogRecordsStatistics;
  /**
   * @remarks
   * The schema of the table in the database.
   */
  tableSchema?: DescribeSlowLogRecordsResponseBodySlowLogRecordsTableSchema;
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
      data: DescribeSlowLogRecordsResponseBodySlowLogRecordsData,
      rows: 'string',
      rowsBeforeLimitAtLeast: 'string',
      statistics: DescribeSlowLogRecordsResponseBodySlowLogRecordsStatistics,
      tableSchema: DescribeSlowLogRecordsResponseBodySlowLogRecordsTableSchema,
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

