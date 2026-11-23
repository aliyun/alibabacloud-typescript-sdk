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
   * - **true**: Upgrades the minor engine version immediately.
   * 
   * - **false**: Upgrades the minor engine version at a specified time or during the maintenance window.
   * 
   * > If you specify a time to upgrade the minor engine version, **UpgradeTime** is required.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  upgradeImmediately?: boolean;
  /**
   * @remarks
   * The specified upgrade time. Format: yyyy-MM-ddTHH:mmZ (UTC time).
   * > If this parameter is left empty, the ApsaraDB for ClickHouse cluster performs a minor kernel version upgrade during the maintenance window.
   * 
   * @example
   * 2022-08-07T16:38Z
   */
  upgradeTime?: string;
  /**
   * @remarks
   * The target minor engine version.
   * > By default, this parameter is left empty, and the minor engine version is upgraded to the latest version.
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

