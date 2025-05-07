// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLLogReportListResponseBodyItemsItemQPSTopNItemsQPSTopNItem extends $dara.Model {
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
   * >  Only the first 128 characters of the SQL statement are returned. In addition, only the SQL statements that take more than 5 ms to execute are returned.
   * 
   * @example
   * SELECT * FROM table_name;
   */
  SQLText?: string;
  static names(): { [key: string]: string } {
    return {
      SQLExecuteTimes: 'SQLExecuteTimes',
      SQLText: 'SQLText',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

