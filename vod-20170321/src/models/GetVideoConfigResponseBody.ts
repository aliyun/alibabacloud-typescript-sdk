// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoConfigResponseBody extends $dara.Model {
  downloadSwitch?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      downloadSwitch: 'DownloadSwitch',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadSwitch: 'string',
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

