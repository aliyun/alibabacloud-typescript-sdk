// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserLangResponseBodySasUserLang extends $dara.Model {
  /**
   * @remarks
   * The language specified for log analysis. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 23AD0BD2-8771-5647-819E-6BA51E21****
   */
  requestId?: string;
  /**
   * @remarks
   * The language settings.
   */
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

