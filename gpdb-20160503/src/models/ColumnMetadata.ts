// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ColumnMetadata extends $dara.Model {
  /**
   * @remarks
   * The default value.
   * 
   * @example
   * \"example\"::text
   */
  columnDefault?: string;
  /**
   * @remarks
   * The column description.
   * 
   * @example
   * Sample column comment
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
   * Indicates whether the column is case-sensitive.
   */
  isCaseSensitive?: boolean;
  /**
   * @remarks
   * Indicates whether the column stores currency values.
   */
  isCurrency?: boolean;
  /**
   * @remarks
   * Indicates whether the column is a primary key.
   */
  isPrimaryKey?: boolean;
  /**
   * @remarks
   * Indicates whether the column is signed.
   */
  isSigned?: boolean;
  /**
   * @remarks
   * The maximum character length.
   * 
   * @example
   * 255
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
   * Indicates whether NULL values are allowed.
   */
  nullable?: boolean;
  /**
   * @remarks
   * The column precision, which indicates the total number of digits in the integer and fractional parts of a decimal number.
   * 
   * @example
   * 10
   */
  precision?: number;
  /**
   * @remarks
   * The column scale, which indicates the number of digits in the fractional part of a decimal number.
   * 
   * @example
   * 2
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
   * 
   * @example
   * text
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

