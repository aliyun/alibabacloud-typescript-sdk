// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSnatEntryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 018EED6A-69CA-58C8-A345-498927D5D34E
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the SNAT entry.
   * 
   * @example
   * snat-5tc08qfj5ecblfdn2rqr9****
   */
  snatEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      snatEntryId: 'SnatEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      snatEntryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

