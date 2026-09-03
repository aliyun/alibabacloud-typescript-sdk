// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopGroupsResponseBodyDesktopGroupsCountPerStatus extends $dara.Model {
  /**
   * @remarks
   * The number of cloud computers.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The cloud computer status.
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
  /**
   * @remarks
   * The account type.
   * 
   * @example
   * SIMPLE
   */
  accountType?: string;
  /**
   * @remarks
   * The number of concurrent sessions allowed per cloud computer in a multi-session shared cloud computer group with multiple instances.
   * 
   * @example
   * 2
   */
  bindAmount?: number;
  /**
   * @remarks
   * This parameter applies only to subscription shared cloud computers and indicates the initial number of cloud computers purchased. Valid values: 0 to 200.
   * 
   * @example
   * 5
   */
  buyDesktopsCount?: number;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * comment
   */
  comments?: string;
  /**
   * @remarks
   * The maximum duration that a session can remain in the connected state. The session is automatically disconnected when this duration is reached. Unit: milliseconds.
   * 
   * @example
   * 3600000
   */
  connectDuration?: number;
  /**
   * @remarks
   * The list of cloud computer counts by status.
   */
  countPerStatus?: DescribeDesktopGroupsResponseBodyDesktopGroupsCountPerStatus[];
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 4
   */
  cpu?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * The time is displayed in UTC in the ISO 8601 standard format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2022-02-17T14:51:07Z
   */
  createTime?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the creator.
   * 
   * @example
   * 1007214305******
   */
  creator?: string;
  /**
   * @remarks
   * The user disk type.
   * 
   * @example
   * cloud_ssd
   */
  dataDiskCategory?: string;
  /**
   * @remarks
   * The user disk capacity. Unit: GiB.
   * 
   * @example
   * 50
   */
  dataDiskSize?: string;
  /**
   * @remarks
   * The number of cloud computers that have been created.
   * 
   * @example
   * 2
   */
  desktopCount?: number;
  /**
   * @remarks
   * The ID of the shared cloud computer.
   * 
   * @example
   * dg-2i8qxpv6t1a03****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The name of the shared cloud computer.
   * 
   * @example
   * CloudComputerPool01
   */
  desktopGroupName?: string;
  /**
   * @remarks
   * The cloud computer specification. You can call [DescribeDesktopTypes](https://help.aliyun.com/document_detail/188882.html) to query the specification IDs supported by Wuying Cloud Computer.
   * 
   * @example
   * eds.enterprise_office.4c4g
   */
  desktopType?: string;
  /**
   * @remarks
   * The number of authorized users for the shared cloud computer.
   * 
   * @example
   * 1
   */
  endUserCount?: number;
  /**
   * @remarks
   * The domain name of Microsoft Entra ID.
   * 
   * @example
   * contoso.onmicrosoft.com
   */
  entraDomainName?: string;
  /**
   * @remarks
   * The environment ID. This parameter is not publicly available.
   * 
   * @example
   * adifa****
   */
  envId?: string;
  /**
   * @remarks
   * The environment type. This parameter is not publicly available.
   * 
   * @example
   * Private
   */
  envType?: string;
  /**
   * @remarks
   * The expiration time of the subscription shared cloud computer.
   * 
   * The time follows the ISO 8601 standard in UTC: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2022-03-17T16:00:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The list of expiration times.
   */
  expiredTimes?: string[];
  /**
   * @remarks
   * The number of GPU cores.
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
   * The GPU memory.
   * 
   * @example
   * 16 GiB
   */
  gpuSpec?: string;
  /**
   * @remarks
   * The maximum idle duration after a user session is established. If no keyboard or mouse operations are performed within this duration, the session is disconnected. Unit: milliseconds.
   * 
   * @example
   * 90000
   */
  idleDisconnectDuration?: number;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * m-gq15cq5ydlvwn****
   */
  imageId?: string;
  /**
   * @remarks
   * Indicates whether the directory is an LDAP directory.
   */
  isLdap?: boolean;
  /**
   * @remarks
   * The retention period after a session is disconnected. Unit: milliseconds. Valid values: 180000 (3 minutes) to 345600000 (4 days). A value of 0 indicates that the session is always retained.
   * 
   * @example
   * 180000
   */
  keepDuration?: number;
  /**
   * @remarks
   * The load balancing policy for multi-session shared cloud computers with multiple instances.
   * 
   * @example
   * 1
   */
  loadPolicy?: number;
  /**
   * @remarks
   * - For pay-as-you-go shared cloud computers, this parameter indicates the maximum number of cloud computers that can be created.
   * 
   * @example
   * 3
   */
  maxDesktopsCount?: number;
  /**
   * @remarks
   * The memory size. Unit: MiB.
   * 
   * @example
   * 16384
   */
  memory?: number;
  /**
   * @remarks
   * - For pay-as-you-go shared cloud computers, this parameter indicates the minimum number of cloud computers that can be created.
   * 
   * @example
   * 1
   */
  minDesktopsCount?: number;
  /**
   * @remarks
   * The name of the office network to which the shared cloud computer belongs.
   * 
   * @example
   * cn-hangzhou+dir-467671****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The ID of the office network to which the shared cloud computers belong.
   * 
   * @example
   * cn-hangzhou+os-c5cy7q578s8jc****
   */
  officeSiteName?: string;
  /**
   * @remarks
   * The account system type of the office network.
   * 
   * @example
   * SIMPLE
   */
  officeSiteType?: string;
  /**
   * @remarks
   * The organization ID of the team.
   * 
   * @example
   * org-aliyun-wy-org-id
   */
  orgId?: string;
  /**
   * @remarks
   * The operating system type.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The cloud computer template ID.
   * 
   * @example
   * bundle_eds_general_4c8g_s8d5_win2019
   */
  ownBundleId?: string;
  /**
   * @remarks
   * The name of the cloud computer template.
   * 
   * @example
   * Standard Office Template
   */
  ownBundleName?: string;
  /**
   * @remarks
   * The type of the shared cloud computer.
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
   * The ID of the policy associated with the shared cloud computer.
   * 
   * @example
   * pg-53iyi2aar0nd6c8qj
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The list of cloud computer policy IDs.
   */
  policyGroupIdList?: string[];
  /**
   * @remarks
   * The policy name associated with the shared cloud computer.
   * 
   * @example
   * All enabled policy
   */
  policyGroupName?: string;
  /**
   * @remarks
   * The list of cloud computer policy names.
   */
  policyGroupNameList?: string[];
  /**
   * @remarks
   * The protocol type.
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @remarks
   * The ID of the QoS rule.
   * 
   * @example
   * qos-5605u0gelk200****
   */
  qosRuleId?: string;
  /**
   * @remarks
   * The session occupancy threshold used as the auto scaling trigger condition for multi-session shared cloud computers. The session occupancy is calculated by using the following formula:
   * 
   * ```Session occupancy = Number of bound sessions / (Total number of cloud computers × Maximum number of sessions supported by each cloud computer) × 100%```
   * 
   * When the session occupancy reaches this threshold, new cloud computers are created. When the session occupancy is below this threshold, excess cloud computers are deleted.
   * 
   * @example
   * 0.85
   */
  ratioThreshold?: number;
  /**
   * @remarks
   * The reset type of the shared cloud computer.
   * 
   * @example
   * 0
   */
  resetType?: number;
  /**
   * @remarks
   * The convenience user group ID.
   * 
   * @example
   * ug-3f6c8a2b****
   */
  simpleUserGroupId?: string;
  /**
   * @remarks
   * The status of the shared cloud computer.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The idle shutdown duration. When the cloud computer has been idle for this duration, it is automatically shut down. If a user connects after shutdown, the cloud computer automatically starts. Unit: milliseconds.
   * 
   * @example
   * 900000
   */
  stopDuration?: number;
  /**
   * @remarks
   * The subnet ID.
   * 
   * @example
   * vsw-uf63bb6*****8gfytm
   */
  subnetId?: string;
  /**
   * @remarks
   * The system cloud disk type.
   * 
   * @example
   * cloud_ssd
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The system cloud disk capacity. Unit: GiB.
   * 
   * @example
   * 80
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: DescribeDesktopGroupsResponseBodyDesktopGroupsTags[];
  /**
   * @remarks
   * The user group name.
   * 
   * @example
   * R&D Group
   */
  userGroupName?: string;
  /**
   * @remarks
   * The organizational unit (OU) path of the user.
   * 
   * @example
   * example.com
   */
  userOuPath?: string;
  /**
   * @remarks
   * The version number of the shared cloud computer.
   * 
   * @example
   * 2
   */
  version?: number;
  /**
   * @remarks
   * Indicates whether encryption is enabled.
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
   * The list of shared cloud computers.
   */
  desktopGroups?: DescribeDesktopGroupsResponseBodyDesktopGroups[];
  /**
   * @remarks
   * The token for the next query.
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

