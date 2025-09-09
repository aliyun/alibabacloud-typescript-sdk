// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateShardTaskRequest extends $dara.Model {
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
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds23ds****
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The ID of the region where the PolarDB-X 1.0 instance is created.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the table or table shard on which you want to perform the task.
   * 
   * This parameter is required.
   * 
   * @example
   * buyer
   */
  sourceTableName?: string;
  /**
   * @remarks
   * The name of the table or table shard on which you perform the task.
   * 
   * This parameter is required.
   * 
   * @example
   * buyer_new
   */
  targetTableName?: string;
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * *   **SINGLE_TO_SHARD**: converts a single table to a table shard.
   * *   **SHARD_TO_SINGLE**: converts a table shard to a single table.
   * *   **SHARD_TO_SHARD**: converts a table shard to another table shard.
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

