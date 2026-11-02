// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNatIpsRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among multiple requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * - **true**: The system prechecks the request without querying the NAT IP addresses. The system checks whether required parameters are specified, the request format is valid, and the service limits are met. If the request fails the precheck, the corresponding error is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * - **false** (default): The system sends a normal request. If the request passes the precheck, the system returns an HTTP 2xx status code and performs the operation.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The origin of the NAT IP addresses to query. Valid values:
   * - prefix: NAT IP addresses that belong to an IP prefix.
   * 
   * - cidr: Standalone NAT IP addresses that do not belong to any IP prefix.
   * 
   * - Empty: All NAT IP addresses.
   * 
   * @example
   * cidr
   */
  ipOrigin?: string;
  /**
   * @remarks
   * The CIDR block of the IP prefix to query.
   * 
   * @example
   * 192.168.0.0/28
   */
  ipv4Prefix?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: string;
  /**
   * @remarks
   * The instance ID of the NAT gateway to which the NAT IP addresses belong.
   * 
   * This parameter is required.
   * 
   * @example
   * ngw-gw8v16wgvtq26vh59****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The CIDR block to which the NAT IP addresses belong.
   * 
   * @example
   * 192.168.0.0/24
   */
  natIpCidr?: string;
  /**
   * @remarks
   * The instance IDs of the NAT IP addresses to query. Valid values of **N**: **1** to **20**.
   * 
   * @example
   * vpcnatip-gw8a863sut1zijxh0****
   */
  natIpIds?: string[];
  /**
   * @remarks
   * The name of the NAT IP address to query. Valid values of **N**: **1** to **20**.
   * 
   * @example
   * test
   */
  natIpName?: string[];
  /**
   * @remarks
   * The status of the NAT IP addresses to query. Valid values:
   * 
   * - **Available**: Available.
   * - **Deleting**: Deleting.
   * - **Creating**: Creating.
   * 
   * @example
   * Available
   */
  natIpStatus?: string;
  /**
   * @remarks
   * The token that is used to start the next query. Valid values:
   * - If this is the first query or no next query is to be sent, ignore this parameter.
   * - If a next query is to be sent, set the value to the NextToken value returned in the last API call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****f84eb48b699f0a4883
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the NAT gateway instance to which the NAT IP addresses belong.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to obtain the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * eu-central-1
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ipOrigin: 'IpOrigin',
      ipv4Prefix: 'Ipv4Prefix',
      maxResults: 'MaxResults',
      natGatewayId: 'NatGatewayId',
      natIpCidr: 'NatIpCidr',
      natIpIds: 'NatIpIds',
      natIpName: 'NatIpName',
      natIpStatus: 'NatIpStatus',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ipOrigin: 'string',
      ipv4Prefix: 'string',
      maxResults: 'string',
      natGatewayId: 'string',
      natIpCidr: 'string',
      natIpIds: { 'type': 'array', 'itemType': 'string' },
      natIpName: { 'type': 'array', 'itemType': 'string' },
      natIpStatus: 'string',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.natIpIds)) {
      $dara.Model.validateArray(this.natIpIds);
    }
    if(Array.isArray(this.natIpName)) {
      $dara.Model.validateArray(this.natIpName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

