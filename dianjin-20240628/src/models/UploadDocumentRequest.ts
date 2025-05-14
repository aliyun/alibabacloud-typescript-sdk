// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadDocumentRequest extends $dara.Model {
  data?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://oss-xxx.hangzhou.com/test.pdf
   */
  fileUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sjdhbcsj
   */
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      fileName: 'fileName',
      fileUrl: 'fileUrl',
      libraryId: 'libraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      fileName: 'string',
      fileUrl: 'string',
      libraryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

