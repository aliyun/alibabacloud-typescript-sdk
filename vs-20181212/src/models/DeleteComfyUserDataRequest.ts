// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteComfyUserDataRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the file or directory to delete. If a path is passed, it is treated as a directory and must end with a forward slash (/).
   * File name.
   * 
   * @example
   * mytest
   */
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

