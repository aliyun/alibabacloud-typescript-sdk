// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMmsDbResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The database description.
   * 
   * @example
   * for mms_test
   */
  description?: string;
  /**
   * @remarks
   * The MaxCompute schema corresponding to the source database. If the destination MaxCompute project does not enable the schema layer, this value is null. By default, this value matches the source database name.
   * 
   * @example
   * default
   */
  dstName?: string;
  /**
   * @remarks
   * The name of the destination MaxCompute project.
   * 
   * @example
   * mma_test
   */
  dstProjectName?: string;
  /**
   * @remarks
   * Other information stored in JSON format.
   * 
   * @example
   * {}
   */
  extra?: string;
  /**
   * @remarks
   * The database ID.
   * 
   * @example
   * 63
   */
  id?: number;
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
   * The storage location of the database.
   * 
   * @example
   * hdfs://master-1-1.c-6fc187819ed6bae0.cn-shanghai.emr.aliyuncs.com:9000/user/hive/warehouse
   */
  location?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * mms_test
   */
  name?: string;
  /**
   * @remarks
   * The number of rows in the database.
   * 
   * @example
   * 2323
   */
  numRows?: number;
  /**
   * @remarks
   * The database owner.
   * 
   * @example
   * System user
   */
  owner?: string;
  /**
   * @remarks
   * The number of partitions.
   * 
   * @example
   * 2000
   */
  partitions?: number;
  /**
   * @remarks
   * The partitions that are being migrated.
   * 
   * @example
   * 200
   */
  partitionsDoing?: number;
  /**
   * @remarks
   * The number of partitions whose migration is complete.
   * 
   * @example
   * 1400
   */
  partitionsDone?: number;
  /**
   * @remarks
   * The partitions that failed during migration.
   * 
   * @example
   * 400
   */
  partitionsFailed?: number;
  /**
   * @remarks
   * The size of the database in bytes.
   * 
   * @example
   * 323232332
   */
  size?: number;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * @example
   * 2000017
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
   * The migration status. Valid values: INIT, DOING, FAILED, DONE, and PART_DONE.
   * 
   * @example
   * DOING
   */
  status?: string;
  /**
   * @remarks
   * The number of tables.
   * 
   * @example
   * 200
   */
  tables?: number;
  /**
   * @remarks
   * The tables that are being migrated.
   * 
   * @example
   * 20
   */
  tablesDoing?: number;
  /**
   * @remarks
   * Tables for which migration has completed
   * 
   * @example
   * 120
   */
  tablesDone?: number;
  /**
   * @remarks
   * The tables that failed to migrate.
   * 
   * @example
   * 20
   */
  tablesFailed?: number;
  /**
   * @remarks
   * The tables whose migration is partially complete.
   * 
   * @example
   * 20
   */
  tablesPartDone?: number;
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
      description: 'description',
      dstName: 'dstName',
      dstProjectName: 'dstProjectName',
      extra: 'extra',
      id: 'id',
      lastDdlTime: 'lastDdlTime',
      location: 'location',
      name: 'name',
      numRows: 'numRows',
      owner: 'owner',
      partitions: 'partitions',
      partitionsDoing: 'partitionsDoing',
      partitionsDone: 'partitionsDone',
      partitionsFailed: 'partitionsFailed',
      size: 'size',
      sourceId: 'sourceId',
      sourceName: 'sourceName',
      status: 'status',
      tables: 'tables',
      tablesDoing: 'tablesDoing',
      tablesDone: 'tablesDone',
      tablesFailed: 'tablesFailed',
      tablesPartDone: 'tablesPartDone',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      dstName: 'string',
      dstProjectName: 'string',
      extra: 'string',
      id: 'number',
      lastDdlTime: 'string',
      location: 'string',
      name: 'string',
      numRows: 'number',
      owner: 'string',
      partitions: 'number',
      partitionsDoing: 'number',
      partitionsDone: 'number',
      partitionsFailed: 'number',
      size: 'number',
      sourceId: 'number',
      sourceName: 'string',
      status: 'string',
      tables: 'number',
      tablesDoing: 'number',
      tablesDone: 'number',
      tablesFailed: 'number',
      tablesPartDone: 'number',
      updated: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMmsDbResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: GetMmsDbResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90D64EB6-2962-5B1C-A039-BC41C8176C7F
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
      data: GetMmsDbResponseBodyData,
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

