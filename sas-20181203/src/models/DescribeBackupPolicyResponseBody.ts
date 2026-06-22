// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPolicyResponseBodyBackupPolicyDetail extends $dara.Model {
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
   * The ID of the anti-ransomware backup policy.
   * 
   * @example
   * 51880
   */
  id?: number;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * testBuckUp
   */
  name?: string;
  /**
   * @remarks
   * The content of the anti-ransomware protection policy. This parameter is in JSON format. The following fields are included:
   * 
   * - **IsDefault**: The type of the protection policy. Valid values:
   *     - **1**: recommended policy
   *     - **0**: custom policy
   * - **Include**: The file types to protect. If all file types are protected, this parameter is set to [].
   * - **Source**: The server folders to protect. If all folders are protected, this parameter is set to [].
   * - **ExcludeSystemPath**: Specifies whether to exclude specified folders. Set this parameter to **true** to exclude folders. If no folders need to be excluded, you do not need to configure this parameter.
   * - **Exclude**: The specified protection folder addresses. If no specific protection folder addresses are configured, this parameter is set to [].
   * - **Schedule**: Settings for the execution time and interval of the data backup task. Specify an off-peak hour that is not on the hour. Examples:
   *     - Example 1: I|1583216092|P21D indicates that the data backup starts at 2020-03-03 14:14:52 and the backup policy executes at an interval of 3 weeks.
   *     - Example 2: I|1583216092|PT24H indicates that the data backup starts at 2020-03-03 14:14:52 and the backup policy executes at an interval of 24 hours.
   * - **Retention**: Settings for the retention period of backup data, in days. 7 indicates 1 week, 365 indicates 1 year, and -1 indicates permanent retention.
   * - **SpeedLimiter**: Settings for the backup network bandwidth throttling. For example, 0:24:30720 indicates that the backup network bandwidth throttling is 30 MB/s from 00:00 to 24:00.
   * - **UseVss**: Specifies whether to enable the Volume Shadow Copy Service (VSS) feature for Windows. Valid values:
   *     - **true**: enabled
   *     - **false**: not enabled
   * 
   * > The VSS feature is available only for Windows systems. After this feature is enabled, it effectively reduces the issue of individual file backup failures caused by process occupation. Enable this feature. After this feature is enabled, file backup for exFAT and FAT32 disk formats is not supported.
   * 
   * @example
   * {
   *       "Exclude": [
   *             "/bin/",
   *             "/usr/bin/",
   *             "/sbin/",
   *             "/boot/",
   *             "/proc/",
   *             "/sys/",
   *             "/srv/",
   *             "/lib/",
   *             "/selinux/",
   *             "/usr/sbin/",
   *             "/run/",
   *             "/lib32/",
   *             "/lib64/",
   *             "/lost+found/",
   *             "/var/lib/kubelet/",
   *             "/var/lib/ntp/proc",
   *             "/var/lib/container",
   *             "Windows\\\\",
   *             "Python27\\\\",
   *             "Program Files (x86)\\\\",
   *             "Program Files\\\\",
   *             "Boot\\\\",
   *             "$RECYCLE.BIN",
   *             "System Volume Information\\\\",
   *             "Users\\\\Administrator\\\\NTUSER.DAT*",
   *             "ProgramData\\\\",
   *             "pagefile.sys",
   *             "Users\\\\Default\\\\NTUSER.DAT*",
   *             "Users\\\\Administrator\\\\ntuser.*"
   *       ],
   *       "ExcludeSystemPath": true,
   *       "Include": [],
   *       "IsDefault": 1,
   *       "Retention": 7,
   *       "Schedule": "I|1630689360|PT24H",
   *       "Source": [],
   *       "SpeedLimiter": "",
   *       "UseVss": true
   * }
   */
  policy?: string;
  /**
   * @remarks
   * The version of the protection policy. Valid values:
   * 
   * - **1.0.0**
   * - **2.0.0**
   * 
   * @example
   * 2.0.0
   */
  policyVersion?: string;
  /**
   * @remarks
   * The region ID of the backup service.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the anti-ransomware protection policy. Valid values:
   * 
   * - **enabled**: The policy is manually enabled.
   * 
   * - **disabled**: The policy is manually disabled. After the policy is disabled, running backup tasks are stopped.
   * 
   * - **closed**: The policy is disabled by the system because the anti-ransomware capacity is exceeded.
   * 
   * @example
   * closed
   */
  status?: string;
  /**
   * @remarks
   * The UUIDs of the servers for which the backup policy is enabled.
   */
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      clientStatus: 'ClientStatus',
      id: 'Id',
      name: 'Name',
      policy: 'Policy',
      policyVersion: 'PolicyVersion',
      regionId: 'RegionId',
      status: 'Status',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientStatus: 'string',
      id: 'number',
      name: 'string',
      policy: 'string',
      policyVersion: 'string',
      regionId: 'string',
      status: 'string',
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.uuidList)) {
      $dara.Model.validateArray(this.uuidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the policy.
   */
  backupPolicyDetail?: DescribeBackupPolicyResponseBodyBackupPolicyDetail;
  /**
   * @remarks
   * The request ID. It is a unique identifier generated by Alibaba Cloud for the request and can be used for troubleshooting.
   * 
   * @example
   * A4EB8B1C-1DEC-5E18-BCD0-D1BBB3936FA7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPolicyDetail: 'BackupPolicyDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPolicyDetail: DescribeBackupPolicyResponseBodyBackupPolicyDetail,
      requestId: 'string',
    };
  }

  validate() {
    if(this.backupPolicyDetail && typeof (this.backupPolicyDetail as any).validate === 'function') {
      (this.backupPolicyDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

