// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFileSystemShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The auto-scaling configuration.
   */
  autoUpgradeConfigShrink?: string;
  /**
   * @remarks
   * The description of the file system.
   * 
   * Limits:
   * 
   * - The description must be 2 to 128 characters in length.
   * - The description must start with a letter. It cannot start with `http://` or `https://`.
   * - The description can contain digits, colons (:), underscores (_), or hyphens (-).
   * 
   * @example
   * NAS-test-1
   */
  description?: string;
  /**
   * @remarks
   * The file system ID.
   * 
   * - General-purpose NAS: `31a8e4****`.
   * 
   * - Extreme NAS: The ID must start with `extreme-`, for example, `extreme-0015****`.
   * - Cloud Parallel File Storage (CPFS): The ID must start with `cpfs-`, for example, `cpfs-125487****`.
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

