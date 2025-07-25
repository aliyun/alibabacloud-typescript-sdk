// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAndroidInstancesResponseBodyInstanceModelAppManagePolicy extends $dara.Model {
  appManagePolicyId?: string;
  appManagePolicyName?: string;
  static names(): { [key: string]: string } {
    return {
      appManagePolicyId: 'AppManagePolicyId',
      appManagePolicyName: 'AppManagePolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appManagePolicyId: 'string',
      appManagePolicyName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAndroidInstancesResponseBodyInstanceModelBizTags extends $dara.Model {
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

export class DescribeAndroidInstancesResponseBodyInstanceModelDisks extends $dara.Model {
  /**
   * @remarks
   * The disk size. Unit: GB.
   * 
   * @example
   * 32
   */
  diskSize?: number;
  /**
   * @remarks
   * The type of the disk.
   * 
   * @example
   * SYSTEM
   */
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      diskSize: 'DiskSize',
      diskType: 'DiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskSize: 'number',
      diskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAndroidInstancesResponseBodyInstanceModelDisplayConfig extends $dara.Model {
  dpi?: number;
  fps?: number;
  lockResolution?: string;
  resolutionHeight?: number;
  resolutionWidth?: number;
  static names(): { [key: string]: string } {
    return {
      dpi: 'Dpi',
      fps: 'Fps',
      lockResolution: 'LockResolution',
      resolutionHeight: 'ResolutionHeight',
      resolutionWidth: 'ResolutionWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpi: 'number',
      fps: 'number',
      lockResolution: 'string',
      resolutionHeight: 'number',
      resolutionWidth: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAndroidInstancesResponseBodyInstanceModelPhoneDataInfo extends $dara.Model {
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

export class DescribeAndroidInstancesResponseBodyInstanceModelTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * value
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
  bandwidthPackageId?: string;
  bandwidthPackageType?: string;
  /**
   * @remarks
   * The ID of the bound user.
   * 
   * @example
   * test
   */
  bindUserId?: string;
  bizTags?: DescribeAndroidInstancesResponseBodyInstanceModelBizTags[];
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
  downBandwidthLimit?: number;
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
  networkType?: string;
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
  serverType?: string;
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
  upBandwidthLimit?: number;
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
      bandwidthPackageId: 'BandwidthPackageId',
      bandwidthPackageType: 'BandwidthPackageType',
      bindUserId: 'BindUserId',
      bizTags: 'BizTags',
      chargeType: 'ChargeType',
      cpu: 'Cpu',
      disks: 'Disks',
      displayConfig: 'DisplayConfig',
      downBandwidthLimit: 'DownBandwidthLimit',
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
      networkType: 'NetworkType',
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
      serverType: 'ServerType',
      sessionStatus: 'SessionStatus',
      streamMode: 'StreamMode',
      tags: 'Tags',
      upBandwidthLimit: 'UpBandwidthLimit',
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
      bandwidthPackageId: 'string',
      bandwidthPackageType: 'string',
      bindUserId: 'string',
      bizTags: { 'type': 'array', 'itemType': DescribeAndroidInstancesResponseBodyInstanceModelBizTags },
      chargeType: 'string',
      cpu: 'string',
      disks: { 'type': 'array', 'itemType': DescribeAndroidInstancesResponseBodyInstanceModelDisks },
      displayConfig: DescribeAndroidInstancesResponseBodyInstanceModelDisplayConfig,
      downBandwidthLimit: 'number',
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
      networkType: 'string',
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
      serverType: 'string',
      sessionStatus: 'string',
      streamMode: 'number',
      tags: { 'type': 'array', 'itemType': DescribeAndroidInstancesResponseBodyInstanceModelTags },
      upBandwidthLimit: 'number',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.appManagePolicy && typeof (this.appManagePolicy as any).validate === 'function') {
      (this.appManagePolicy as any).validate();
    }
    if(Array.isArray(this.bizTags)) {
      $dara.Model.validateArray(this.bizTags);
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

export class DescribeAndroidInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cloud phone instances.
   */
  instanceModel?: DescribeAndroidInstancesResponseBodyInstanceModel[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kmma/xxE9WtwL/ADvZ****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F07A1DA1-E1EB-5CCA-8EED-12F85D32****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceModel: 'InstanceModel',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceModel: { 'type': 'array', 'itemType': DescribeAndroidInstancesResponseBodyInstanceModel },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceModel)) {
      $dara.Model.validateArray(this.instanceModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

