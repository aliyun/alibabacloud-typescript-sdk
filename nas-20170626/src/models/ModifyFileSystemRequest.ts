// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyFileSystemRequestOptions } from "./ModifyFileSystemRequestOptions";


export class ModifyFileSystemRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the file system.
   * 
   * Limits:
   * 
   * *   The description must be 2 to 128 characters in length.
   * *   It must start with a letter but cannot start with `http://` or `https://`.
   * *   The description can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * NAS-test-1
   */
  description?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * *   Sample ID of a General-purpose NAS file system: `31a8e4****`.
   * *   The IDs of Extreme NAS file systems must start with `extreme-`. Example: `extreme-0015****`.
   * *   The IDs of Cloud Paralleled File System (CPFS) file systems must start with `cpfs-`. Example: `cpfs-125487****`.
   * >CPFS file systems are available only on the China site (aliyun.com).
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The options.
   */
  options?: ModifyFileSystemRequestOptions;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fileSystemId: 'FileSystemId',
      options: 'Options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fileSystemId: 'string',
      options: ModifyFileSystemRequestOptions,
    };
  }

  validate() {
    if(this.options && typeof (this.options as any).validate === 'function') {
      (this.options as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

