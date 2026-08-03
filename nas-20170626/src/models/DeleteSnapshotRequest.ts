// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * The snapshot ID. After a snapshot is successfully created on an Advanced Extreme NAS file system by calling [CreateSnapshot](https://www.alibabacloud.com/help/en/nas/developer-reference/api-nas-2017-06-26-createsnapshot), call [DescribeSnapshots](https://www.alibabacloud.com/help/en/nas/developer-reference/api-nas-2017-06-26-describesnapshots) (with FileSystemType set to extreme) to query the snapshot list and obtain the snapshot ID.
   * 
   * This parameter is required.
   * 
   * @example
   * s-extreme-snapsho****
   */
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshotId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

