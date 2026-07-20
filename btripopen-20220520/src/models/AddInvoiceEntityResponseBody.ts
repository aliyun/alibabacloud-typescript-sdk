// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddInvoiceEntityResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The number of added personnel, departments, or roles.
   * 
   * @example
   * 1
   */
  addNum?: number;
  /**
   * @remarks
   * The number of entities under the invoice header.
   * 
   * @example
   * 2
   */
  selectedUserNum?: number;
  static names(): { [key: string]: string } {
    return {
      addNum: 'add_num',
      selectedUserNum: 'selected_user_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addNum: 'number',
      selectedUserNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddInvoiceEntityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The remarks on the result, such as a description of the result.
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * The return value from the server. This parameter is empty if no result is returned or an exception occurs.
   */
  module?: AddInvoiceEntityResponseBodyModule;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * A5009956-1077-52FB-B520-EA8C7E91D722
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. This parameter is set by the server. The value is false when an exception occurs or when the result is null.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * 210f079e16603757182131635d866a
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: AddInvoiceEntityResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

