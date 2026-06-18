// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSqlFlashbackTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The end time for executing the flashback SQL.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-09-10 23:23:23
   */
  endTime?: string;
  /**
   * @remarks
   * The instance ID of the PolarDB-X instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-*********
   */
  polardbxInstanceId?: string;
  /**
   * @remarks
   * The restoration type. Valid values:
   * 
   * - **1**: Image-based restoration.
   * - **0**: Reverse restoration.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  recallRestoreType?: string;
  /**
   * @remarks
   * The matching mode. Valid values:
   * 
   * - **0**: exact match.
   * - **1**: fuzzy match.
   * 
   * @example
   * 0
   * 
   * **if can be null:**
   * true
   */
  recallType?: string;
  /**
   * @remarks
   * The region where the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The primary key of the flashback SQL.
   * 
   * @example
   * 1111
   * 
   * **if can be null:**
   * true
   */
  sqlPk?: string;
  /**
   * @remarks
   * The type of SQL. Valid values: INSERT, UPDATE, and DELETE. Separate multiple types with commas (,).
   * 
   * @example
   * INSERT,UPDATE
   * 
   * **if can be null:**
   * true
   */
  sqlType?: string;
  /**
   * @remarks
   * The start time for executing the flashback SQL.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-09-10 20:23:23
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the table on which the flashback SQL operation is performed.
   * 
   * @example
   * test
   * 
   * **if can be null:**
   * true
   */
  tableName?: string;
  /**
   * @remarks
   * The trace ID of the flashback SQL.
   * 
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

