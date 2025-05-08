// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetDiskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the disk that you want to roll back.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp199lyny9b3****
   */
  diskId?: string;
  /**
   * @remarks
   * The ID of the snapshot that you want to use to roll back the disk.
   * 
   * This parameter is required.
   * 
   * @example
   * sp-bp199lyny9b3****
   */
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
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

