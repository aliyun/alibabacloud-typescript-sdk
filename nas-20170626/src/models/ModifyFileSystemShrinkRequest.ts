// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFileSystemShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The automatic expansion configuration.
   */
  autoUpgradeConfigShrink?: string;
  /**
   * @remarks
   * The description of the file system.
   * 
   * Limits:
   * 
   * - The description must be 2 to 128 characters in length.
   * - It must start with a letter or a Chinese character, and cannot start with `http://` or `https://`.
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
   * - General-purpose NAS: `31a8e4****`.
   * 
   * - Extreme NAS: must start with `extreme-`, such as `extreme-0015****`.
   * - CPFS: must start with `cpfs-`, such as `cpfs-125487****`.
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
  optionsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      autoUpgradeConfigShrink: 'AutoUpgradeConfig',
      description: 'Description',
      fileSystemId: 'FileSystemId',
      optionsShrink: 'Options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpgradeConfigShrink: 'string',
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

