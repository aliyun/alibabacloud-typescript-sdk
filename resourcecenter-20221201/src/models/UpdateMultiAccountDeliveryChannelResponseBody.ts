// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMultiAccountDeliveryChannelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 36A3D9BE-B607-5993-B546-7E19EF65D***
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

