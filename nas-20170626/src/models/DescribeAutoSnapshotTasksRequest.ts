// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoSnapshotTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of automatic snapshot policies.
   * 
   * You can specify a maximum of 100 policy IDs. If you want to query the tasks of multiple automatic snapshot policies, you must separate the policy IDs with commas (,).
   * 
   * @example
   * sp-extreme-233e6****,sp-extreme-233e6****, sp-extreme-233e6****
   */
  autoSnapshotPolicyIds?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * You can specify a maximum of 100 file system IDs. If you want to query the snapshots of multiple file systems, you must separate the file system IDs with commas (,).
   * 
   * @example
   * extreme-233e6****,extreme -23vbp****,extreme -23vas****
   */
  fileSystemIds?: string;
  /**
   * @remarks
   * The type of the file system.
   * 
   * Valid value: extreme, which indicates Extreme NAS file systems.
   * 
   * This parameter is required.
   * 
   * @example
   * extreme
   */
  fileSystemType?: string;
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
  pageNumber?: number;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1. Default value: 1.
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

