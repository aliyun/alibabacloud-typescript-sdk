// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFileSystemRequest extends $dara.Model {
  /**
   * @remarks
   * The edge zone ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-chengdu-telecom-4
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The ID of the file system to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * e42640****
   */
  fileSystemId?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      fileSystemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

