// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSavingsPlansInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 202110260001
   */
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSavingsPlansInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * PARAM_ERROR
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: CreateSavingsPlansInstanceResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * The parameter must be specified.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 26dabb0c-8ca0-4aa0-8143-30499f3fe304
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
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateSavingsPlansInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

