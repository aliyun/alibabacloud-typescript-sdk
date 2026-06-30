// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadTranslationFileRequest extends $dara.Model {
  APIKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  file?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      APIKey: 'APIKey',
      file: 'File',
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APIKey: 'string',
      file: 'string',
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

