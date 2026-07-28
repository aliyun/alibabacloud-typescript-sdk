// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNatIpsRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that the value is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * > If you do not specify this parameter, the system uses **RequestId** as **ClientToken**. The value of **RequestId** may differ for each API request.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * - **true**: performs a dry run. The system checks the required parameters, request syntax, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false** (default): performs a dry run and sends the request. If the request passes the dry run, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The origin of the NAT IP address to query. Valid values:
   * - prefix: a NAT IP address that belongs to an IP prefix.
   * 
   * - cidr: a standalone NAT IP address that does not belong to any IP prefix.
   * 
   * - Empty: queries all NAT IP addresses.
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
   * The number of entries per page for a paged query. Valid values: **1** to **100**. Default value: **20**.
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
   * The instance ID of the NAT IP address to query. Valid values of **N**: **1** to **20**.
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
   * - **Available**: available.
   * - **Deleting**: being deleted.
   * - **Creating**: being created.
   * 
   * @example
   * Available
   */
  natIpStatus?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * - You do not need to specify this parameter for the first request or if no subsequent query exists.
   * - If a next query exists, set the value to the NextToken value returned in the previous API call.
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
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
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

