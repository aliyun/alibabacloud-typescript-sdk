// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableColumnsResponseBodyColumnList extends $dara.Model {
  /**
   * @remarks
   * Data classification ID.
   * 
   * @example
   * 12345
   */
  classifyId?: number;
  /**
   * @remarks
   * Data classification name.
   * 
   * @example
   * test
   */
  classifyName?: string;
  /**
   * @remarks
   * Column comment.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * Creator.
   * 
   * @example
   * 30012011
   */
  creator?: string;
  /**
   * @remarks
   * Data source ID.
   * 
   * @example
   * 3301
   */
  dataSourceId?: number;
  /**
   * @remarks
   * Data source type.
   * 
   * @example
   * MAX_COMPUTE
   */
  dataSourceType?: string;
  /**
   * @remarks
   * Data type.
   * 
   * @example
   * varchar
   */
  dataType?: string;
  /**
   * @remarks
   * Default value.
   * 
   * @example
   * test
   */
  defaultValue?: string;
  /**
   * @remarks
   * Column display name.
   * 
   * @example
   * 年龄
   */
  displayName?: string;
  /**
   * @remarks
   * Environment: dev or prod.
   * 
   * @example
   * dev
   */
  env?: string;
  /**
   * @remarks
   * Column GUID.
   * 
   * @example
   * 1121.col1
   */
  guid?: string;
  /**
   * @remarks
   * Whether this is a foreign key.
   */
  isForeignKey?: boolean;
  /**
   * @remarks
   * Whether this is a partition column.
   */
  isPartitionColumn?: boolean;
  /**
   * @remarks
   * Whether this is a primary key.
   */
  isPrimaryKey?: boolean;
  /**
   * @remarks
   * Last modifier.
   * 
   * @example
   * 30012011
   */
  lastModifier?: string;
  /**
   * @remarks
   * Data level abbreviation.
   * 
   * @example
   * L1
   */
  levelAbbreviation?: string;
  /**
   * @remarks
   * Modification time.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  modifyTime?: string;
  /**
   * @remarks
   * Column name.
   * 
   * @example
   * age
   */
  name?: string;
  /**
   * @remarks
   * Whether null values are allowed.
   */
  nullable?: boolean;
  /**
   * @remarks
   * Sequence number.
   * 
   * @example
   * 1
   */
  seqNumber?: number;
  /**
   * @remarks
   * Table GUID.
   * 
   * @example
   * 1121
   */
  tableGuid?: string;
  /**
   * @remarks
   * Table name.
   * 
   * @example
   * t_test
   */
  tableName?: string;
  /**
   * @remarks
   * Query count in the last 30 days.
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
   * Backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * List of asset table columns.
   */
  columnList?: GetTableColumnsResponseBodyColumnList[];
  /**
   * @remarks
   * HTTP response code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Backend response exception details.
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
   * Whether the request is successful.
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

