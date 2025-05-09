// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaTableDetailInfoResponseBodyDetailInfoColumnList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the column is an auto-increment column. Valid values:
   * 
   * *   true: The column is an auto-increment column.
   * *   false: The column is not an auto-increment column.
   * 
   * @example
   * true
   */
  autoIncrement?: boolean;
  /**
   * @remarks
   * The ID of the column.
   * 
   * @example
   * 191234849
   */
  columnId?: string;
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * id
   */
  columnName?: string;
  /**
   * @remarks
   * The data type of the column. Examples: Bigint, Int, and Varchar.
   * 
   * @example
   * bigint(20) unsigned
   */
  columnType?: string;
  /**
   * @remarks
   * The length of the field.
   * 
   * @example
   * 0
   */
  dataLength?: number;
  /**
   * @remarks
   * The precision of the field.
   * 
   * @example
   * 0
   */
  dataPrecision?: number;
  /**
   * @remarks
   * The scale of the column.
   * 
   * @example
   * 0
   */
  dataScale?: number;
  /**
   * @remarks
   * The description of the column.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the column is nullable. Valid values:
   * 
   * *   true: The column is nullable.
   * *   false: The column is not nullable.
   * 
   * @example
   * false
   */
  nullable?: boolean;
  /**
   * @remarks
   * The position of the field in the table.
   * 
   * @example
   * 1
   */
  position?: string;
  static names(): { [key: string]: string } {
    return {
      autoIncrement: 'AutoIncrement',
      columnId: 'ColumnId',
      columnName: 'ColumnName',
      columnType: 'ColumnType',
      dataLength: 'DataLength',
      dataPrecision: 'DataPrecision',
      dataScale: 'DataScale',
      description: 'Description',
      nullable: 'Nullable',
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoIncrement: 'boolean',
      columnId: 'string',
      columnName: 'string',
      columnType: 'string',
      dataLength: 'number',
      dataPrecision: 'number',
      dataScale: 'number',
      description: 'string',
      nullable: 'boolean',
      position: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

