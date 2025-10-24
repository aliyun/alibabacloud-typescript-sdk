// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmsTablesResponseBodyDataObjectListSchemaColumns extends $dara.Model {
  /**
   * @example
   * user id
   */
  comment?: string;
  /**
   * @example
   * ""
   */
  defaultValue?: string;
  /**
   * @example
   * user_id
   */
  name?: string;
  /**
   * @example
   * false
   */
  nullable?: boolean;
  /**
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
  comment?: string;
  /**
   * @example
   * abc
   */
  defaultValue?: string;
  /**
   * @example
   * p1
   */
  name?: string;
  /**
   * @example
   * false
   */
  nullable?: boolean;
  /**
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
  columns?: ListMmsTablesResponseBodyDataObjectListSchemaColumns[];
  /**
   * @example
   * for mms test
   */
  comment?: string;
  /**
   * @example
   * test
   */
  name?: string;
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
   * @example
   * 196
   */
  dbId?: number;
  /**
   * @example
   * demo
   */
  dbName?: string;
  /**
   * @example
   * test
   */
  dstName?: string;
  /**
   * @example
   * mms_test
   */
  dstProjectName?: string;
  /**
   * @example
   * default
   */
  dstSchemaName?: string;
  /**
   * @example
   * {"mapkey.delim":":","collection.delim":",","serialization.format":"|","field.delim":"|"}
   */
  extra?: string;
  /**
   * @example
   * true
   */
  hasPartitions?: boolean;
  /**
   * @remarks
   * table ID
   * 
   * @example
   * 1003476
   */
  id?: number;
  /**
   * @remarks
   * inputFormat
   * 
   * @example
   * org.apache.hadoop.hive.ql.io.parquet.MapredParquetInputFormat
   */
  inputFormat?: string;
  /**
   * @remarks
   * lastDdlTime
   * 
   * @example
   * 2024-12-17 15:44:42
   */
  lastDdlTime?: string;
  /**
   * @example
   * | hdfs://master-1-1.c-c127cd184bb029ea.cn-zhangjiakou.emr.aliyuncs.com:9000/user/hive/warehouse/demo
   */
  location?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * 232323
   */
  numRows?: number;
  /**
   * @remarks
   * outFormat
   * 
   * @example
   * org.apache.hadoop.hive.ql.io.parquet.MapredParquetOutputFormat
   */
  outputFormat?: string;
  /**
   * @example
   * Hive
   */
  owner?: string;
  /**
   * @example
   * 100
   */
  partitions?: number;
  /**
   * @example
   * 20
   */
  partitionsDoing?: number;
  /**
   * @example
   * 60
   */
  partitionsDone?: number;
  /**
   * @example
   * 40
   */
  partitionsFailed?: number;
  schema?: ListMmsTablesResponseBodyDataObjectListSchema;
  /**
   * @remarks
   * serde
   * 
   * @example
   * org.apache.hadoop.hive.ql.io.parquet.serde.ParquetHiveSerDe
   */
  serde?: string;
  /**
   * @example
   * 2985028
   */
  size?: number;
  /**
   * @example
   * 2000028
   */
  sourceId?: number;
  /**
   * @example
   * demo
   */
  sourceName?: string;
  /**
   * @example
   * DONE
   */
  status?: string;
  /**
   * @example
   * MANAGED_TABLE
   */
  type?: string;
  /**
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
  objectList?: ListMmsTablesResponseBodyDataObjectList[];
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
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
  data?: ListMmsTablesResponseBodyData;
  /**
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

