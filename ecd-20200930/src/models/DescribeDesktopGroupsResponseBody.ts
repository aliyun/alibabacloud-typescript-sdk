// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopGroupsResponseBodyDesktopGroupsCountPerStatus extends $dara.Model {
  /**
   * @remarks
   * The number of cloud desktops in the specified status.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The status of the cloud desktop.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopGroupsResponseBodyDesktopGroupsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * desktop_group_name
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * ds-dq2mybjr23yw*****
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

export class DescribeDesktopGroupsResponseBodyDesktopGroups extends $dara.Model {
  accountType?: string;
  /**
   * @remarks
   * The number of concurrent sessions allowed per cloud desktop in a multi-session shared cloud desktop group.
   * 
   * @example
   * 2
   */
  bindAmount?: number;
  /**
   * @remarks
   * The number of cloud desktops that you purchase. This parameter applies only to subscription shared cloud desktop groups. Valid values: 0 to 200.
   * 
   * @example
   * 5
   */
  buyDesktopsCount?: number;
  /**
   * @remarks
   * The comments on the shared cloud desktop group.
   * 
   * @example
   * comment
   */
  comments?: string;
  /**
   * @remarks
   * The maximum session duration, in milliseconds. When this duration is reached, the session is automatically disconnected.
   * 
   * @example
   * 3600000
   */
  connectDuration?: number;
  /**
   * @remarks
   * The number of cloud desktops in each status.
   */
  countPerStatus?: DescribeDesktopGroupsResponseBodyDesktopGroupsCountPerStatus[];
  /**
   * @remarks
   * The number of vCPU cores.
   * 
   * @example
   * 4
   */
  cpu?: number;
  /**
   * @remarks
   * The time when the shared cloud desktop group was created.
   * 
   * @example
   * 2022-02-17T14:51:07Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that created the shared cloud desktop group.
   * 
   * @example
   * 1007214305******
   */
  creator?: string;
  /**
   * @remarks
   * The type of the data disk.
   * 
   * @example
   * cloud_ssd
   */
  dataDiskCategory?: string;
  /**
   * @remarks
   * The data disk size in GiB.
   * 
   * @example
   * 50
   */
  dataDiskSize?: string;
  /**
   * @remarks
   * The number of cloud desktops created.
   * 
   * @example
   * 2
   */
  desktopCount?: number;
  /**
   * @remarks
   * The ID of the shared cloud desktop group.
   * 
   * @example
   * dg-2i8qxpv6t1a03****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The name of the shared cloud desktop group.
   * 
   * @example
   * CloudComputerPool01
   */
  desktopGroupName?: string;
  /**
   * @remarks
   * The desktop type. You can call the [DescribeDesktopTypes](https://help.aliyun.com/document_detail/188882.html) operation to query the desktop types supported by WUYING Workspace.
   * 
   * @example
   * eds.enterprise_office.4c4g
   */
  desktopType?: string;
  /**
   * @remarks
   * The number of authorized users of the shared cloud desktop group.
   * 
   * @example
   * 1
   */
  endUserCount?: number;
  entraDomainName?: string;
  envId?: string;
  envType?: string;
  /**
   * @remarks
   * The time when the subscription shared cloud desktop group expires.
   * 
   * @example
   * 2022-03-17T16:00:00Z
   */
  expiredTime?: string;
  expiredTimes?: string[];
  /**
   * @remarks
   * The number of vGPU cores.
   * 
   * @example
   * 1
   */
  gpuCount?: number;
  /**
   * @remarks
   * The GPU driver version.
   * 
   * @example
   * 12
   */
  gpuDriverVersion?: string;
  /**
   * @remarks
   * The GPU memory size.
   * 
   * @example
   * 16 GiB
   */
  gpuSpec?: string;
  /**
   * @remarks
   * The amount of time, in milliseconds, that a session can remain idle. If a session remains idle for longer than this duration, it is automatically disconnected. A session is considered idle if there is no keyboard or mouse activity.
   * 
   * @example
   * 90000
   */
  idleDisconnectDuration?: number;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * m-gq15cq5ydlvwn****
   */
  imageId?: string;
  isLdap?: boolean;
  /**
   * @remarks
   * The duration, in milliseconds, to retain a disconnected session. Valid values: 180000 (3 minutes) to 345600000 (4 days). A value of 0 indicates that the session is always retained.
   * 
   * When a session disconnects, the user can reconnect within this period to resume their work. If the user fails to reconnect in time, the session is terminated and unsaved data is lost.
   * 
   * @example
   * 180000
   */
  keepDuration?: number;
  /**
   * @remarks
   * The load balancing policy for the multi-session shared cloud desktop group.
   * 
   * @example
   * 1
   */
  loadPolicy?: number;
  /**
   * @remarks
   * - For a pay-as-you-go shared cloud desktop group, this parameter specifies the maximum number of cloud desktops that the group can contain.
   * 
   * - For a subscription shared cloud desktop group, this parameter specifies the total number of cloud desktops, which is the sum of the initially purchased desktops (indicated by the `BuyDesktopsCount` parameter) and the desktops that can be automatically created.
   * 
   * @example
   * 3
   */
  maxDesktopsCount?: number;
  /**
   * @remarks
   * The memory size in MiB.
   * 
   * @example
   * 16384
   */
  memory?: number;
  /**
   * @remarks
   * - For a pay-as-you-go shared cloud desktop group, this specifies the minimum number of cloud desktops to maintain in the group.
   * 
   * - For a subscription shared cloud desktop group, this parameter has the same value as `BuyDesktopsCount` and specifies the number of cloud desktops that you initially purchase.
   * 
   * @example
   * 1
   */
  minDesktopsCount?: number;
  /**
   * @remarks
   * The ID of the office network.
   * 
   * @example
   * cn-hangzhou+dir-467671****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The name of the office network.
   * 
   * @example
   * cn-hangzhou+os-c5cy7q578s8jc****
   */
  officeSiteName?: string;
  /**
   * @remarks
   * The account type of the office network.
   * 
   * @example
   * SIMPLE
   */
  officeSiteType?: string;
  orgId?: string;
  /**
   * @remarks
   * The OS.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The ID of the cloud desktop template.
   * 
   * @example
   * bundle_eds_general_4c8g_s8d5_win2019
   */
  ownBundleId?: string;
  /**
   * @remarks
   * The name of the cloud desktop template.
   * 
   * @example
   * test
   */
  ownBundleName?: string;
  /**
   * @remarks
   * The type of the shared cloud desktop group.
   * 
   * @example
   * 0
   */
  ownType?: number;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * PrePaid
   */
  payType?: string;
  /**
   * @remarks
   * The ID of the policy associated with the shared cloud desktop group.
   * 
   * @example
   * pg-53iyi2aar0nd6c8qj
   */
  policyGroupId?: string;
  policyGroupIdList?: string[];
  /**
   * @remarks
   * The name of the policy associated with the shared cloud desktop group.
   * 
   * @example
   * All enabled policy
   */
  policyGroupName?: string;
  policyGroupNameList?: string[];
  /**
   * @remarks
   * The protocol type.
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  qosRuleId?: string;
  /**
   * @remarks
   * The session utilization threshold that triggers auto scaling for a multi-session shared cloud desktop group. Session utilization is calculated by using the following formula:
   * 
   * `Session utilization = Number of active sessions / (Total number of cloud desktops × Maximum number of sessions per cloud desktop) × 100%`
   * 
   * When the session utilization exceeds this threshold, the system scales out by creating new cloud desktops. When the utilization falls below this threshold, the system scales in by removing idle cloud desktops.
   * 
   * @example
   * 0.85
   */
  ratioThreshold?: number;
  /**
   * @remarks
   * The reset type of the shared cloud desktop group.
   * 
   * @example
   * 0
   */
  resetType?: number;
  simpleUserGroupId?: string;
  /**
   * @remarks
   * The status of the shared cloud desktop group.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The period of inactivity, in milliseconds, after which an idle cloud desktop is automatically stopped. If a user tries to connect to a stopped desktop, the desktop is automatically started.
   * 
   * @example
   * 900000
   */
  stopDuration?: number;
  /**
   * @remarks
   * The ID of the subnet.
   * 
   * @example
   * vsw-uf63bb6*****8gfytm
   */
  subnetId?: string;
  /**
   * @remarks
   * The type of the system disk.
   * 
   * @example
   * cloud_ssd
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The system disk size in GiB.
   * 
   * @example
   * 80
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The tags attached to the shared cloud desktop group.
   */
  tags?: DescribeDesktopGroupsResponseBodyDesktopGroupsTags[];
  userGroupName?: string;
  /**
   * @remarks
   * The path of the organizational unit (OU).
   * 
   * @example
   * example.com
   */
  userOuPath?: string;
  /**
   * @remarks
   * The version number of the shared cloud desktop group.
   * 
   * @example
   * 2
   */
  version?: number;
  /**
   * @remarks
   * Indicates whether disk encryption is enabled.
   * 
   * @example
   * false
   */
  volumeEncryptionEnabled?: boolean;
  /**
   * @remarks
   * The ID of the KMS key used for disk encryption.
   * 
   * @example
   * e5409ada-xxxx-xxxx-xxxx-89e31e23e993
   */
  volumeEncryptionKey?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      bindAmount: 'BindAmount',
      buyDesktopsCount: 'BuyDesktopsCount',
      comments: 'Comments',
      connectDuration: 'ConnectDuration',
      countPerStatus: 'CountPerStatus',
      cpu: 'Cpu',
      createTime: 'CreateTime',
      creator: 'Creator',
      dataDiskCategory: 'DataDiskCategory',
      dataDiskSize: 'DataDiskSize',
      desktopCount: 'DesktopCount',
      desktopGroupId: 'DesktopGroupId',
      desktopGroupName: 'DesktopGroupName',
      desktopType: 'DesktopType',
      endUserCount: 'EndUserCount',
      entraDomainName: 'EntraDomainName',
      envId: 'EnvId',
      envType: 'EnvType',
      expiredTime: 'ExpiredTime',
      expiredTimes: 'ExpiredTimes',
      gpuCount: 'GpuCount',
      gpuDriverVersion: 'GpuDriverVersion',
      gpuSpec: 'GpuSpec',
      idleDisconnectDuration: 'IdleDisconnectDuration',
      imageId: 'ImageId',
      isLdap: 'IsLdap',
      keepDuration: 'KeepDuration',
      loadPolicy: 'LoadPolicy',
      maxDesktopsCount: 'MaxDesktopsCount',
      memory: 'Memory',
      minDesktopsCount: 'MinDesktopsCount',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      officeSiteType: 'OfficeSiteType',
      orgId: 'OrgId',
      osType: 'OsType',
      ownBundleId: 'OwnBundleId',
      ownBundleName: 'OwnBundleName',
      ownType: 'OwnType',
      payType: 'PayType',
      policyGroupId: 'PolicyGroupId',
      policyGroupIdList: 'PolicyGroupIdList',
      policyGroupName: 'PolicyGroupName',
      policyGroupNameList: 'PolicyGroupNameList',
      protocolType: 'ProtocolType',
      qosRuleId: 'QosRuleId',
      ratioThreshold: 'RatioThreshold',
      resetType: 'ResetType',
      simpleUserGroupId: 'SimpleUserGroupId',
      status: 'Status',
      stopDuration: 'StopDuration',
      subnetId: 'SubnetId',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskSize: 'SystemDiskSize',
      tags: 'Tags',
      userGroupName: 'UserGroupName',
      userOuPath: 'UserOuPath',
      version: 'Version',
      volumeEncryptionEnabled: 'VolumeEncryptionEnabled',
      volumeEncryptionKey: 'VolumeEncryptionKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      bindAmount: 'number',
      buyDesktopsCount: 'number',
      comments: 'string',
      connectDuration: 'number',
      countPerStatus: { 'type': 'array', 'itemType': DescribeDesktopGroupsResponseBodyDesktopGroupsCountPerStatus },
      cpu: 'number',
      createTime: 'string',
      creator: 'string',
      dataDiskCategory: 'string',
      dataDiskSize: 'string',
      desktopCount: 'number',
      desktopGroupId: 'string',
      desktopGroupName: 'string',
      desktopType: 'string',
      endUserCount: 'number',
      entraDomainName: 'string',
      envId: 'string',
      envType: 'string',
      expiredTime: 'string',
      expiredTimes: { 'type': 'array', 'itemType': 'string' },
      gpuCount: 'number',
      gpuDriverVersion: 'string',
      gpuSpec: 'string',
      idleDisconnectDuration: 'number',
      imageId: 'string',
      isLdap: 'boolean',
      keepDuration: 'number',
      loadPolicy: 'number',
      maxDesktopsCount: 'number',
      memory: 'number',
      minDesktopsCount: 'number',
      officeSiteId: 'string',
      officeSiteName: 'string',
      officeSiteType: 'string',
      orgId: 'string',
      osType: 'string',
      ownBundleId: 'string',
      ownBundleName: 'string',
      ownType: 'number',
      payType: 'string',
      policyGroupId: 'string',
      policyGroupIdList: { 'type': 'array', 'itemType': 'string' },
      policyGroupName: 'string',
      policyGroupNameList: { 'type': 'array', 'itemType': 'string' },
      protocolType: 'string',
      qosRuleId: 'string',
      ratioThreshold: 'number',
      resetType: 'number',
      simpleUserGroupId: 'string',
      status: 'number',
      stopDuration: 'number',
      subnetId: 'string',
      systemDiskCategory: 'string',
      systemDiskSize: 'number',
      tags: { 'type': 'array', 'itemType': DescribeDesktopGroupsResponseBodyDesktopGroupsTags },
      userGroupName: 'string',
      userOuPath: 'string',
      version: 'number',
      volumeEncryptionEnabled: 'boolean',
      volumeEncryptionKey: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.countPerStatus)) {
      $dara.Model.validateArray(this.countPerStatus);
    }
    if(Array.isArray(this.expiredTimes)) {
      $dara.Model.validateArray(this.expiredTimes);
    }
    if(Array.isArray(this.policyGroupIdList)) {
      $dara.Model.validateArray(this.policyGroupIdList);
    }
    if(Array.isArray(this.policyGroupNameList)) {
      $dara.Model.validateArray(this.policyGroupNameList);
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

export class DescribeDesktopGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the shared cloud desktop groups.
   */
  desktopGroups?: DescribeDesktopGroupsResponseBodyDesktopGroups[];
  /**
   * @remarks
   * The token used to retrieve the next page of results. If this parameter is not returned, it indicates that all results have been returned.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroups: 'DesktopGroups',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroups: { 'type': 'array', 'itemType': DescribeDesktopGroupsResponseBodyDesktopGroups },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopGroups)) {
      $dara.Model.validateArray(this.desktopGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

