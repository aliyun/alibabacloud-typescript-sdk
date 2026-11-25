// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateComfyUserDataDirRequest extends $dara.Model {
  /**
   * @remarks
   * The path to create the directory. The single-level format is /dir1/, and the multi-level format is /dir1/dir2/.
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

