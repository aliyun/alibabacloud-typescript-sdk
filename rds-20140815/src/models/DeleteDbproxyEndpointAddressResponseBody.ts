// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDBProxyEndpointAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 343356C6-64B2-4245-ADEB-C9BD165EDD11
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

