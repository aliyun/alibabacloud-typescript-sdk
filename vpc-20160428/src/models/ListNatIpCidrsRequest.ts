// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNatIpCidrsRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * >  If you do not set this parameter, the system automatically uses **RequestId** as **ClientToken**. **RequestId** may be different for each API request.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to only precheck this request. Valid values:
   * 
   * *   **true**: checks the API request. The CIDR blocks of the NAT gateway are not queried if the API request passes the precheck. The system checks whether your AccessKey pair is valid, whether the Resource Access Management (RAM) user is authorized, and whether the required parameters are set. If the request fails to pass the precheck, the corresponding error message is returned. If the check succeeds, the DryRunOperation error code is returned.
   * *   **false**: sends the API request. If the request passes the precheck, 2xx HTTP status code is returned and the CIDR blocks of the NAT gateway are queried. This is the default value.
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
   * The ID of the VPC NAT gateway that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * ngw-gw8v16wgvtq26vh59****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The CIDR block of the NAT gateway that you want to query.
   * 
   * @example
   * 172.16.0.0/24
   */
  natIpCidr?: string;
  /**
   * @remarks
   * The name of the CIDR block that you want to query. Valid values of **N**: **1** to **20**.
   * 
   * @example
   * test
   */
  natIpCidrName?: string[];
  /**
   * @remarks
   * The status of the CIDR block that you want to query. Set the value to **Available**.
   * 
   * @example
   * Available
   */
  natIpCidrStatus?: string;
  /**
   * @remarks
   * The CIDR block of the NAT gateway that you want to query. Valid values of **N**: **1** to **20**.
   * 
   * @example
   * 172.16.0.0/24
   */
  natIpCidrs?: string[];
  /**
   * @remarks
   * The token that is used for the next query. Set the value as needed.
   * 
   * *   If this is your first query or no next query is to be sent, ignore this parameter.
   * *   If a next query is to be sent, set the value to the value of NextToken that is returned from the last call.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Virtual Private Cloud (VPC) NAT gateway that you want to query.
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

