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
   * The type of the file system.
   * 
   * Valid value: extreme, which indicates Extreme File Storage NAS (NAS) file systems.
   * 
   * @example
   * extreme
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
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
   * You can specify a maximum of 100 snapshot IDs. You must separate snapshot IDs with commas (,).
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
   * The type of the snapshot.
   * 
   * Valid values:
   * 
   * *   auto: auto snapshot
   * *   user: manual snapshot
   * *   all (default): all snapshot types
   * 
   * @example
   * all
   */
  snapshotType?: string;
  /**
   * @remarks
   * The status of the snapshot.
   * 
   * Valid values:
   * 
   * *   progressing: The snapshot is being created.
   * *   accomplished: The snapshot is created.
   * *   failed: The snapshot fails to be created.
   * *   all (default): all snapshot states.
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

