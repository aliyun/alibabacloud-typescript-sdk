// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * The snapshot description.
   * 
   * Limits:
   * 
   * - The description must be 2 to 256 characters in length.
   * - The description cannot start with `http://` or `https://`.
   * - Default value: empty.
   * 
   * @example
   * FinanceDepet
   */
  description?: string;
  /**
   * @remarks
   * The ID of the Advanced Extreme NAS file system. The value must start with `extreme-`, such as `extreme-01dd****`.
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
   * - -1 (default): The snapshot is permanently retained and is automatically deleted when the snapshot quota is reached.
   * - 1 to 65536: The snapshot is retained for the specified number of days. The snapshot is subject to automatic release after the retention period expires.
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
   * - The name must be 2 to 128 characters in length and can contain letters and digits. The name must start with a letter and cannot start with `http://` or `https://`.
   * - The name can contain digits, colons (:), underscores (_), or hyphens (-).
   * - The name cannot start with auto to avoid conflicts with automatic snapshot names.
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

