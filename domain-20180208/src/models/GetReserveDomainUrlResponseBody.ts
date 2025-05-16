// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetReserveDomainUrlResponseBody extends $dara.Model {
  /**
   * @example
   * D34B02AE-09AF-41C1-A6D3-951A2233EDB0
   */
  requestId?: string;
  /**
   * @example
   * http://example.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

