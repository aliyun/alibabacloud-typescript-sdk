// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoSnapshotPolicyResponseBodyAutoSnapshotPolicies extends $dara.Model {
  /**
   * @remarks
   * The time when the automatic snapshot policy was created. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-mm-ddthh:mm:ssz` format. The time is displayed in UTC.
   * 
   * @example
   * 2023-01-11T09:14:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The cron expression that specifies when Elastic Desktop Service creates snapshots on the cloud computers.
   * 
   * @example
   * 0 0 5,7 ? * 2/2
   */
  cronExpression?: string;
  /**
   * @remarks
   * The number of cloud computers to which the automatic snapshot policy is applied.
   * 
   * @example
   * 5
   */
  desktopNum?: number;
  /**
   * @remarks
   * The ID of the automatic snapshot policy.
   * 
   * @example
   * sp-3e3bmfcdkjfl1****
   */
  policyId?: string;
  /**
   * @remarks
   * The name of the automatic snapshot policy.
   * 
   * @example
   * snapshot01
   */
  policyName?: string;
  /**
   * @remarks
   * The ID of the region to which the automatic snapshot policy belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The retention period of the automatic snapshots. Unit: days. Valid values: 1 to 180.
   * 
   * @example
   * 3
   */
  retentionDays?: string;
  /**
   * @remarks
   * The status of the automatic snapshot policy.
   * 
   * Valid values:
   * 
   * *   Expire: The automatic snapshot policy cannot be used because you have overdue payments in your account.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Normal: The automatic snapshot policy is normal.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The points in time at which the auto snapshots were created.
   * 
   * The parameter values are a JSON array. Example: `["0", "1", ... "23"]`. A maximum of 24 points in time are returned. The points in time are separated with commas (,).
   * 
   * @example
   * ["17","18"]
   */
  timePoints?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      cronExpression: 'CronExpression',
      desktopNum: 'DesktopNum',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      regionId: 'RegionId',
      retentionDays: 'RetentionDays',
      status: 'Status',
      timePoints: 'TimePoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      cronExpression: 'string',
      desktopNum: 'number',
      policyId: 'string',
      policyName: 'string',
      regionId: 'string',
      retentionDays: 'string',
      status: 'string',
      timePoints: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

