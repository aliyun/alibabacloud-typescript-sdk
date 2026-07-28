// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeForwardTableEntriesRequest extends $dara.Model {
  /**
   * @remarks
   * - If you query DNAT entries of an Internet NAT gateway, this parameter specifies the elastic IP address (EIP) that provides public network access in the DNAT entry.
   * 
   * - If you query DNAT entries of a VPC NAT gateway, this parameter specifies the NAT IP address that is accessed by external networks.
   * 
   * @example
   * 116.28.XX.XX
   */
  externalIp?: string;
  /**
   * @remarks
   * - If you query DNAT entries of an Internet NAT gateway, this parameter specifies the external port or port range used for port forwarding.
   *     - The port range must be within **1** to **65535**.
   *     - To query a port range, separate the start and end ports with a forward slash (/), such as `10/20`.
   *     - If **ExternalPort** is set to a port range, **InternalPort** must also be set to a port range with the same number of ports. For example, if **ExternalPort** is set to `10/20`, **InternalPort** must be set to `80/90`.
   * 
   * - If you query DNAT entries of a VPC NAT gateway, this parameter specifies the port on the NAT IP address that is accessed by external networks. Valid values: **1** to **65535**.
   * 
   * @example
   * 8080
   */
  externalPort?: string;
  /**
   * @remarks
   * The ID of the DNAT entry.
   * 
   * @example
   * fwd-8vbn3bc8roygjp0gy****
   */
  forwardEntryId?: string;
  /**
   * @remarks
   * The name of the DNAT entry.
   * 
   * The name must be 2 to 128 characters in length and must start with a letter or Chinese character. It can contain digits, underscores (_), and hyphens (-).
   * 
   * @example
   * ForwardEntry-1
   */
  forwardEntryName?: string;
  /**
   * @remarks
   * The ID of the DNAT table. 
   * 
   * > You must specify at least one of **ForwardTableId** and **NatGatewayId**.
   * 
   * @example
   * ftb-bp1mbjubq34hlcqpa****
   */
  forwardTableId?: string;
  /**
   * @remarks
   * The private IP address.
   * 
   * - If you query DNAT entries of an Internet NAT gateway, this parameter specifies the private IP address of the ECS instance that communicates with the Internet through the DNAT entry.
   * 
   * - If you query DNAT entries of a VPC NAT gateway, this parameter specifies the private IP address that needs to communicate through the DNAT rule.
   * 
   * @example
   * 192.168.XX.XX
   */
  internalIp?: string;
  /**
   * @remarks
   * - If you query DNAT entries of an Internet NAT gateway, this parameter specifies the internal port or port range used for port forwarding. Valid values: **1** to **65535**.
   * 
   * - If you query DNAT entries of a VPC NAT gateway, this parameter specifies the port of the destination ECS instance to be mapped. Valid values: **1** to **65535**.
   * 
   * @example
   * 80
   */
  internalPort?: string;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * - **tcp**: forwards TCP packets.
   * 
   * - **udp**: forwards UDP packets.
   * 
   * - **any**: forwards packets of all protocols.
   * 
   * @example
   * tcp
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The ID of the NAT gateway to query.
   * 
   * > You must specify at least one of **ForwardTableId** and **NatGatewayId**.
   * 
   * @example
   * ngw-bp1uewa15k4iy5770****
   */
  natGatewayId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the list. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for a paged query. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
      externalIp: 'ExternalIp',
      externalPort: 'ExternalPort',
      forwardEntryId: 'ForwardEntryId',
      forwardEntryName: 'ForwardEntryName',
      forwardTableId: 'ForwardTableId',
      internalIp: 'InternalIp',
      internalPort: 'InternalPort',
      ipProtocol: 'IpProtocol',
      natGatewayId: 'NatGatewayId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalIp: 'string',
      externalPort: 'string',
      forwardEntryId: 'string',
      forwardEntryName: 'string',
      forwardTableId: 'string',
      internalIp: 'string',
      internalPort: 'string',
      ipProtocol: 'string',
      natGatewayId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
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

