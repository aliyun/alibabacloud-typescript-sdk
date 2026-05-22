// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadFileResponseBody extends $dara.Model {
  requestId?: string;
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

