// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * The snapshot ID. Set this parameter to the snapshot ID obtained after a snapshot is successfully created for an Advanced Extreme NAS file system.
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

