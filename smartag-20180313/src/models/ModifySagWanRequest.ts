// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySagWanRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum bandwidth of the WAN port. Unit: Mbit/s.
   * 
   * @example
   * 50
   */
  bandwidth?: number;
  /**
   * @remarks
   * The IP address of the gateway.
   * 
   * > 
   * *   If the WAN port uses a static IP address, you must set this parameter.
   * *   After this parameter is set, the SAG device generates a default route.
   * 
   * @example
   * 192.XX.XX.254
   */
  gateway?: string;
  /**
   * @remarks
   * The IP address of the WAN port.
   * 
   * >  If the WAN port uses a static IP address, you must set this parameter.
   * 
   * @example
   * 192.XX.XX.1
   */
  IP?: string;
  /**
   * @remarks
   * The connection type of the WAN port: Valid values:
   * 
   * *   **DHCP**: The WAN port connects to the Internet through an IP address that is dynamically assigned by the Dynamic Host Configuration Protocol (DHCP) server.
   * *   **STATIC**: The WAN port connects to the Internet through a static IP address. If you set this value, you must configure a static IP address, a subnet mask, and a gateway IP address for the WAN port.
   * *   **PPPOE**: The WAN port connects to the Internet through dial-up connections. If you set this value, you must enter the username and password of the PPPoE account provided by the Internet service provider (ISP).
   * 
   * This parameter is required.
   * 
   * @example
   * DHCP
   */
  IPType?: string;
  /**
   * @remarks
   * The ISP used by the WAN port. Valid values:
   * 
   * *   **CT**: China Telecom
   * *   **CM**: China Mobile
   * *   **CU**: China Unicom
   * *   **Other**: Other ISPs.
   * 
   * @example
   * CT
   */
  ISP?: string;
  /**
   * @remarks
   * The subnet mask of the WAN port IP address.
   * 
   * >  If the WAN port uses a static IP address, you must set this parameter.
   * 
   * @example
   * 255.255.255.0
   */
  mask?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The password of the PPPoE account.
   * 
   * The username must be 6 to 30 characters in length, and can contain digits and letters.
   * 
   * >  If the connection type of the WAN port is PPPoE, you must set this parameter. If you do not need to modify the password, you can ignore this parameter.
   * 
   * @example
   * P12ppq***
   */
  password?: string;
  /**
   * @remarks
   * The number of the WAN port.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  portName?: string;
  /**
   * @remarks
   * The priority of the WAN port.
   * 
   * Valid values: **-1** and **1 to 50**.
   * 
   * A smaller value indicates a higher priority. A value of **-1** indicates that traffic forwarding is disabled on the WAN port.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the region where the SAG instance is deployed.
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
  /**
   * @remarks
   * The username of the PPPoE account.
   * 
   * The username must be 6 to 30 characters in length, and can contain digits and letters.
   * 
   * >  If the connection type of the WAN port is PPPoE, you must set this parameter.
   * 
   * @example
   * P12ppp***
   */
  username?: string;
  /**
   * @remarks
   * The weight of the WAN port.
   * 
   * Valid values: **1 to 100**. Default value: **100**.
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      gateway: 'Gateway',
      IP: 'IP',
      IPType: 'IPType',
      ISP: 'ISP',
      mask: 'Mask',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      password: 'Password',
      portName: 'PortName',
      priority: 'Priority',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      username: 'Username',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      gateway: 'string',
      IP: 'string',
      IPType: 'string',
      ISP: 'string',
      mask: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      password: 'string',
      portName: 'string',
      priority: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
      username: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

