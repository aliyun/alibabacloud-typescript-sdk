// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnapshotsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * extreme-22f****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The file system type.
   * 
   * Valid values: extreme (Extreme NAS file system)
   * 
   * @example
   * extreme
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The page number of the snapshot list.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query. Settings for the number of rows per page in paging.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The snapshot IDs.
   * 
   * You can specify multiple snapshot IDs separated by commas (,). A maximum of 100 IDs are supported.
   * 
   * @example
   * s-extreme-67pxwk9aevrkr****,s-extreme-snapsho****,s-extreme-6tmsbas6ljhwh****
   */
  snapshotIds?: string;
  /**
   * @remarks
   * The snapshot name.
   * 
   * @example
   * FinanceJoshua
   */
  snapshotName?: string;
  /**
   * @remarks
   * The snapshot type.
   * 
   * Valid values:
   * - auto: automatic snapshot
   * - user: manually created snapshot
   * - all (default): all snapshot types
   * 
   * @example
   * all
   */
  snapshotType?: string;
  /**
   * @remarks
   * The snapshot status.
   * 
   * Valid values:
   * 
   * - progressing: The snapshot is being created.
   * - accomplished: The snapshot is created.
   * - failed: The snapshot failed to be created.
   * - all (default): all snapshot statuses
   * 
   * @example
   * all
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      fileSystemType: 'FileSystemType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      snapshotIds: 'SnapshotIds',
      snapshotName: 'SnapshotName',
      snapshotType: 'SnapshotType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      fileSystemType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      snapshotIds: 'string',
      snapshotName: 'string',
      snapshotType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

