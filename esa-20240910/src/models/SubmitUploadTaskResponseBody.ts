// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitUploadTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the file upload task.
   * 
   * @example
   * 1593805857882113
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

