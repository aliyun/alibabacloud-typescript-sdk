// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFullNatEntriesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the value from your client and make sure that the value is unique across different requests. The ClientToken parameter supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the FULLNAT entry to be queried.
   * 
   * @example
   * fullnat-gw8fz23jezpbblf1j****
   */
  fullNatEntryId?: string;
  /**
   * @remarks
   * The names of the FULLNAT entries to be queried. You can query the names of up to 20 FULLNAT entries.
   * 
   * The name must be 2 to 128 characters in length, and must start with a letter or a Chinese character. It can contain digits, hyphens (-), and underscores (_).
   */
  fullNatEntryNames?: string[];
  /**
   * @remarks
   * The ID of the FULLNAT table to which the FULLNAT entries to be queried belong.
   * 
   * > You must specify at least one of the **FullNatTableId** and **NatGatewayId** parameters.
   * 
   * @example
   * fulltb-gw88z7hhlv43rmb26****
   */
  fullNatTableId?: string;
  /**
   * @remarks
   * The protocol type of the Redirection Port. Valid values:
   * 
   * - **TCP**: forwards TCP packets.
   * - **UDP**: forwards UDP packets.
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The ID of the NAT gateway to be queried.
   * 
   * > You must specify at least one of the **FullNatTableId** and **NatGatewayId** parameters.
   * 
   * @example
   * ngw-bp1uewa15k4iy5770****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The NAT IP address of the FULLNAT entry to be queried.
   * 
   * @example
   * 10.0.XX.XX
   */
  natIp?: string;
  /**
   * @remarks
   * The frontend port of the FULLNAT entry to be queried. Valid values: 1 to 65535.
   * 
   * @example
   * 443
   */
  natIpPort?: string;
  /**
   * @remarks
   * The IDs of the elastic network interfaces (ENIs) to be queried.
   */
  networkInterfaceIds?: string[];
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * 
   * - If this is the first query or no next query is to be sent, you do not need to specify this parameter.
   * - If a next query is to be sent, set the value to the **NextToken** value returned from the last API call.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the VPC NAT gateway to which the FULLNAT entries to be queried belong.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
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

