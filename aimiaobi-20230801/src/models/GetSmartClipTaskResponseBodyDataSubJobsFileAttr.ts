// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSmartClipTaskResponseBodyDataSubJobsFileAttr extends $dara.Model {
  /**
   * @example
   * 120
   */
  duration?: number;
  /**
   * @example
   * 290804
   */
  fileLength?: string;
  /**
   * @example
   * 2024-12-12.mp4
   */
  fileName?: string;
  /**
   * @example
   * 1080
   */
  height?: number;
  /**
   * @example
   * http://www.example.com/tmp.mp4
   */
  tmpUrl?: string;
  /**
   * @example
   * 1920
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      fileLength: 'FileLength',
      fileName: 'FileName',
      height: 'Height',
      tmpUrl: 'TmpUrl',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      fileLength: 'string',
      fileName: 'string',
      height: 'number',
      tmpUrl: 'string',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

