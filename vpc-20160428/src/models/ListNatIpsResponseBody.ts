// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNatIpsResponseBodyNatIps extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the IP prefix to which the NAT IP address belongs.
   * 
   * @example
   * 192.168.0.0/28
   */
  ipv4Prefix?: string;
  /**
   * @remarks
   * Indicates whether the NAT IP address is the default one. Valid values:
   * 
   * - **true**: The NAT IP address is the default one.
   * 
   * - **false**: The NAT IP address is not the default one.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The instance ID of the VPC NAT gateway to which the NAT IP address belongs.
   * 
   * @example
   * ngw-gw8v16wgvtq26vh59****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The NAT IP address.
   * 
   * @example
   * 192.168.0.126
   */
  natIp?: string;
  /**
   * @remarks
   * The CIDR block to which the NAT IP address belongs.
   * 
   * @example
   * 192.168.0.0/24
   */
  natIpCidr?: string;
  /**
   * @remarks
   * The description of the NAT IP address.
   * 
   * @example
   * default
   */
  natIpDescription?: string;
  /**
   * @remarks
   * The instance ID of the NAT IP address.
   * 
   * @example
   * vpcnatip-gw8a863sut1zijxh0****
   */
  natIpId?: string;
  /**
   * @remarks
   * The name of the NAT IP address.
   * 
   * @example
   * default
   */
  natIpName?: string;
  /**
   * @remarks
   * The status of the NAT IP address. Valid values:
   * 
   * - **Available**: available.
   * - **Deleted**: deleted.
   * - **Deleting**: being deleted.
   * - **Creating**: being created.
   * - **Associated**: associated with an SNAT or DNAT entry.
   * - **Associating**: being associated with an SNAT or DNAT entry.
   * 
   * @example
   * Available
   */
  natIpStatus?: string;
  static names(): { [key: string]: string } {
    return {
      ipv4Prefix: 'Ipv4Prefix',
      isDefault: 'IsDefault',
      natGatewayId: 'NatGatewayId',
      natIp: 'NatIp',
      natIpCidr: 'NatIpCidr',
      natIpDescription: 'NatIpDescription',
      natIpId: 'NatIpId',
      natIpName: 'NatIpName',
      natIpStatus: 'NatIpStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4Prefix: 'string',
      isDefault: 'boolean',
      natGatewayId: 'string',
      natIp: 'string',
      natIpCidr: 'string',
      natIpDescription: 'string',
      natIpId: 'string',
      natIpName: 'string',
      natIpStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNatIpsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of NAT IP addresses.
   */
  natIps?: ListNatIpsResponseBodyNatIps[];
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * - If **NextToken** is empty, no next query exists.
   * - If **NextToken** is returned, the value indicates the token for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7E78CEEA-BF8F-44D1-9DCD-D9141135B71E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of NAT IP addresses returned.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      natIps: 'NatIps',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natIps: { 'type': 'array', 'itemType': ListNatIpsResponseBodyNatIps },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.natIps)) {
      $dara.Model.validateArray(this.natIps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

