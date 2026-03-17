// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeSmartAccessGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to automatically pay the bill for a subscription instance.
   * 
   * Valid values: **true | false**. Default value: false
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The bandwidth of the SAG instance.
   * 
   * *   Value range for an SAG-100WM device: 2 to 50. Unit: Mbit/s
   * *   Value range for an SAG-1000 device: 10 to 500. Unit: Mbit/s
   * 
   * @example
   * 3
   */
  bandWidthSpec?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region to which the SAG instance belongs.
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
   * The ID of the SAG instance.
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

