// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchDataTrackResultResponseBodyTrackResultTableInfoListColumns extends $dara.Model {
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * basic_platform
   */
  columnName?: string;
  /**
   * @remarks
   * The position of the column.
   * 
   * @example
   * 1
   */
  columnPosition?: number;
  /**
   * @remarks
   * The data type of the column. Examples: BIGINT, INT, and VARCHAR.
   * 
   * @example
   * BIGINT
   */
  columnType?: string;
  /**
   * @remarks
   * Indicates whether the column is a virtual column. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  fictive?: boolean;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      columnPosition: 'ColumnPosition',
      columnType: 'ColumnType',
      fictive: 'Fictive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      columnPosition: 'number',
      columnType: 'string',
      fictive: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

