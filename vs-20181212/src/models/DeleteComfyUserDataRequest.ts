// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteComfyUserDataRequest extends $dara.Model {
  /**
   * @remarks
   * The file or directory to delete. To specify a directory, provide a path that ends with a forward slash (/).
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

