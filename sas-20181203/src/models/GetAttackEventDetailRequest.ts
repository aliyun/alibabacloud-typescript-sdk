// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAttackEventDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier ID for the alert event.
   * 
   * @example
   * 18825544674********
   */
  id?: string;
  /**
   * @remarks
   * The language type for requesting and receiving messages. Values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

