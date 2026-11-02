// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the directory. The name must be globally unique.
   * 
   * Format: The name can contain lowercase letters, digits, and hyphens (-). It cannot start or end with a hyphen (-) and cannot contain two consecutive hyphens (-). It cannot start with `d-`.
   * 
   * Length: 2 to 64 characters.
   * 
   * > If you do not specify this parameter, the system automatically generates a name.
   * 
   * @example
   * example
   */
  directoryName?: string;
  static names(): { [key: string]: string } {
    return {
      directoryName: 'DirectoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

