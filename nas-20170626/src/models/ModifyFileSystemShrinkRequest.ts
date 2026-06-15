// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFileSystemShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the file system.
   * 
   * Limits:
   * 
   * - The description must be 2 to 128 characters.
   * 
   * - It must start with an uppercase or lowercase letter or a Chinese character, and cannot start with `http://` or `https://`.
   * 
   * - It can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * NAS-test-1
   */
  description?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * - General-purpose NAS: For example, `31a8e4****`.
   * 
   * - Extreme NAS: The ID must start with `extreme-`. For example, `extreme-0015****`.
   * 
   * - CPFS: The ID must start with `cpfs-`. For example, `cpfs-125487****`.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * Additional options for the file system.
   */
  optionsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fileSystemId: 'FileSystemId',
      optionsShrink: 'Options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fileSystemId: 'string',
      optionsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

