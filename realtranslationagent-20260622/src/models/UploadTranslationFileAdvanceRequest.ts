// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class UploadTranslationFileAdvanceRequest extends $dara.Model {
  APIKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fileObject?: Readable;
  /**
   * @remarks
   * This parameter is required.
   */
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      APIKey: 'APIKey',
      fileObject: 'File',
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APIKey: 'string',
      fileObject: 'Readable',
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

