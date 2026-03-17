// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySagStaticRouteRequest extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.XX.XX.0/24
   */
  destinationCidr?: string;
  /**
   * @remarks
   * The IP address of the next hop.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.XX.XX.1
   */
  nextHop?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The name of the port.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  portName?: string;
  /**
   * @remarks
   * The ID of the region where the Smart Access Gateway (SAG) instance is deployed.
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
   * The serial number of the SAG device associated with the SAG instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag32a30****
   */
  smartAGSn?: string;
  /**
   * @remarks
   * The VLAN ID.
   * 
   * Valid values: **0** indicates a physical port. **1 to 4094** indicates that VLANs are supported.
   * 
   * @example
   * 1
   */
  vlan?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidr: 'DestinationCidr',
      nextHop: 'NextHop',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      portName: 'PortName',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      vlan: 'Vlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidr: 'string',
      nextHop: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      portName: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
      vlan: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

