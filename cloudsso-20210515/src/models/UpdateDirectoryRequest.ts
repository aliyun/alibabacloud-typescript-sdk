// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The new name of the directory. The name must be globally unique.
   * 
   * The name can contain lowercase letters, digits, and hyphens (-). The name cannot start or end with a hyphen (-) and cannot contain two consecutive hyphens (-). If you want the new name of the directory to start with `d-`, you must set this parameter to the ID of the directory.
   * 
   * The name must be 2 to 64 characters in length.
   * 
   * @example
   * new-example
   */
  newDirectoryName?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      newDirectoryName: 'NewDirectoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      newDirectoryName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

