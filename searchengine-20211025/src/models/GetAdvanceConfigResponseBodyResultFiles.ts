// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAdvanceConfigResponseBodyResultFiles extends $dara.Model {
  /**
   * @remarks
   * The file path.
   * 
   * @example
   * ""
   */
  fullPathName?: string;
  /**
   * @remarks
   * Indicates whether the file is a directory.
   * 
   * @example
   * True
   */
  isDir?: boolean;
  /**
   * @remarks
   * Indicates whether the file is a container.
   * 
   * @example
   * True
   */
  isTemplate?: boolean;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * ha-cn-2r42ostoc01_qrs
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      fullPathName: 'fullPathName',
      isDir: 'isDir',
      isTemplate: 'isTemplate',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullPathName: 'string',
      isDir: 'boolean',
      isTemplate: 'boolean',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

