// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePrivateRdsClassResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * {     "orderId": "209136011******"   }
   */
  data?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 57D86AB4-8703-4DF4-BAB6-F7DE44******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

