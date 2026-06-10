// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateUploadUrlRequest extends $dara.Model {
  /**
   * @remarks
   * File name, including the extension
   * 
   * @example
   * faaf8508-9542-4ac4-84a2-0ddcbb5f79a6 (2).json
   */
  fileName?: string;
  /**
   * @remarks
   * Upload URL key
   * 
   * @example
   * 3b9b5dc6d67ee9fa
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

