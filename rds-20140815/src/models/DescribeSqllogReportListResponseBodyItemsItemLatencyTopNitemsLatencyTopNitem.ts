// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLLogReportListResponseBodyItemsItemLatencyTopNItemsLatencyTopNItem extends $dara.Model {
  /**
   * @remarks
   * The average time that is required to execute the SQL statement. Unit: milliseconds.
   * 
   * @example
   * 500
   */
  avgLatency?: number;
  /**
   * @remarks
   * The number of times that the SQL statement is executed.
   * 
   * @example
   * 5
   */
  SQLExecuteTimes?: number;
  /**
   * @remarks
   * The SQL statement.
   * 
   * >  Only the first 128 characters of the SQL statement are returned. In addition, only the SQL statements that take more than 100 ms to execute are returned.
   * 
   * @example
   * SELECT * FROM table_name;
   */
  SQLText?: string;
  static names(): { [key: string]: string } {
    return {
      avgLatency: 'AvgLatency',
      SQLExecuteTimes: 'SQLExecuteTimes',
      SQLText: 'SQLText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgLatency: 'number',
      SQLExecuteTimes: 'number',
      SQLText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

