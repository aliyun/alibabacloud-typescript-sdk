// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSharedAccountsResponseBody extends $dara.Model {
  /**
   * @example
   * 0D797DC3-FF04-5C21-81EB-XXXXXXXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

