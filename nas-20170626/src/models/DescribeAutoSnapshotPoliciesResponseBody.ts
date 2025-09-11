// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoSnapshotPoliciesResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicy extends $dara.Model {
  /**
   * @remarks
   * The ID of the automatic snapshot policy.
   * 
   * @example
   * sp-extreme-233e6****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * The name of the automatic snapshot policy.
   * 
   * @example
   * FinanceJoshua
   */
  autoSnapshotPolicyName?: string;
  /**
   * @remarks
   * The time when the automatic snapshot policy was created.
   * 
   * The time follows the [ISO8601](https://www.iso.org/iso-8601-date-and-time-format.html) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2014-04-21T12:08:52Z
   */
  createTime?: string;
  /**
   * @remarks
   * The number of file systems to which the automatic snapshot policy applies.
   * 
   * @example
   * 2
   */
  fileSystemNums?: number;
  /**
   * @remarks
   * The type of the file system.
   * 
   * @example
   * extreme
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The region ID of the automatic snapshot policy.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The days of a week on which auto snapshots are created.
   * 
   * Auto snapshots are created on a weekly basis.
   * 
   * Valid values: 1 to 7. The values from 1 to 7 indicate 7 days in a week from Monday to Sunday.
   * 
   * @example
   * 1,5
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
   * *   \\-1: Auto snapshots are permanently retained. After the number of auto snapshots exceeds the upper limit, the earliest auto snapshot is automatically deleted.
   * *   1 to 65536: Auto snapshots are retained for the specified days. After the retention period of auto snapshots expires, the auto snapshots are automatically deleted.
   * 
   * @example
   * 30
   */
  retentionDays?: number;
  /**
   * @remarks
   * The status of the automatic snapshot policy.
   * 
   * Valid values:
   * 
   * *   Creating: The automatic snapshot policy is being created.
   * *   Available: The automatic snapshot policy is available.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The points in time at which auto snapshots are created.
   * 
   * Unit: hours.
   * 
   * Valid values: `0 to 23`. The values from 0 to 23 indicate a total of 24 hours from `00:00 to 23:00`. For example, 1 indicates 01:00. A maximum of 24 points in time can be returned. Multiple points in time are separated with commas (,).
   * 
   * @example
   * 4,19
   */
  timePoints?: string;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      autoSnapshotPolicyName: 'AutoSnapshotPolicyName',
      createTime: 'CreateTime',
      fileSystemNums: 'FileSystemNums',
      fileSystemType: 'FileSystemType',
      regionId: 'RegionId',
      repeatWeekdays: 'RepeatWeekdays',
      retentionDays: 'RetentionDays',
      status: 'Status',
      timePoints: 'TimePoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyId: 'string',
      autoSnapshotPolicyName: 'string',
      createTime: 'string',
      fileSystemNums: 'number',
      fileSystemType: 'string',
      regionId: 'string',
      repeatWeekdays: 'string',
      retentionDays: 'number',
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

export class DescribeAutoSnapshotPoliciesResponseBodyAutoSnapshotPolicies extends $dara.Model {
  autoSnapshotPolicy?: DescribeAutoSnapshotPoliciesResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicy[];
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicy: 'AutoSnapshotPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicy: { 'type': 'array', 'itemType': DescribeAutoSnapshotPoliciesResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicy },
    };
  }

  validate() {
    if(Array.isArray(this.autoSnapshotPolicy)) {
      $dara.Model.validateArray(this.autoSnapshotPolicy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried automatic snapshot policies.
   */
  autoSnapshotPolicies?: DescribeAutoSnapshotPoliciesResponseBodyAutoSnapshotPolicies;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of automatic snapshot policies.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicies: 'AutoSnapshotPolicies',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicies: DescribeAutoSnapshotPoliciesResponseBodyAutoSnapshotPolicies,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.autoSnapshotPolicies && typeof (this.autoSnapshotPolicies as any).validate === 'function') {
      (this.autoSnapshotPolicies as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

