// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaTableColumnResponseBodyDataColumnList extends $dara.Model {
  /**
   * @remarks
   * The description of the field.
   * 
   * @example
   * data column
   */
  caption?: string;
  /**
   * @remarks
   * The GUID of the field.
   * 
   * @example
   * odps.engine_name.table_name.name
   */
  columnGuid?: string;
  /**
   * @remarks
   * The name of the field.
   * 
   * @example
   * name
   */
  columnName?: string;
  /**
   * @remarks
   * The data type of the field.
   * 
   * @example
   * string
   */
  columnType?: string;
  /**
   * @remarks
   * The remarks of the field.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * Indicates whether the field is a foreign key. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  isForeignKey?: boolean;
  /**
   * @remarks
   * Indicates whether the field is a partition field. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  isPartitionColumn?: boolean;
  /**
   * @remarks
   * Indicates whether the field is a primary key. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  isPrimaryKey?: boolean;
  /**
   * @remarks
   * The sequence number of the field.
   * 
   * @example
   * 1
   */
  position?: number;
  /**
   * @remarks
   * The number of times the field is read.
   * 
   * @example
   * 2
   */
  relationCount?: number;
  static names(): { [key: string]: string } {
    return {
      caption: 'Caption',
      columnGuid: 'ColumnGuid',
      columnName: 'ColumnName',
      columnType: 'ColumnType',
      comment: 'Comment',
      isForeignKey: 'IsForeignKey',
      isPartitionColumn: 'IsPartitionColumn',
      isPrimaryKey: 'IsPrimaryKey',
      position: 'Position',
      relationCount: 'RelationCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caption: 'string',
      columnGuid: 'string',
      columnName: 'string',
      columnType: 'string',
      comment: 'string',
      isForeignKey: 'boolean',
      isPartitionColumn: 'boolean',
      isPrimaryKey: 'boolean',
      position: 'number',
      relationCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableColumnResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information about fields.
   */
  columnList?: GetMetaTableColumnResponseBodyDataColumnList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of fields.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      columnList: 'ColumnList',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnList: { 'type': 'array', 'itemType': GetMetaTableColumnResponseBodyDataColumnList },
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
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

export class GetMetaTableColumnResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business data.
   */
  data?: GetMetaTableColumnResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Invalid.Tenant.ConnectionNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The connection does not exist.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID. You can locate logs and troubleshoot issues based on the ID.
   * 
   * @example
   * 0bc1ec92159376
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
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMetaTableColumnResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

