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

export class GetMetaTableDetailInfoResponseBodyDetailInfoIndexList extends $dara.Model {
  /**
   * @remarks
   * The index column.
   */
  indexColumns?: string[];
  /**
   * @remarks
   * The ID of the index.
   * 
   * @example
   * 123
   */
  indexId?: string;
  /**
   * @remarks
   * The name of the index.
   * 
   * @example
   * PRIMARY
   */
  indexName?: string;
  /**
   * @remarks
   * The type of the index. Examples: Primary, Unique, and Normal.
   * 
   * @example
   * Primary
   */
  indexType?: string;
  /**
   * @remarks
   * Indicates whether the index is unique. Valid values:
   * 
   * *   true: The index is unique.
   * *   false: The index is not unique.
   * 
   * @example
   * false
   */
  unique?: boolean;
  static names(): { [key: string]: string } {
    return {
      indexColumns: 'IndexColumns',
      indexId: 'IndexId',
      indexName: 'IndexName',
      indexType: 'IndexType',
      unique: 'Unique',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexColumns: { 'type': 'array', 'itemType': 'string' },
      indexId: 'string',
      indexName: 'string',
      indexType: 'string',
      unique: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.indexColumns)) {
      $dara.Model.validateArray(this.indexColumns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableDetailInfoResponseBodyDetailInfo extends $dara.Model {
  /**
   * @remarks
   * The columns in the table.
   */
  columnList?: GetMetaTableDetailInfoResponseBodyDetailInfoColumnList[];
  /**
   * @remarks
   * The list of indexes.
   */
  indexList?: GetMetaTableDetailInfoResponseBodyDetailInfoIndexList[];
  static names(): { [key: string]: string } {
    return {
      columnList: 'ColumnList',
      indexList: 'IndexList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnList: { 'type': 'array', 'itemType': GetMetaTableDetailInfoResponseBodyDetailInfoColumnList },
      indexList: { 'type': 'array', 'itemType': GetMetaTableDetailInfoResponseBodyDetailInfoIndexList },
    };
  }

  validate() {
    if(Array.isArray(this.columnList)) {
      $dara.Model.validateArray(this.columnList);
    }
    if(Array.isArray(this.indexList)) {
      $dara.Model.validateArray(this.indexList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableDetailInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the table.
   */
  detailInfo?: GetMetaTableDetailInfoResponseBodyDetailInfo;
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E881CB2F-DE42-42E5-90EB-8B3173DCB9B9
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      detailInfo: 'DetailInfo',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailInfo: GetMetaTableDetailInfoResponseBodyDetailInfo,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.detailInfo && typeof (this.detailInfo as any).validate === 'function') {
      (this.detailInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

