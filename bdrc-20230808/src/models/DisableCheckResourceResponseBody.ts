// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableCheckResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Unique request identity
   * 
   * @example
   * 86DEBAC9-AB6A-59AB-9E5C-A540E579ECC9
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

