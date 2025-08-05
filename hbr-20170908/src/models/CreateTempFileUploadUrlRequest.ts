// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTempFileUploadUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the file to be uploaded.
   * 
   * This parameter is required.
   * 
   * @example
   * file-list.txt
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

