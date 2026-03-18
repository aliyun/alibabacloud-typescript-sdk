// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmsTablesResponseBodyDataObjectListSchemaColumns extends $dara.Model {
  /**
   * @remarks
   * The comment on the column.
   * 
   * @example
   * user id
   */
  comment?: string;
  /**
   * @remarks
   * The default value of the column.
   * 
   * @example
   * ""
   */
  defaultValue?: string;
  /**
   * @remarks
   * The column name.
   * 
   * @example
   * user_id
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the column can be null.
   * 
   * @example
   * false
   */
  nullable?: boolean;
  /**
   * @remarks
   * The column type.
   * 
   * @example
   * bigint
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      defaultValue: 'defaultValue',
      name: 'name',
      nullable: 'nullable',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      defaultValue: 'string',
      name: 'string',
      nullable: 'boolean',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsTablesResponseBodyDataObjectListSchemaPartitions extends $dara.Model {
  /**
   * @remarks
   * The comment on the column.
   * 
   * @example
   * 第一分区
   */
  comment?: string;
  /**
   * @remarks
   * The default value of the column.
   * 
   * @example
   * abc
   */
  defaultValue?: string;
  /**
   * @remarks
   * The column name.
   * 
   * @example
   * p1
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the column can be null.
   * 
   * @example
   * false
   */
  nullable?: boolean;
  /**
   * @remarks
   * The column type.
   * 
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      defaultValue: 'defaultValue',
      name: 'name',
      nullable: 'nullable',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      defaultValue: 'string',
      name: 'string',
      nullable: 'boolean',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsTablesResponseBodyDataObjectListSchema extends $dara.Model {
  /**
   * @remarks
   * All non-partition key columns of the table.
   */
  columns?: ListMmsTablesResponseBodyDataObjectListSchemaColumns[];
  /**
   * @remarks
   * The comment on the table.
   * 
   * @example
   * for mms test
   */
  comment?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * All partition key columns.
   */
  partitions?: ListMmsTablesResponseBodyDataObjectListSchemaPartitions[];
  static names(): { [key: string]: string } {
    return {
      columns: 'columns',
      comment: 'comment',
      name: 'name',
      partitions: 'partitions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': ListMmsTablesResponseBodyDataObjectListSchemaColumns },
      comment: 'string',
      name: 'string',
      partitions: { 'type': 'array', 'itemType': ListMmsTablesResponseBodyDataObjectListSchemaPartitions },
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(Array.isArray(this.partitions)) {
      $dara.Model.validateArray(this.partitions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsTablesResponseBodyDataObjectList extends $dara.Model {
  /**
   * @remarks
   * The database ID.
   * 
   * @example
   * 196
   */
  dbId?: number;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * demo
   */
  dbName?: string;
  /**
   * @remarks
   * The name of the destination MaxCompute table. By default, this name is the same as the source table name.
   * 
   * @example
   * test
   */
  dstName?: string;
  /**
   * @remarks
   * The name of the destination MaxCompute project.
   * 
   * @example
   * mms_test
   */
  dstProjectName?: string;
  /**
   * @remarks
   * The name of the destination MaxCompute schema. This parameter is null if the destination MaxCompute project does not have a schema layer.
   * 
   * @example
   * default
   */
  dstSchemaName?: string;
  /**
   * @remarks
   * Other information stored in JSON format.
   * 
   * @example
   * {"mapkey.delim":":","collection.delim":",","serialization.format":"|","field.delim":"|"}
   */
  extra?: string;
  /**
   * @remarks
   * Indicates whether the table is a partitioned table.
   * 
   * @example
   * true
   */
  hasPartitions?: boolean;
  /**
   * @remarks
   * The table ID.
   * 
   * @example
   * 1003476
   */
  id?: number;
  /**
   * @remarks
   * The input format.
   * 
   * @example
   * org.apache.hadoop.hive.ql.io.parquet.MapredParquetInputFormat
   */
  inputFormat?: string;
  /**
   * @remarks
   * The last DDL time.
   * 
   * @example
   * 2024-12-17 15:44:42
   */
  lastDdlTime?: string;
  /**
   * @remarks
   * The storage location of the table.
   * 
   * @example
   * | hdfs://master-1-1.c-c127cd184bb029ea.cn-zhangjiakou.emr.aliyuncs.com:9000/user/hive/warehouse/demo
   */
  location?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The number of rows.
   * 
   * @example
   * 232323
   */
  numRows?: number;
  /**
   * @remarks
   * The output format.
   * 
   * @example
   * org.apache.hadoop.hive.ql.io.parquet.MapredParquetOutputFormat
   */
  outputFormat?: string;
  /**
   * @remarks
   * The owner of the table.
   * 
   * @example
   * Hive
   */
  owner?: string;
  /**
   * @remarks
   * The number of partitions.
   * 
   * @example
   * 100
   */
  partitions?: number;
  /**
   * @remarks
   * The number of partitions that are being migrated.
   * 
   * @example
   * 20
   */
  partitionsDoing?: number;
  /**
   * @remarks
   * The number of partitions that are migrated.
   * 
   * @example
   * 60
   */
  partitionsDone?: number;
  /**
   * @remarks
   * The number of partitions that failed to be migrated.
   * 
   * @example
   * 40
   */
  partitionsFailed?: number;
  /**
   * @remarks
   * The table schema.
   */
  schema?: ListMmsTablesResponseBodyDataObjectListSchema;
  /**
   * @remarks
   * The serializer/deserializer (SerDe).
   * 
   * @example
   * org.apache.hadoop.hive.ql.io.parquet.serde.ParquetHiveSerDe
   */
  serde?: string;
  /**
   * @remarks
   * The data size in bytes.
   * 
   * @example
   * 2985028
   */
  size?: number;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * @example
   * 2000028
   */
  sourceId?: number;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * demo
   */
  sourceName?: string;
  /**
   * @remarks
   * The migration status.
   * 
   * @example
   * DONE
   */
  status?: string;
  /**
   * @remarks
   * The table type.
   * 
   * @example
   * MANAGED_TABLE
   */
  type?: string;
  /**
   * @remarks
   * Indicates whether the metadata is updated.
   * 
   * @example
   * true
   */
  updated?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbId: 'dbId',
      dbName: 'dbName',
      dstName: 'dstName',
      dstProjectName: 'dstProjectName',
      dstSchemaName: 'dstSchemaName',
      extra: 'extra',
      hasPartitions: 'hasPartitions',
      id: 'id',
      inputFormat: 'inputFormat',
      lastDdlTime: 'lastDdlTime',
      location: 'location',
      name: 'name',
      numRows: 'numRows',
      outputFormat: 'outputFormat',
      owner: 'owner',
      partitions: 'partitions',
      partitionsDoing: 'partitionsDoing',
      partitionsDone: 'partitionsDone',
      partitionsFailed: 'partitionsFailed',
      schema: 'schema',
      serde: 'serde',
      size: 'size',
      sourceId: 'sourceId',
      sourceName: 'sourceName',
      status: 'status',
      type: 'type',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      dbName: 'string',
      dstName: 'string',
      dstProjectName: 'string',
      dstSchemaName: 'string',
      extra: 'string',
      hasPartitions: 'boolean',
      id: 'number',
      inputFormat: 'string',
      lastDdlTime: 'string',
      location: 'string',
      name: 'string',
      numRows: 'number',
      outputFormat: 'string',
      owner: 'string',
      partitions: 'number',
      partitionsDoing: 'number',
      partitionsDone: 'number',
      partitionsFailed: 'number',
      schema: ListMmsTablesResponseBodyDataObjectListSchema,
      serde: 'string',
      size: 'number',
      sourceId: 'number',
      sourceName: 'string',
      status: 'string',
      type: 'string',
      updated: 'boolean',
    };
  }

  validate() {
    if(this.schema && typeof (this.schema as any).validate === 'function') {
      (this.schema as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsTablesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of tables.
   */
  objectList?: ListMmsTablesResponseBodyDataObjectList[];
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
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      objectList: 'objectList',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectList: { 'type': 'array', 'itemType': ListMmsTablesResponseBodyDataObjectList },
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.objectList)) {
      $dara.Model.validateArray(this.objectList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsTablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListMmsTablesResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E7FB14F1-4ACD-5C73-A755-B302D70AB9AD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListMmsTablesResponseBodyData,
      requestId: 'string',
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

