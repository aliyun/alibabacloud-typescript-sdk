// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRCSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to force delete a snapshot that has been used to create a cloud disk. Valid values:
   * - **true**: Force deletes the snapshot. After the snapshot is forcefully deleted, the cloud disk cannot be reinitialized.
   * - **false** (default): Does not force delete the snapshot.
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

