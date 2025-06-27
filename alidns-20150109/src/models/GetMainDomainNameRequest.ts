// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMainDomainNameRequest extends $dara.Model {
  /**
   * @remarks
   * The string. The string can be up to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * www.example.com
   */
  inputString?: string;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * en
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      inputString: 'InputString',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputString: 'string',
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

