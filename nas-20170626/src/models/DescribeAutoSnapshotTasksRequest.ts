// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoSnapshotTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the automatic snapshot policies.
   * 
   * You can specify up to 100 automatic snapshot policy IDs. To query tasks of multiple automatic snapshot policies, separate the policy IDs with commas (,).
   * 
   * @example
   * sp-extreme-233e6****,sp-extreme-233e6****, sp-extreme-233e6****
   */
  autoSnapshotPolicyIds?: string;
  /**
   * @remarks
   * The IDs of the file systems.
   * 
   * You can specify up to 100 file system IDs in a single request. To query snapshots of multiple file systems, separate the file system IDs with commas (,).
   * 
   * @example
   * extreme-233e6****,extreme -23vbp****,extreme -23vas****
   */
  fileSystemIds?: string;
  /**
   * @remarks
   * The type of the file system.
   * 
   * Valid values: extreme (Extreme NAS file system)
   * 
   * This parameter is required.
   * 
   * @example
   * extreme
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The number of snapshot tasks on each page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page number of the automatic snapshot task list.
   * 
   * Start value (default value): 1
   * 
   * @example
   * 1
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyIds: 'AutoSnapshotPolicyIds',
      fileSystemIds: 'FileSystemIds',
      fileSystemType: 'FileSystemType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyIds: 'string',
      fileSystemIds: 'string',
      fileSystemType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

