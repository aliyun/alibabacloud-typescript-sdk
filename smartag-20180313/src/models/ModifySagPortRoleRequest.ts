// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySagPortRoleRequest extends $dara.Model {
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
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/69813.html) operation to query the most recent region list.
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
   * The role of the port. Valid values:
   * 
   * *   **NONE**: No role is assigned to the port.
   * *   **WAN**: The port is used as a WAN port. By default, port 5 of an SAG device is used as a WAN port and supports access to the Internet by using a Dynamic Host Configuration Protocol (DHCP) client, PPPoE, or a static IP address.
   * *   **LAN**: The port is used as a LAN port. The LAN port allows a DHCP server or a static IP address to connect to an on-premises terminal or switch.
   * *   **ECC**: The port is used as a port to connect to an Express Connect circuit.
   * *   **MGT**: The port is used as the management port. By default, port 2 of an SAG device is used as the management port.
   * 
   * > 
   * 
   * *   In exclusive mode, the management traffic is separated from the workload traffic. The management port is only used to access the SAG web console and cannot be used to transfer your workload data. You can access the SAG web console only through the management port.
   * *   A WAN port can be used when it is connected. If a port is the first one that obtains an IP address over DHCP and can access the Internet, it is set as a WAN port. In the SAG web console, you can set another port as a WAN port.
   * 
   * This parameter is required.
   * 
   * @example
   * NONE
   */
  role?: string;
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
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      portName: 'PortName',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      role: 'Role',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      portName: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      role: 'string',
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

