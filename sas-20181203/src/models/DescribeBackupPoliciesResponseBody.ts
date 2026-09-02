// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPoliciesResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries on the current page in a paged query.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in the returned data.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of backup policies per page in a paged query. Default value: 10, which indicates that each page contains 10 backup policies.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of backup policies in the returned data.
   * 
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPoliciesResponseBodyPolicies extends $dara.Model {
  /**
   * @remarks
   * The number of errors reported by the anti-ransomware client.
   * 
   * @example
   * 2
   */
  clientErrorCount?: number;
  /**
   * @remarks
   * The list of UUIDs of clients in the **abnormal** state.
   */
  clientErrorUuidList?: string[];
  /**
   * @remarks
   * The status of the anti-ransomware client. Valid values:
   * 
   * - **running**: Normal.
   * 
   * - **exception**: Abnormal.
   * 
   * @example
   * running
   */
  clientStatus?: string;
  /**
   * @remarks
   * The number of clients in the Normal state.
   * 
   * @example
   * 2
   */
  healthClientCount?: number;
  /**
   * @remarks
   * The list of UUIDs of clients in the **healthy** state.
   */
  healthClientUuidList?: string[];
  /**
   * @remarks
   * The ID of the anti-ransomware mitigation policy.
   * 
   * @example
   * 11
   */
  id?: number;
  /**
   * @remarks
   * The most recent time when the anti-ransomware mitigation policy status was updated, in milliseconds.
   * 
   * @example
   * 1719488535027
   */
  lastStatusSyncTime?: number;
  /**
   * @remarks
   * The name of the anti-ransomware mitigation policy.
   * 
   * @example
   * SecurityStrategy-20200303
   */
  name?: string;
  /**
   * @remarks
   * The content of the anti-ransomware mitigation policy. This parameter is in JSON format. The following fields are included:
   * 
   * - **IsDefault**: The type of the mitigation policy. Valid values:
   *     - **1**: recommended policy
   *     - **0**: custom policy
   * - **Include**: The file types to protect. If all file types are protected, this parameter is set to [].
   * - **Source**: The server folders to protect. If all folders need to be protected, this parameter is set to [].
   * - **ExcludeSystemPath**: Specifies whether to exclude specified folders. To exclude folders, set this parameter to **true**. If you do not want to exclude folders, you do not need to set this parameter.
   * - **Exclude**: The specified protection folder addresses. If no specific protection folder address is set, this parameter is set to [].
   * - **Schedule**: The execution time and interval of the data backup node. Specify a non-peak hour that is not on the hour. Examples:
   *     - Example 1: I|1583216092|P21D indicates that data backup starts at 2020-03-03 14:14:52, and the backup policy executes at an interval of 3 weeks.
   *     - Example 2: I|1583216092|PT24H indicates that data backup starts at 2020-03-03 14:14:52, and the backup policy executes at an interval of 24 hours.
   * - **Retention**: The retention period of backup data, in days. 7 indicates 1 week, 365 indicates 1 year, and -1 indicates permanent retention.
   * - **SpeedLimiter**: The backup network bandwidth throttling. For example, 0:24:30720 indicates that the backup network bandwidth throttling is 30 MB/s from 00:00 to 24:00.
   * - **UseVss**: Specifies whether to enable the VSS (Windows) feature. Valid values:
   *     - **true**: enabled
   *     - **false**: not enabled
   * 
   * > The VSS (Windows) feature is available only for Windows systems. After this feature is enabled, it effectively reduces the issue of individual file backup failures caused by process occupation. Enable this feature. After this feature is enabled, file backup for exFAT and FAT32 disk formats is not supported.
   * 
   * @example
   * {"Exclude":["/bin/","/usr/bin/","/sbin/","/boot/","/proc/","/sys/","/srv/","/lib/","/selinux/","/usr/sbin/","/run/","/lib32/","/lib64/","/lost+found/","/var/lib/kubelet/","/var/lib/ntp/proc","/var/lib/container","Windows\\\\","Python27\\\\","Program Files (x86)\\\\","Program Files\\\\","Boot\\\\","$RECYCLE.BIN","System Volume Information\\\\","Users\\\\Administrator\\\\NTUSER.DAT*","ProgramData\\\\","pagefile.sys","Users\\\\Default\\\\NTUSER.DAT*","Users\\\\Administrator\\\\ntuser.*"],"ExcludeSystemPath":true,"Include":[],"IsDefault":1,"Retention":7,"Schedule":"I|1630689360|PT24H","Source":[],"SpeedLimiter":"","UseVss":true}
   */
  policy?: string;
  /**
   * @remarks
   * The region ID of the backup service selected when the anti-ransomware client is installed on a non-Alibaba Cloud server.
   * 
   * @example
   * ch-hangzhou
   */
  policyRegionId?: string;
  /**
   * @remarks
   * The version of the mitigation policy. Valid values:
   * 
   * - 1.0.0.
   * - 2.0.0.
   * 
   * @example
   * 2.0.0
   */
  policyVersion?: string;
  /**
   * @remarks
   * The previous status of the anti-ransomware mitigation policy.
   * 
   * - **enabled**: The policy was manually enabled.
   * 
   * - **disabled**: The policy was manually disabled. After the policy is disabled, running backup nodes are stopped.
   * 
   * - **closed**: The anti-ransomware capacity was exceeded, and the system disabled the policy.
   * 
   * @example
   * disabled
   */
  preStatus?: string;
  /**
   * @remarks
   * The list of UUIDs of servers returned after the search by the MachineRemark request parameter.
   */
  remarkedUuidList?: string[];
  /**
   * @remarks
   * The method used to select covered assets. Valid values:
   * 
   * - **ALL_MACHINE**: All assets.
   * 
   * > If the policy covers **all assets**, this property value is **ALL_MACHINE**.
   * 
   * @example
   * ALL_MACHINE
   */
  selectType?: string;
  /**
   * @remarks
   * The server type. Valid values:
   * 
   * - **OUT_CLOUD**: Non-Alibaba Cloud server.
   * - **ALIYUN**: Alibaba Cloud server.
   * - **TRIPARTITE**: Lightweight application server.
   * 
   * @example
   * OUT_CLOUD
   */
  serverType?: string;
  /**
   * @remarks
   * The number of servers with data backup exceptions.
   * 
   * @example
   * 2
   */
  serviceErrorCount?: number;
  /**
   * @remarks
   * The list of UUIDs of servers with data backup exceptions.
   */
  serviceErrorUuidList?: string[];
  /**
   * @remarks
   * The status of the anti-ransomware mitigation policy.
   * 
   * - **enabled**: The policy is manually enabled.
   * 
   * - **disabled**: The policy is manually disabled. After the policy is disabled, running backup nodes are stopped.
   * 
   * - **closed**: The anti-ransomware capacity is exceeded, and the system disables the policy.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The upgrade status of the policy. Valid values:
   * 
   * - **NotUpgraded**: Not upgraded.
   * - **Upgrading**: Upgrading.
   * - **UpgradeFailed**: Upgrade failed.
   * - **UpgradeSuccess**: Upgrade succeeded.
   * 
   * @example
   * Upgrading
   */
  upgradeStatus?: string;
  /**
   * @remarks
   * The list of UUIDs of servers protected by the anti-ransomware mitigation policy.
   */
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      clientErrorCount: 'ClientErrorCount',
      clientErrorUuidList: 'ClientErrorUuidList',
      clientStatus: 'ClientStatus',
      healthClientCount: 'HealthClientCount',
      healthClientUuidList: 'HealthClientUuidList',
      id: 'Id',
      lastStatusSyncTime: 'LastStatusSyncTime',
      name: 'Name',
      policy: 'Policy',
      policyRegionId: 'PolicyRegionId',
      policyVersion: 'PolicyVersion',
      preStatus: 'PreStatus',
      remarkedUuidList: 'RemarkedUuidList',
      selectType: 'SelectType',
      serverType: 'ServerType',
      serviceErrorCount: 'ServiceErrorCount',
      serviceErrorUuidList: 'ServiceErrorUuidList',
      status: 'Status',
      upgradeStatus: 'UpgradeStatus',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientErrorCount: 'number',
      clientErrorUuidList: { 'type': 'array', 'itemType': 'string' },
      clientStatus: 'string',
      healthClientCount: 'number',
      healthClientUuidList: { 'type': 'array', 'itemType': 'string' },
      id: 'number',
      lastStatusSyncTime: 'number',
      name: 'string',
      policy: 'string',
      policyRegionId: 'string',
      policyVersion: 'string',
      preStatus: 'string',
      remarkedUuidList: { 'type': 'array', 'itemType': 'string' },
      selectType: 'string',
      serverType: 'string',
      serviceErrorCount: 'number',
      serviceErrorUuidList: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      upgradeStatus: 'string',
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.clientErrorUuidList)) {
      $dara.Model.validateArray(this.clientErrorUuidList);
    }
    if(Array.isArray(this.healthClientUuidList)) {
      $dara.Model.validateArray(this.healthClientUuidList);
    }
    if(Array.isArray(this.remarkedUuidList)) {
      $dara.Model.validateArray(this.remarkedUuidList);
    }
    if(Array.isArray(this.serviceErrorUuidList)) {
      $dara.Model.validateArray(this.serviceErrorUuidList);
    }
    if(Array.isArray(this.uuidList)) {
      $dara.Model.validateArray(this.uuidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeBackupPoliciesResponseBodyPageInfo;
  /**
   * @remarks
   * The details of the mitigation policies.
   */
  policies?: DescribeBackupPoliciesResponseBodyPolicies[];
  /**
   * @remarks
   * The ID of the request. The ID is a unique identifier that Alibaba Cloud generates for the request and can be used to troubleshoot issues.
   * 
   * @example
   * BE120DAB-F4E7-4C53-ADC3-A97578ABF384
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      policies: 'Policies',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeBackupPoliciesResponseBodyPageInfo,
      policies: { 'type': 'array', 'itemType': DescribeBackupPoliciesResponseBodyPolicies },
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.policies)) {
      $dara.Model.validateArray(this.policies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

