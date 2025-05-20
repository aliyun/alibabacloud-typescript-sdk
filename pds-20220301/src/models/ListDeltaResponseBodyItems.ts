// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { File } from "./File";


export class ListDeltaResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The information about the file.
   */
  file?: File;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * 122fb09598ae66777c7040109a16f49381f6abe2
   */
  fileId?: string;
  /**
   * @remarks
   * The operation that is performed. Valid values: Valid values:
   * 
   * *   create
   * *   overwrite
   * *   delete
   * *   update
   * *   move
   * *   trash
   * *   restore
   * *   rename
   * 
   * @example
   * create
   */
  op?: string;
  static names(): { [key: string]: string } {
    return {
      file: 'file',
      fileId: 'file_id',
      op: 'op',
    };
  }

  static types(): { [key: string]: any } {
    return {
      file: File,
      fileId: 'string',
      op: 'string',
    };
  }

  validate() {
    if(this.file && typeof (this.file as any).validate === 'function') {
      (this.file as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

