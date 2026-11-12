// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ColumnMetadata extends $dara.Model {
  /**
   * @remarks
   * The default value.
   */
  columnDefault?: string;
  /**
   * @remarks
   * The column description.
   */
  comment?: string;
  /**
   * @remarks
   * The data type.
   * 
   * @example
   * text
   */
  dataType?: string;
  /**
   * @remarks
   * The case sensitivity.
   */
  isCaseSensitive?: boolean;
  /**
   * @remarks
   * The currency value indicator.
   */
  isCurrency?: boolean;
  /**
   * @remarks
   * The primary key indicator.
   */
  isPrimaryKey?: boolean;
  /**
   * @remarks
   * The signed indicator.
   */
  isSigned?: boolean;
  /**
   * @remarks
   * The maximum character length.
   */
  maxLength?: number;
  /**
   * @remarks
   * The column name.
   * 
   * @example
   * content
   */
  name?: string;
  /**
   * @remarks
   * The nullability.
   */
  nullable?: boolean;
  /**
   * @remarks
   * The precision of the column, which indicates the total number of digits in the integer and fractional parts of a decimal number.
   */
  precision?: number;
  /**
   * @remarks
   * The scale of the column, which indicates the number of digits in the fractional part of a decimal number.
   */
  scale?: number;
  /**
   * @remarks
   * The schema name.
   * 
   * @example
   * ns1
   */
  schemaName?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * dc1
   */
  tableName?: string;
  /**
   * @remarks
   * The name of the base data type used by the column.
   */
  udtName?: string;
  static names(): { [key: string]: string } {
    return {
      columnDefault: 'ColumnDefault',
      comment: 'Comment',
      dataType: 'DataType',
      isCaseSensitive: 'IsCaseSensitive',
      isCurrency: 'IsCurrency',
      isPrimaryKey: 'IsPrimaryKey',
      isSigned: 'IsSigned',
      maxLength: 'MaxLength',
      name: 'Name',
      nullable: 'Nullable',
      precision: 'Precision',
      scale: 'Scale',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      udtName: 'UdtName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnDefault: 'string',
      comment: 'string',
      dataType: 'string',
      isCaseSensitive: 'boolean',
      isCurrency: 'boolean',
      isPrimaryKey: 'boolean',
      isSigned: 'boolean',
      maxLength: 'number',
      name: 'string',
      nullable: 'boolean',
      precision: 'number',
      scale: 'number',
      schemaName: 'string',
      tableName: 'string',
      udtName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

