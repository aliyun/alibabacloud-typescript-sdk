// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableColumnsResponseBodyColumnList extends $dara.Model {
  /**
   * @remarks
   * The ID of the data classification.
   * 
   * @example
   * 12345
   */
  classifyId?: number;
  /**
   * @remarks
   * The name of the data classification.
   * 
   * @example
   * test
   */
  classifyName?: string;
  /**
   * @remarks
   * The comment of the field.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The creation time of the field.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The creator of the field.
   * 
   * @example
   * 30012011
   */
  creator?: string;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * @example
   * 3301
   */
  dataSourceId?: number;
  /**
   * @remarks
   * The type of the data source.
   * 
   * @example
   * MAX_COMPUTE
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The data type of the field.
   * 
   * @example
   * varchar
   */
  dataType?: string;
  /**
   * @remarks
   * The default value of the field.
   * 
   * @example
   * test
   */
  defaultValue?: string;
  /**
   * @remarks
   * The display name of the field.
   * 
   * @example
   * Age
   */
  displayName?: string;
  /**
   * @remarks
   * The environment to which the column belongs. Valid values: dev and prod.
   * 
   * @example
   * dev
   */
  env?: string;
  /**
   * @remarks
   * The GUID of the column.
   * 
   * @example
   * 1121.col1
   */
  guid?: string;
  /**
   * @remarks
   * Indicates whether the field is a foreign key.
   */
  isForeignKey?: boolean;
  /**
   * @remarks
   * Indicates whether the field is a partition key.
   */
  isPartitionColumn?: boolean;
  /**
   * @remarks
   * Indicates whether the field is a primary key.
   */
  isPrimaryKey?: boolean;
  /**
   * @remarks
   * The last modifier of the field.
   * 
   * @example
   * 30012011
   */
  lastModifier?: string;
  /**
   * @remarks
   * The abbreviation of the data level.
   * 
   * @example
   * L1
   */
  levelAbbreviation?: string;
  /**
   * @remarks
   * The modification time of the field.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  modifyTime?: string;
  /**
   * @remarks
   * The name of the field.
   * 
   * @example
   * age
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the field allows null values.
   */
  nullable?: boolean;
  /**
   * @remarks
   * The sequence number of the column.
   * 
   * @example
   * 1
   */
  seqNumber?: number;
  /**
   * @remarks
   * The GUID of the table.
   * 
   * @example
   * 1121
   */
  tableGuid?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * t_test
   */
  tableName?: string;
  /**
   * @remarks
   * The number of queries in the last 30 days.
   * 
   * @example
   * 99
   */
  visitCount30d?: number;
  static names(): { [key: string]: string } {
    return {
      classifyId: 'ClassifyId',
      classifyName: 'ClassifyName',
      comment: 'Comment',
      createTime: 'CreateTime',
      creator: 'Creator',
      dataSourceId: 'DataSourceId',
      dataSourceType: 'DataSourceType',
      dataType: 'DataType',
      defaultValue: 'DefaultValue',
      displayName: 'DisplayName',
      env: 'Env',
      guid: 'Guid',
      isForeignKey: 'IsForeignKey',
      isPartitionColumn: 'IsPartitionColumn',
      isPrimaryKey: 'IsPrimaryKey',
      lastModifier: 'LastModifier',
      levelAbbreviation: 'LevelAbbreviation',
      modifyTime: 'ModifyTime',
      name: 'Name',
      nullable: 'Nullable',
      seqNumber: 'SeqNumber',
      tableGuid: 'TableGuid',
      tableName: 'TableName',
      visitCount30d: 'VisitCount30d',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classifyId: 'number',
      classifyName: 'string',
      comment: 'string',
      createTime: 'string',
      creator: 'string',
      dataSourceId: 'number',
      dataSourceType: 'string',
      dataType: 'string',
      defaultValue: 'string',
      displayName: 'string',
      env: 'string',
      guid: 'string',
      isForeignKey: 'boolean',
      isPartitionColumn: 'boolean',
      isPrimaryKey: 'boolean',
      lastModifier: 'string',
      levelAbbreviation: 'string',
      modifyTime: 'string',
      name: 'string',
      nullable: 'boolean',
      seqNumber: 'number',
      tableGuid: 'string',
      tableName: 'string',
      visitCount30d: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableColumnsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The list of asset table columns.
   */
  columnList?: GetTableColumnsResponseBodyColumnList[];
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
   * The backend exception details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      columnList: 'ColumnList',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      columnList: { 'type': 'array', 'itemType': GetTableColumnsResponseBodyColumnList },
      httpStatusCode: 'number',
      message: 'string',
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

