// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIDEEventDetailResponseBodyEventDetailTableModelColumns extends $dara.Model {
  /**
   * @example
   * ID
   */
  columnName?: string;
  /**
   * @example
   * BIGINT
   */
  columnType?: string;
  /**
   * @example
   * ID
   */
  comment?: string;
  /**
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

