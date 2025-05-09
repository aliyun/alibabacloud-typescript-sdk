// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNatFirewallListResponseBodyNatFirewallListNatRouteEntryList } from "./DescribeNatFirewallListResponseBodyNatFirewallListNatRouteEntryList";


export class DescribeNatFirewallListResponseBodyNatFirewallList extends $dara.Model {
  /**
   * @remarks
   * The UID of the Alibaba Cloud account.
   * 
   * >  The value of this parameter indicates the management account to which the member is added.
   * 
   * @example
   * 19106481******
   */
  aliUid?: number;
  /**
   * @remarks
   * The cause of the error.
   * 
   * @example
   * Create Failed.
   */
  errorDetail?: string;
  /**
   * @remarks
   * The UID of the member in Cloud Firewall.
   * 
   * @example
   * 19106481******
   */
  memberUid?: number;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * @example
   * ngw-uf6tnblxip4qcxg******
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The name of the NAT gateway.
   * 
   * @example
   * nat-******
   */
  natGatewayName?: string;
  /**
   * @remarks
   * The default route entries of the NAT gateway.
   */
  natRouteEntryList?: DescribeNatFirewallListResponseBodyNatFirewallListNatRouteEntryList[];
  /**
   * @remarks
   * The ID of the NAT firewall.
   * 
   * @example
   * proxy-nat30******
   */
  proxyId?: string;
  /**
   * @remarks
   * The name of the NAT firewall.
   * 
   * @example
   * proxy-******
   */
  proxyName?: string;
  /**
   * @remarks
   * The status of the NAT firewall. Valid values:
   * 
   * *   configuring
   * *   deleting
   * *   normal
   * *   abnormal
   * *   opening
   * *   closing
   * *   closed
   * 
   * @example
   * normal
   */
  proxyStatus?: string;
  /**
   * @remarks
   * The region ID of your Cloud Firewall.
   * 
   * >  For more information about the supported regions of Cloud Firewall, see [Supported regions](https://help.aliyun.com/document_detail/195657.html).
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * Indicates whether the strict mode is enabled. Valid values: 1, which specifies yes, and 0, which specifies no.
   * 
   * @example
   * 0
   */
  strictMode?: number;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-2ze26ya******
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * @example
   * vpc-******
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      errorDetail: 'ErrorDetail',
      memberUid: 'MemberUid',
      natGatewayId: 'NatGatewayId',
      natGatewayName: 'NatGatewayName',
      natRouteEntryList: 'NatRouteEntryList',
      proxyId: 'ProxyId',
      proxyName: 'ProxyName',
      proxyStatus: 'ProxyStatus',
      regionId: 'RegionId',
      strictMode: 'StrictMode',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      errorDetail: 'string',
      memberUid: 'number',
      natGatewayId: 'string',
      natGatewayName: 'string',
      natRouteEntryList: { 'type': 'array', 'itemType': DescribeNatFirewallListResponseBodyNatFirewallListNatRouteEntryList },
      proxyId: 'string',
      proxyName: 'string',
      proxyStatus: 'string',
      regionId: 'string',
      strictMode: 'number',
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.natRouteEntryList)) {
      $dara.Model.validateArray(this.natRouteEntryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

