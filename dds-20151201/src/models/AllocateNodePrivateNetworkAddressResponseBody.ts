// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateNodePrivateNetworkAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 60EEBD77-227C-5B39-86EA-D89163C5****
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

