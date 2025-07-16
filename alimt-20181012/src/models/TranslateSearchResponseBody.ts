// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TranslateSearchResponseBodyData extends $dara.Model {
  translated?: string;
  static names(): { [key: string]: string } {
    return {
      translated: 'Translated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      translated: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateSearchResponseBody extends $dara.Model {
  code?: string;
  data?: TranslateSearchResponseBodyData;
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
      data: TranslateSearchResponseBodyData,
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

