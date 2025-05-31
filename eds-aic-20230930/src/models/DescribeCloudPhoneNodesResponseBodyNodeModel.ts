// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudPhoneNodesResponseBodyNodeModelNetworkInfos } from "./DescribeCloudPhoneNodesResponseBodyNodeModelNetworkInfos";


export class DescribeCloudPhoneNodesResponseBodyNodeModel extends $dara.Model {
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
      chargeType: 'ChargeType',
      cpu: 'Cpu',
      gmtCreate: 'GmtCreate',
      gmtExpired: 'GmtExpired',
      gmtModified: 'GmtModified',
      instanceType: 'InstanceType',
      memory: 'Memory',
      networkId: 'NetworkId',
      networkInfos: 'NetworkInfos',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      phoneCount: 'PhoneCount',
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
      chargeType: 'string',
      cpu: 'string',
      gmtCreate: 'string',
      gmtExpired: 'string',
      gmtModified: 'string',
      instanceType: 'string',
      memory: 'number',
      networkId: 'string',
      networkInfos: { 'type': 'array', 'itemType': DescribeCloudPhoneNodesResponseBodyNodeModelNetworkInfos },
      nodeId: 'string',
      nodeName: 'string',
      phoneCount: 'number',
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
    if(Array.isArray(this.networkInfos)) {
      $dara.Model.validateArray(this.networkInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

