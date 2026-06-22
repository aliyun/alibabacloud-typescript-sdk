// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAssetListRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in a paginated query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The IP version of the assets protected by Cloud Firewall. Valid values:
   * 
   * - **4** (default): IPv4.
   * - **6**: IPv6.
   * 
   * @example
   * 4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The language type of the response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the Cloud Firewall member account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: number;
  /**
   * @remarks
   * The time when the asset was discovered. Valid values:
   * - **discovered in 1 hour**: The asset was discovered within 1 hour.
   * - **discovered in 1 day**: The asset was discovered within 1 day.
   * - **discovered in 7 days**: The asset was discovered within 7 days.
   * 
   * @example
   * discovered in 1 hour
   */
  newResourceTag?: string;
  /**
   * @remarks
   * Specifies whether to query outbound traffic information.
   * 
   * @example
   * true
   */
  outStatistic?: string;
  /**
   * @remarks
   * The number of Cloud Firewall-protected assets to display on each page in a paginated query.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The region ID of the Cloud Firewall.
   * 
   * > For more information about regions supported by Cloud Firewall, see [Supported regions](https://help.aliyun.com/document_detail/195657.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The asset type. Valid values:
   * 
   * - **BastionHostEgressIP**: Bastion host egress IP.
   * - **BastionHostIngressIP**: Bastion host ingress IP.
   * - **EcsEIP**: ECS EIP.
   * - **EcsPublicIP**: ECS public IP.
   * - **EIP**: Elastic IP address.
   * - **EniEIP**: Elastic network interface EIP.
   * - **NatEIP**: NAT EIP.
   * - **SlbEIP**: SLB EIP (CLB EIP).
   * - **SlbPublicIP**: SLB public IP (CLB public IP).
   * - **NatPublicIP**: NAT public IP.
   * - **HAVIP**: High-availability virtual IP.
   * - **NlbEIP**: NLB EIP.
   * - **ApiGatewayEIP**: API Gateway public IP.
   * - **AlbEIP**: ALB EIP.
   * - **AiGatewayEIP**: AI Gateway public IP.
   * - **GaEIP**: GA EIP.
   * - **SwasEIP**: Simple Application Server public IP.
   * - **EcdEIP**: Elastic Desktop Service public IP.
   * - **BastionHostIP**: Bastion host IP.
   * 
   * @example
   * EIP
   */
  resourceType?: string;
  /**
   * @remarks
   * The IP address or instance ID of the asset.
   * 
   * @example
   * 192.0.XX.XX
   */
  searchItem?: string;
  /**
   * @remarks
   * The status of data leakage detection.
   * 
   * @example
   * open
   */
  sensitiveStatus?: string;
  /**
   * @remarks
   * The security group policy status. Valid values:
   * 
   * - **pass**: Delivered.
   * - **block**: Not delivered.
   * - **unsupport**: Not supported.
   * > If this parameter is not set, all security group policy statuses are queried.
   * 
   * @example
   * pass
   */
  sgStatus?: string;
  /**
   * @remarks
   * The Cloud Firewall status. Valid values:
   * 
   * - **open**: Protected.
   * - **opening**: Protection enabling.
   * - **closed**: Not protected.
   * - **closing**: Protection disabling.
   * 
   * > If this parameter is not set, all firewall statuses are queried.
   * 
   * @example
   * open
   */
  status?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * eip
   * 
   * @deprecated
   */
  type?: string;
  /**
   * @remarks
   * The user type. Valid values:
   * 
   * - **buy** (default): Paid user.
   * - **free**: Free user.
   * 
   * @example
   * buy
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      ipVersion: 'IpVersion',
      lang: 'Lang',
      memberUid: 'MemberUid',
      newResourceTag: 'NewResourceTag',
      outStatistic: 'OutStatistic',
      pageSize: 'PageSize',
      regionNo: 'RegionNo',
      resourceType: 'ResourceType',
      searchItem: 'SearchItem',
      sensitiveStatus: 'SensitiveStatus',
      sgStatus: 'SgStatus',
      status: 'Status',
      type: 'Type',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      ipVersion: 'string',
      lang: 'string',
      memberUid: 'number',
      newResourceTag: 'string',
      outStatistic: 'string',
      pageSize: 'string',
      regionNo: 'string',
      resourceType: 'string',
      searchItem: 'string',
      sensitiveStatus: 'string',
      sgStatus: 'string',
      status: 'string',
      type: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

