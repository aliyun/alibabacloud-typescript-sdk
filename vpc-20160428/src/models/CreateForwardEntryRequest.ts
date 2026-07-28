// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateForwardEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The ClientToken value can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may differ for each API request.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe6****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run without creating a DNAT entry. The system checks the AccessKey pair, the authorization of the Resource Access Management (RAM) user, and the required parameters. If the check fails, the corresponding error is returned. If the check succeeds, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): sends a Normal request. If the check succeeds, a 2xx HTTP status code is returned and the DNAT entry is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * - If you add a DNAT entry for an Internet NAT gateway, this parameter specifies the elastic IP address (EIP) that provides public network access.
   * - If you add a DNAT entry for a VPC NAT gateway, this parameter specifies the NAT IP address that provides external network access.
   * 
   * This parameter is required.
   * 
   * @example
   * 116.28.XX.XX
   */
  externalIp?: string;
  /**
   * @remarks
   * - If you add a DNAT entry for an Internet NAT gateway, this parameter specifies the external port or port range for port forwarding.
   *  
   *     - Valid port values: **1** to **65535**.
   *     - To specify a port range, separate the start and end ports with a forward slash (/), such as `10/20`.
   *     - If **ExternalPort** is set to a port range, **InternalPort** must also be set to a port range with the same number of ports. For example, if **ExternalPort** is set to `10/20`, **InternalPort** can be set to `80/90`.
   * 
   * - If you add a DNAT entry for a VPC NAT gateway, this parameter specifies the port on the NAT IP address that is accessed by the external network. Valid values: **1** to **65535**.
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
   * The name must be 2 to 128 characters in length and must start with a letter or Chinese character. It cannot start with `http://` or `https://`.
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
   * - If you add a DNAT entry for an Internet NAT gateway, this parameter specifies the private IP address of the ECS instance that needs to communicate over the Internet. The private IP address must meet the following conditions: 
   *         
   *     - It must belong to the CIDR block of the VPC in which the NAT gateway resides. 
   * 
   *     - The DNAT entry takes effect only when the IP address is used by an ECS instance that is not associated with an EIP. 
   * 
   * - If you add a DNAT entry for a VPC NAT gateway, this parameter specifies the private IP address that communicates through the DNAT rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.XX.XX
   */
  internalIp?: string;
  /**
   * @remarks
   * - If you add a DNAT entry for an Internet NAT gateway, this parameter specifies the internal port or port range for port forwarding. Valid values: **1** to **65535**.
   * 
   * - If you add a DNAT entry for a VPC NAT gateway, this parameter specifies the destination port of the ECS instance to which traffic is mapped. Valid values: **1** to **65535**.
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
   * > If a DNAT entry and an SNAT entry use the same public IP address, and you want to configure a port number greater than 1024, set **PortBreak** to **true**.
   * 
   * @example
   * false
   */
  portBreak?: boolean;
  /**
   * @remarks
   * The region ID of the NAT gateway.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
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

