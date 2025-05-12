// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMediaListByURLResponseBodyMediaListMediaSnapshotListSnapshotFile extends $dara.Model {
  /**
   * @remarks
   * The status of the file. Valid values:
   * 
   * - **Normal**: The file is normal.
   * - **Deleted**: The file is deleted.
   * 
   * @example
   * Normal
   */
  state?: string;
  /**
   * @remarks
   * The OSS URL of the snapshot.
   * 
   * @example
   * http://example1-bucket1-****.oss-cn-hangzhou.aliyuncs.com//example111-****.png
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

