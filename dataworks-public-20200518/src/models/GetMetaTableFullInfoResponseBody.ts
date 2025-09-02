// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaTableFullInfoResponseBodyDataColumnList extends $dara.Model {
  /**
   * @remarks
   * The description of the field.
   * 
   * @example
   * data comment
   */
  caption?: string;
  /**
   * @remarks
   * The unique identifier of the field.
   * 
   * @example
   * odps.engine_name.table_name.1
   */
  columnGuid?: string;
  /**
   * @remarks
   * The name of the field.
   * 
   * @example
   * 1
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
   * true
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableFullInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The EMR cluster ID.
   * 
   * @example
   * C-010A704DA760****
   */
  clusterId?: string;
  /**
   * @remarks
   * The fields in the table.
   */
  columnList?: GetMetaTableFullInfoResponseBodyDataColumnList[];
  /**
   * @remarks
   * The comment on the table.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * The time when the table was created. A timestamp is returned for this parameter. You can convert the timestamp to the related date based on the time zone that you use.
   * 
   * @example
   * 1589870293000
   */
  createTime?: number;
  /**
   * @remarks
   * The size of the storage space that is consumed by the table. Unit: bytes.
   * 
   * @example
   * 10
   */
  dataSize?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * abc
   */
  databaseName?: string;
  /**
   * @remarks
   * The type of the environment. Valid values:
   * 
   * *   0: indicates that the table resides in the development environment.
   * *   1: indicates that the table resides in the production environment.
   * 
   * @example
   * 1
   */
  envType?: number;
  /**
   * @remarks
   * The scope in which the table is visible. Valid values:
   * 
   * *   0: indicates that the table is visible to workspace members.
   * *   1: indicates that the table is visible to users within a tenant.
   * *   2: indicates that the table is visible to all tenants.
   * *   3: indicates that the table is visible only to the table owner.
   * 
   * @example
   * 1
   */
  isVisible?: number;
  /**
   * @remarks
   * The time when the table was last accessed. A timestamp is returned for this parameter. You can convert the timestamp to the related date based on the time zone that you use.
   * 
   * @example
   * 1589870294000
   */
  lastAccessTime?: number;
  /**
   * @remarks
   * The time when the schema of the table was last changed. A timestamp is returned for this parameter. You can convert the timestamp to the related date based on the time zone that you use.
   * 
   * @example
   * 1589870294000
   */
  lastDdlTime?: number;
  /**
   * @remarks
   * The time when the table was last updated. A timestamp is returned for this parameter. You can convert the timestamp to the related date based on the time zone that you use.
   * 
   * @example
   * 1589870294000
   */
  lastModifyTime?: number;
  /**
   * @remarks
   * The lifecycle of the table. Unit: days.
   * 
   * @example
   * 5
   */
  lifeCycle?: number;
  /**
   * @remarks
   * The storage path of the Hive table.
   * 
   * @example
   * hdfs://localhost:777/user/hadoop/test.txt
   */
  location?: string;
  /**
   * @remarks
   * The ID of the table owner.
   * 
   * @example
   * 123
   */
  ownerId?: string;
  /**
   * @remarks
   * The partition key column.
   * 
   * @example
   * abc
   */
  partitionKeys?: string;
  /**
   * @remarks
   * The ID of the workspace to which the table belongs.
   * 
   * @example
   * 22
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the workspace to which the table belongs.
   * 
   * @example
   * test
   */
  projectName?: string;
  /**
   * @remarks
   * The schema information of the table.
   * 
   * @example
   * default
   */
  schema?: string;
  /**
   * @remarks
   * The unique identifier of the table.
   * 
   * @example
   * odps.engine_name.table_name
   */
  tableGuid?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * table_name
   */
  tableName?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 12345
   */
  tenantId?: number;
  /**
   * @remarks
   * The total number of fields.
   * 
   * @example
   * 22
   */
  totalColumnCount?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      columnList: 'ColumnList',
      comment: 'Comment',
      createTime: 'CreateTime',
      dataSize: 'DataSize',
      databaseName: 'DatabaseName',
      envType: 'EnvType',
      isVisible: 'IsVisible',
      lastAccessTime: 'LastAccessTime',
      lastDdlTime: 'LastDdlTime',
      lastModifyTime: 'LastModifyTime',
      lifeCycle: 'LifeCycle',
      location: 'Location',
      ownerId: 'OwnerId',
      partitionKeys: 'PartitionKeys',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      schema: 'Schema',
      tableGuid: 'TableGuid',
      tableName: 'TableName',
      tenantId: 'TenantId',
      totalColumnCount: 'TotalColumnCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      columnList: { 'type': 'array', 'itemType': GetMetaTableFullInfoResponseBodyDataColumnList },
      comment: 'string',
      createTime: 'number',
      dataSize: 'number',
      databaseName: 'string',
      envType: 'number',
      isVisible: 'number',
      lastAccessTime: 'number',
      lastDdlTime: 'number',
      lastModifyTime: 'number',
      lifeCycle: 'number',
      location: 'string',
      ownerId: 'string',
      partitionKeys: 'string',
      projectId: 'number',
      projectName: 'string',
      schema: 'string',
      tableGuid: 'string',
      tableName: 'string',
      tenantId: 'number',
      totalColumnCount: 'number',
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

export class GetMetaTableFullInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business data.
   */
  data?: GetMetaTableFullInfoResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 1031203110005
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified parameters are invalid.
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
   * The request ID.
   * 
   * @example
   * 0bc1411515937****
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
      data: GetMetaTableFullInfoResponseBodyData,
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

