// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPoliciesResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of anti-ransomware policies returned.
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
   * The number of the servers on which the anti-ransomware agent is in an abnormal state.
   * 
   * @example
   * 2
   */
  clientErrorCount?: number;
  /**
   * @remarks
   * The UUIDs of the servers on which the anti-ransomware agent is in an **abnormal** state.
   */
  clientErrorUuidList?: string[];
  /**
   * @remarks
   * The status of the anti-ransomware agent. Valid values:
   * 
   * *   **running**: normal
   * *   **exception**: abnormal
   * 
   * @example
   * running
   */
  clientStatus?: string;
  /**
   * @remarks
   * The number of the servers on which the anti-ransomware agent is in a normal state.
   * 
   * @example
   * 2
   */
  healthClientCount?: number;
  /**
   * @remarks
   * The UUIDs of the servers on which the anti-ransomware agent is in a **normal** state.
   */
  healthClientUuidList?: string[];
  /**
   * @remarks
   * The ID of the anti-ransomware policy.
   * 
   * @example
   * 11
   */
  id?: number;
  /**
   * @remarks
   * The time when the anti-ransomware policy was last updated. Unit: milliseconds.
   * 
   * @example
   * 1719488535027
   */
  lastStatusSyncTime?: number;
  /**
   * @remarks
   * The name of the anti-ransomware policy.
   * 
   * @example
   * SecurityStrategy-20200303
   */
  name?: string;
  /**
   * @remarks
   * The configurations of the anti-ransomware policy. The value of this parameter is in the JSON format and contains the following fields:
   * 
   * *   **IsDefault**: the type of the anti-ransomware policy. Valid values:
   * 
   *     *   **1**: recommended policy
   *     *   **0**: custom policy
   * 
   * *   **Include**: the format of the files that are protected. If the value of this field is [], all formats of files are protected.
   * 
   * *   **Source**: the directory that is protected. If the value of this field is [], all directories are protected.
   * 
   * *   **ExcludeSystemPath**: indicates whether a specified directory is excluded from the anti-ransomware policy. If the value of this field is **true**, a directory is excluded. If this field is left empty, no directories are excluded.
   * 
   * *   **Exclude**: the directory that is excluded from the anti-ransomware policy. If the value of this field is [], no directories are excluded.
   * 
   * *   **Schedule**: the start time and interval of a data backup task. We recommend that you specify a start time that begins during off-peak hours but does not start on the hour. Examples:
   * 
   *     *   If the value of this field is I|1583216092|P21D, the data backup task starts from 2020-03-03 14:14:52, and the task is run at an interval of three weeks.
   *     *   If the value of this field is I|1583216092|PT24H, the data backup task starts from 2020-03-03 14:14:52, and the task is run at an interval of 24 hours.
   * 
   * *   **Retention**: the period during which backup data is retained. Unit: days. If the value of this field is 7, backup data is retained for a week. If the value of this field is 365, backup data is retained for a year. If the value of this field is -1, backup data is permanently retained.
   * 
   * *   **SpeedLimiter**: the limit on the network bandwidth for data backup tasks. If the value of this field is 0:24:30720, the maximum bandwidth for a data backup task is 30 MB/s from 00:00 to 24:00.
   * 
   * *   **UseVss**: indicates whether the VSS feature is enabled. The feature is available only for Windows servers. Valid values:
   * 
   *     *   **true**
   *     *   **false**
   * 
   * >  The VSS feature is available only if you create the anti-ransomware policy for Windows servers. After you enable the feature, the number of backup failures due to running processes is significantly reduced. We recommend that you enable the VSS feature. After you enable the feature, the data of disks that are in the exFAT and FAT32 formats cannot be backed up.
   * 
   * @example
   * {"Exclude":["/bin/","/usr/bin/","/sbin/","/boot/","/proc/","/sys/","/srv/","/lib/","/selinux/","/usr/sbin/","/run/","/lib32/","/lib64/","/lost+found/","/var/lib/kubelet/","/var/lib/ntp/proc","/var/lib/container","Windows\\\\","Python27\\\\","Program Files (x86)\\\\","Program Files\\\\","Boot\\\\","$RECYCLE.BIN","System Volume Information\\\\","Users\\\\Administrator\\\\NTUSER.DAT*","ProgramData\\\\","pagefile.sys","Users\\\\Default\\\\NTUSER.DAT*","Users\\\\Administrator\\\\ntuser.*"],"ExcludeSystemPath":true,"Include":[],"IsDefault":1,"Retention":7,"Schedule":"I|1630689360|PT24H","Source":[],"SpeedLimiter":"","UseVss":true}
   */
  policy?: string;
  /**
   * @remarks
   * The ID of the region that you specified for data backup when you installed the anti-ransomware agent for the server not deployed on Alibaba Cloud.
   * 
   * @example
   * ch-hangzhou
   */
  policyRegionId?: string;
  /**
   * @remarks
   * The version of the anti-ransomware policy. Valid values:
   * 
   * *   1.0.0
   * *   2.0.0
   * 
   * @example
   * 2.0.0
   */
  policyVersion?: string;
  /**
   * @remarks
   * The previous status of the anti-ransomware policy. Valid values:
   * 
   * *   **enabled**: The anti-ransomware policy is manually enabled.
   * *   **disabled**: The anti-ransomware policy is manually disabled. After an anti-ransomware policy is disabled, the data backup task that is running based on the policy stops.
   * *   **closed**: The anti-ransomware policy automatically stops because the anti-ransomware capacity is insufficient.
   * 
   * @example
   * disabled
   */
  preStatus?: string;
  /**
   * @remarks
   * The UUIDs that are returned based on the value of the MachineRemark request parameter.
   */
  remarkedUuidList?: string[];
  /**
   * @remarks
   * The type of the server. Valid values:
   * 
   * *   **OUT_CLOUD**: server not deployed on Alibaba Cloud
   * *   **ALIYUN**: Elastic Compute Service (ECS) instance
   * *   **TRIPARTITE**: simple application server
   * 
   * @example
   * OUT_CLOUD
   */
  serverType?: string;
  /**
   * @remarks
   * The number of servers on which data backup is exceptional.
   * 
   * @example
   * 2
   */
  serviceErrorCount?: number;
  /**
   * @remarks
   * The UUIDs of the servers on which data backup is exceptional.
   */
  serviceErrorUuidList?: string[];
  /**
   * @remarks
   * The status of the anti-ransomware policy. Valid values:
   * 
   * *   **enabled**: The anti-ransomware policy is manually enabled.
   * *   **disabled**: The anti-ransomware policy is manually disabled. After an anti-ransomware policy is disabled, the data backup task that is running based on the policy stops.
   * *   **closed**: The anti-ransomware policy automatically stops because the anti-ransomware capacity is insufficient.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The upgrade status of the anti-ransomware policy. Valid values:
   * 
   * *   **NotUpgraded**
   * *   **Upgrading**
   * *   **UpgradeFailed**
   * *   **UpgradeSuccess**
   * 
   * @example
   * Upgrading
   */
  upgradeStatus?: string;
  /**
   * @remarks
   * The UUIDs of the servers to which the anti-ransomware policy is applied.
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
   * The details of the anti-ransomware policy.
   */
  policies?: DescribeBackupPoliciesResponseBodyPolicies[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
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

