// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the order associated with the activation request.
   * 
   * @example
   * 2000000000000001
   */
  orderId?: string;
  /**
   * @remarks
   * The service instance ID.
   * 
   * @example
   * 1234567890123456
   */
  spInstanceId?: string;
  /**
   * @remarks
   * The service activation status.
   * 
   * This parameter is required.
   * 
   * @example
   * TEST_OK
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'orderId',
      spInstanceId: 'spInstanceId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      spInstanceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

