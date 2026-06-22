// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupPolicyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the anti-ransomware mitigation policy to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * 11
   */
  id?: number;
  /**
   * @remarks
   * The name of the anti-ransomware mitigation policy to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * policy_name_A
   */
  name?: string;
  /**
   * @remarks
   * The content of the mitigation policy to modify. The value is a JSON-format string that contains the following fields:
   * 
   * - **Source**: The server folder to protect. To protect all folders, set this field to [].
   * - **Include**: The file types to protect. Examples: "\\*.jpg" and "\\*.doc".
   * - **Exclude**: The custom folders to exclude. For example, exclude the folder "/home/user". Invoke the DescribeExcludeSystemPath operation to obtain all folders, and then add the folders that you want to exclude.
   * - **Schedule**: The start time and interval of the data backup task. Specify a non-hourly time during off-peak hours.
   * 
   *     - Example 1: I|1583216092|P21D indicates that the start time is 2020-03-03 14:14:52 and the interval is 3 weeks.
   * 
   *     - Example 2: I|1583216092|PT24H indicates that the start time is 2020-03-03 14:14:52 and the interval is 24 hours.
   * 
   * - **Retention**: The retention period of backup data. Unit: days. 7 indicates 1 week, 365 indicates 1 year, and -1 indicates permanent retention.
   * - **SpeedLimiter**: The network bandwidth throttling for backup. Example: 12:15:15360|6:12:5120 indicates 15 MB from 12:00 to 15:00 and 5 MB from 6:00 to 12:00.
   * Cloud-hosted servers connect through the internal network. Do not limit the backup network bandwidth. To remove the bandwidth limit, set this parameter to an empty string ("").
   * 
   * This parameter is required.
   * 
   * @example
   * {"Source":["home","admin"]}
   */
  policyShrink?: string;
  /**
   * @remarks
   * The region of the server for which you want to modify the mitigation policy.
   * 
   * You can invoke the [DescribeSupportRegion](~~DescribeSupportRegion~~) operation to query the regions supported by the anti-ransomware feature.
   * 
   * @example
   * cn-hangzhou
   */
  policyRegionId?: string;
  /**
   * @remarks
   * The version of the mitigation policy. You can invoke the [DescribeBackupPolicies](~~DescribeBackupPolicies~~) operation to query the version.
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
   * The UUIDs of the servers protected by the mitigation policy.
   * 
   * This parameter is required.
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

