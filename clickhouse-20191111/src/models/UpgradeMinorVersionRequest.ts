// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeMinorVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to upgrade the minor engine version immediately. Valid values:
   * 
   * - **true**: The minor engine version is upgraded immediately.
   * 
   * - **false**: The minor engine version is upgraded at a specified time or within the maintenance window.
   * 
   * > The **UpgradeTime** parameter is required if you want to upgrade the minor engine version at a specified time.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  upgradeImmediately?: boolean;
  /**
   * @remarks
   * The time to perform the upgrade. Specify the time in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC.
   * 
   * > If you do not specify this parameter, the ApsaraDB for ClickHouse cluster is upgraded within the maintenance window.
   * 
   * @example
   * 2022-08-07T16:38Z
   */
  upgradeTime?: string;
  /**
   * @remarks
   * The minor engine version to which you want to upgrade.
   * 
   * > If you do not specify this parameter, the cluster is upgraded to the latest minor engine version.
   * 
   * @example
   * 1.37.0
   */
  upgradeVersion?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      upgradeImmediately: 'UpgradeImmediately',
      upgradeTime: 'UpgradeTime',
      upgradeVersion: 'UpgradeVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      upgradeImmediately: 'boolean',
      upgradeTime: 'string',
      upgradeVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

