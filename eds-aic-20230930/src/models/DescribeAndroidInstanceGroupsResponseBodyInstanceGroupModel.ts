// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModelDisks } from "./DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModelDisks";


export class DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModel extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery group.
   * 
   * @example
   * aig-48xr63m4dybjk****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The type of the architecture.
   * 
   * @example
   * ARM
   */
  architectureType?: string;
  /**
   * @remarks
   * The number of available instances.
   * 
   * >  Available instances are those not in the Deleting or Deleted state.
   * 
   * @example
   * 5
   */
  availableInstanceAmount?: number;
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
   * The number of vCPUs.
   * 
   * @example
   * 8
   */
  cpu?: string;
  /**
   * @remarks
   * The disks.
   */
  disks?: DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModelDisks[];
  /**
   * @example
   * true
   */
  enableIpv6?: boolean;
  /**
   * @remarks
   * The cause of the creation failure.
   * 
   * @example
   * 0
   */
  errorCode?: string;
  /**
   * @remarks
   * The time when the instance group was created.
   * 
   * @example
   * 2024-02-01 10:56:36
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the subscription instance group expires.
   * 
   * @example
   * 2027-06-29 07:25:31
   */
  gmtExpired?: string;
  /**
   * @remarks
   * The time when the instance group was updated.
   * 
   * @example
   * 2024-02-01 10:56:36
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * imgc-06zyt9m93zwax****
   */
  imageId?: string;
  /**
   * @remarks
   * The list of installed applications.
   * 
   * @example
   * "TikTok","WeChat"
   */
  installedAppList?: string;
  /**
   * @remarks
   * The ID of the instance group.
   * 
   * @example
   * ag-h67a2cs0zprfdh****
   */
  instanceGroupId?: string;
  /**
   * @remarks
   * The name of the instance group.
   * 
   * @example
   * defaultInstanceGroup
   */
  instanceGroupName?: string;
  /**
   * @remarks
   * The specifications of the instance group.
   * 
   * @example
   * acp.basic.small
   */
  instanceGroupSpec?: string;
  /**
   * @remarks
   * The description of the instance group specifications.
   * 
   * @example
   * ARM-2vCPU4GiB 32GiB
   */
  instanceGroupSpecDescribe?: string;
  /**
   * @remarks
   * The status of the instance group.
   * 
   * @example
   * RUNNING
   */
  instanceGroupStatus?: string;
  /**
   * @example
   * 50
   */
  ipv6Bandwidth?: number;
  /**
   * @remarks
   * The memory size.
   * 
   * @example
   * 8
   */
  memory?: number;
  /**
   * @remarks
   * The number of instances in the instance group.
   * 
   * @example
   * 10
   */
  numberOfInstances?: string;
  /**
   * @remarks
   * The ID of the network.
   * 
   * @example
   * cn-shanghai+dir-030598****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * pg-c6n38xucps8kl****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The rendering mode of the instance group.
   * 
   * Valid values:
   * 
   * *   GPURemote: GPU remote rendering.
   * *   CPU: CPU rendering.
   * *   GPUocal: GPU local rendering.
   * 
   * @example
   * CPU
   */
  renderingType?: string;
  /**
   * @remarks
   * The height of the resolution.
   * 
   * @example
   * 1280
   */
  resolutionHeight?: number;
  /**
   * @remarks
   * The width of the resolution.
   * 
   * @example
   * 720
   */
  resolutionWidth?: number;
  /**
   * @remarks
   * The sales mode.
   * 
   * @example
   * standard
   */
  saleMode?: string;
  /**
   * @remarks
   * The version of the operating system.
   * 
   * @example
   * Android 12
   */
  systemVersion?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-t4n0yqs009ho024wt****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      architectureType: 'ArchitectureType',
      availableInstanceAmount: 'AvailableInstanceAmount',
      chargeType: 'ChargeType',
      cpu: 'Cpu',
      disks: 'Disks',
      enableIpv6: 'EnableIpv6',
      errorCode: 'ErrorCode',
      gmtCreate: 'GmtCreate',
      gmtExpired: 'GmtExpired',
      gmtModified: 'GmtModified',
      imageId: 'ImageId',
      installedAppList: 'InstalledAppList',
      instanceGroupId: 'InstanceGroupId',
      instanceGroupName: 'InstanceGroupName',
      instanceGroupSpec: 'InstanceGroupSpec',
      instanceGroupSpecDescribe: 'InstanceGroupSpecDescribe',
      instanceGroupStatus: 'InstanceGroupStatus',
      ipv6Bandwidth: 'Ipv6Bandwidth',
      memory: 'Memory',
      numberOfInstances: 'NumberOfInstances',
      officeSiteId: 'OfficeSiteId',
      policyGroupId: 'PolicyGroupId',
      regionId: 'RegionId',
      renderingType: 'RenderingType',
      resolutionHeight: 'ResolutionHeight',
      resolutionWidth: 'ResolutionWidth',
      saleMode: 'SaleMode',
      systemVersion: 'SystemVersion',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      architectureType: 'string',
      availableInstanceAmount: 'number',
      chargeType: 'string',
      cpu: 'string',
      disks: { 'type': 'array', 'itemType': DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModelDisks },
      enableIpv6: 'boolean',
      errorCode: 'string',
      gmtCreate: 'string',
      gmtExpired: 'string',
      gmtModified: 'string',
      imageId: 'string',
      installedAppList: 'string',
      instanceGroupId: 'string',
      instanceGroupName: 'string',
      instanceGroupSpec: 'string',
      instanceGroupSpecDescribe: 'string',
      instanceGroupStatus: 'string',
      ipv6Bandwidth: 'number',
      memory: 'number',
      numberOfInstances: 'string',
      officeSiteId: 'string',
      policyGroupId: 'string',
      regionId: 'string',
      renderingType: 'string',
      resolutionHeight: 'number',
      resolutionWidth: 'number',
      saleMode: 'string',
      systemVersion: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.disks)) {
      $dara.Model.validateArray(this.disks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

