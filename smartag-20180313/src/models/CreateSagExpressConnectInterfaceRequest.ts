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
   * The IP address mask.
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
   * The name of the dedicated connection port.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  portName?: string;
  /**
   * @remarks
   * The region ID of the Smart Access Gateway instance.
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
   * The instance ID of the Smart Access Gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-whfn****
   */
  smartAGId?: string;
  /**
   * @remarks
   * The serial number of the bound Smart Access Gateway device.
   * 
   * This parameter is required.
   * 
   * @example
   * sag32a30****
   */
  smartAGSn?: string;
  /**
   * @remarks
   * The VLAN ID of the dedicated connection sub-interface.
   * 
   * Valid values: **0 to 4094**.
   * 
   * > - If the VLAN ID is 0, the port is a physical port and the VLAN sub-interface mode is not used.
   * - If the VLAN ID is 1 to 4094, the port uses a VLAN-based Layer 3 sub-interface.
   * - You can create up to 5 VLANs.
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

