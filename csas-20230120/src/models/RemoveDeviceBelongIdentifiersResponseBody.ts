// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveDeviceBelongIdentifiersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID, which can be used to locate the call.
   * 
   * @example
   * 7A92B549-EC82-5F79-8301-63711AFC9DCE
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

