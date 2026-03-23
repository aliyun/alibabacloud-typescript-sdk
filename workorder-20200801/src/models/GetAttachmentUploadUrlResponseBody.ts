// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAttachmentUploadUrlResponseBody extends $dara.Model {
  accessFileUrl?: string;
  objectKey?: string;
  putObjectUrl?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessFileUrl: 'AccessFileUrl',
      objectKey: 'ObjectKey',
      putObjectUrl: 'PutObjectUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessFileUrl: 'string',
      objectKey: 'string',
      putObjectUrl: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

