// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityProxyRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for the request and response messages. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member accounts of the current Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * @example
   * ngw-zm0h3c1exm5bifuorg8c5
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The page number of the current page.
   * 
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * The maximum number of entries per page in a paged query. Maximum value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The ID of the NAT firewall.
   * 
   * @example
   * proxy-nat80d763eb0dee4eacaec9
   */
  proxyId?: string;
  /**
   * @remarks
   * The name of the NAT firewall. The name can contain uppercase and lowercase letters, Chinese characters, digits, and underscores (_). The name must be 4 to 50 characters in length and cannot start with an underscore.
   * 
   * @example
   * nat-idmp-fir
   */
  proxyName?: string;
  /**
   * @remarks
   * The region ID of the VPC.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The status of Cloud Firewall. Valid values:
   * 
   * - **configuring**: Being created.
   * - **deleting**: Being deleted.
   * - **normal**: Normal.
   * - **abnormal**: Abnormal.
   * - **opening**: Being enabled.
   * - **closing**: Being disabled.
   * - **closed**: Disabled.
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
      memberUid: 'string',
      natGatewayId: 'string',
      pageNo: 'string',
      pageSize: 'string',
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

