// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyForwardEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * - **true**: performs a dry run without modifying the DNAT entry. The system checks the required parameters, request format, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false** (default): performs a dry run and sends the request. If the request passes the dry run, an HTTP 2xx status code is returned and the DNAT entry is modified.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * - If you modify a DNAT entry of an Internet NAT gateway, this parameter specifies the public IP address used to provide public network access.
   * 
   * - If you modify a DNAT entry of a VPC NAT gateway, this parameter specifies the NAT IP address accessed by the external network.
   * 
   * @example
   * 116.85.XX.XX
   */
  externalIp?: string;
  /**
   * @remarks
   * - If you modify a DNAT entry of an Internet NAT gateway, this parameter specifies the external port or port range used for port forwarding in the DNAT entry.
   *     - The port range must be within **1** to **65535**.
   *     - To specify a port range, separate the start and end ports with a forward slash (/), such as `10/20`.
   *     - If you modify both **ExternalPort** and **InternalPort**, and **ExternalPort** is set to a port range, **InternalPort** must also be set to a port range with the same number of ports. For example, if **ExternalPort** is set to `10/20`, **InternalPort** must be set to `80/90`.
   * 
   * - If you modify a DNAT entry of a VPC NAT gateway, this parameter specifies the port accessed by the external network. Valid values: **1** to **65535**.
   * 
   * @example
   * 80
   */
  externalPort?: string;
  /**
   * @remarks
   * The ID of the DNAT entry to be modified.
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
   * The name must be 2 to 128 characters in length and must start with a letter or a Chinese character. It cannot start with `http://` or `https://`.
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
   * - If you modify a DNAT entry of an Internet NAT gateway, this parameter specifies the private IP address of the ECS instance that communicates with the Internet through the DNAT entry.
   * 
   * - If you modify a DNAT entry of a VPC NAT gateway, this parameter specifies the private IP address that needs to communicate through the DNAT rule.
   * 
   * @example
   * 10.0.0.78
   */
  internalIp?: string;
  /**
   * @remarks
   * - If you modify a DNAT entry of an Internet NAT gateway, this parameter specifies the internal port or port range used for port forwarding in the DNAT entry. Valid values: **1** to **65535**.
   * 
   * - If you modify a DNAT entry of a VPC NAT gateway, this parameter specifies the port of the destination ECS instance to be mapped. Valid values: **1** to **65535**.
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
   * - **Any**: forwards packets of all protocols.
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
   * - **false**: does not enable port breaking. If a DNAT entry and an SNAT entry use the same public IP address and you want to configure a port number greater than `1024`, set `PortBreak` to `true`.
   * 
   * @example
   * false
   */
  portBreak?: boolean;
  /**
   * @remarks
   * The region ID of the NAT gateway.
   * 
   * You can call [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) to query the region ID.
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

