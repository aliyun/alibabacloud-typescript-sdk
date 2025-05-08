// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSupplierRegistrationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C4A145D8-xxxx-xxxx-xxxx-9730CDA27578
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

