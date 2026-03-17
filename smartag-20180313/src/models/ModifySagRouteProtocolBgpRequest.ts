// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySagRouteProtocolBgpRequest extends $dara.Model {
  /**
   * @remarks
   * The hold time.
   * 
   * Valid values: **3 to 65535**. Unit: seconds.
   * 
   * >  When the SAG device establishes a peering connection with a peer device, the hold time of both devices must be the same. If the SAG device does not receive a keepalive or update message from the peer device within the hold time, the connection between the BGP peers is closed.
   * 
   * This parameter is required.
   * 
   * @example
   * 9
   */
  holdTime?: number;
  /**
   * @remarks
   * The time interval at which keep-alive packets are sent.
   * 
   * Valid values: **0 to 65535**. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  keepAlive?: number;
  /**
   * @remarks
   * The autonomous system number (ASN) to which the SAG device belongs.
   * 
   * Valid values: **1 to 4294967295**.
   * 
   * This parameter is required.
   * 
   * @example
   * 65535
   */
  localAs?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the SAG instance is deployed.
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
   * The ID of the BGP router.
   * 
   * Set the value to an IPv4 address.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.XX.XX.1
   */
  routerId?: string;
  /**
   * @remarks
   * The ID of the SAG instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-whfn****
   */
  smartAGId?: string;
  /**
   * @remarks
   * The serial number of the SAG device.
   * 
   * This parameter is required.
   * 
   * @example
   * sag32a30****
   */
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      holdTime: 'HoldTime',
      keepAlive: 'KeepAlive',
      localAs: 'LocalAs',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routerId: 'RouterId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      holdTime: 'number',
      keepAlive: 'number',
      localAs: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routerId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

