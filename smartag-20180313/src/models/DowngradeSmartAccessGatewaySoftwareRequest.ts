// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DowngradeSmartAccessGatewaySoftwareRequest extends $dara.Model {
  /**
   * @remarks
   * Specify whether the bill belongs to a subscription instance that has auto renewal enabled. Valid values:
   * 
   * *   **false** (default): no
   * *   **true**: yes
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The amount of free data transfer allocated to each client account per month, which is 5 GB.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  dataPlan?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the SAG app instance is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the SAG app instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-n2uym2h45lnd31****
   */
  smartAGId?: string;
  /**
   * @remarks
   * The quota of client accounts that can be connected to an SAG app instance. Typically, you need to create an account for each user that needs to log on to the SAG app.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  userCount?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      dataPlan: 'DataPlan',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      userCount: 'UserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      dataPlan: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      userCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

