// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAssetListResponseBodyAssets extends $dara.Model {
  /**
   * @remarks
   * The UID of the Alibaba Cloud account.
   * 
   * > The primary account of the Cloud Firewall member account.
   * 
   * @example
   * 158039427902****
   */
  aliUid?: number;
  /**
   * @remarks
   * The ID of the bound asset instance.
   * 
   * @example
   * i-8vbdrjrxzt78****
   */
  bindInstanceId?: string;
  /**
   * @remarks
   * The name of the bound asset instance.
   * 
   * @example
   * instance01
   */
  bindInstanceName?: string;
  /**
   * @remarks
   * The time when Cloud Firewall discovered the asset. Time format: YYYY-MM-DD HH:mm:ss.
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
   * The private IP address of the server.
   * 
   * @example
   * 192.168.XX.XX
   */
  intranetAddress?: string;
  /**
   * @remarks
   * The IP address version of the asset protected by Cloud Firewall.
   * 
   * Valid values:
   * 
   * - **4**: Indicates an IPv4 address.
   * 
   * - **6**: Indicates an IPv6 address.
   * 
   * @example
   * 4
   */
  ipVersion?: number;
  /**
   * @remarks
   * The outbound traffic in the last 7 days.
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
   * The instance name of the asset protected by Cloud Firewall.
   * 
   * @example
   * instance01
   */
  name?: string;
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
   * The remarks of the asset. Valid values:
   * 
   * - **REGION_NOT_SUPPORT**: Region not supported.
   * - **NETWORK_NOT_SUPPORT**: Network not supported.
   * 
   * @example
   * REGION_NOT_SUPPORT
   */
  note?: string;
  /**
   * @remarks
   * The firewall status. Valid values:
   * 
   * - **open**: Protected.
   * - **opening**: Protection enabling.
   * - **closed**: Not protected.
   * - **closing**: Protection disabling.
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
   * Indicates whether the region of the asset supports enabling Cloud Firewall protection. Valid values:
   * 
   * - **enable**: Supported.
   * - **disable**: Not supported.
   * 
   * @example
   * enable
   */
  regionStatus?: string;
  /**
   * @remarks
   * The asset instance ID.
   * 
   * @example
   * i-8vbdrjrxzt78****
   */
  resourceInstanceId?: string;
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
   * The risk level of the asset. Valid values:
   * 
   * - **low**: Low risk.
   * 
   * - **middle**: Medium risk.
   * 
   * - **hight**: High risk.
   * 
   * > This parameter is returned only when the value of UserType is free.
   * 
   * @example
   * low
   */
  riskLevel?: string;
  /**
   * @remarks
   * The status of data leakage detection.
   * 
   * @example
   * open
   */
  sensitiveDataStatus?: string;
  /**
   * @remarks
   * The security group policy. Valid values:
   * 
   * - **pass**: Delivered.
   * - **block**: Not delivered.
   * - **unsupport**: Not supported.
   * 
   * @example
   * block
   */
  sgStatus?: string;
  /**
   * @remarks
   * The last security group status detection time, in timestamp format. Unit: seconds.
   * 
   * @example
   * 1615082937
   */
  sgStatusTime?: number;
  /**
   * @remarks
   * The traffic diversion support status of the asset. Valid values:
   * 
   * - **enable**: Traffic diversion supported.
   * - **disable**: Traffic diversion not supported.
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
   * 
   * @deprecated
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
   * The information about assets protected by Cloud Firewall.
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

