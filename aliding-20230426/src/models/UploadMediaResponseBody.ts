// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadMediaResponseBody extends $dara.Model {
  mediaId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'mediaId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
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

