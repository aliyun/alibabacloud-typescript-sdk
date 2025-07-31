// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeDBInstanceEngineVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database version to which you want to upgrade. Valid values: **3.4**, **4.0**, and **4.2**.
   * 
   * >  This database version must be later than the current database version of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 4.0
   */
  engineVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The time when to perform the upgrade. Valid values:
   * 
   * *   **0**: immediately performs the upgrade.
   * *   **1**: performs the upgrade during the maintenance window.
   * 
   * @example
   * 1
   */
  switchMode?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      engineVersion: 'EngineVersion',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      switchMode: 'SwitchMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      engineVersion: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      switchMode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

