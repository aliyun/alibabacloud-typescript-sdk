// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeDBClusterVersionZonalRequest extends $dara.Model {
  /**
   * @example
   * 6000170000591aed949d0f54a343f1a4233c1e7d1c5c******
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pc-a************
   */
  DBClusterId?: string;
  /**
   * @example
   * false
   */
  fromTimeService?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * 2021-01-14T09:30:00Z
   */
  plannedEndTime?: string;
  /**
   * @example
   * 2022-04-28T14:00:00Z
   */
  plannedStartTime?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 20230707
   */
  targetDBRevisionVersionCode?: string;
  /**
   * @example
   * 20240702
   */
  targetProxyRevisionVersionCode?: string;
  /**
   * @example
   * INNOVATE
   */
  upgradeLabel?: string;
  /**
   * @example
   * HOT
   */
  upgradePolicy?: string;
  /**
   * @example
   * PROXY
   */
  upgradeType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBClusterId: 'DBClusterId',
      fromTimeService: 'FromTimeService',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      plannedEndTime: 'PlannedEndTime',
      plannedStartTime: 'PlannedStartTime',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      targetDBRevisionVersionCode: 'TargetDBRevisionVersionCode',
      targetProxyRevisionVersionCode: 'TargetProxyRevisionVersionCode',
      upgradeLabel: 'UpgradeLabel',
      upgradePolicy: 'UpgradePolicy',
      upgradeType: 'UpgradeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBClusterId: 'string',
      fromTimeService: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      plannedEndTime: 'string',
      plannedStartTime: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      targetDBRevisionVersionCode: 'string',
      targetProxyRevisionVersionCode: 'string',
      upgradeLabel: 'string',
      upgradePolicy: 'string',
      upgradeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

