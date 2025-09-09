// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableInstanceIpv6AddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of the request.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7E9F7F16-05B5-42DA-94D6-E36402******
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
      data: 'boolean',
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

