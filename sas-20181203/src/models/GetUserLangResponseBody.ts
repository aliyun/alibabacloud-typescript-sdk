// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserLangResponseBodySasUserLang extends $dara.Model {
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserLangResponseBody extends $dara.Model {
  requestId?: string;
  sasUserLang?: GetUserLangResponseBodySasUserLang;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sasUserLang: 'SasUserLang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sasUserLang: GetUserLangResponseBodySasUserLang,
    };
  }

  validate() {
    if(this.sasUserLang && typeof (this.sasUserLang as any).validate === 'function') {
      (this.sasUserLang as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

