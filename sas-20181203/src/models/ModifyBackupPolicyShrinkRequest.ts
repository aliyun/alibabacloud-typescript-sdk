// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupPolicyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the anti-ransomware policy that you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * 11
   */
  id?: number;
  /**
   * @remarks
   * The name of the anti-ransomware policy that you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * policy_name_A
   */
  name?: string;
  /**
   * @remarks
   * The content of the policy that you want to modify. The value is a JSON string that contains the following fields:
   * 
   * - **Source**: the server directories to be protected. To protect all directories, set this field to [].
   * - **Include**: the types of files to be protected. Examples: "\\*.jpg" and "\\*.doc".
   * - **Exclude**: the custom directories to be excluded. To exclude the "/home/user" directory, call the DescribeExcludeSystemPath operation to obtain all directories and then add the directories to be excluded. Example: exclude the "/home/user" directory.
   * - **Schedule**: the start time and interval of the data backup task. Specify a time during off-peak hours and avoid exact hours.
   * 
   *     - Example 1: I|1583216092|P21D indicates that the start time is 2020-03-03 14:14:52 and the interval is 3 weeks.
   * 
   *     - Example 2: I|1583216092|PT24H indicates that the start time is 2020-03-03 14:14:52 and the interval is 24 hours.
   * 
   * - **Retention**: the retention period of backup data. Unit: days. A value of 7 indicates 1 week, 365 indicates 1 year, and -1 indicates permanent retention.
   * - **SpeedLimiter**: the bandwidth limit for the backup network. Example: 12:15:15360|6:12:5120 indicates a limit of 15 MB from 12:00 to 15:00 and 5 MB from 06:00 to 12:00.
   * If the cloud server is connected to the internal network, do not limit the backup network bandwidth. To remove the bandwidth limit, set this parameter to an empty string ("").
   * 
   * This parameter is required.
   * 
   * @example
   * {"Source":["home","admin"]}
   */
  policyShrink?: string;
  /**
   * @remarks
   * The region where the server to which the policy applies resides.
   * 
   * You can call the [DescribeSupportRegion](~~DescribeSupportRegion~~) operation to query the regions supported by the anti-ransomware feature.
   * 
   * @example
   * cn-hangzhou
   */
  policyRegionId?: string;
  /**
   * @remarks
   * The version of the policy. You can call the [DescribeBackupPolicies](~~DescribeBackupPolicies~~) operation to query the version.
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
   * The method to cover assets. Valid values:
   * - **ALL_MACHINE**: all assets
   * > To cover all assets of this type, set this parameter to **ALL_MACHINE**. In this case, **UuidList** does not take effect. Only one policy that covers all assets can exist for the same server type.
   * 
   * @example
   * ALL_MACHINE
   */
  selectType?: string;
  /**
   * @remarks
   * The server type. Valid values:
   * - **ALIYUN**: Alibaba Cloud server
   * - **OUT_CLOUD**: third-party server
   * - **TRIPARTITE**: simple application server
   * 
   * @example
   * ALIYUN
   */
  serverType?: string;
  /**
   * @remarks
   * The list of UUIDs of the servers protected by the policy.
   * 
   * @example
   * ["3bb30859-b3b5-4f28-868f-b0892c98****", "3bb30859-b3b5-4f28-868f-b0892c98****"]
   */
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
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
      id: 'number',
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

