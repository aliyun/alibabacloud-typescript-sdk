// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFullNatEntriesResponseBodyFullNatEntries extends $dara.Model {
  /**
   * @remarks
   * The backend domain name for FULLNAT address translation in the FULLNAT entry.
   * 
   * @example
   * xxx.com
   */
  accessDomain?: string;
  /**
   * @remarks
   * The backend IP address for FULLNAT address translation in the FULLNAT entry.
   * 
   * @example
   * 192.168.XX.XX
   */
  accessIp?: string;
  /**
   * @remarks
   * The backend port for port mapping in the FULLNAT entry. Valid values: **1** to **65535**.
   * 
   * @example
   * 80
   */
  accessPort?: string;
  /**
   * @remarks
   * The time when the FULLNAT entry was created.
   * 
   * @example
   * 2021-10-27T02:44:40Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The IP address resolved from the backend domain name for address translation in the FULLNAT entry.
   * 
   * @example
   * 192.168.XX.XX
   */
  domainResolve?: string;
  /**
   * @remarks
   * The description of the FULLNAT entry.
   * 
   * The description must be 2 to 128 characters in length, and must start with a letter or Chinese character. The description cannot start with `http://` or `https://`.
   * 
   * @example
   * abc
   */
  fullNatEntryDescription?: string;
  /**
   * @remarks
   * The ID of the FULLNAT entry.
   * 
   * @example
   * fullnat-gw8fz23jezpbblf1j****
   */
  fullNatEntryId?: string;
  /**
   * @remarks
   * The name of the FULLNAT entry.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). The name must start with a letter or Chinese character.
   * 
   * @example
   * test
   */
  fullNatEntryName?: string;
  /**
   * @remarks
   * The status of the FULLNAT entry. Valid values:
   * 
   * - **Pending**: being configured.
   * - **Available**: available.
   * - **Deleting**: being deleted.
   * - **Deleted**: deleted.
   * 
   * @example
   * Available
   */
  fullNatEntryStatus?: string;
  /**
   * @remarks
   * The ID of the FULLNAT table to which the FULLNAT entry belongs.
   * 
   * @example
   * fulltb-gw88z7hhlv43rmb26****
   */
  fullNatTableId?: string;
  /**
   * @remarks
   * The forwarding protocol type. Valid values: 
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
   * The NAT IP address that provides address translation in the FULLNAT entry.
   * 
   * @example
   * 192.168.XX.XX
   */
  natIp?: string;
  /**
   * @remarks
   * The frontend port for port mapping in the FULLNAT entry. Valid values: **1** to **65535**.
   * 
   * @example
   * 80
   */
  natIpPort?: string;
  /**
   * @remarks
   * The elastic network interface (ENI) ID.
   * 
   * @example
   * eni-gw80wedm8pq0tpr2****
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The type of the elastic network interface (ENI). The value is **Endpoint** (reverse endpoint).
   * 
   * @example
   * Endpoint
   */
  networkInterfaceType?: string;
  static names(): { [key: string]: string } {
    return {
      accessDomain: 'AccessDomain',
      accessIp: 'AccessIp',
      accessPort: 'AccessPort',
      creationTime: 'CreationTime',
      domainResolve: 'DomainResolve',
      fullNatEntryDescription: 'FullNatEntryDescription',
      fullNatEntryId: 'FullNatEntryId',
      fullNatEntryName: 'FullNatEntryName',
      fullNatEntryStatus: 'FullNatEntryStatus',
      fullNatTableId: 'FullNatTableId',
      ipProtocol: 'IpProtocol',
      natIp: 'NatIp',
      natIpPort: 'NatIpPort',
      networkInterfaceId: 'NetworkInterfaceId',
      networkInterfaceType: 'NetworkInterfaceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDomain: 'string',
      accessIp: 'string',
      accessPort: 'string',
      creationTime: 'string',
      domainResolve: 'string',
      fullNatEntryDescription: 'string',
      fullNatEntryId: 'string',
      fullNatEntryName: 'string',
      fullNatEntryStatus: 'string',
      fullNatTableId: 'string',
      ipProtocol: 'string',
      natIp: 'string',
      natIpPort: 'string',
      networkInterfaceId: 'string',
      networkInterfaceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFullNatEntriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of FULLNAT entries.
   */
  fullNatEntries?: ListFullNatEntriesResponseBodyFullNatEntries[];
  /**
   * @remarks
   * The ID of the FULLNAT table to which the queried FULLNAT entries belong.
   * 
   * @example
   * fullnat-gw8fz23jezpbblf1j****
   */
  fullNatTableId?: string;
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The instance ID of the VPC NAT gateway.
   * 
   * @example
   * ngw-gw8054kn57y3hq3bv****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * - If **NextToken** is empty, no next query exists.
   * - If **NextToken** is returned, the value indicates the token for the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F03E41F6-1A74-311F-8D98-124EEE9F37B8
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of FULLNAT entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      fullNatEntries: 'FullNatEntries',
      fullNatTableId: 'FullNatTableId',
      maxResults: 'MaxResults',
      natGatewayId: 'NatGatewayId',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullNatEntries: { 'type': 'array', 'itemType': ListFullNatEntriesResponseBodyFullNatEntries },
      fullNatTableId: 'string',
      maxResults: 'number',
      natGatewayId: 'string',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.fullNatEntries)) {
      $dara.Model.validateArray(this.fullNatEntries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

