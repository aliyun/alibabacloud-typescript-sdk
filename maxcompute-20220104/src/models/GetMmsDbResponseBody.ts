// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMmsDbResponseBodyData extends $dara.Model {
  /**
   * @example
   * for mms_test
   */
  description?: string;
  /**
   * @example
   * default
   */
  dstName?: string;
  /**
   * @example
   * mma_test
   */
  dstProjectName?: string;
  /**
   * @example
   * {}
   */
  extra?: string;
  /**
   * @example
   * 63
   */
  id?: number;
  /**
   * @remarks
   * last ddl time
   * 
   * @example
   * 2024-12-17 15:44:42
   */
  lastDdlTime?: string;
  /**
   * @example
   * hdfs://master-1-1.c-6fc187819ed6bae0.cn-shanghai.emr.aliyuncs.com:9000/user/hive/warehouse
   */
  location?: string;
  /**
   * @example
   * mms_test
   */
  name?: string;
  /**
   * @example
   * 2323
   */
  numRows?: number;
  /**
   * @example
   * System user
   */
  owner?: string;
  /**
   * @example
   * 2000
   */
  partitions?: number;
  /**
   * @example
   * 200
   */
  partitionsDoing?: number;
  /**
   * @example
   * 1400
   */
  partitionsDone?: number;
  /**
   * @example
   * 400
   */
  partitionsFailed?: number;
  /**
   * @example
   * 323232332
   */
  size?: number;
  /**
   * @example
   * 2000017
   */
  sourceId?: number;
  /**
   * @example
   * demo
   */
  sourceName?: string;
  /**
   * @example
   * DOING
   */
  status?: string;
  /**
   * @example
   * 200
   */
  tables?: number;
  /**
   * @example
   * 20
   */
  tablesDoing?: number;
  /**
   * @example
   * 120
   */
  tablesDone?: number;
  /**
   * @example
   * 20
   */
  tablesFailed?: number;
  /**
   * @example
   * 20
   */
  tablesPartDone?: number;
  /**
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
  data?: GetMmsDbResponseBodyData;
  /**
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

