// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySmartAccessGatewayUpBandwidthRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the SAG instance.
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
   * sag-jsy******************
   */
  smartAGId?: string;
  /**
   * @remarks
   * The maximum upstream bandwidth of 4G network connections established by the SAG device. Unit: Mbit/s.
   * 
   * @example
   * 3
   */
  upBandwidth4G?: number;
  /**
   * @remarks
   * The maximum upstream bandwidth of network connections established on the WAN port of the SAG device. Unit: Mbit/s.
   * 
   * @example
   * 2
   */
  upBandwidthWan?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      upBandwidth4G: 'UpBandwidth4G',
      upBandwidthWan: 'UpBandwidthWan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      upBandwidth4G: 'number',
      upBandwidthWan: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

