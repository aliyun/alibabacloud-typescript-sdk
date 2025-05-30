// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMmsJobResponseBodyDataConfig } from "./GetMmsJobResponseBodyDataConfig";


export class GetMmsJobResponseBodyData extends $dara.Model {
  config?: GetMmsJobResponseBodyDataConfig;
  /**
   * @example
   * 2024-12-17 15:44:17
   */
  createTime?: string;
  /**
   * @example
   * 23
   */
  dbId?: number;
  /**
   * @example
   * mms_target
   */
  dstDbName?: string;
  /**
   * @example
   * default
   */
  dstSchemaName?: string;
  eta?: string;
  /**
   * @example
   * 10
   */
  id?: number;
  /**
   * @example
   * migrate_db_1
   */
  name?: string;
  /**
   * @example
   * 2
   */
  sourceId?: number;
  /**
   * @example
   * demo
   */
  sourceName?: string;
  /**
   * @example
   * mms_test
   */
  srcDbName?: string;
  /**
   * @example
   * default
   */
  srcSchemaName?: string;
  /**
   * @example
   * DOING
   */
  status?: string;
  /**
   * @example
   * false
   */
  stopped?: boolean;
  /**
   * @example
   * 100
   */
  taskDone?: number;
  /**
   * @example
   * 100
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
      config: GetMmsJobResponseBodyDataConfig,
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

