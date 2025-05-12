// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeDBInstanceEngineVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database engine version of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 2.4
   */
  engineVersion?: string;
  parallelOperation?: boolean;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The update mode. If you do not specify this parameter, the system immediately updates the database engine version. If you set this parameter to 1, the system updates the database engine version during the maintenance window.
   * 
   * @example
   * 1
   */
  switchTimeMode?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      engineVersion: 'EngineVersion',
      parallelOperation: 'ParallelOperation',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
      switchTimeMode: 'SwitchTimeMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      engineVersion: 'string',
      parallelOperation: 'boolean',
      regionId: 'string',
      resourceOwnerId: 'number',
      switchTimeMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

