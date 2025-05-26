// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDesktopGroupsResponseBodyDesktopGroupsCountPerStatus } from "./DescribeDesktopGroupsResponseBodyDesktopGroupsCountPerStatus";
import { DescribeDesktopGroupsResponseBodyDesktopGroupsTags } from "./DescribeDesktopGroupsResponseBodyDesktopGroupsTags";


export class DescribeDesktopGroupsResponseBodyDesktopGroups extends $dara.Model {
  /**
   * @remarks
   * The number of concurrent sessions allowed for each cloud computer within the multi-session many-to-many share.
   * 
   * @example
   * 1
   */
  bindAmount?: number;
  /**
   * @remarks
   * This parameter is applicable only to subscription cloud computer shares. It defines the initial number of cloud computers that are purchased. Valid values: 0 to 200.
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
   * test
   */
  comments?: string;
  /**
   * @remarks
   * The maximum period of time during which a session is connected. When the specified maximum period of time is reached, the session is automatically disconnected. Unit: milliseconds.
   * 
   * @example
   * 90000
   */
  connectDuration?: number;
  /**
   * @remarks
   * The number of cloud computers in each state.
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
   * The time when the cloud computer pool was created.
   * 
   * @example
   * 2022-02-17T14:51:07Z
   */
  createTime?: string;
  /**
   * @remarks
   * The Alibaba Cloud account that creates the cloud computer pool.
   * 
   * @example
   * 1007214305******
   */
  creator?: string;
  /**
   * @remarks
   * The category of the user disk.
   * 
   * Valid values:
   * 
   * *   cloud_efficiency: ultra disk
   * *   cloud_ssd: standard SSD
   * *   cloud_essd: enhanced SSD (ESSD)
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
   * The number of cloud computers that are created.
   * 
   * @example
   * 2
   */
  desktopCount?: number;
  /**
   * @remarks
   * The ID of the cloud computer share.
   * 
   * @example
   * dg-2i8qxpv6t1a03****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The name of the cloud computer share.
   * 
   * @example
   * test1
   */
  desktopGroupName?: string;
  /**
   * @remarks
   * The cloud computer type. You can call the [DescribeDesktopTypes](https://help.aliyun.com/document_detail/188882.html) operation to query the IDs of the cloud computer types supported by WUYING Workspace.
   * 
   * @example
   * eds.enterprise_office.4c4g
   */
  desktopType?: string;
  /**
   * @remarks
   * The number of users who can access the cloud computer share.
   * 
   * @example
   * 1
   */
  endUserCount?: number;
  /**
   * @remarks
   * The expiration date of the subscription cloud computer share.
   * 
   * @example
   * 2022-03-17T16:00:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 1
   */
  gpuCount?: number;
  /**
   * @remarks
   * The version of the GPU driver.
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
   * The period of time after which a session is closed. After an end user connects to a cloud computer, the session is established. If the system does not detect inputs from the keyboard or mouse within the specified period of time, the session is closed. Unit: milliseconds.
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
   * The keep-alive duration of a session after the session is disconnected. Valid values: 180000 (3 minutes) to 345600000 (4 days). Unit: milliseconds. If you set this parameter to 0, the session is permanently retained after it is disconnected.
   * 
   * When a session is disconnected, take note of the following situations: If an end user does not resume the session within the specified duration, the session is closed and all unsaved data is cleared. If the end user resumes the session within the specified duration, the end user can continue to access data of the session.
   * 
   * @example
   * 1000
   */
  keepDuration?: number;
  /**
   * @remarks
   * The load balancing policy for the multi-session many-to-many share.
   * 
   * Valid values:
   * 
   * *   0: depth-first
   * *   1: breadth-first
   * 
   * @example
   * 1
   */
  loadPolicy?: number;
  /**
   * @remarks
   * *   For pay-as-you-go cloud computer shares, this parameter defines the maximum number of cloud computers allowed.
   * *   For subscription cloud computer shares, this parameter defines the total number of cloud computers, including both the initially purchased cloud computers (`BuyDesktopsCount`) and those that can be auto-created.
   * 
   * @example
   * 10
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
   * *   For pay-as-you-go cloud computer shares, this parameter defines the minimum number of cloud computers allowed.
   * *   For subscription cloud computer shares, this parameter defines the number of cloud computers that are initially purchased (`BuyDesktopsCount`).
   * 
   * @example
   * 1
   */
  minDesktopsCount?: number;
  /**
   * @remarks
   * The ID of the office network in which the cloud computer network resides.
   * 
   * @example
   * cn-hangzhou+dir-467671****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The ID of the office network in which the cloud computer share resides.
   * 
   * @example
   * testName
   */
  officeSiteName?: string;
  /**
   * @remarks
   * The account type of the office network.
   * 
   * Valid values:
   * 
   * *   PERSONAL: individual office network
   * *   SIMPLE: convenience office network
   * *   AD_CONNECTOR: enterprise Active Directory (AD) office network
   * *   RAM: Resource Access Management (RAM)-based office network
   * 
   * @example
   * SIMPLE
   */
  officeSiteType?: string;
  /**
   * @remarks
   * The OS.
   * 
   * Valid values:
   * 
   * *   Linux
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Windows
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The ID of the cloud computer template.
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
   * test
   */
  ownBundleName?: string;
  /**
   * @remarks
   * The type of the cloud computer share.
   * 
   * Valid values:
   * 
   * *   0: a single-session many-to-many share.
   * *   1: a multi-session many-to-many share.
   * 
   * @example
   * 0
   */
  ownType?: number;
  /**
   * @remarks
   * The billing method of the cloud computer pool.
   * 
   * Valid values:
   * 
   * *   PostPaid: pay-as-you-go
   * *   PrePaid: subscription
   * 
   * @example
   * PrePaid
   */
  payType?: string;
  /**
   * @remarks
   * The ID of the applied policy.
   * 
   * @example
   * pg-53iyi2aar0nd6c8qj
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The name of the applied policy.
   * 
   * @example
   * test-policy
   */
  policyGroupName?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * Valid values:
   * 
   * *   HDX
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   ASP
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @remarks
   * The threshold for the ratio of connected sessions, which triggers automatic scaling of cloud computers within the multi-session many-to-many share. To calculate the ratio of connected sessions, use the following formula:
   * 
   * `Ratio of connected sessions = Number of connected sessions/(Total number of cloud computers × Maximum number of sessions allowed for each cloud computer) × 100%`
   * 
   * When the specified threshold is reached, new cloud computers are automatically created. When the specified threshold is not reached, idle cloud computers are released.
   * 
   * @example
   * 0.85
   */
  ratioThreshold?: number;
  /**
   * @remarks
   * The reset option for the cloud computer share.
   * 
   * Valid values:
   * 
   * *   0: does not reset any disk.
   * *   1: resets only the system disk.
   * *   2: resets only the data disk.
   * *   3: resets the system disk and data disk.
   * 
   * @example
   * 0
   */
  resetType?: number;
  /**
   * @remarks
   * The status of the cloud computer share.
   * 
   * Valid values:
   * 
   * *   0: The cloud computer share is unpaid.
   * *   1: The cloud computer share is normal.
   * *   2: The cloud computer share expired, or your account has an overdue payment.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The period of time after which an idle cloud computer is stopped. When the specified period of time is reached, the cloud computer is automatically stopped. If an end user connects to the stopped cloud computer, the cloud computer is automatically started. Unit: milliseconds.
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
   * The category of the system disk.
   * 
   * Valid values:
   * 
   * *   cloud_efficiency: ultra disk
   * *   cloud_ssd: standard SSD
   * *   cloud_essd: enhanced SSD (ESSD)
   * 
   * @example
   * cloud_ssd
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The system disk capacity. Unit: GiB.
   * 
   * @example
   * 80
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The tags.
   */
  tags?: DescribeDesktopGroupsResponseBodyDesktopGroupsTags[];
  userGroupName?: string;
  /**
   * @remarks
   * The user\\"s organizational unit path.
   * 
   * @example
   * example.com
   */
  userOuPath?: string;
  /**
   * @remarks
   * The version number of the cloud computer share.
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
   * The ID of the Key Management Service (KMS) key for disk encryption.
   * 
   * @example
   * e5409ada-xxxx-xxxx-xxxx-89e31e23e993
   */
  volumeEncryptionKey?: string;
  static names(): { [key: string]: string } {
    return {
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
      expiredTime: 'ExpiredTime',
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
      osType: 'OsType',
      ownBundleId: 'OwnBundleId',
      ownBundleName: 'OwnBundleName',
      ownType: 'OwnType',
      payType: 'PayType',
      policyGroupId: 'PolicyGroupId',
      policyGroupName: 'PolicyGroupName',
      protocolType: 'ProtocolType',
      ratioThreshold: 'RatioThreshold',
      resetType: 'ResetType',
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
      expiredTime: 'string',
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
      osType: 'string',
      ownBundleId: 'string',
      ownBundleName: 'string',
      ownType: 'number',
      payType: 'string',
      policyGroupId: 'string',
      policyGroupName: 'string',
      protocolType: 'string',
      ratioThreshold: 'number',
      resetType: 'number',
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
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

