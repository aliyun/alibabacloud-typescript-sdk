// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAssetListResponseBodyAssets extends $dara.Model {
  /**
   * @remarks
   * The UID of the Alibaba Cloud account.
   * 
   * > The UID of the management account to which the member account belongs.
   * 
   * @example
   * 158039427902****
   */
  aliUid?: number;
  /**
   * @remarks
   * The ID of the instance that is associated with the asset.
   * 
   * @example
   * i-8vbdrjrxzt78****
   */
  bindInstanceId?: string;
  /**
   * @remarks
   * The name of the instance that is associated with the asset.
   * 
   * @example
   * instance01
   */
  bindInstanceName?: string;
  /**
   * @remarks
   * The time when the asset was discovered by Cloud Firewall, in YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2023-02-28 10:29:58
   */
  createTimeStamp?: string;
  /**
   * @remarks
   * The public IP address of the asset.
   * 
   * @example
   * 192.0.XX.XX
   */
  internetAddress?: string;
  /**
   * @remarks
   * The private IP address of the asset.
   * 
   * @example
   * 192.168.XX.XX
   */
  intranetAddress?: string;
  /**
   * @remarks
   * The IP version of the asset. Valid values:
   * 
   * Values:
   * 
   * - **4**: An IPv4 address.
   * 
   * - **6**: An IPv6 address.
   * 
   * @example
   * 4
   */
  ipVersion?: number;
  /**
   * @remarks
   * The amount of outbound traffic from the asset in the last 7 days, in bytes.
   * 
   * @example
   * 0
   */
  last7DayOutTrafficBytes?: number;
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
   * The name of the asset instance.
   * 
   * @example
   * instance01
   */
  name?: string;
  /**
   * @remarks
   * A tag that indicates how recently the asset was discovered. Valid values:
   * 
   * - **discovered in 1 hour**: The asset was discovered within the last hour.
   * 
   * - **discovered in 1 day**: The asset was discovered within the last 24 hours.
   * 
   * - **discovered in 7 days**: The asset was discovered within the last 7 days.
   * 
   * @example
   * discovered in 1 hour
   */
  newResourceTag?: string;
  /**
   * @remarks
   * Additional information about the asset. Valid values:
   * 
   * - **REGION_NOT_SUPPORT**: The region is not supported.
   * 
   * - **NETWORK_NOT_SUPPORT**: The network type is not supported.
   * 
   * @example
   * REGION_NOT_SUPPORT
   */
  note?: string;
  /**
   * @remarks
   * The protection status of the asset. Valid values:
   * 
   * - **open**: Protected.
   * 
   * - **opening**: Enabling protection.
   * 
   * - **closed**: Not protected.
   * 
   * - **closing**: Disabling protection.
   * 
   * @example
   * open
   */
  protectStatus?: string;
  /**
   * @remarks
   * The region ID of the asset.
   * 
   * @example
   * cn-hangzhou
   */
  regionID?: string;
  /**
   * @remarks
   * Indicates whether the asset\\"s region supports Cloud Firewall protection. Valid values:
   * 
   * - **enable**: Supported.
   * 
   * - **disable**: Not supported.
   * 
   * @example
   * enable
   */
  regionStatus?: string;
  /**
   * @remarks
   * The ID of the asset instance.
   * 
   * @example
   * i-8vbdrjrxzt78****
   */
  resourceInstanceId?: string;
  /**
   * @remarks
   * The type of the asset. Valid values:
   * 
   * - **BastionHostEgressIP**: The egress IP address of a bastion host.
   * 
   * - **BastionHostIngressIP**: The ingress IP address of a bastion host.
   * 
   * - **EcsEIP**: The EIP of an ECS instance.
   * 
   * - **EcsPublicIP**: The public IP address of an ECS instance.
   * 
   * - **EIP**: A standalone EIP.
   * 
   * - **EniEIP**: The EIP of an elastic network interface (ENI).
   * 
   * - **NatEIP**: The EIP of a NAT gateway.
   * 
   * - **SlbEIP**: The EIP of a Classic Load Balancer (CLB) instance.
   * 
   * - **SlbPublicIP**: The public IP address of a Classic Load Balancer (CLB) instance.
   * 
   * - **NatPublicIP**: The public IP address of a NAT gateway.
   * 
   * - **HAVIP**: A high-availability virtual IP (HAVIP).
   * 
   * - **NlbEIP**: The EIP of a Network Load Balancer (NLB) instance.
   * 
   * - **ApiGatewayEIP**: The EIP of an API Gateway instance.
   * 
   * - **AlbEIP**: The EIP of an Application Load Balancer (ALB) instance.
   * 
   * - **AiGatewayEIP**: The EIP of an AI Gateway instance.
   * 
   * - **GaEIP**: The EIP of a Global Accelerator (GA) instance.
   * 
   * - **SwasEIP**: The public IP address of a Simple Application Server instance.
   * 
   * - **EcdEIP**: The public IP address of an Elastic Desktop Service (EDS) instance.
   * 
   * - **BastionHostIP**: The IP address of a bastion host.
   * 
   * @example
   * EIP
   */
  resourceType?: string;
  /**
   * @remarks
   * The risk level of the asset. Valid values:
   * 
   * - **low**: Low risk.
   * 
   * - **middle**: Medium risk.
   * 
   * - **high**: High risk.
   * 
   * > This parameter is returned only if the `UserType` parameter is set to `free`.
   * 
   * @example
   * low
   */
  riskLevel?: string;
  /**
   * @remarks
   * Indicates whether data leak prevention is enabled.
   * 
   * @example
   * open
   */
  sensitiveDataStatus?: string;
  /**
   * @remarks
   * The status of the security group policy. Valid values:
   * 
   * - **pass**: The policy is applied.
   * 
   * - **block**: The policy is not applied.
   * 
   * - **unsupport**: Not supported.
   * 
   * @example
   * block
   */
  sgStatus?: string;
  /**
   * @remarks
   * The timestamp of the last security group status check. Unit: seconds.
   * 
   * @example
   * 1615082937
   */
  sgStatusTime?: number;
  /**
   * @remarks
   * Indicates whether the asset supports traffic redirection. Valid values:
   * 
   * - **enable**: Traffic redirection is supported.
   * 
   * - **disable**: Traffic redirection is not supported.
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

export class DescribeAssetListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the assets protected by Cloud Firewall.
   */
  assets?: DescribeAssetListResponseBodyAssets[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of assets protected by Cloud Firewall.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      assets: 'Assets',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assets: { 'type': 'array', 'itemType': DescribeAssetListResponseBodyAssets },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.assets)) {
      $dara.Model.validateArray(this.assets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

