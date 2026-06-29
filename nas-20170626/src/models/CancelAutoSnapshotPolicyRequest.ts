// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelAutoSnapshotPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the file systems.
   * 
   * You can specify up to 100 file systems in a single call. To cancel the automatic snapshot policy for multiple file systems, separate the file system IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * extreme-233e6****,extreme-23vbp****,extreme-23vas****
   */
  fileSystemIds?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemIds: 'FileSystemIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

