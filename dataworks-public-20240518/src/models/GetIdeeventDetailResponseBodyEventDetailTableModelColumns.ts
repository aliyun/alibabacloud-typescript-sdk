// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIDEEventDetailResponseBodyEventDetailTableModelColumns extends $dara.Model {
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * ID
   */
  columnName?: string;
  /**
   * @remarks
   * The data type of the column.
   * 
   * @example
   * BIGINT
   */
  columnType?: string;
  /**
   * @remarks
   * The remarks of the column.
   * 
   * @example
   * ID
   */
  comment?: string;
  /**
   * @remarks
   * Indicates whether the column is a partition key column. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  isPartitionColumn?: boolean;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      columnType: 'ColumnType',
      comment: 'Comment',
      isPartitionColumn: 'IsPartitionColumn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      columnType: 'string',
      comment: 'string',
      isPartitionColumn: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

