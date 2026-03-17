// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySagLanRequest extends $dara.Model {
  /**
   * @remarks
   * The last IP address of the DHCP pool.
   * 
   * @example
   * 192.XX.XX.254
   */
  endIp?: string;
  /**
   * @remarks
   * The IP address of the LAN port.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.XX.XX.1
   */
  IP?: string;
  /**
   * @remarks
   * The connection type of the LAN port. Valid values:
   * 
   * *   **DHCP**: a dynamic IP address. Uses the Dynamic Host Configuration Protocol (DHCP) to dynamically assign an IP address to a connected device.
   * *   **STATIC**: a static IP address. Specifies a static IP address for the LAN port.
   * 
   * This parameter is required.
   * 
   * @example
   * STATIC
   */
  IPType?: string;
  /**
   * @remarks
   * The time duration that the IP address is retained after it is assigned through DHCP. Unit: minute.
   * 
   * Valid values: **1 to 43200**.
   * 
   * @example
   * 7
   */
  lease?: string;
  /**
   * @remarks
   * The subnet mask of the LAN port IP address.
   * 
   * This parameter is required.
   * 
   * @example
   * 255.255.255.0
   */
  mask?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The name of the LAN port.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  portName?: string;
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
   * The serial number of the SAG device that is associated with the SAG instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag32a30****
   */
  smartAGSn?: string;
  /**
   * @remarks
   * The first IP address of the DHCP pool.
   * 
   * @example
   * 192.XX.XX.2
   */
  startIp?: string;
  static names(): { [key: string]: string } {
    return {
      endIp: 'EndIp',
      IP: 'IP',
      IPType: 'IPType',
      lease: 'Lease',
      mask: 'Mask',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      portName: 'PortName',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      startIp: 'StartIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endIp: 'string',
      IP: 'string',
      IPType: 'string',
      lease: 'string',
      mask: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      portName: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
      startIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

