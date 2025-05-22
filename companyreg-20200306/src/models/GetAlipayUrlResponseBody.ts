// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlipayUrlResponseBody extends $dara.Model {
  /**
   * @example
   * https://
   */
  data?: string;
  /**
   * @example
   * 2174AA97-56FB-50FA-B243-0460B9E4CE0C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

