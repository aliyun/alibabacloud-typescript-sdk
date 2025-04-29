// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetDisksRequestDisk extends $dara.Model {
  /**
   * @remarks
   * The ID of the disk that you want to roll back. You can specify up to 10 disk IDs.
   * 
   * @example
   * d-j6cf7l0ewidb78lq****
   */
  diskId?: string;
  /**
   * @remarks
   * The ID of the disk snapshot that is contained in the instance snapshot. You can specify up to 10 disk snapshot IDs.
   * 
   * @example
   * s-j6cdofbycydvg7ey****
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

