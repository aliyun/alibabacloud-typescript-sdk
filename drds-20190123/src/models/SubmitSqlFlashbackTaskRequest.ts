// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSqlFlashbackTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the DRDS database.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of a DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds*********
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The time when the SQL flashback task ends.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-09-10 23:23:23
   */
  endTime?: string;
  /**
   * @remarks
   * The restoration type. Valid values:
   * 
   * *   1: Image restoration
   * *   0: reverse recovery
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  recallRestoreType?: number;
  /**
   * @remarks
   * Exact match or fuzzy match. Valid values:
   * 
   * *   0: the exact match.
   * *   1: the fuzzy match.
   * 
   * @example
   * 0
   */
  recallType?: number;
  /**
   * @remarks
   * The primary key of flashback SQL.
   * 
   * @example
   * 11111
   */
  sqlPk?: string;
  /**
   * @remarks
   * The type of the SQL statement. Valid values: INSERT, UPDATE, and DELETE. Separate multiple types with commas (,).
   * 
   * @example
   * INSERT,UPDATE
   */
  sqlType?: string;
  /**
   * @remarks
   * The start time of the flashback SQL statement.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-09-10 20:23:23
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the table where the flashback SQL operation was performed.
   * 
   * @example
   * test
   */
  tableName?: string;
  /**
   * @remarks
   * The Trace ID of the flashback SQL.
   * 
   * @example
   * ase*****
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      endTime: 'EndTime',
      recallRestoreType: 'RecallRestoreType',
      recallType: 'RecallType',
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
      drdsInstanceId: 'string',
      endTime: 'string',
      recallRestoreType: 'number',
      recallType: 'number',
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

