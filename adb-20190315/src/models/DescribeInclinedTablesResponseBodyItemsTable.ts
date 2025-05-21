// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInclinedTablesResponseBodyItemsTable extends $dara.Model {
  /**
   * @remarks
   * Indicates whether data is skewed in the table.
   * 
   * @example
   * true
   */
  isIncline?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * ff
   */
  name?: string;
  /**
   * @remarks
   * The number of rows in the table.
   * 
   * @example
   * 2565
   */
  rowCount?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adm_analyze
   */
  schema?: string;
  /**
   * @remarks
   * The number of rows in the table.
   * 
   * @example
   * 2416527
   */
  size?: string;
  /**
   * @remarks
   * The percentage of the table size.
   * 
   * @example
   * 89
   */
  spaceRatio?: number;
  /**
   * @remarks
   * The total data size of the table.
   * 
   * @example
   * 65
   */
  totalSize?: number;
  /**
   * @remarks
   * The column type.
   * 
   * @example
   * executor
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
      isIncline: 'string',
      name: 'string',
      rowCount: 'number',
      schema: 'string',
      size: 'string',
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

