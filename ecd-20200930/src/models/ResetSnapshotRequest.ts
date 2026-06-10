// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hzngahou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the snapshot used to recover disk data.
   * 
   * This parameter is required.
   * 
   * @example
   * s-2zeipxmnhej803x7****
   */
  snapshotId?: string;
  /**
   * @remarks
   * Indicates whether to shut down and recover the disk using the snapshot.
   */
  stopDesktop?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      snapshotId: 'SnapshotId',
      stopDesktop: 'StopDesktop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      snapshotId: 'string',
      stopDesktop: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

