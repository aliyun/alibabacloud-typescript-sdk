// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVersionDownloadUrlResponseBodyData extends $dara.Model {
  fullDownloadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fullDownloadUrl: 'FullDownloadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullDownloadUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVersionDownloadUrlResponseBody extends $dara.Model {
  code?: string;
  data?: GetVersionDownloadUrlResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetVersionDownloadUrlResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

