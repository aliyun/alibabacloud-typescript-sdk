// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAttachmentUrlResponseBody extends $dara.Model {
  accessFileUrl?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessFileUrl: 'AccessFileUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessFileUrl: 'string',
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

