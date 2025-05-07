// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRCSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to forcefully delete the snapshot that is used to create cloud disks. Valid values:
   * 
   * *   **true**: forcefully deletes the snapshot After the snapshot is forcefully deleted, the cloud disks created from the snapshot cannot be re-initialized.
   * *   **false**(default): does not forcefully delete the snapshot.
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rcds-7mbefjzkqccvdev****
   */
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
      regionId: 'RegionId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
      regionId: 'string',
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

