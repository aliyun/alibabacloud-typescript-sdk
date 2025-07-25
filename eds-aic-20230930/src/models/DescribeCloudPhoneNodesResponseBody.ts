// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudPhoneNodesResponseBodyNodeModelBizTags extends $dara.Model {
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

export class DescribeCloudPhoneNodesResponseBodyNodeModelNetworkInfos extends $dara.Model {
  bandwidthPackageId?: string;
  bandwidthPackageType?: string;
  networkId?: string;
  networkType?: string;
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
  phoneDataId?: string;
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

export class DescribeCloudPhoneNodesResponseBodyNodeModel extends $dara.Model {
  bandwidthPackageId?: string;
  bandwidthPackageType?: string;
  bizTags?: DescribeCloudPhoneNodesResponseBodyNodeModelBizTags[];
  /**
   * @remarks
   * The billing method.
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
   * The last modification time.
   * 
   * @example
   * 2025-02-13 02:03:14
   */
  gmtModified?: string;
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
  networkInfos?: DescribeCloudPhoneNodesResponseBodyNodeModelNetworkInfos[];
  networkType?: string;
  /**
   * @remarks
   * The matrix ID.
   * 
   * @example
   * cpn-ehs0yoedq8ntm****
   */
  nodeId?: string;
  /**
   * @remarks
   * The matrix name.
   * 
   * @example
   * node_name
   */
  nodeName?: string;
  /**
   * @remarks
   * The number of cloud phone instances per matrix.
   * 
   * @example
   * 25
   */
  phoneCount?: number;
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
   * The height of the resolution. Unit: pixel.
   * 
   * @example
   * 1280
   */
  resolutionHeight?: number;
  /**
   * @remarks
   * The width of the resolution. Unit: pixel.
   * 
   * @example
   * 720
   */
  resolutionWidth?: number;
  /**
   * @remarks
   * The matrix specification.
   * 
   * @example
   * cpm.gn6.gx1
   */
  serverType?: string;
  /**
   * @remarks
   * The size of the shared storage. Unit: GiB.
   * 
   * @example
   * 100
   */
  shareDataVolume?: number;
  /**
   * @remarks
   * The matrix status.
   * 
   * @example
   * RUNNING
   */
  status?: string;
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
      bandwidthPackageType: 'BandwidthPackageType',
      bizTags: 'BizTags',
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
      phoneCount: 'PhoneCount',
      phoneDataInfo: 'PhoneDataInfo',
      regionId: 'RegionId',
      resolutionHeight: 'ResolutionHeight',
      resolutionWidth: 'ResolutionWidth',
      serverType: 'ServerType',
      shareDataVolume: 'ShareDataVolume',
      status: 'Status',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageId: 'string',
      bandwidthPackageType: 'string',
      bizTags: { 'type': 'array', 'itemType': DescribeCloudPhoneNodesResponseBodyNodeModelBizTags },
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
      phoneCount: 'number',
      phoneDataInfo: DescribeCloudPhoneNodesResponseBodyNodeModelPhoneDataInfo,
      regionId: 'string',
      resolutionHeight: 'number',
      resolutionWidth: 'number',
      serverType: 'string',
      shareDataVolume: 'number',
      status: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudPhoneNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   ****
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kU+SQXzm0H9mu/FiSc****
   */
  nextToken?: string;
  /**
   * @remarks
   * The matrixes.
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
   * The total number of cloud phone instances.
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

