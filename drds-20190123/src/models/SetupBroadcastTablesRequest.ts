// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetupBroadcastTablesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to activate a broadcast table for the database.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * The name of the database for which you want to configure a broadcast table.
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
   * drds************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The ID of the region in which the PolarDB-X 1.0 instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  tableName?: string[];
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      dbName: 'string',
      drdsInstanceId: 'string',
      regionId: 'string',
      tableName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tableName)) {
      $dara.Model.validateArray(this.tableName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

