// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAssetListResponseBodyAssets extends $dara.Model {
  /**
   * @remarks
   * The UID of the Alibaba Cloud account.
   * 
   * >  The value of this parameter indicates the management account to which the member is added.
   * 
   * @example
   * 158039427902****
   */
  aliUid?: number;
  /**
   * @remarks
   * The ID of the cloud resource with which the asset is associated.
   * 
   * @example
   * i-8vbdrjrxzt78****
   */
  bindInstanceId?: string;
  /**
   * @remarks
   * The instance name of the asset.
   * 
   * @example
   * instance01
   */
  bindInstanceName?: string;
  /**
   * @remarks
   * The timestamp when the asset is added to Cloud Firewall.
   * 
   * @example
   * 2023-02-28 10:29:58
   */
  createTimeStamp?: string;
  /**
   * @remarks
   * The public IP address of the server.
   * 
   * @example
   * 192.0.XX.XX
   */
  internetAddress?: string;
  /**
   * @remarks
   * The internal IP address of the server.
   * 
   * @example
   * 192.168.XX.XX
   */
  intranetAddress?: string;
  /**
   * @remarks
   * The IP version of the asset that is protected by Cloud Firewall.
   * 
   * Valid values:
   * 
   * *   **4**: IPv4
   * *   **6**: IPv6
   * 
   * @example
   * 4
   */
  ipVersion?: number;
  /**
   * @remarks
   * Outbound traffic in the last 7 days.
   * 
   * @example
   * 0
   */
  last7DayOutTrafficBytes?: number;
  /**
   * @remarks
   * The UID of the member.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: number;
  /**
   * @remarks
   * The instance name of the asset that is protected by Cloud Firewall.
   * 
   * @example
   * instance01
   */
  name?: string;
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
   * The remarks of the asset. Valid values:
   * 
   * *   **REGION_NOT_SUPPORT**: The region is not supported.
   * *   **NETWORK_NOT_SUPPORT**: The network is not supported.
   * 
   * @example
   * REGION_NOT_SUPPORT
   */
  note?: string;
  /**
   * @remarks
   * The status of the firewall. Valid values:
   * 
   * *   **open**: enabled.
   * *   **opening**: being enabled.
   * *   **closed**: disabled.
   * *   **closing**: being disabled.
   * 
   * @example
   * open
   */
  protectStatus?: string;
  /**
   * @remarks
   * The ID of the region in which the asset resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionID?: string;
  /**
   * @remarks
   * Indicates whether the firewall is supported in the region in which the asset resides. Valid values:
   * 
   * *   **enable**: yes
   * *   **disable**: no
   * 
   * @example
   * enable
   */
  regionStatus?: string;
  /**
   * @remarks
   * The instance ID of the asset.
   * 
   * @example
   * i-8vbdrjrxzt78****
   */
  resourceInstanceId?: string;
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
   * *   **SlbEIP**: the EIP of a Server Load Balancer (SLB) instance
   * *   **SlbPublicIP**: the public IP address of an SLB instance
   * *   **NatPublicIP**: the public IP address of a NAT gateway
   * *   **HAVIP**: the high-availability virtual IP address (HAVIP)
   * 
   * @example
   * EIP
   */
  resourceType?: string;
  /**
   * @remarks
   * The risk level of the asset. Valid values:
   * 
   * *   **low**: low
   * *   **middle**: medium
   * *   **hight**: high
   * 
   * >  The value of this parameter is returned only when the UserType parameter is set to free.
   * 
   * @example
   * low
   */
  riskLevel?: string;
  /**
   * @remarks
   * Data leakage detection enabled status.
   * 
   * @example
   * open
   */
  sensitiveDataStatus?: string;
  /**
   * @remarks
   * The status of the security group policy. Valid values:
   * 
   * *   **pass**: applied
   * *   **block**: not applied
   * *   **unsupport**: unsupported
   * 
   * @example
   * block
   */
  sgStatus?: string;
  /**
   * @remarks
   * The time when the status of the security group was last checked. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1615082937
   */
  sgStatusTime?: number;
  /**
   * @remarks
   * Indicates whether traffic redirection is supported for the asset. Valid values:
   * 
   * *   **enable**: yes
   * *   **disable**: no
   * 
   * @example
   * enable
   */
  syncStatus?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * eip
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      bindInstanceId: 'BindInstanceId',
      bindInstanceName: 'BindInstanceName',
      createTimeStamp: 'CreateTimeStamp',
      internetAddress: 'InternetAddress',
      intranetAddress: 'IntranetAddress',
      ipVersion: 'IpVersion',
      last7DayOutTrafficBytes: 'Last7DayOutTrafficBytes',
      memberUid: 'MemberUid',
      name: 'Name',
      newResourceTag: 'NewResourceTag',
      note: 'Note',
      protectStatus: 'ProtectStatus',
      regionID: 'RegionID',
      regionStatus: 'RegionStatus',
      resourceInstanceId: 'ResourceInstanceId',
      resourceType: 'ResourceType',
      riskLevel: 'RiskLevel',
      sensitiveDataStatus: 'SensitiveDataStatus',
      sgStatus: 'SgStatus',
      sgStatusTime: 'SgStatusTime',
      syncStatus: 'SyncStatus',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      bindInstanceId: 'string',
      bindInstanceName: 'string',
      createTimeStamp: 'string',
      internetAddress: 'string',
      intranetAddress: 'string',
      ipVersion: 'number',
      last7DayOutTrafficBytes: 'number',
      memberUid: 'number',
      name: 'string',
      newResourceTag: 'string',
      note: 'string',
      protectStatus: 'string',
      regionID: 'string',
      regionStatus: 'string',
      resourceInstanceId: 'string',
      resourceType: 'string',
      riskLevel: 'string',
      sensitiveDataStatus: 'string',
      sgStatus: 'string',
      sgStatusTime: 'number',
      syncStatus: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

