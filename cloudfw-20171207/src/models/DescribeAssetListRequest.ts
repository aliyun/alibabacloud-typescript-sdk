// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAssetListRequest extends $dara.Model {
  /**
   * @remarks
   * The page number to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The IP version of the asset. Valid values:
   * 
   * - **4** (default): IPv4
   * 
   * - **6**: IPv6
   * 
   * @example
   * 4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: number;
  /**
   * @remarks
   * Filters for assets discovered within a specific time window. Valid values:
   * 
   * - **discovered in 1 hour**: The asset was added within the last hour.
   * 
   * - **discovered in 1 day**: The asset was added within the last day.
   * 
   * - **discovered in 7 days**: The asset was added within the last 7 days.
   * 
   * @example
   * discovered in 1 hour
   */
  newResourceTag?: string;
  /**
   * @remarks
   * Specifies whether to query information about outbound traffic.
   * 
   * @example
   * true
   */
  outStatistic?: string;
  /**
   * @remarks
   * The number of assets to return per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The region ID of your Cloud Firewall instance.
   * 
   * > For more information about the regions that Cloud Firewall supports, see [Supported regions](https://help.aliyun.com/document_detail/195657.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The asset type. Valid values:
   * 
   * - **BastionHostEgressIP**: The egress IP address of a Bastionhost instance.
   * 
   * - **BastionHostIngressIP**: The ingress IP address of a Bastionhost instance.
   * 
   * - **EcsEIP**: The Elastic IP Address (EIP) of an ECS instance.
   * 
   * - **EcsPublicIP**: The public IP address of an ECS instance.
   * 
   * - **EIP**: An Elastic IP Address (EIP).
   * 
   * - **EniEIP**: The EIP of an elastic network interface (ENI).
   * 
   * - **NatEIP**: The EIP of a NAT Gateway instance.
   * 
   * - **SlbEIP**: The EIP of a Server Load Balancer (SLB) or Classic Load Balancer (CLB) instance.
   * 
   * - **SlbPublicIP**: The public IP address of a Server Load Balancer (SLB) or Classic Load Balancer (CLB) instance.
   * 
   * - **NatPublicIP**: The public IP address of a NAT Gateway instance.
   * 
   * - **HAVIP**: A High-availability Virtual IP (HAVIP).
   * 
   * - **NlbEIP**: The EIP of a Network Load Balancer (NLB) instance.
   * 
   * - **ApiGatewayEIP**: The public IP address of an API Gateway instance.
   * 
   * - **AlbEIP**: The EIP of an Application Load Balancer (ALB) instance.
   * 
   * - **AiGatewayEIP**: The public IP address of an AI Gateway instance.
   * 
   * - **GaEIP**: The EIP of a Global Accelerator (GA) instance.
   * 
   * - **SwasEIP**: The public IP address of a Simple Application Server instance.
   * 
   * - **EcdEIP**: The public IP address of a Wuying instance.
   * 
   * - **BastionHostIP**: The IP address of a Bastionhost instance.
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
   * The status of the data leak detection feature.
   * 
   * @example
   * open
   */
  sensitiveStatus?: string;
  /**
   * @remarks
   * The status of the security group policy. Valid values:
   * 
   * - **pass**: The security group policy is enforced.
   * 
   * - **block**: The security group policy is not enforced.
   * 
   * - **unsupport**: The asset does not support security group policies.
   * 
   * > If you do not specify this parameter, assets are queried regardless of the security group policy status.
   * 
   * @example
   * pass
   */
  sgStatus?: string;
  /**
   * @remarks
   * The protection status of the asset. Valid values:
   * 
   * - **open**: Protection is enabled.
   * 
   * - **opening**: Protection is being enabled.
   * 
   * - **closed**: Protection is disabled.
   * 
   * - **closing**: Protection is being disabled.
   * 
   * > If you do not specify this parameter, assets are queried regardless of their protection status.
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
   */
  type?: string;
  /**
   * @remarks
   * The type of the user. Valid values:
   * 
   * - **buy** (default): A user with a paid subscription.
   * 
   * - **free**: A user on the free tier.
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

