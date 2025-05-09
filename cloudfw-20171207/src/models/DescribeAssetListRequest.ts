// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAssetListRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Valid values: 1 to 50.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The IP version of the asset that is protected by Cloud Firewall. Valid values:
   * 
   * *   **4**: IPv4 (default)
   * *   **6**: IPv6
   * 
   * @example
   * 4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member that is added to Cloud Firewall.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: number;
  /**
   * @remarks
   * The time when the asset was added. Valid values:
   * 
   * *   **discovered in 1 hour**: within one hour.
   * *   **discovered in 1 day**: within one day.
   * *   **discovered in 7 days**: within seven days.
   * 
   * @example
   * discovered in 1 hour
   */
  newResourceTag?: string;
  /**
   * @remarks
   * Whether to query external traffic information.
   * 
   * @example
   * true
   */
  outStatistic?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 50.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The region ID of your Cloud Firewall.
   * 
   * > For more information about the regions, see [Supported regions](https://help.aliyun.com/document_detail/195657.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The type of the asset. Valid values:
   * 
   * *   **BastionHostEgressIP**: the egress IP address of a bastion host
   * *   **BastionHostIngressIP**: the ingress IP address of a bastion host
   * *   **EcsEIP**: the elastic IP address (EIP) of an Elastic Compute Service (ECS) instance
   * *   **EcsPublicIP**: the public IP address of an ECS instance
   * *   **EIP**: the EIP
   * *   **EniEIP**: the EIP of an elastic network interface (ENI)
   * *   **NatEIP**: the EIP of a NAT gateway
   * *   **SlbEIP**: the EIP of a Server Load Balancer (SLB) instance or a Classic Load Balancer (CLB) instance
   * *   **SlbPublicIP**: the public IP address of an SLB instance or a CLB instance
   * *   **NatPublicIP**: the public IP address of a NAT gateway
   * *   **HAVIP**: the high-availability virtual IP address (HAVIP)
   * 
   * @example
   * EIP
   */
  resourceType?: string;
  /**
   * @remarks
   * The instance ID or IP address of the asset.
   * 
   * @example
   * 192.0.XX.XX
   */
  searchItem?: string;
  /**
   * @remarks
   * Data leakage detection activation status.
   * 
   * @example
   * open
   */
  sensitiveStatus?: string;
  /**
   * @remarks
   * The status of the security group policy. Valid values:
   * 
   * *   **pass**: delivered
   * *   **block**: undelivered
   * *   **unsupport**: unsupported
   * 
   * > If you do not specify this parameter, the assets on which security group policies in all states take effect are queried.
   * 
   * @example
   * pass
   */
  sgStatus?: string;
  /**
   * @remarks
   * The status of the firewall. Valid values:
   * 
   * *   **open**: The firewall is enabled.
   * *   **opening**: The firewall is being enabled.
   * *   **closed**: The firewall is disabled.
   * *   **closing**: The firewall is being disabled.
   * 
   * > If you do not specify this parameter, the assets that are configured for firewalls in all states are queried.
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
   * The edition of Cloud Firewall. Valid values:
   * 
   * *   **buy**: a paid edition (default)
   * *   **free**: Free Edition
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

