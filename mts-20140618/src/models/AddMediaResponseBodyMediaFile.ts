// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMediaResponseBodyMediaFile extends $dara.Model {
  /**
   * @remarks
   * The status of the file. The default value is **Normal**.
   * 
   * @example
   * Normal
   */
  state?: string;
  /**
   * @remarks
   * The URL of the media file.
   * 
   * @example
   * http://bucket.oss-cn-hangzhou.aliyuncs.com/A/B/C/test.mp4
   */
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      URL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

