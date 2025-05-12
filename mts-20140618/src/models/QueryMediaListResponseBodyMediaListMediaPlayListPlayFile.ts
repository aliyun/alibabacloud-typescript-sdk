// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMediaListResponseBodyMediaListMediaPlayListPlayFile extends $dara.Model {
  /**
   * @remarks
   * The status of the file. Valid values:
   * 
   * *   **Normal**: normal
   * *   **Deleted**: deleted
   * 
   * @example
   * Normal
   */
  state?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) URL of the output file.
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

