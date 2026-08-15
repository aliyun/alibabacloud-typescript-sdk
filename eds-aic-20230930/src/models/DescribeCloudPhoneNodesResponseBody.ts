// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudPhoneNodesResponseBodyNodeModelBizTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * keyname
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * valuename
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudPhoneNodesResponseBodyNodeModelNetworkInfos extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the bandwidth plan.
   * 
   * @example
   * cbwp-hn3tj409amvamz8mf****
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The bandwidth type.
   * 
   * @example
   * cbwp_ecd
   */
  bandwidthPackageType?: string;
  /**
   * @remarks
   * The network ID.
   * 
   * @example
   * cn-hangzhou+dir-avcuocx9805oq****
   */
  networkId?: string;
  /**
   * @remarks
   * The network type of the instance.
   * 
   * @example
   * network_pro_ecd
   */
  networkType?: string;
  /**
   * @remarks
   * The vSwitch ID in the VPC.
   * 
   * @example
   * vsw-j6cjgev6fv3ftw4f0****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthPackageId: 'BandwidthPackageId',
      bandwidthPackageType: 'BandwidthPackageType',
      networkId: 'NetworkId',
      networkType: 'NetworkType',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageId: 'string',
      bandwidthPackageType: 'string',
      networkId: 'string',
      networkType: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudPhoneNodesResponseBodyNodeModelPhoneDataInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the independent device storage.
   * 
   * @example
   * pd-dhusabisshj****
   */
  phoneDataId?: string;
  /**
   * @remarks
   * The storage capacity of the independent device storage. Unit: GiB.
   * 
   * @example
   * 20
   */
  phoneDataVolume?: number;
  static names(): { [key: string]: string } {
    return {
      phoneDataId: 'PhoneDataId',
      phoneDataVolume: 'PhoneDataVolume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneDataId: 'string',
      phoneDataVolume: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudPhoneNodesResponseBodyNodeModelTags extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudPhoneNodesResponseBodyNodeModel extends $dara.Model {
  /**
   * @remarks
   * The bandwidth plan ID.
   * 
   * @example
   * cbwp-7xvrl7axet2qg6yia******
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The status of the bandwidth plan. Valid values:
   * - 0: initializing
   * - 1: normal
   * - 2: deleted
   * 
   * @example
   * 1
   */
  bandwidthPackageStatus?: string;
  /**
   * @remarks
   * The bandwidth type.
   * 
   * @example
   * cbwp_ecd
   */
  bandwidthPackageType?: string;
  /**
   * @remarks
   * The array of tag information.
   */
  bizTags?: DescribeCloudPhoneNodesResponseBodyNodeModelBizTags[];
  channel?: string;
  /**
   * @remarks
   * The billing type.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 2
   */
  cpu?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-11-13 02:03:14
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The expiration time of the subscription matrix.
   * 
   * @example
   * 2025-03-09 02:00:34
   */
  gmtExpired?: string;
  /**
   * @remarks
   * The time when the matrix was last modified.
   * 
   * @example
   * 2025-02-13 02:03:14
   */
  gmtModified?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ac.max
   */
  instanceType?: string;
  /**
   * @remarks
   * The memory size. Unit: GB.
   * 
   * @example
   * 32
   */
  memory?: number;
  /**
   * @remarks
   * The network ID.
   * 
   * @example
   * cn-hangzhou+dir-5mwr9azebliva****
   */
  networkId?: string;
  /**
   * @remarks
   * The network-related information.
   */
  networkInfos?: DescribeCloudPhoneNodesResponseBodyNodeModelNetworkInfos[];
  /**
   * @remarks
   * The network type of the instance.
   * 
   * @example
   * network_pro_ecd
   */
  networkType?: string;
  /**
   * @remarks
   * The cloud phone matrix ID.
   * 
   * @example
   * cpn-ehs0yoedq8ntm****
   */
  nodeId?: string;
  /**
   * @remarks
   * The name of the cloud phone matrix.
   * 
   * @example
   * node_name
   */
  nodeName?: string;
  packageId?: string;
  /**
   * @remarks
   * The number of instances provisioned under the cloud phone matrix.
   * 
   * @example
   * 25
   */
  phoneCount?: number;
  /**
   * @remarks
   * The independent device storage information.
   */
  phoneDataInfo?: DescribeCloudPhoneNodesResponseBodyNodeModelPhoneDataInfo;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The height of the resolution. Unit: pixels.
   * 
   * @example
   * 1280
   */
  resolutionHeight?: number;
  /**
   * @remarks
   * The width of the resolution. Unit: pixels.
   * 
   * @example
   * 720
   */
  resolutionWidth?: number;
  /**
   * @remarks
   * The specifications of the cloud phone matrix.
   * 
   * @example
   * cpm.gx7.10xlarge
   */
  serverType?: string;
  /**
   * @remarks
   * The size of the shared device storage. Unit: GiB.
   * 
   * @example
   * 100
   */
  shareDataVolume?: number;
  /**
   * @remarks
   * The status of the cloud phone matrix.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  swapSize?: number;
  tags?: DescribeCloudPhoneNodesResponseBodyNodeModelTags[];
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-2zeekryyc1q3sm72l****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthPackageId: 'BandwidthPackageId',
      bandwidthPackageStatus: 'BandwidthPackageStatus',
      bandwidthPackageType: 'BandwidthPackageType',
      bizTags: 'BizTags',
      channel: 'Channel',
      chargeType: 'ChargeType',
      cpu: 'Cpu',
      gmtCreate: 'GmtCreate',
      gmtExpired: 'GmtExpired',
      gmtModified: 'GmtModified',
      instanceType: 'InstanceType',
      memory: 'Memory',
      networkId: 'NetworkId',
      networkInfos: 'NetworkInfos',
      networkType: 'NetworkType',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      packageId: 'PackageId',
      phoneCount: 'PhoneCount',
      phoneDataInfo: 'PhoneDataInfo',
      regionId: 'RegionId',
      resolutionHeight: 'ResolutionHeight',
      resolutionWidth: 'ResolutionWidth',
      serverType: 'ServerType',
      shareDataVolume: 'ShareDataVolume',
      status: 'Status',
      swapSize: 'SwapSize',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageId: 'string',
      bandwidthPackageStatus: 'string',
      bandwidthPackageType: 'string',
      bizTags: { 'type': 'array', 'itemType': DescribeCloudPhoneNodesResponseBodyNodeModelBizTags },
      channel: 'string',
      chargeType: 'string',
      cpu: 'string',
      gmtCreate: 'string',
      gmtExpired: 'string',
      gmtModified: 'string',
      instanceType: 'string',
      memory: 'number',
      networkId: 'string',
      networkInfos: { 'type': 'array', 'itemType': DescribeCloudPhoneNodesResponseBodyNodeModelNetworkInfos },
      networkType: 'string',
      nodeId: 'string',
      nodeName: 'string',
      packageId: 'string',
      phoneCount: 'number',
      phoneDataInfo: DescribeCloudPhoneNodesResponseBodyNodeModelPhoneDataInfo,
      regionId: 'string',
      resolutionHeight: 'number',
      resolutionWidth: 'number',
      serverType: 'string',
      shareDataVolume: 'number',
      status: 'string',
      swapSize: 'number',
      tags: { 'type': 'array', 'itemType': DescribeCloudPhoneNodesResponseBodyNodeModelTags },
      vSwitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bizTags)) {
      $dara.Model.validateArray(this.bizTags);
    }
    if(Array.isArray(this.networkInfos)) {
      $dara.Model.validateArray(this.networkInfos);
    }
    if(this.phoneDataInfo && typeof (this.phoneDataInfo as any).validate === 'function') {
      (this.phoneDataInfo as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudPhoneNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries per page for a paged query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next query. Valid values:
   * - If **NextToken** is empty, no more results exist.
   * - If **NextToken** has a value, the value indicates the token from which the next query starts.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kU+SQXzm0H9mu/FiSc****
   */
  nextToken?: string;
  /**
   * @remarks
   * The details of the cloud phone matrix.
   */
  nodeModel?: DescribeCloudPhoneNodesResponseBodyNodeModel[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F07A1DA1-E1EB-5CCA-8EED-12F85D32****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 31
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nodeModel: 'NodeModel',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      nodeModel: { 'type': 'array', 'itemType': DescribeCloudPhoneNodesResponseBodyNodeModel },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.nodeModel)) {
      $dara.Model.validateArray(this.nodeModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

