// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteConfigDirRequest extends $dara.Model {
  /**
   * @remarks
   * The directory name.
   * 
   * This parameter is required.
   * 
   * @example
   * /clusters
   */
  dirName?: string;
  /**
   * @remarks
   * The path of the parent directory.
   * 
   * This parameter is required.
   * 
   * @example
   * /
   */
  parentFullPath?: string;
  static names(): { [key: string]: string } {
    return {
      dirName: 'dirName',
      parentFullPath: 'parentFullPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dirName: 'string',
      parentFullPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

