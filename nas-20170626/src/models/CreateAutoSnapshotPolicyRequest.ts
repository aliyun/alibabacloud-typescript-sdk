// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAutoSnapshotPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the automatic snapshot policy.
   * 
   * Limits:
   * 
   * - The name must be 2 to 128 characters in length.
   * - The name must start with a letter or a Chinese character.
   * - The name can contain digits, colons (:), underscores (_), or hyphens (-). It cannot start with `http://` or `https://`.
   * - Default value: empty.
   * 
   * @example
   * FinanceJoshua
   */
  autoSnapshotPolicyName?: string;
  /**
   * @remarks
   * The type of the file system.
   * 
   * Valid values: extreme (Extreme NAS).
   * 
   * This parameter is required.
   * 
   * @example
   * extreme
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The days of the week on which automatic snapshots are created.
   * 
   * Cycle: week.
   * 
   * Valid values: 1 to 7, which represent Monday through Sunday.
   * 
   * To create automatic snapshots on multiple days in a week, specify multiple values separated by commas (,). You can specify a maximum of 7 values.
   * 
   * This parameter is required.
   * 
   * @example
   * 1,2,3
   */
  repeatWeekdays?: string;
  /**
   * @remarks
   * The retention period of automatic snapshots.
   * 
   * Unit: days.
   * 
   * Valid values:
   * 
   * - -1 (default): Automatic snapshots are permanently retained. When the snapshot quota is reached, the earliest automatic snapshots are automatically deleted.
   * - 1 to 65536: Automatic snapshots are retained for the specified number of days. Snapshots are subject to automatic release after the retention period expires.
   * 
   * @example
   * 30
   */
  retentionDays?: number;
  /**
   * @remarks
   * The time points at which automatic snapshots are created.
   * 
   * Unit: hours.
   * 
   * Valid values: 0 to 23, which represent the 24 time points from 00:00 to 23:00. For example, 1 indicates 01:00.
   * 
   * To create multiple automatic snapshots within a day, specify multiple time points separated by commas (,). You can specify a maximum of 24 time points.
   * 
   * This parameter is required.
   * 
   * @example
   * 0,1,…,23
   */
  timePoints?: string;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyName: 'AutoSnapshotPolicyName',
      fileSystemType: 'FileSystemType',
      repeatWeekdays: 'RepeatWeekdays',
      retentionDays: 'RetentionDays',
      timePoints: 'TimePoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyName: 'string',
      fileSystemType: 'string',
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

