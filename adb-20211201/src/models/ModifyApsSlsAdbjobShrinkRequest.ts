// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApsSlsADBJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The information about columns.
   * 
   * @example
   * -
   */
  columnsShrink?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-*******
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * dbName
   */
  dbName?: string;
  /**
   * @remarks
   * The dirty data processing mode.
   * 
   * @example
   * STOP
   */
  dirtyDataProcessPattern?: string;
  /**
   * @remarks
   * Specifies whether to enable the consistency check.
   * 
   * @example
   * true
   */
  exactlyOnce?: string;
  /**
   * @remarks
   * The password of the database account.
   * 
   * @example
   * test_123
   */
  password?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The start offset.
   * 
   * @example
   * end_cursor
   */
  startingOffsets?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test
   */
  tableName?: string;
  /**
   * @remarks
   * The timestamp conversion.
   * 
   * @example
   * -
   */
  unixTimestampConvert?: string;
  /**
   * @remarks
   * The name of the database account.
   * 
   * @example
   * user-name
   */
  userName?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * aps-******
   */
  workloadId?: string;
  /**
   * @remarks
   * The name of the workload.
   * 
   * @example
   * test-name
   */
  workloadName?: string;
  static names(): { [key: string]: string } {
    return {
      columnsShrink: 'Columns',
      DBClusterId: 'DBClusterId',
      dbName: 'DbName',
      dirtyDataProcessPattern: 'DirtyDataProcessPattern',
      exactlyOnce: 'ExactlyOnce',
      password: 'Password',
      regionId: 'RegionId',
      startingOffsets: 'StartingOffsets',
      tableName: 'TableName',
      unixTimestampConvert: 'UnixTimestampConvert',
      userName: 'UserName',
      workloadId: 'WorkloadId',
      workloadName: 'WorkloadName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnsShrink: 'string',
      DBClusterId: 'string',
      dbName: 'string',
      dirtyDataProcessPattern: 'string',
      exactlyOnce: 'string',
      password: 'string',
      regionId: 'string',
      startingOffsets: 'string',
      tableName: 'string',
      unixTimestampConvert: 'string',
      userName: 'string',
      workloadId: 'string',
      workloadName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

