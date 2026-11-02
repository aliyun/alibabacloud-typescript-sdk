// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNatIpCidrsRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the request. Valid values:
   * 
   * - **true**: performs a dry run without querying the NAT CIDR blocks. The system checks whether your AccessKey pair is valid, the authorization of the Resource Access Management (RAM) user, and whether the required parameters are specified. If the request fails the check, the corresponding error is returned. If the request passes the check, the DryRunOperation error code is returned.
   * 
   * - **false**: sends a normal request. This is the default value. If the request passes the check, an HTTP 2xx status code is returned and the NAT CIDR blocks are queried.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
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
   * The instance ID of the VPC NAT gateway for which you want to query NAT CIDR blocks.
   * 
   * This parameter is required.
   * 
   * @example
   * ngw-gw8v16wgvtq26vh59****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The NAT CIDR block that you want to query.
   * 
   * @example
   * 172.16.0.0/24
   */
  natIpCidr?: string;
  /**
   * @remarks
   * The name of the NAT CIDR block that you want to query. **N** ranges from **1** to **20**.
   * 
   * @example
   * test
   */
  natIpCidrName?: string[];
  /**
   * @remarks
   * The status of the NAT CIDR block that you want to query. Valid values: **Available**, which indicates that the NAT CIDR block is active.
   * 
   * @example
   * Available
   */
  natIpCidrStatus?: string;
  /**
   * @remarks
   * The NAT CIDR block that you want to query. **N** ranges from **1** to **20**.
   * 
   * @example
   * 172.16.0.0/24
   */
  natIpCidrs?: string[];
  /**
   * @remarks
   * The token for the next query. Valid values:
   * - If this is your first query or no next query is to be sent, ignore this parameter.
   * - If a next query is to be sent, set the value to the NextToken value that is returned from the last API call.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the VPC NAT gateway to which the NAT CIDR blocks belong. You can invoke the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to obtain the region ID.
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
      maxResults: 'MaxResults',
      natGatewayId: 'NatGatewayId',
      natIpCidr: 'NatIpCidr',
      natIpCidrName: 'NatIpCidrName',
      natIpCidrStatus: 'NatIpCidrStatus',
      natIpCidrs: 'NatIpCidrs',
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
      maxResults: 'string',
      natGatewayId: 'string',
      natIpCidr: 'string',
      natIpCidrName: { 'type': 'array', 'itemType': 'string' },
      natIpCidrStatus: 'string',
      natIpCidrs: { 'type': 'array', 'itemType': 'string' },
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.natIpCidrName)) {
      $dara.Model.validateArray(this.natIpCidrName);
    }
    if(Array.isArray(this.natIpCidrs)) {
      $dara.Model.validateArray(this.natIpCidrs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

