// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBatchUploadUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The identifiers of files. Only MD5 hash values are supported.
   * 
   * This parameter is required.
   */
  md5List?: string[];
  /**
   * @remarks
   * The type of the file. Valid values:
   * 
   * *   **0**: unknown file
   * *   **1**: binary file
   * *   **2**: webshell file
   * *   **4**: script file
   * 
   * > If you do not know the type of the file, set this parameter to **0**.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      md5List: 'Md5List',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      md5List: { 'type': 'array', 'itemType': 'string' },
      type: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.md5List)) {
      $dara.Model.validateArray(this.md5List);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

