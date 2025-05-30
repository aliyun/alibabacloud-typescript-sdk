// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMmsTableResponseBodyDataSchema } from "./GetMmsTableResponseBodyDataSchema";


export class GetMmsTableResponseBodyData extends $dara.Model {
  /**
   * @example
   * 3
   */
  dbId?: number;
  /**
   * @example
   * mms_test
   */
  dbName?: string;
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
   * 22
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
   * 233232
   */
  numRows?: number;
  /**
   * @remarks
   * outputFormat
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
   * 80
   */
  partitionsDone?: number;
  /**
   * @example
   * 0
   */
  partitionsFailed?: number;
  schema?: GetMmsTableResponseBodyDataSchema;
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
   * 23232
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
   * MANAGED_TABLED
   */
  type?: string;
  /**
   * @example
   * false
   */
  updated?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbId: 'dbId',
      dbName: 'dbName',
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
      schema: GetMmsTableResponseBodyDataSchema,
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

