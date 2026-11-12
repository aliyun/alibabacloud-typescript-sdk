// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeSmartAccessGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether automatic payment is enabled for the bills of upfront instances. Valid values:
   * 
   * - **true**: Yes.
   * 
   * - **false**: No.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The bandwidth of the Smart Access Gateway instance. 
   * 
   * - If the device specification is sag-100wm, the value ranges from 2 to 50 Mbit/s.
   *           
   * - If the device specification is sag-1000, the value ranges from 10 to 500 Mbit/s.
   * 
   * @example
   * 3
   */
  bandWidthSpec?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Smart Access Gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The revert epoch for a temporary upgrade. This parameter specifies the expiration epoch of the temporary bandwidth upgrade. By default, if this parameter is left empty, the upgrade remains effective until the end-of-life (EOL) of the instance. If a specific epoch is specified, the bandwidth automatically reverts to the pre-upgrade configuration at the specified epoch.
   * 
   * @example
   * 2026-11-10 18
   */
  restoreTime?: string;
  /**
   * @remarks
   * The Smart Access Gateway instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-d3m51apgw4po******
   */
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      bandWidthSpec: 'BandWidthSpec',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      restoreTime: 'RestoreTime',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      bandWidthSpec: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      restoreTime: 'string',
      smartAGId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

