// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmsDbsResponseBodyDataObjectList extends $dara.Model {
  /**
   * @example
   * 2024-12-17 15:44:42
   */
  createTime?: string;
  /**
   * @example
   * false
   */
  deleted?: boolean;
  /**
   * @example
   * for mms test
   */
  description?: string;
  /**
   * @example
   * {}
   */
  extra?: string;
  /**
   * @example
   * 1530
   */
  id?: number;
  /**
   * @remarks
   * Last DDL Time
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
   * 23232
   */
  numRows?: number;
  /**
   * @example
   * xxx@yy.com
   */
  owner?: string;
  /**
   * @example
   * 1000
   */
  partitions?: number;
  /**
   * @example
   * 400
   */
  partitionsDoing?: number;
  /**
   * @example
   * 200
   */
  partitionsDone?: number;
  /**
   * @example
   * 200
   */
  partitionsFailed?: number;
  /**
   * @example
   * 2342342
   */
  size?: number;
  /**
   * @example
   * 2000015
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
   * 100
   */
  tables?: number;
  /**
   * @example
   * 20
   */
  tablesDoing?: number;
  /**
   * @example
   * 20
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
   * 2024-12-17 15:44:42
   */
  updateTime?: string;
  /**
   * @example
   * true
   */
  updated?: boolean;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      deleted: 'deleted',
      description: 'description',
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
      updateTime: 'updateTime',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      deleted: 'boolean',
      description: 'string',
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
      updateTime: 'string',
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

