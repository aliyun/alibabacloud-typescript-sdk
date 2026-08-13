// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatFirewallListRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member account of the current Alibaba Cloud account.
   * 
   * @example
   * 147783******
   */
  memberUid?: number;
  /**
   * @remarks
   * The NAT gateway ID.
   * 
   * @example
   * ngw-bp123456g******
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The page number of the current page.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of NAT firewalls to display on each page in a paged query.
   * 
   * Default value: **10**, which indicates that each page contains **10** results. Maximum value: **50**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The NAT firewall ID.
   * 
   * @example
   * proxy-nat97a******
   */
  proxyId?: string;
  /**
   * @remarks
   * The NAT firewall name. The name can contain uppercase and lowercase letters, Chinese characters, digits, and underscores (_). The name must be 4 to 50 characters in length and cannot start with an underscore.
   * 
   * @example
   * nat-firewall
   */
  proxyName?: string;
  /**
   * @remarks
   * The region ID of the VPC.
   * 
   * > For more information about the regions supported by Cloud Firewall, see [Supported regions](https://help.aliyun.com/document_detail/195657.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The Cloud Firewall status. Valid values:
   * 
   * - configuring: being created
   * - deleting: being deleted
   * - normal: normal
   * - abnormal: abnormal
   * - opening: being enabled
   * - closing: being disabled
   * - closed: disabled
   * 
   * @example
   * normal
   */
  status?: string;
  /**
   * @remarks
   * The VPC-connected instance ID.
   * 
   * @example
   * vpc-8vbwbo90rq0anm6t****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      memberUid: 'MemberUid',
      natGatewayId: 'NatGatewayId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      proxyId: 'ProxyId',
      proxyName: 'ProxyName',
      regionNo: 'RegionNo',
      status: 'Status',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      memberUid: 'number',
      natGatewayId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      proxyId: 'string',
      proxyName: 'string',
      regionNo: 'string',
      status: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

