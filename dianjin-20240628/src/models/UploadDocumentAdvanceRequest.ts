// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class UploadDocumentAdvanceRequest extends $dara.Model {
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
  fileUrlObject?: Readable;
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
      fileUrlObject: 'fileUrl',
      libraryId: 'libraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      fileName: 'string',
      fileUrlObject: 'Readable',
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

