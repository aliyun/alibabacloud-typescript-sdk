// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNatIpCidrsResponseBodyNatIpCidrs extends $dara.Model {
  /**
   * @remarks
   * The time when the NAT CIDR block was created.
   * 
   * @example
   * 2021-06-28T20:50Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Indicates whether the NAT CIDR block is the default NAT CIDR block. Valid values:
   * 
   * - **true**: The NAT CIDR block is the default NAT CIDR block.
   * - **false**: The NAT CIDR block is not the default NAT CIDR block.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The instance ID of the VPC NAT gateway to which the NAT CIDR block belongs.
   * 
   * @example
   * ngw-gw8v16wgvtq26vh59****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The NAT CIDR block.
   * 
   * @example
   * 172.16.0.0/24
   */
  natIpCidr?: string;
  /**
   * @remarks
   * The description of the NAT CIDR block.
   * 
   * @example
   * test
   */
  natIpCidrDescription?: string;
  /**
   * @remarks
   * The instance ID of the NAT CIDR block.
   * 
   * @example
   * vpcnatcidr-gw8ov42ei6xh1jys2****
   */
  natIpCidrId?: string;
  /**
   * @remarks
   * The name of the NAT CIDR block.
   * 
   * @example
   * Name
   */
  natIpCidrName?: string;
  /**
   * @remarks
   * The status of the NAT CIDR block. The value is **Available**, which indicates that the NAT CIDR block is available.
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
   * The list of NAT CIDR blocks.
   */
  natIpCidrs?: ListNatIpCidrsResponseBodyNatIpCidrs[];
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * - If **NextToken** is empty, no subsequent requests exist.
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
   * 7479A224-4A28-4895-9604-11F48BCE6A88
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of NAT CIDR block entries returned.
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

