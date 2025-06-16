// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFullNatEntriesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the FULLNAT entry that you want to query.
   * 
   * @example
   * fullnat-gw8fz23jezpbblf1j****
   */
  fullNatEntryId?: string;
  /**
   * @remarks
   * The name of the FULLNAT entry that you want to query. You can specify at most 20 names.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter.
   */
  fullNatEntryNames?: string[];
  /**
   * @remarks
   * The ID of the FULLNAT table to which the FULLNAT entries to be queried belong.
   * 
   * >  You must specify at least one of **FullNatTableId** and **NatGatewayId**.
   * 
   * @example
   * fulltb-gw88z7hhlv43rmb26****
   */
  fullNatTableId?: string;
  /**
   * @remarks
   * The protocol of the packets that are forwarded by the port. Valid values:
   * 
   * *   **TCP**
   * *   **UDP**
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * >  You must specify at least one of **FullNatTableId** and **NatGatewayId**.
   * 
   * @example
   * ngw-bp1uewa15k4iy5770****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The NAT IP address that provides address translation in FULLNAT entries.
   * 
   * @example
   * 10.0.XX.XX
   */
  natIp?: string;
  /**
   * @remarks
   * The frontend port to be modified in the mapping of FULLNAT port. Valid values: **1** to **65535**.
   * 
   * @example
   * 443
   */
  natIpPort?: string;
  /**
   * @remarks
   * The ID of the elastic network interface (ENI) that you want to query.
   */
  networkInterfaceIds?: string[];
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   You do not need to specify this parameter for the first request.
   * *   You must specify the token that is obtained from the previous query as the value of the **NextToken** parameter.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the virtual private cloud (VPC) NAT gateway to which the FULLNAT entries to be queried belong.
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
      fullNatEntryId: 'FullNatEntryId',
      fullNatEntryNames: 'FullNatEntryNames',
      fullNatTableId: 'FullNatTableId',
      ipProtocol: 'IpProtocol',
      maxResults: 'MaxResults',
      natGatewayId: 'NatGatewayId',
      natIp: 'NatIp',
      natIpPort: 'NatIpPort',
      networkInterfaceIds: 'NetworkInterfaceIds',
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
      fullNatEntryId: 'string',
      fullNatEntryNames: { 'type': 'array', 'itemType': 'string' },
      fullNatTableId: 'string',
      ipProtocol: 'string',
      maxResults: 'number',
      natGatewayId: 'string',
      natIp: 'string',
      natIpPort: 'string',
      networkInterfaceIds: { 'type': 'array', 'itemType': 'string' },
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.fullNatEntryNames)) {
      $dara.Model.validateArray(this.fullNatEntryNames);
    }
    if(Array.isArray(this.networkInterfaceIds)) {
      $dara.Model.validateArray(this.networkInterfaceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

