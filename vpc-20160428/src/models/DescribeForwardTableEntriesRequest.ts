// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeForwardTableEntriesRequest extends $dara.Model {
  /**
   * @remarks
   * *   The elastic IP addresses (EIPs) that can be accessed over the Internet when you query DNAT entries of Internet NAT gateways.
   * *   The NAT IP addresses that can be accessed by external networks when you query DNAT entries of Virtual Private Cloud (VPC) NAT gateways.
   * 
   * @example
   * 116.28.XX.XX
   */
  externalIp?: string;
  /**
   * @remarks
   * *   The external port or port range that is used for port forwarding when you query DNAT entries of Internet NAT gateways.
   * 
   *     *   Valid values: **1** to **65535**.
   *     *   If you want to query a port range, separate the first port and last port with a forward slash (/), such as `10/20`.
   *     *   If you set **ExternalPort** to a port range, you must also set **InternalPort** to a port range, and the number of ports specified by these parameters must be the same. For example, if you set **ExternalPort** to `10/20`, you can set **InternalPort** to `80/90`.
   * 
   * *   The port that is used when the NAT IP address can be accessed by external networks when you query DNAT entries of VPC NAT gateways. Valid values: **1** to **65535**.
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
   * The name must be 2 to 128 characters in length, and can contain digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
   * 
   * @example
   * ForwardEntry-1
   */
  forwardEntryName?: string;
  /**
   * @remarks
   * The ID of the DNAT table.
   * 
   * **
   * 
   * **Description** You must specify at least one of **ForwardTableId** and **NatGatewayId**.
   * 
   * @example
   * ftb-bp1mbjubq34hlcqpa****
   */
  forwardTableId?: string;
  /**
   * @remarks
   * The private IP address.
   * 
   * *   The private IP address of the ECS instance that uses DNAT entries to communicate with the Internet when you query DNAT entries of Internet NAT gateways.
   * *   The private IP address that uses DNAT entries for communication when you query DNAT entries of VPC NAT gateways.
   * 
   * @example
   * 192.168.XX.XX
   */
  internalIp?: string;
  /**
   * @remarks
   * *   The internal port or port range that is used for port forwarding when you query DNAT entries of Internet NAT gateways. Valid values: **1** to **65535**.
   * *   The port of the destination ECS instance to be mapped when you query DNAT entries of VPC NAT gateways. Valid values: **1** to **65535**.
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
   * *   **Any**
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * **
   * 
   * **Description** You must specify at least one of **ForwardTableId** and **NatGatewayId**.
   * 
   * @example
   * ngw-bp1uewa15k4iy5770****
   */
  natGatewayId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region where you want to create the NAT gateway.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
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

