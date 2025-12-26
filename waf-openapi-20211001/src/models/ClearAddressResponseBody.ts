// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClearAddressResponseBody extends $dara.Model {
  /**
   * @example
   * 276D7566-31C9-4192-9DD1-51B10D*****
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

