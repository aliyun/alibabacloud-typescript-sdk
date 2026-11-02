// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateForwardEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe6****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run for this request. Valid values:
   * 
   * - **true**: performs a dry run without creating the DNAT entry. The system checks whether your AccessKey pair is valid, the authorization of the Resource Access Management (RAM) user, and whether the required parameters are specified. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): sends a Normal request. If the request passes the dry run, a 2xx HTTP status code is returned and the DNAT entry is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * - If you configure a DNAT entry for an Internet NAT gateway, specify an elastic IP address (EIP) for public network access.
   * - If you configure a DNAT entry for a VPC NAT gateway, specify a NAT IP address for external network access.
   * 
   * This parameter is required.
   * 
   * @example
   * 116.28.XX.XX
   */
  externalIp?: string;
  /**
   * @remarks
   * - If you configure a DNAT entry for an Internet NAT gateway, specify the external port or port range for port forwarding.
   *  
   *     - The port range must be from **1** to **65535**.
   *     - To forward traffic within a port range, separate the start port and the end port with a forward slash (/). Example: `10/20`.
   *     - If **ExternalPort** is set to a port range, **InternalPort** must also be set to a port range with the same number of ports. For example, if **ExternalPort** is set to `10/20`, **InternalPort** must be set to `80/90`.
   * 
   * - If you configure a DNAT entry for a VPC NAT gateway, specify the port on the NAT IP address that is accessed by the external network. Valid values: **1** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 8080
   */
  externalPort?: string;
  /**
   * @remarks
   * The name of the DNAT rule.
   * 
   * The name must be 2 to 128 characters in length, and must start with a letter or a Chinese character. It cannot start with `http://` or `https://`.
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
   * - If you configure a DNAT entry for an Internet NAT gateway, specify the private IP address of the ECS instance that requires Internet communication. The private IP address must meet the following requirements: 
   *         
   *     - The private IP address must belong to the CIDR block of the VPC where the NAT gateway is deployed. 
   * 
   *     - The private IP address must be used by an ECS instance, and the ECS instance must not be associated with an EIP. Otherwise, the DNAT entry does not take effect. 
   * 
   * - If you configure a DNAT entry for a VPC NAT gateway, specify the private IP address that requires communication through the DNAT rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.XX.XX
   */
  internalIp?: string;
  /**
   * @remarks
   * - If you configure a DNAT entry for an Internet NAT gateway, specify the internal port or port range for port forwarding. Valid values: **1** to **65535**.
   * 
   * - If you configure a DNAT entry for a VPC NAT gateway, specify the destination port of the ECS instance to be mapped. Valid values: **1** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  internalPort?: string;
  /**
   * @remarks
   * The protocol type. Valid values: 
   * 
   * - **TCP**: forwards TCP packets.   
   * 
   * - **UDP**: forwards UDP packets.   
   * 
   * - **Any**: forwards packets of all protocols. If **IpProtocol** is set to **Any**, **ExternalPort** and **InternalPort** must also be set to **Any** to implement DNAT IP mapping.
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
   * Specifies whether to enable port breaking. Valid values:
   * 
   * - **true**: enables port breaking.
   * 
   * - **false** (default): disables port breaking.
   * 
   * > If a DNAT entry and an SNAT entry use the same public IP address and you need to configure a port number greater than 1024, you must set **PortBreak** to **true**.
   * 
   * @example
   * false
   */
  portBreak?: boolean;
  /**
   * @remarks
   * The region ID of the NAT gateway.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
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

