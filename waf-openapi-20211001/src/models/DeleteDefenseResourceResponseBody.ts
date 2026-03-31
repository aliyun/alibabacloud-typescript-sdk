// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDefenseResourceResponseBody extends $dara.Model {
  /**
   * @example
   * 745F051D-95FD-57EC-9DC1-79BB4883C6A4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

