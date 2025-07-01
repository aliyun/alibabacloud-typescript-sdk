// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAutoSnapshotPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the automatic snapshot policy.
   * 
   * You can call the DescribeAutoSnapshotPolicies operation to view available automatic snapshot policies.
   * 
   * This parameter is required.
   * 
   * @example
   * sp-extreme-233e6****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * The name of the automatic snapshot policy. If you do not specify this parameter, the policy name is not changed.
   * 
   * Limits:
   * 
   * *   The name must be 2 to 128 characters in length.
   * *   The name must start with a letter.
   * *   The name can contain digits, letters, colons (:), underscores (_), and hyphens (-). It cannot start with `http://` or `https://`.
   * 
   * @example
   * FinanceJoshua
   */
  autoSnapshotPolicyName?: string;
  /**
   * @remarks
   * The days of a week on which auto snapshots are created.
   * 
   * Cycle: week.
   * 
   * Valid values: 1 to 7. The value 1 indicates Monday. If you want to create multiple auto snapshots within a week, you can specify multiple days from Monday to Sunday and separate the days with commas (,). You can specify a maximum of seven days.
   * 
   * @example
   * 1,7
   */
  repeatWeekdays?: string;
  /**
   * @remarks
   * The retention period of auto snapshots.
   * 
   * Unit: days.
   * 
   * Valid values:
   * 
   * *   \\-1 (default): Auto snapshots are permanently retained. After the number of auto snapshots exceeds the upper limit, the earliest auto snapshot is automatically deleted.
   * *   1 to 65536: Auto snapshots are retained for the specified number of days. After the retention period of auto snapshots expires, the auto snapshots are automatically deleted.
   * 
   * @example
   * 30
   */
  retentionDays?: number;
  /**
   * @remarks
   * The points in time at which auto snapshots are created.
   * 
   * Unit: hours.
   * 
   * Valid values: 0 to 23. The values from 0 to 23 indicate a total of 24 hours from 00:00 to 23:00. For example, the value 1 indicates 01:00. If you want to create multiple auto snapshots within a day, you can specify multiple points in time and separate the points in time with commas (,). You can specify a maximum of 24 points in time.
   * 
   * @example
   * 0,1
   */
  timePoints?: string;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      autoSnapshotPolicyName: 'AutoSnapshotPolicyName',
      repeatWeekdays: 'RepeatWeekdays',
      retentionDays: 'RetentionDays',
      timePoints: 'TimePoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyId: 'string',
      autoSnapshotPolicyName: 'string',
      repeatWeekdays: 'string',
      retentionDays: 'number',
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

