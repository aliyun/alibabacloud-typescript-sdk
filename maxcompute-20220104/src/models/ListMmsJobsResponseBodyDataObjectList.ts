// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMmsJobsResponseBodyDataObjectListConfig } from "./ListMmsJobsResponseBodyDataObjectListConfig";


export class ListMmsJobsResponseBodyDataObjectList extends $dara.Model {
  config?: ListMmsJobsResponseBodyDataObjectListConfig;
  /**
   * @example
   * 2024-12-17 15:44:17
   */
  createTime?: string;
  /**
   * @example
   * 196
   */
  dbId?: number;
  /**
   * @example
   * mms_test
   */
  dstDbName?: string;
  /**
   * @example
   * test_table_1
   */
  dstSchemaName?: string;
  eta?: string;
  /**
   * @example
   * 18
   */
  id?: number;
  /**
   * @example
   * migrate_db_1
   */
  name?: string;
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
   * test_db_1
   */
  srcDbName?: string;
  /**
   * @example
   * test_table_1
   */
  srcSchemaName?: string;
  /**
   * @example
   * DONE
   */
  status?: string;
  /**
   * @example
   * false
   */
  stopped?: boolean;
  /**
   * @example
   * 10
   */
  taskDone?: number;
  /**
   * @example
   * 10
   */
  taskNum?: number;
  /**
   * @example
   * Tables
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      createTime: 'createTime',
      dbId: 'dbId',
      dstDbName: 'dstDbName',
      dstSchemaName: 'dstSchemaName',
      eta: 'eta',
      id: 'id',
      name: 'name',
      sourceId: 'sourceId',
      sourceName: 'sourceName',
      srcDbName: 'srcDbName',
      srcSchemaName: 'srcSchemaName',
      status: 'status',
      stopped: 'stopped',
      taskDone: 'taskDone',
      taskNum: 'taskNum',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: ListMmsJobsResponseBodyDataObjectListConfig,
      createTime: 'string',
      dbId: 'number',
      dstDbName: 'string',
      dstSchemaName: 'string',
      eta: 'string',
      id: 'number',
      name: 'string',
      sourceId: 'number',
      sourceName: 'string',
      srcDbName: 'string',
      srcSchemaName: 'string',
      status: 'string',
      stopped: 'boolean',
      taskDone: 'number',
      taskNum: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

