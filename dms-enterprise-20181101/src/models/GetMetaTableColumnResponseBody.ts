// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaTableColumnResponseBodyColumnList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the column is an auto-increment column. Valid values:
   * 
   * *   **true**: The column is an auto-increment column.
   * *   **false**: The column is not an auto-increment column.
   * 
   * @example
   * false
   */
  autoIncrement?: boolean;
  /**
   * @remarks
   * The ID of the column.
   * 
   * @example
   * 63513****
   */
  columnId?: string;
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * has_promotion
   */
  columnName?: string;
  /**
   * @remarks
   * The data type of the column.
   * 
   * > The return value of a column is not unique, such as **bigint** or **int**.
   * 
   * @example
   * bigint(1)
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
   * 19
   */
  dataPrecision?: number;
  /**
   * @remarks
   * The number of decimal places for the field.
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
   * Whether discounts are provided
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the field can be empty. Valid values:
   * 
   * *   **true**: The field can be empty.
   * *   **false**: The field cannot be empty.
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
  position?: number;
  /**
   * @remarks
   * Indicates whether the field is the primary key. Valid values:
   * 
   * *   **true**: The field is the primary key.
   * *   **false**: The field is not the primary key.
   * 
   * @example
   * true
   */
  primaryKey?: string;
  /**
   * @remarks
   * The sensitivity level of the column. Valid values:
   * 
   * *   **INNER**: The column is not sensitive.
   * *   **SENSITIVE**: The column is sensitive.
   * *   **CONFIDENTIAL**: The column is confidential.
   * 
   * > For more information, see [Sensitivity levels of columns](https://help.aliyun.com/document_detail/66091.html).
   * 
   * @example
   * INNER
   */
  securityLevel?: string;
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
      primaryKey: 'PrimaryKey',
      securityLevel: 'SecurityLevel',
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
      position: 'number',
      primaryKey: 'string',
      securityLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableColumnResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about fields in the table.
   */
  columnList?: GetMetaTableColumnResponseBodyColumnList[];
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * MissingTableGuid
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * TableGuid is mandatory for this action.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 087DFBA1-378B-5D25-B13B-31F6409F****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      columnList: 'ColumnList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnList: { 'type': 'array', 'itemType': GetMetaTableColumnResponseBodyColumnList },
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.columnList)) {
      $dara.Model.validateArray(this.columnList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

