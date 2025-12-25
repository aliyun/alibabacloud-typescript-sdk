// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAttachmentUploadUrlRequest extends $dara.Model {
  /**
   * @remarks
   * Name of the uploaded file
   * 
   * This parameter is required.
   * 
   * @example
   * 81A0D93D-54D7-4529-ABFA-633ED63223BA.jpg
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

