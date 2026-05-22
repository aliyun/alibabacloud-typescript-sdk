// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3C6CCEC4-6B88-4D4A-93E4-D47B3D92CF8F
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the file upload task. You can use this ID for task submission or query subsequently.
   * 
   * @example
   * 159253299357****
   */
  uploadId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      uploadId: 'UploadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      uploadId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

