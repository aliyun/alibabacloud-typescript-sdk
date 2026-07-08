// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComfyUserDataDownloadUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the file to download.
   * 
   * This parameter is required.
   * 
   * @example
   * myfile
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

