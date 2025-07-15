// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNatIpCidrsResponseBodyNatIpCidrs extends $dara.Model {
  /**
   * @remarks
   * The time when the CIDR block was created.
   * 
   * @example
   * 2021-06-28T20:50Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Indicates whether the CIDR block is the default CIDR block of the NAT gateway. Valid values:
   * 
   * *   **true**: The CIDR block is the default CIDR block of the NAT gateway.
   * *   **false**: The CIDR block is not the default CIDR block of the NAT gateway.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The ID of the VPC NAT gateway.
   * 
   * @example
   * ngw-gw8v16wgvtq26vh59****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The CIDR block of the NAT gateway.
   * 
   * @example
   * 172.16.0.0/24
   */
  natIpCidr?: string;
  /**
   * @remarks
   * The description of the CIDR block of the NAT gateway.
   * 
   * @example
   * test
   */
  natIpCidrDescription?: string;
  /**
   * @remarks
   * The ID of the CIDR block of the NAT gateway.
   * 
   * @example
   * vpcnatcidr-gw8ov42ei6xh1jys2****
   */
  natIpCidrId?: string;
  /**
   * @remarks
   * The name of the CIDR block of the NAT gateway.
   * 
   * @example
   * Name
   */
  natIpCidrName?: string;
  /**
   * @remarks
   * The status of the CIDR block of the NAT gateway. If **Available** is returned, it indicates that the CIDR block is available.
   * 
   * @example
   * Available
   */
  natIpCidrStatus?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      isDefault: 'IsDefault',
      natGatewayId: 'NatGatewayId',
      natIpCidr: 'NatIpCidr',
      natIpCidrDescription: 'NatIpCidrDescription',
      natIpCidrId: 'NatIpCidrId',
      natIpCidrName: 'NatIpCidrName',
      natIpCidrStatus: 'NatIpCidrStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      isDefault: 'boolean',
      natGatewayId: 'string',
      natIpCidr: 'string',
      natIpCidrDescription: 'string',
      natIpCidrId: 'string',
      natIpCidrName: 'string',
      natIpCidrStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNatIpCidrsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The CIDR blocks of the NAT gateway.
   */
  natIpCidrs?: ListNatIpCidrsResponseBodyNatIpCidrs[];
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * 
   * *   If the value of **NextToken** is not returned, it indicates that no next query is to be sent.
   * *   If the value of **NextToken** is returned, the value indicates the token that is used for the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7479A224-4A28-4895-9604-11F48BCE6A88
   */
  requestId?: string;
  /**
   * @remarks
   * The number of CIDR blocks that are returned.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      natIpCidrs: 'NatIpCidrs',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natIpCidrs: { 'type': 'array', 'itemType': ListNatIpCidrsResponseBodyNatIpCidrs },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.natIpCidrs)) {
      $dara.Model.validateArray(this.natIpCidrs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

