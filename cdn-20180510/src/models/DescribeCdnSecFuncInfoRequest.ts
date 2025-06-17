// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnSecFuncInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The language.
   * 
   * *   en: English
   * *   zh: Chinese
   * 
   * This parameter is required.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The type of the security feature. Valid values:
   * 
   * *   CipherSuiteGroupCustomize: custom cipher suite.
   * *   CipherSuiteGroupStrict: dustom cipher suite.
   * 
   * This parameter is required.
   * 
   * @example
   * CipherSuiteGroupCustomize
   */
  secFuncType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      secFuncType: 'SecFuncType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      secFuncType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

