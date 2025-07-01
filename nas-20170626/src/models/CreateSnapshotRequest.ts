// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the snapshot.
   * 
   * Limits:
   * 
   * *   The description must be 2 to 256 characters in length.
   * *   The description cannot start with `http://` or `https://`.
   * *   This parameter is empty by default.
   * 
   * @example
   * FinanceDepet
   */
  description?: string;
  /**
   * @remarks
   * The ID of the advanced Extreme NAS file system. The value must start with `extreme-`, for example, `extreme-01dd****`.
   * 
   * This parameter is required.
   * 
   * @example
   * extreme-01dd****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The retention period of the snapshot.
   * 
   * Unit: days.
   * 
   * Valid values:
   * 
   * *   \\-1 (default). Auto snapshots are permanently retained. After the number of auto snapshots exceeds the upper limit, the earliest auto snapshot is automatically deleted.
   * *   1 to 65536: Auto snapshots are retained for the specified days. After the retention period of auto snapshots expires, the auto snapshots are automatically deleted.
   * 
   * @example
   * 30
   */
  retentionDays?: number;
  /**
   * @remarks
   * The snapshot name.
   * 
   * Limits:
   * 
   * *   The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `http://` or `https://`.
   * *   The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * *   The name cannot start with auto because snapshots whose names start with auto are recognized as auto snapshots.
   * 
   * @example
   * FinanceJoshua
   */
  snapshotName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fileSystemId: 'FileSystemId',
      retentionDays: 'RetentionDays',
      snapshotName: 'SnapshotName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fileSystemId: 'string',
      retentionDays: 'number',
      snapshotName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

