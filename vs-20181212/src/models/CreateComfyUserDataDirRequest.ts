// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateComfyUserDataDirRequest extends $dara.Model {
  /**
   * @remarks
   * The path of the directory to create. Use /dir1/ for a single-level directory, or /dir1/dir2/ for a multi-level directory.
   * 
   * @example
   * /userdir1
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

