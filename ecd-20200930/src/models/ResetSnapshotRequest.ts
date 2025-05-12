// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hzngahou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the snapshot.
   * 
   * This parameter is required.
   * 
   * @example
   * s-2zeipxmnhej803x7****
   */
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

