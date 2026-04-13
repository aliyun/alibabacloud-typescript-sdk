// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisassociateMacSecKeyResponseBody extends $dara.Model {
  /**
   * @example
   * D32B3C26-6C6C-4988-93E9-D2A6444CE6AE
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

