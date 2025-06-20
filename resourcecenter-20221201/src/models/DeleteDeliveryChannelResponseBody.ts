// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDeliveryChannelResponseBody extends $dara.Model {
  /**
   * @example
   * AD5F848D-CCDC-5464-93E1-4BA50A482***
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

