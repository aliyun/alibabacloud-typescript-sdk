// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetFileSystemRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the advanced Extreme NAS file system.
   * 
   * This parameter is required.
   * 
   * @example
   * extreme-012dd****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * This parameter is required.
   * 
   * @example
   * s-extreme-snapsho****
   */
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
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

