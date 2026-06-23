// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySnatEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The ClientToken value can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may differ for each API request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run without modifying the SNAT entry. The system checks the required parameters, request format, and service limits. If the check fails, the corresponding error is returned. If the check succeeds, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): performs a dry run and sends the request. After the check succeeds, a 2xx HTTP status code is returned and the SNAT entry is modified.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to enable EIP affinity. Valid values:
   * 
   * - **0**: disables EIP affinity.
   * 
   * - **1**: enables EIP affinity.
   * 
   * > After you enable EIP affinity, if the SNAT entry is associated with multiple EIPs or NAT IP addresses, the same client uses the same EIP or NAT IP address for access. Otherwise, the client randomly selects an EIP or NAT IP address from the associated ones for access.
   * 
   * @example
   * 1
   */
  eipAffinity?: number;
  /**
   * @remarks
   * The ID of the elastic network interfaces (ENIs).
   * 
   * > The IPv4 addresses of the network interface controller (NIC) are used as the SNAT addresses.
   * 
   * @example
   * eni-gw8g131ef2dnbu3k****
   */
  networkInterfaceId?: string;
  ownerAccount?: string;
  ownerId?: number;
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
  /**
   * @remarks
   * The ID of the SNAT entry that you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * snat-bp1vcgcf8tm0plqcg****
   */
  snatEntryId?: string;
  /**
   * @remarks
   * The name of the SNAT entry.
   * 
   * The name must be 2 to 128 characters in length and must start with a letter or a Chinese character. It cannot start with `http://` or `https://`.
   * 
   * @example
   * SnatEntry-1
   */
  snatEntryName?: string;
  /**
   * @remarks
   * - When you modify an SNAT entry for an Internet NAT gateway, this parameter specifies the EIPs in the SNAT entry. Separate multiple EIPs with commas (,).
   *  
   * > When you specify multiple EIPs to allocate an SNAT IP IPAM pool, service traffic is distributed across the EIPs by using a hash algorithm. Because traffic varies across connections, service traffic may be unevenly distributed across the EIPs. Add all EIPs to the same Internet Shared Bandwidth instance to prevent service interruptions caused by bandwidth throttling on a single EIP.
   * 
   * - When you modify an SNAT entry for a VPC NAT gateway, this parameter specifies the NAT IP addresses in the SNAT entry. Separate multiple NAT IP addresses with commas (,).
   * 
   * - The SnatIp and NetworkInterfaceId parameters cannot be specified at the same time.
   * 
   * @example
   * 47.98.XX.XX
   */
  snatIp?: string;
  /**
   * @remarks
   * The ID of the SNAT table to which the SNAT entry belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * stb-8vbczigrhop8x5u3t****
   */
  snatTableId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      eipAffinity: 'EipAffinity',
      networkInterfaceId: 'NetworkInterfaceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      snatEntryId: 'SnatEntryId',
      snatEntryName: 'SnatEntryName',
      snatIp: 'SnatIp',
      snatTableId: 'SnatTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      eipAffinity: 'number',
      networkInterfaceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      snatEntryId: 'string',
      snatEntryName: 'string',
      snatIp: 'string',
      snatTableId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

