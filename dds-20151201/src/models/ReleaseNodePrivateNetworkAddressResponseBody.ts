// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseNodePrivateNetworkAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0FDDC511-7252-4A4A-ADDA-5CB1BF63873D
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

