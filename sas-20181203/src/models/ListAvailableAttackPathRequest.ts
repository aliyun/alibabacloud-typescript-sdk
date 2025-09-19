// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAvailableAttackPathRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for requests and responses. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * en
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

