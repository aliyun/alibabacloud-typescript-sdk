// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDownloadUrlRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 073f092da0a847b9bf76eb88b5931c7a
   */
  downloadTaskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 22626c39603744f5a08d4d715315561a
   */
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      downloadTaskId: 'DownloadTaskId',
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadTaskId: 'string',
      fileId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

