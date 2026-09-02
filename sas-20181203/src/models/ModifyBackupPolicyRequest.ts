// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the anti-ransomware policy to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * 11
   */
  id?: number;
  /**
   * @remarks
   * The name of the anti-ransomware policy to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * policy_name_A
   */
  name?: string;
  /**
   * @remarks
   * The content of the policy to modify. The value is a JSON format character string that contains the following fields:
   * 
   * - **Source**: The server folder to protect. To protect all folders, set this field to [].
   * - **Include**: The file types to protect. Examples: "\\*.jpg" and "\\*.doc".
   * - **Exclude**: The custom folders to exclude. Invoke the DescribeExcludeSystemPath operation to obtain all folders, and then add the folders that you want to exclude. Example: exclude the folder "/home/user".
   * - **Schedule**: The start time and interval of the data backup node. Specify a non-peak hour that is not on the hour.
   * 
   *     - Example 1: I|1583216092|P21D indicates that the execute start time is 2020-03-03 14:14:52 and the interval is 3 weeks.
   * 
   *     - Example 2: I|1583216092|PT24H indicates that the execute start time is 2020-03-03 14:14:52 and the interval is 24 hours.
   * 
   * - **Retention**: The retention period of backup data. Unit: days. 7 indicates 1 week, 365 indicates 1 year, and -1 indicates permanent retention.
   * - **SpeedLimiter**: The backup network bandwidth throttling. Example: 12:15:15360|6:12:5120 indicates 15 MB from 12:00 to 15:00 and 5 MB from 6:00 to 12:00.
   * For cloud-hosted servers connected to the internal network, do not limit the backup network bandwidth. To remove the network bandwidth throttling, set this parameter to an empty character string ("").
   * 
   * This parameter is required.
   * 
   * @example
   * {"Source":["home","admin"]}
   */
  policy?: { [key: string]: any };
  /**
   * @remarks
   * The region of the server for which you want to modify the policy.
   * 
   * You can invoke the [DescribeSupportRegion](~~DescribeSupportRegion~~) operation to query the regions supported by the anti-ransomware feature.
   * 
   * @example
   * cn-hangzhou
   */
  policyRegionId?: string;
  /**
   * @remarks
   * The version of the policy. You can invoke the [DescribeBackupPolicies](~~DescribeBackupPolicies~~) operation to query the version.
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
   * The method used to cover assets. Valid values:
   * - **ALL_MACHINE**: All assets.
   * > To cover all assets of this type, set this parameter to **ALL_MACHINE**. In this case, **UuidList** is invalid. Only one policy that covers all assets can exist for each server type.
   * 
   * @example
   * ALL_MACHINE
   */
  selectType?: string;
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
      policy: 'Policy',
      policyRegionId: 'PolicyRegionId',
      policyVersion: 'PolicyVersion',
      selectType: 'SelectType',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      policy: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      policyRegionId: 'string',
      policyVersion: 'string',
      selectType: 'string',
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

