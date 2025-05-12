// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateErResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Lingjun HUB ID
   * 
   * @example
   * er-aueyxxsy
   */
  erId?: string;
  static names(): { [key: string]: string } {
    return {
      erId: 'ErId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      erId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

