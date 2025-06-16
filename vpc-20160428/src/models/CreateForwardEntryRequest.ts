// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateForwardEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe6****
   */
  clientToken?: string;
  dryRun?: boolean;
  /**
   * @remarks
   * *   The EIP that can be accessed over the Internet when you configure a DNAT entry for an Internet NAT gateway.
   * *   The NAT IP address that can be accessed by external networks when you configure a DNAT entry for a VPC NAT gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * 116.28.XX.XX
   */
  externalIp?: string;
  /**
   * @remarks
   * *   The external port range that is used for port forwarding when you configure a DNAT entry for an Internet NAT gateway.
   * 
   *     *   Valid values: **1** to **65535**.
   *     *   To specify a port range, separate the first port and the last port with a forward slash (/), for example, `10/20`.
   *     *   If you set **ExternalPort** to a port range, you must also set **InternalPort** to a port range, and the number of ports specified by these parameters must be the same. For example, if you set **ExternalPort** to `10/20`, you can set **InternalPort** to `80/90`.
   * 
   * *   The port that can be accessed by external networks when you configure a DNAT entry for a VPC NAT gateway. Valid values: **1** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 8080
   */
  externalPort?: string;
  /**
   * @remarks
   * The name of the DNAT entry.
   * 
   * The name must be 2 to 128 characters in length. It must start with a letter but cannot start with `http://` or `https://`.
   * 
   * @example
   * ForwardEntry-1
   */
  forwardEntryName?: string;
  /**
   * @remarks
   * The ID of the DNAT table.
   * 
   * This parameter is required.
   * 
   * @example
   * ftb-bp1mbjubq34hlcqpa****
   */
  forwardTableId?: string;
  /**
   * @remarks
   * *   The private IP address of the ECS instance that needs to communicate with the Internet when you configure a DNAT entry for an Internet NAT gateway. The private IP address must meet the following requirements:
   * 
   *     *   It must belong to the CIDR block of the VPC where the NAT gateway is deployed.
   *     *   The DNAT entry takes effect only if the private IP address is assigned to an ECS instance and the ECS instance is not associated with an EIP.
   * 
   * *   The private IP address that uses DNAT when you add a DNAT entry to a VPC NAT gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.XX.XX
   */
  internalIp?: string;
  /**
   * @remarks
   * *   The internal port or port range that is used for port forwarding when you configure a DNAT entry for an Internet NAT gateway. Valid values: **1** to **65535**.
   * *   The port of the destination ECS instance to be mapped when you configure a DNAT entry for a VPC NAT gateway. Valid values: **1** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  internalPort?: string;
  /**
   * @remarks
   * The protocol. Valid values:
   * 
   * *   **TCP**
   * *   **UDP**
   * *   **Any** If you set **IpProtocol** to **Any**, you must also set **ExternalPort** and **InternalPort** to **Any** to implement DNAT IP mapping.
   * 
   * This parameter is required.
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to remove limits on the port range. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * >  If a DNAT entry and an SNAT entry have the same public IP address, ou must specify a port that is larger that 1024, and set **PortBreak** to **true**.
   * 
   * @example
   * false
   */
  portBreak?: boolean;
  /**
   * @remarks
   * The region ID of the NAT gateway.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to obtain the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      externalIp: 'ExternalIp',
      externalPort: 'ExternalPort',
      forwardEntryName: 'ForwardEntryName',
      forwardTableId: 'ForwardTableId',
      internalIp: 'InternalIp',
      internalPort: 'InternalPort',
      ipProtocol: 'IpProtocol',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      portBreak: 'PortBreak',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      externalIp: 'string',
      externalPort: 'string',
      forwardEntryName: 'string',
      forwardTableId: 'string',
      internalIp: 'string',
      internalPort: 'string',
      ipProtocol: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      portBreak: 'boolean',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

