// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeShardTaskInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * jjjjjj_ppppp
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds*********
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the table that you want to convert or shard.
   * 
   * This parameter is required.
   * 
   * @example
   * a1
   */
  sourceTableName?: string;
  /**
   * @remarks
   * The name of the table that is generated after you convert or shard the table.
   * 
   * This parameter is required.
   * 
   * @example
   * a2
   */
  targetTableName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
      sourceTableName: 'SourceTableName',
      targetTableName: 'TargetTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      regionId: 'string',
      sourceTableName: 'string',
      targetTableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

