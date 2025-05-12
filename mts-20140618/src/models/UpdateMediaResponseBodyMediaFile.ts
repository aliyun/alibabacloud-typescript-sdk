// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMediaResponseBodyMediaFile extends $dara.Model {
  /**
   * @remarks
   * The state of the input file. Valid values:
   * 
   * *   **Normal**: The input file is normal.
   * *   **Deleted**: The input file is deleted.
   * 
   * @example
   * Normal
   */
  state?: string;
  /**
   * @remarks
   * The name of the OSS bucket in which the input media file is stored.
   * 
   * @example
   * http://example-bucket-****.oss-cn-hangzhou.aliyuncs.com//example-****.mp4
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

