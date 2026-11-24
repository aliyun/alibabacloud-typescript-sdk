// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApsSlsADBJobRequestColumns extends $dara.Model {
  /**
   * @remarks
   * The mapped name.
   * 
   * @example
   * map_name
   */
  mapName?: string;
  /**
   * @remarks
   * The mapping type.
   * 
   * @example
   * bigint
   */
  mapType?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * test_name
   */
  name?: string;
  /**
   * @remarks
   * The data type of the column.
   * 
   * @example
   * bigint
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      mapName: 'MapName',
      mapType: 'MapType',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mapName: 'string',
      mapType: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApsSlsADBJobRequest extends $dara.Model {
  /**
   * @remarks
   * The column information.
   * 
   * @example
   * [{"MapName":"map_name","MapType":"bigint","Name":"test_name","Type":"bigint"}]
   */
  columns?: ModifyApsSlsADBJobRequestColumns[];
  /**
   * @remarks
   * The ID of the cluster.
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
   * Specifies whether exactly-once processing is enabled.
   * 
   * @example
   * true
   */
  exactlyOnce?: string;
  /**
   * @remarks
   * The password.
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
   * The starting offset.
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
   * {"Transform":false}
   */
  unixTimestampConvert?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * user-name
   */
  userName?: string;
  /**
   * @remarks
   * The ID of the data link task.
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
      columns: 'Columns',
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
      columns: { 'type': 'array', 'itemType': ModifyApsSlsADBJobRequestColumns },
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
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

