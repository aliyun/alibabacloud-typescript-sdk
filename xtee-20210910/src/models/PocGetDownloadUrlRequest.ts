// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PocGetDownloadUrlRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and received messages, with a default value of **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Task token.
   * 
   * @example
   * d83221f51752805880
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

