// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInclinedTablesResponseBodyItemsTable extends $dara.Model {
  /**
   * @remarks
   * Indicates whether data is skewed in the table.
   * 
   * @example
   * True
   */
  isIncline?: boolean;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * admin_daily_own_statistic_record
   */
  name?: string;
  /**
   * @remarks
   * The number of rows in the table.
   * 
   * @example
   * 1000
   */
  rowCount?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * spark_test
   */
  schema?: string;
  /**
   * @remarks
   * The number of rows in the table.
   * 
   * @example
   * 200
   */
  size?: number;
  /**
   * @remarks
   * The percentage of the table size. Unit: %.
   * 
   * >  Formula: Table storage percentage = Total data size of a table/Total data size of the cluster × 100%.
   * 
   * @example
   * 0.4
   */
  spaceRatio?: number;
  /**
   * @remarks
   * The total data size of the table. Unit: bytes.
   * 
   * >  The following formulas can be used to calculate the total data size:
   * 
   * *   Formula 1: Total data size = Hot data size + Cold data size.
   * *   Formula 2: Total data size = Data size of table records + Data size of regular indexes + Data size of primary key indexes + Data size of other data.
   * 
   * @example
   * 53687091200
   */
  totalSize?: number;
  /**
   * @remarks
   * The detection type of the table.
   * 
   * @example
   * Fact
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      isIncline: 'IsIncline',
      name: 'Name',
      rowCount: 'RowCount',
      schema: 'Schema',
      size: 'Size',
      spaceRatio: 'SpaceRatio',
      totalSize: 'TotalSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isIncline: 'boolean',
      name: 'string',
      rowCount: 'number',
      schema: 'string',
      size: 'number',
      spaceRatio: 'number',
      totalSize: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

