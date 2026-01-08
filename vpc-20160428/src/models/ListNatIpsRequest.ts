// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNatIpsRequest extends $dara.Model {
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
   * Specifies whether to only precheck the request. Valid values:
   * 
   * *   **true**: checks the API request. IP addresses are not queried. The system checks the required parameters, request syntax, and limits. If the request fails to pass the precheck, the corresponding error message is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * *   **false** (default): sends the request. If the request passes the precheck, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @example
   * cidr
   */
  ipOrigin?: string;
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
   * The ID of the NAT gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * ngw-gw8v16wgvtq26vh59****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The CIDR block to which the IP address belongs.
   * 
   * @example
   * 192.168.0.0/24
   */
  natIpCidr?: string;
  /**
   * @remarks
   * The ID of the IP address. Valid values of **N**: **1** to **20**.
   * 
   * @example
   * vpcnatip-gw8a863sut1zijxh0****
   */
  natIpIds?: string[];
  /**
   * @remarks
   * The name of the IP address. Valid values of **N**: **1** to **20**.
   * 
   * @example
   * test
   */
  natIpName?: string[];
  /**
   * @remarks
   * The status of the IP address. Valid values:
   * 
   * *   **Available**
   * *   **Deleting**
   * *   **Creating**
   * 
   * @example
   * Available
   */
  natIpStatus?: string;
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * 
   * *   If this is your first query or no next query is to be sent, ignore this parameter.
   * *   If a next query is to be sent, set the value to the value of NextToken that is returned from the last call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****f84eb48b699f0a4883
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the NAT gateway is deployed.
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

