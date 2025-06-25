// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAppInstanceGroupImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidParameter.ProductType
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The parameter ProductType is invalid.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
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

