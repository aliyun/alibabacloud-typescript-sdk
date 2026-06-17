// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityProxyRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Valid values:
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
   * The UID of the member account within the current Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The ID of the NAT Gateway.
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
   * The maximum number of entries to return on each page. The maximum value is 50.
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
   * The name of the NAT firewall. The name must be 4 to 50 characters in length. It can contain letters, digits, underscores (_), and Chinese characters. It cannot start with an underscore (_).
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
   * The status of the Cloud Firewall. Valid values:
   * 
   * - **configuring**: The firewall is being created.
   * 
   * - **deleting**: The firewall is being deleted.
   * 
   * - **normal**: The firewall is running.
   * 
   * - **abnormal**: The firewall is not running as expected.
   * 
   * - **opening**: The firewall is being enabled.
   * 
   * - **closing**: The firewall is being disabled.
   * 
   * - **closed**: The firewall is disabled.
   * 
   * @example
   * normal
   */
  status?: string;
  /**
   * @remarks
   * The ID of the VPC instance.
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

