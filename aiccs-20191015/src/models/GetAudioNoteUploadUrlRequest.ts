// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAudioNoteUploadUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the file to upload.
   * 
   * This parameter is required.
   * 
   * @example
   * test-audio
   */
  fileName?: string;
  /**
   * @remarks
   * The file type.
   * 
   * @example
   * wav
   */
  fileType?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileType: 'FileType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

