// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetupTableRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable full table scan.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  allowFullTableScan?: boolean;
  /**
   * @remarks
   * The name of the database in which the table resides.
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
   * The ID of the region where the streaming domain resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  tableName?: string[];
  static names(): { [key: string]: string } {
    return {
      allowFullTableScan: 'AllowFullTableScan',
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowFullTableScan: 'boolean',
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

