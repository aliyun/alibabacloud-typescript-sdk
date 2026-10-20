// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBackupPolicyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the name of the anti-ransomware policy to create.
   * 
   * This parameter is required.
   * 
   * @example
   * ServerBackUpPolicy01
   */
  name?: string;
  /**
   * @remarks
   * - **IsDefault**: The type of the anti-ransomware policy to create. Valid values:
   *     - **1**: recommended policy
   *     - **0**: custom policy
   * - **Include**: The file types to protect. To protect all file types, set this parameter to [].
   * - **Source**: The server directories to protect. To protect all directories, set this parameter to [].
   * - **ExcludeSystemPath**: Specifies whether to exclude the specified directories. To exclude the directories, set this parameter to **true**. If you do not want to exclude the directories, you do not need to set this parameter.
   * - **Exclude**: Sets the specified protection directory addresses. If you do not want to specify protection directory addresses, set this parameter to [].
   * - **Schedule**: Sets the execution time and execution interval of the data backup task. We recommend that you specify a non-integer hour during off-peak hours. Examples:
   *     - Example 1: I|1583216092|P21D indicates that the data backup starts at 14:14:52 on March 3, 2020, and the backup policy execution interval is 3 weeks.
   *     - Example 2: I|1583216092|PT24H indicates that the data backup starts at 14:14:52 on March 3, 2020, and the backup policy execution interval is 24 hours.
   * - **Retention**: The retention period of the backup data. Unit: days. A value of 7 indicates 1 week, 365 indicates 1 year, and -1 indicates permanent retention.
   * - **SpeedLimiter**: Sets the backup network bandwidth limit. Example: 0:24:30720 indicates that the network bandwidth limit for the backup network is 30 MByte/s from 00:00 to 24:00.
   * - **UseVss**: Specifies whether to enable the Volume Shadow Copy Service (VSS) feature for Windows. Valid values:
   *     - **true**: enabled
   *     - **false**: disabled
   * 
   * > The VSS feature is available only for Windows systems. Enabling this feature effectively reduces the issue of individual file backup failures caused by process occupation. We recommend that you enable this feature. After this feature is enabled, file backup for exFAT and FAT32 disk formats is not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * "{"IsDefault":1,"Include":[],"Source":[],"Schedule":"I|1648061040|PT24H","Retention":7,"SpeedLimiter":"","ExcludeSystemPath":true,"Exclude":["/bin/","/usr/bin/","/sbin/","/boot/","/proc/","/sys/","/srv/","/lib/","/selinux/","/usr/sbin/","/run/","/lib32/","/lib64/","/lost+found/","/var/lib/kubelet/","/var/lib/ntp/proc","/var/lib/container","Windows","Python27","Program Files (x86)","Program Files","Boot","$RECYCLE.BIN","System Volume Information","Users\\Administrator\\NTUSER.DAT*","ProgramData","pagefile.sys","Users\\Default\\NTUSER.DAT*","Users\\Administrator\\ntuser.*"],"UseVss":true}"
   */
  policyShrink?: string;
  /**
   * @remarks
   * The region ID of the server that is not deployed on Alibaba Cloud.
   * 
   * > You can call the [DescribeSupportRegion](~~DescribeSupportRegion~~) operation to query the regions supported by the anti-ransomware feature, and then select a supported region that is closest to the region of your server that is not deployed on Alibaba Cloud.
   * 
   * This parameter is required when the ServerType parameter is set to OUT_CLOUD.
   * 
   * @example
   * ch-hangzhou
   */
  policyRegionId?: string;
  /**
   * @remarks
   * The version of the anti-ransomware policy. Fixed value: **2.0.0**.
   * 
   * This parameter is required.
   * 
   * @example
   * 2.0.0
   */
  policyVersion?: string;
  /**
   * @remarks
   * The method to cover assets. Valid values:
   * - **ALL_MACHINE**: all assets
   * > To cover all assets of the specified type, set this parameter to **ALL_MACHINE**. In this case, the **UuidList** parameter is invalid. Only one policy that covers all assets can be created for each server type.
   * 
   * @example
   * ALL_MACHINE
   */
  selectType?: string;
  /**
   * @remarks
   * The server type. Valid values:
   * - **ALIYUN**: Alibaba Cloud server
   * - **OUT_CLOUD**: server that is not deployed on Alibaba Cloud
   * - **TRIPARTITE**: simple application server
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
      policyShrink: 'Policy',
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
      policyShrink: 'string',
      policyRegionId: 'string',
      policyVersion: 'string',
      selectType: 'string',
      serverType: 'string',
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

