// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatFirewallAclGroupListResponseBodyNatFirewalls extends $dara.Model {
  /**
   * @remarks
   * The number of policies in the access control policy group of the NAT firewall.
   * 
   * @example
   * 32
   */
  aclRuleCount?: number;
  /**
   * @remarks
   * Indicates whether the NAT firewall is the default one.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The ID of the NAT Gateway.
   * 
   * @example
   * ngw-2zed6z6qkd7ogc****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The name of the NAT Gateway.
   * 
   * @example
   * ngw-test
   */
  natGatewayName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionNo?: string;
  static names(): { [key: string]: string } {
    return {
      aclRuleCount: 'AclRuleCount',
      isDefault: 'IsDefault',
      natGatewayId: 'NatGatewayId',
      natGatewayName: 'NatGatewayName',
      regionNo: 'RegionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclRuleCount: 'number',
      isDefault: 'boolean',
      natGatewayId: 'string',
      natGatewayName: 'string',
      regionNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatFirewallAclGroupListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of NAT firewalls.
   */
  natFirewalls?: DescribeNatFirewallAclGroupListResponseBodyNatFirewalls[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F06DE24D-6EB9-5F55-B588-7BB946DF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      natFirewalls: 'NatFirewalls',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natFirewalls: { 'type': 'array', 'itemType': DescribeNatFirewallAclGroupListResponseBodyNatFirewalls },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.natFirewalls)) {
      $dara.Model.validateArray(this.natFirewalls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

