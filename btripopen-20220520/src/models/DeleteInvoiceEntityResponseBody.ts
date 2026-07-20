// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInvoiceEntityResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The number of removed personnel, departments, or roles.
   * 
   * @example
   * 1
   */
  removeNum?: number;
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
      removeNum: 'remove_num',
      selectedUserNum: 'selected_user_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      removeNum: 'number',
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

export class DeleteInvoiceEntityResponseBody extends $dara.Model {
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
   * The return value from the server. An empty value is returned if no result is available or an exception occurs.
   */
  module?: DeleteInvoiceEntityResponseBodyModule;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * A5009956-1077-52FB-B520-EA8C7E91D722
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
  /**
   * @remarks
   * traceId
   * 
   * @example
   * 21041ce316577904808056433edbb2
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
      module: DeleteInvoiceEntityResponseBodyModule,
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

