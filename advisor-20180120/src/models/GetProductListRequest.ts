// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProductListRequest extends $dara.Model {
  language?: string;
  /**
   * @example
   * ****
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
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

