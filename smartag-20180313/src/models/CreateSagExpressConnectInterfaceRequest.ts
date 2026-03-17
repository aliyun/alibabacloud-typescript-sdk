// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSagExpressConnectInterfaceRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.XX.XX.1
   */
  IP?: string;
  /**
   * @remarks
   * The subnet mask of the IP address.
   * 
   * This parameter is required.
   * 
   * @example
   * 255.255.255.252
   */
  mask?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The name of the Express Connect port.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
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
   * The VLAN ID of the subinterface.
   * 
   * Value: **0 to 4094**.
   * 
   * > 
   * *   If the VLAN ID is 0, this port is a physical port and does not support VLAN subinterfaces.
   * *   If the VLAN ID is 1 to 4094, this port supports VLAN subinterfaces based on the Layer 3 protocols.
   * *   You can create a maximum of 5 VLAN subinterfaces.
   * 
   * @example
   * 10
   */
  vlan?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
      mask: 'Mask',
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
      IP: 'string',
      mask: 'string',
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

