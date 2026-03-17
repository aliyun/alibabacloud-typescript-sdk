// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySagPortRouteProtocolRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The name of the port.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
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
  /**
   * @remarks
   * The BGP autonomous system number (ASN) of the peer device.
   * 
   * >  You must set this parameter when you enable BGP.
   * 
   * @example
   * 65535
   */
  remoteAs?: string;
  /**
   * @remarks
   * The IP address of the peer device.
   * 
   * >  You must set this parameter when you enable BGP.
   * 
   * @example
   * 192.XX.XX.1
   */
  remoteIp?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The routing protocol. Valid values:
   * 
   * *   **STATIC**: uses a static routing protocol.
   * *   **OSPF**: uses the Open Shortest Path First protocol (OSPF).
   * *   **BGP**: uses the Border Gateway Protocol (BGP).
   * 
   * This parameter is required.
   * 
   * @example
   * STATIC
   */
  routeProtocol?: string;
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
   * @example
   * 2
   */
  vlan?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      portName: 'PortName',
      regionId: 'RegionId',
      remoteAs: 'RemoteAs',
      remoteIp: 'RemoteIp',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeProtocol: 'RouteProtocol',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      vlan: 'Vlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      portName: 'string',
      regionId: 'string',
      remoteAs: 'string',
      remoteIp: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeProtocol: 'string',
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

