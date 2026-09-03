// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the protection policy to create.
   * 
   * This parameter is required.
   * 
   * @example
   * ServerBackUpPolicy01
   */
  name?: string;
  /**
   * @remarks
   * - **IsDefault**: The type of the protection policy to create. Valid values:
   *     - **1**: Recommended policy.
   *     - **0**: Custom policy.
   * - **Include**: The file types to protect. To protect all file types, set this parameter to [].
   * - **Source**: The server folders to protect. To protect all folders, set this parameter to [].
   * - **ExcludeSystemPath**: Specifies whether to exclude specified folders. To exclude folders, set this parameter to **true**. If you do not want to exclude folders, you do not need to configure this parameter.
   * - **Exclude**: The specified protection folder addresses. If you do not want to specify any protection folder addresses, set this parameter to [].
   * - **Schedule**: The execution time and interval of the data backup task. Specify an off-peak hour that is not on the hour. Examples:
   *     - Example 1: I|1583216092|P21D indicates that the data backup starts at 2020-03-03 14:14:52 and the backup policy execution interval is 3 weeks.
   *     - Example 2: I|1583216092|PT24H indicates that the data backup starts at 2020-03-03 14:14:52 and the backup policy execution interval is 24 hours.
   * - **Retention**: The retention period of backup data, in days. The value 7 indicates 1 week, 365 indicates 1 year, and -1 indicates permanent retention.
   * - **SpeedLimiter**: The backup network bandwidth limit. For example, 0:24:30720 indicates that the backup network bandwidth limit from 00:00 to 24:00 is 30 MB/s.
   * - **UseVss**: Specifies whether to enable the Volume Shadow Copy Service (VSS) feature for Windows. Valid values:
   *     - **true**: Enabled.
   *     - **false**: Not enabled.
   * 
   * > The VSS feature applies only to Windows systems. After this feature is enabled, the issue of individual file backup failures caused by process occupation is effectively reduced. We recommend that you enable this feature. After this feature is enabled, file backup for exFAT and FAT32 disk formats is not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * "{"IsDefault":1,"Include":[],"Source":[],"Schedule":"I|1648061040|PT24H","Retention":7,"SpeedLimiter":"","ExcludeSystemPath":true,"Exclude":["/bin/","/usr/bin/","/sbin/","/boot/","/proc/","/sys/","/srv/","/lib/","/selinux/","/usr/sbin/","/run/","/lib32/","/lib64/","/lost+found/","/var/lib/kubelet/","/var/lib/ntp/proc","/var/lib/container","Windows","Python27","Program Files (x86)","Program Files","Boot","$RECYCLE.BIN","System Volume Information","Users\\Administrator\\NTUSER.DAT*","ProgramData","pagefile.sys","Users\\Default\\NTUSER.DAT*","Users\\Administrator\\ntuser.*"],"UseVss":true}"
   */
  policy?: { [key: string]: any };
  /**
   * @remarks
   * The region ID of the non-Alibaba Cloud server.
   * 
   * > Call the [DescribeSupportRegion](~~DescribeSupportRegion~~) operation to query the regions supported by the anti-ransomware feature, and then select the supported region closest to your non-Alibaba Cloud server.
   * 
   * @example
   * ch-hangzhou
   */
  policyRegionId?: string;
  /**
   * @remarks
   * The version of the protection policy. Set the value to **2.0.0**.
   * 
   * This parameter is required.
   * 
   * @example
   * 2.0.0
   */
  policyVersion?: string;
  /**
   * @remarks
   * The method used to select assets. Valid values:
   * - **ALL_MACHINE**: All assets.
   * > To cover all assets of the specified server type, set this parameter to **ALL_MACHINE**. In this case, **UuidList** is invalid. Only one policy that covers all assets can exist for each server type.
   * 
   * @example
   * ALL_MACHINE
   */
  selectType?: string;
  /**
   * @remarks
   * The server type. Valid values:
   * - **ALIYUN**: Alibaba Cloud server.
   * - **OUT_CLOUD**: Non-Alibaba Cloud server.
   * - **TRIPARTITE**: Simple application server.
   * 
   * @example
   * ALIYUN
   */
  serverType?: string;
  /**
   * @remarks
   * The UUIDs of the servers to protect.
   * 
   * @example
   * ["3bb30859-b3b5-4f28-868f-b0892c98****", "3bb30859-b3b5-4f28-868f-b0892c98****"]
   */
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      policy: 'Policy',
      policyRegionId: 'PolicyRegionId',
      policyVersion: 'PolicyVersion',
      selectType: 'SelectType',
      serverType: 'ServerType',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      policy: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      policyRegionId: 'string',
      policyVersion: 'string',
      selectType: 'string',
      serverType: 'string',
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.policy) {
      $dara.Model.validateMap(this.policy);
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

