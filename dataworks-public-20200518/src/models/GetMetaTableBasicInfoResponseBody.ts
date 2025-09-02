// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaTableBasicInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The display name of the metatable.
   * 
   * @example
   * test
   */
  caption?: string;
  /**
   * @remarks
   * The ID of the EMR cluster.
   * 
   * @example
   * abc
   */
  clusterId?: string;
  /**
   * @remarks
   * The number of fields.
   * 
   * @example
   * 3
   */
  columnCount?: number;
  /**
   * @remarks
   * The comment of the metatable.
   * 
   * @example
   * test table
   */
  comment?: string;
  /**
   * @remarks
   * The time when the metatable was created.
   * 
   * @example
   * 1589870294000
   */
  createTime?: number;
  /**
   * @remarks
   * The size of storage space that is occupied by the metatable. Unit: bytes.
   * 
   * @example
   * 10
   */
  dataSize?: number;
  /**
   * @remarks
   * The name of the metadatabase.
   * 
   * @example
   * abc
   */
  databaseName?: string;
  /**
   * @remarks
   * The type of the environment. Valid values:
   * 
   * *   0: development environment
   * *   1: production environment
   * 
   * @example
   * 1
   */
  envType?: number;
  /**
   * @remarks
   * The number of times the metatable was added to a favorite list. This parameter is returned only if you set the Extension parameter to true and takes effect only if you set the DataSourceType parameter to odps.
   * 
   * @example
   * 6
   */
  favoriteCount?: number;
  /**
   * @remarks
   * Indicates whether the metatable is a partitioned table. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  isPartitionTable?: boolean;
  /**
   * @remarks
   * Indicates whether the metatable is a view. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  isView?: boolean;
  /**
   * @remarks
   * The scope in which the metatable is visible. Valid values:
   * 
   * *   0: The metatable is visible to workspace members.
   * *   1: The metatable is visible to users within the tenant.
   * *   2: The metatable is visible to all tenants.
   * *   3: The metatable is visible only to the metatable owner.
   * 
   * @example
   * 1
   */
  isVisible?: number;
  /**
   * @remarks
   * The time when the metatable was last accessed.
   * 
   * @example
   * 1589870294000
   */
  lastAccessTime?: number;
  /**
   * @remarks
   * The time when the schema of the metatable was last changed.
   * 
   * @example
   * 1589870294000
   */
  lastDdlTime?: number;
  /**
   * @remarks
   * The time when the metatable was last updated.
   * 
   * @example
   * 1589870294000
   */
  lastModifyTime?: number;
  /**
   * @remarks
   * The lifecycle of the table. Unit: day.
   * 
   * >  If the lifecycle is not set for a MaxCompute table, the return value is 0, indicating that the table is permanently valid.
   * 
   * @example
   * 5
   */
  lifeCycle?: number;
  /**
   * @remarks
   * The storage path of the Hive metadatabase.
   * 
   * @example
   * hdfs://
   */
  location?: string;
  /**
   * @remarks
   * The ID of the metatable owner.
   * 
   * @example
   * 123
   */
  ownerId?: string;
  /**
   * @remarks
   * The partition key of the Hive metatable.
   * 
   * @example
   * ab
   */
  partitionKeys?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 232
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * @example
   * test
   */
  projectName?: string;
  /**
   * @remarks
   * The number of times the metatable was read. This parameter is returned only if you set the Extension parameter to true and takes effect only if you set the DataSourceType parameter to odps.
   * 
   * @example
   * 3
   */
  readCount?: number;
  /**
   * @remarks
   * The schema information of the metatable. This parameter is returned if the three-layer model of MaxCompute is enabled.
   * 
   * @example
   * default
   */
  schema?: string;
  /**
   * @remarks
   * The GUID of the metatable.
   * 
   * @example
   * odps.engine_name.table_name
   */
  tableGuid?: string;
  /**
   * @remarks
   * The name of the metatable.
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
   * The number of times the metatable was viewed. This parameter is returned only if you set the Extension parameter to true and takes effect only if you set the DataSourceType parameter to odps.
   * 
   * @example
   * 2
   */
  viewCount?: number;
  static names(): { [key: string]: string } {
    return {
      caption: 'Caption',
      clusterId: 'ClusterId',
      columnCount: 'ColumnCount',
      comment: 'Comment',
      createTime: 'CreateTime',
      dataSize: 'DataSize',
      databaseName: 'DatabaseName',
      envType: 'EnvType',
      favoriteCount: 'FavoriteCount',
      isPartitionTable: 'IsPartitionTable',
      isView: 'IsView',
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
      readCount: 'ReadCount',
      schema: 'Schema',
      tableGuid: 'TableGuid',
      tableName: 'TableName',
      tenantId: 'TenantId',
      viewCount: 'ViewCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caption: 'string',
      clusterId: 'string',
      columnCount: 'number',
      comment: 'string',
      createTime: 'number',
      dataSize: 'number',
      databaseName: 'string',
      envType: 'number',
      favoriteCount: 'number',
      isPartitionTable: 'boolean',
      isView: 'boolean',
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
      readCount: 'number',
      schema: 'string',
      tableGuid: 'string',
      tableName: 'string',
      tenantId: 'number',
      viewCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableBasicInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business data.
   */
  data?: GetMetaTableBasicInfoResponseBodyData;
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
   * The request ID.
   * 
   * @example
   * 0bc1411515937
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
      data: GetMetaTableBasicInfoResponseBodyData,
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

