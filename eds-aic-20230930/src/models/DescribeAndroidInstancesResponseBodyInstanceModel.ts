// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAndroidInstancesResponseBodyInstanceModelAppManagePolicy } from "./DescribeAndroidInstancesResponseBodyInstanceModelAppManagePolicy";
import { DescribeAndroidInstancesResponseBodyInstanceModelDisks } from "./DescribeAndroidInstancesResponseBodyInstanceModelDisks";
import { DescribeAndroidInstancesResponseBodyInstanceModelDisplayConfig } from "./DescribeAndroidInstancesResponseBodyInstanceModelDisplayConfig";
import { DescribeAndroidInstancesResponseBodyInstanceModelPhoneDataInfo } from "./DescribeAndroidInstancesResponseBodyInstanceModelPhoneDataInfo";
import { DescribeAndroidInstancesResponseBodyInstanceModelTags } from "./DescribeAndroidInstancesResponseBodyInstanceModelTags";


export class DescribeAndroidInstancesResponseBodyInstanceModel extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance group.
   * 
   * @example
   * ag-ayyhomlal7po****
   */
  androidInstanceGroupId?: string;
  /**
   * @remarks
   * The name of the instance group.
   * 
   * @example
   * AndroidInstanceGroupName
   */
  androidInstanceGroupName?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * acp-8at8h6ejkadjh****
   */
  androidInstanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * name
   */
  androidInstanceName?: string;
  /**
   * @remarks
   * The state of the instance.
   * 
   * @example
   * RUNNING
   */
  androidInstanceStatus?: string;
  /**
   * @remarks
   * The ID of the delivery group.
   * 
   * @example
   * aig-i7yv6tkn7kh8dv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The ID of the physical instance.
   * 
   * @example
   * ai-9ey6io0q58rcd****
   */
  appInstanceId?: string;
  appManagePolicy?: DescribeAndroidInstancesResponseBodyInstanceModelAppManagePolicy;
  /**
   * @remarks
   * The ID of the user to whom the instance is assigned.
   * 
   * @example
   * test
   */
  authorizedUserId?: string;
  /**
   * @remarks
   * The ID of the bound user.
   * 
   * @example
   * test
   */
  bindUserId?: string;
  /**
   * @remarks
   * The billing method of the instance.
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
   * 4
   */
  cpu?: string;
  /**
   * @remarks
   * The disks.
   */
  disks?: DescribeAndroidInstancesResponseBodyInstanceModelDisks[];
  displayConfig?: DescribeAndroidInstancesResponseBodyInstanceModelDisplayConfig;
  /**
   * @remarks
   * The cause of the instance data backup failure or restoration failure.
   * 
   * @example
   * FilePathNotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2023-05-06 10:42:10
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the subscription instance group expires.
   * 
   * @example
   * 2024-07-15T02:03:33Z
   */
  gmtExpired?: string;
  /**
   * @remarks
   * The time when the instance was modified.
   * 
   * @example
   * 2023-05-06 10:42:10
   */
  gmtModified?: string;
  imageId?: string;
  /**
   * @remarks
   * The version of the image.
   * 
   * @example
   * 3.5.3.867
   */
  imageVersion?: string;
  /**
   * @remarks
   * The type of the instance.
   * 
   * @example
   * acp.basic.small
   */
  instanceType?: string;
  /**
   * @remarks
   * The ID of the key pair.
   * 
   * @example
   * kp-5hh431emkpucs****
   */
  keyPairId?: string;
  /**
   * @remarks
   * The memory size.
   * 
   * @example
   * 1024
   */
  memory?: number;
  /**
   * @remarks
   * The IP address of the ENI.
   * 
   * @example
   * 192.168.22.48
   */
  networkInterfaceIp?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * null
   */
  networkInterfaceIpv6Address?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-shenzhen+dir-211620****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The ID of the persistent session.
   * 
   * @example
   * p-0btrd5zj8epo****
   */
  persistentAppInstanceId?: string;
  phoneDataInfo?: DescribeAndroidInstancesResponseBodyInstanceModelPhoneDataInfo;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * pg-0bszojpu0seql****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 10.32.1.41
   */
  publicIpAddress?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * null
   */
  publicIpv6Address?: string;
  qosRuleId?: string;
  /**
   * @remarks
   * The progress of instance data backup or restoration.
   * 
   * @example
   * 100
   */
  rate?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The rendering type.
   * 
   * @example
   * local
   */
  renderingType?: string;
  /**
   * @remarks
   * The session status.
   * 
   * Valid values:
   * 
   * *   disConnect: The session is disconnected.
   * *   connect: The session is connected.
   * 
   * @example
   * connect
   */
  sessionStatus?: string;
  streamMode?: number;
  /**
   * @remarks
   * The tags.
   */
  tags?: DescribeAndroidInstancesResponseBodyInstanceModelTags[];
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceGroupId: 'AndroidInstanceGroupId',
      androidInstanceGroupName: 'AndroidInstanceGroupName',
      androidInstanceId: 'AndroidInstanceId',
      androidInstanceName: 'AndroidInstanceName',
      androidInstanceStatus: 'AndroidInstanceStatus',
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceId: 'AppInstanceId',
      appManagePolicy: 'AppManagePolicy',
      authorizedUserId: 'AuthorizedUserId',
      bindUserId: 'BindUserId',
      chargeType: 'ChargeType',
      cpu: 'Cpu',
      disks: 'Disks',
      displayConfig: 'DisplayConfig',
      errorCode: 'ErrorCode',
      gmtCreate: 'GmtCreate',
      gmtExpired: 'GmtExpired',
      gmtModified: 'GmtModified',
      imageId: 'ImageId',
      imageVersion: 'ImageVersion',
      instanceType: 'InstanceType',
      keyPairId: 'KeyPairId',
      memory: 'Memory',
      networkInterfaceIp: 'NetworkInterfaceIp',
      networkInterfaceIpv6Address: 'NetworkInterfaceIpv6Address',
      officeSiteId: 'OfficeSiteId',
      persistentAppInstanceId: 'PersistentAppInstanceId',
      phoneDataInfo: 'PhoneDataInfo',
      policyGroupId: 'PolicyGroupId',
      publicIpAddress: 'PublicIpAddress',
      publicIpv6Address: 'PublicIpv6Address',
      qosRuleId: 'QosRuleId',
      rate: 'Rate',
      regionId: 'RegionId',
      renderingType: 'RenderingType',
      sessionStatus: 'SessionStatus',
      streamMode: 'StreamMode',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceGroupId: 'string',
      androidInstanceGroupName: 'string',
      androidInstanceId: 'string',
      androidInstanceName: 'string',
      androidInstanceStatus: 'string',
      appInstanceGroupId: 'string',
      appInstanceId: 'string',
      appManagePolicy: DescribeAndroidInstancesResponseBodyInstanceModelAppManagePolicy,
      authorizedUserId: 'string',
      bindUserId: 'string',
      chargeType: 'string',
      cpu: 'string',
      disks: { 'type': 'array', 'itemType': DescribeAndroidInstancesResponseBodyInstanceModelDisks },
      displayConfig: DescribeAndroidInstancesResponseBodyInstanceModelDisplayConfig,
      errorCode: 'string',
      gmtCreate: 'string',
      gmtExpired: 'string',
      gmtModified: 'string',
      imageId: 'string',
      imageVersion: 'string',
      instanceType: 'string',
      keyPairId: 'string',
      memory: 'number',
      networkInterfaceIp: 'string',
      networkInterfaceIpv6Address: 'string',
      officeSiteId: 'string',
      persistentAppInstanceId: 'string',
      phoneDataInfo: DescribeAndroidInstancesResponseBodyInstanceModelPhoneDataInfo,
      policyGroupId: 'string',
      publicIpAddress: 'string',
      publicIpv6Address: 'string',
      qosRuleId: 'string',
      rate: 'number',
      regionId: 'string',
      renderingType: 'string',
      sessionStatus: 'string',
      streamMode: 'number',
      tags: { 'type': 'array', 'itemType': DescribeAndroidInstancesResponseBodyInstanceModelTags },
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.appManagePolicy && typeof (this.appManagePolicy as any).validate === 'function') {
      (this.appManagePolicy as any).validate();
    }
    if(Array.isArray(this.disks)) {
      $dara.Model.validateArray(this.disks);
    }
    if(this.displayConfig && typeof (this.displayConfig as any).validate === 'function') {
      (this.displayConfig as any).validate();
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

