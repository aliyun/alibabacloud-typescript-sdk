// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompleteCodeBundleRequest extends $dara.Model {
  /**
   * @remarks
   * Declared uploaded object size; should match OSS **`Content-Length`**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  byteSize?: number;
  /**
   * @remarks
   * MIME type stored on the bundle (often **`application/octet-stream`** for presigned PUT).
   * 
   * This parameter is required.
   * 
   * @example
   * application/octet-stream
   */
  contentType?: string;
  static names(): { [key: string]: string } {
    return {
      byteSize: 'byteSize',
      contentType: 'contentType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byteSize: 'number',
      contentType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

