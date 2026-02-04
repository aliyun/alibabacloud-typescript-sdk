// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyForwardEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * - true: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the DryRunOperation error code is returned.
   * 
   * - false (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * *   When you modify DNAT entries of Internet NAT gateways, this parameter specifies the elastic IP addresses (EIPs) that are used to access the Internet.
   * *   When you modify DNAT entries of Virtual Private Cloud (VPC) NAT gateways, this parameter specifies the NAT IP addresses that are accessed by external networks.
   * 
   * @example
   * 116.85.XX.XX
   */
  externalIp?: string;
  /**
   * @remarks
   * *   The external port that is used to forward traffic when you modify DNAT entries of Internet NAT gateways.
   * 
   *     *   Valid values: **1** to **65535**.
   *     *   If you want to modify the port range, separate port numbers with a forward slash (/), such as `10/20`.
   *     *   If you need to modify **ExternalPort** and **InternalPort** at the same time, and **ExternalPort** specifies a port range, make sure that **InternalPort** also specifies a port range, and both ranges specify the same number of ports. For example, you can set **ExternalPort** to `10/20` and **InternalPort** to `80/90`.
   * 
   * *   The port that is accessed by external networks when you modify DNAT entries of VPC NAT gateways. Valid values: **1** to **65535**.
   * 
   * @example
   * 80
   */
  externalPort?: string;
  /**
   * @remarks
   * The ID of the DNAT entry.
   * 
   * This parameter is required.
   * 
   * @example
   * fwd-8vbn3bc8roygjp0gy****
   */
  forwardEntryId?: string;
  /**
   * @remarks
   * The new name of the DNAT entry.
   * 
   * The name must be 2 to 128 characters in length. It must start with a letter but cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  forwardEntryName?: string;
  /**
   * @remarks
   * The ID of the DNAT table to which the DNAT entry belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * ftb-8vbx8xu2lqj9qb334****
   */
  forwardTableId?: string;
  /**
   * @remarks
   * *   The private IP address of the ECS instance that uses DNAT entries to communicate with the Internet when you modify DNAT entries of Internet NAT gateways.
   * *   The private IP address that uses DNAT entries to communicate when you modify DNAT entries of VPC NAT gateways.
   * 
   * @example
   * 10.0.0.78
   */
  internalIp?: string;
  /**
   * @remarks
   * *   The internal port or port range that is used to forward traffic when you modify DNAT entries of Internet NAT gateways. Valid values: **1** to **65535**.
   * *   The port of the destination ECS instance to be mapped when you modify DNAT entries of VPC NAT gateways. Valid values: **1** to **65535**.
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
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to remove limits on the port range. Valid values:
   * 
   * *   **true**
   * *   **false** If an SNAT entry and a DNAT entry use the same public IP address, and you want to specify a port number greater than `1024`, set `PortBreak` to `true`.
   * 
   * @example
   * false
   */
  portBreak?: boolean;
  /**
   * @remarks
   * The region ID of the NAT gateway.
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
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      externalIp: 'ExternalIp',
      externalPort: 'ExternalPort',
      forwardEntryId: 'ForwardEntryId',
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
      forwardEntryId: 'string',
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

