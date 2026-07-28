// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNatIpCidrsRequest extends $dara.Model {
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
   * 
   * - **true**: performs a dry run without querying the NAT CIDR block list. The system checks the request for potential issues, including missing required parameters, invalid parameter values, and the authorization status of the RAM user. If the check fails, the corresponding error is returned. If the check succeeds, the DryRunOperation error code is returned.
   * 
   * - **false** (default): sends a normal request, and the NAT CIDR block list is returned after the request passes the check with an HTTP 2xx status code.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
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
   * The instance ID of the VPC NAT gateway whose NAT CIDR blocks you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * ngw-gw8v16wgvtq26vh59****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The NAT CIDR block to query.
   * 
   * @example
   * 172.16.0.0/24
   */
  natIpCidr?: string;
  /**
   * @remarks
   * The name of the NAT CIDR block to query. Valid values of **N**: **1** to **20**.
   * 
   * @example
   * test
   */
  natIpCidrName?: string[];
  /**
   * @remarks
   * The status of the NAT CIDR block to query. Set the value to **Available**, which indicates that the NAT CIDR block is available.
   * 
   * @example
   * Available
   */
  natIpCidrStatus?: string;
  /**
   * @remarks
   * The NAT CIDR block to query. Valid values of **N**: **1** to **20**.
   * 
   * @example
   * 172.16.0.0/24
   */
  natIpCidrs?: string[];
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * - If this is the first request or no subsequent requests exist, you do not need to specify this parameter.
   * - If a subsequent request exists, set the value to the NextToken value returned in the previous API call.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the VPC NAT gateway to which the NAT CIDR blocks belong.
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

