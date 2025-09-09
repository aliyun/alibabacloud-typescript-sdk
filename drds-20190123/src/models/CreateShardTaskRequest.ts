// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateShardTaskRequest extends $dara.Model {
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
   * The ID of the DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The ID of the region where the resource group resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the source table.
   * 
   * This parameter is required.
   * 
   * @example
   * test_tb1
   */
  sourceTableName?: string;
  /**
   * @remarks
   * The name of the destination table.
   * 
   * This parameter is required.
   * 
   * @example
   * test_tb2
   */
  targetTableName?: string;
  /**
   * @remarks
   * The type of the task. Valid values:`  SHARD_TO_SINGLE `,`  SINGLE_TO_SHARD `,`  SHARD_TO_SHARD `.
   * 
   * This parameter is required.
   * 
   * @example
   * SINGLE_TO_SHARD
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
      sourceTableName: 'SourceTableName',
      targetTableName: 'TargetTableName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      regionId: 'string',
      sourceTableName: 'string',
      targetTableName: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

