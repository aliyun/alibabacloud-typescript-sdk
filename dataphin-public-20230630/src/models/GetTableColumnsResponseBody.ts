// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableColumnsResponseBodyColumnList extends $dara.Model {
  /**
   * @example
   * 12345
   */
  classifyId?: number;
  /**
   * @example
   * test
   */
  classifyName?: string;
  /**
   * @example
   * test
   */
  comment?: string;
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  createTime?: string;
  /**
   * @example
   * 30012011
   */
  creator?: string;
  /**
   * @example
   * 3301
   */
  dataSourceId?: number;
  /**
   * @example
   * MAX_COMPUTE
   */
  dataSourceType?: string;
  /**
   * @example
   * varchar
   */
  dataType?: string;
  /**
   * @example
   * test
   */
  defaultValue?: string;
  /**
   * @example
   * 年龄
   */
  displayName?: string;
  /**
   * @example
   * dev
   */
  env?: string;
  /**
   * @example
   * 1121.col1
   */
  guid?: string;
  isForeignKey?: boolean;
  isPartitionColumn?: boolean;
  isPrimaryKey?: boolean;
  /**
   * @example
   * 30012011
   */
  lastModifier?: string;
  /**
   * @example
   * L1
   */
  levelAbbreviation?: string;
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  modifyTime?: string;
  /**
   * @example
   * age
   */
  name?: string;
  nullable?: boolean;
  /**
   * @example
   * 1
   */
  seqNumber?: number;
  /**
   * @example
   * 1121
   */
  tableGuid?: string;
  /**
   * @example
   * t_test
   */
  tableName?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
  columnList?: GetTableColumnsResponseBodyColumnList[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
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

