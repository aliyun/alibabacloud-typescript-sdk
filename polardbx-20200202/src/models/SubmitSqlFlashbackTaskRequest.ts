// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSqlFlashbackTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2019-09-10 23:23:23
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pxc-*********
   */
  polardbxInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  recallRestoreType?: string;
  /**
   * @example
   * 0
   * 
   * **if can be null:**
   * true
   */
  recallType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 1111
   * 
   * **if can be null:**
   * true
   */
  sqlPk?: string;
  /**
   * @example
   * INSERT,UPDATE
   * 
   * **if can be null:**
   * true
   */
  sqlType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2019-09-10 20:23:23
   */
  startTime?: string;
  /**
   * @example
   * test
   * 
   * **if can be null:**
   * true
   */
  tableName?: string;
  /**
   * @example
   * ase*****
   * 
   * **if can be null:**
   * true
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      endTime: 'EndTime',
      polardbxInstanceId: 'PolardbxInstanceId',
      recallRestoreType: 'RecallRestoreType',
      recallType: 'RecallType',
      regionId: 'RegionId',
      sqlPk: 'SqlPk',
      sqlType: 'SqlType',
      startTime: 'StartTime',
      tableName: 'TableName',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      endTime: 'string',
      polardbxInstanceId: 'string',
      recallRestoreType: 'string',
      recallType: 'string',
      regionId: 'string',
      sqlPk: 'string',
      sqlType: 'string',
      startTime: 'string',
      tableName: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

