// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFileSystemRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform a dry run on the request.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the file system that you want to delete.
   * - General-purpose NAS: 31a8e4\*\*\*\*.
   * - Extreme NAS: The ID must start with `extreme-`, such as extreme-0015\*\*\*\*.
   * - CPFS: The ID must start with `cpfs-`, such as cpfs-00cb6fa094ca\*\*\*\*.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
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

