// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DispatchConsoleAPIForPartnerResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * Request result.
   * 
   * @example
   * {\\"HasCustomRoleAuth\\": False}
   */
  data?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DispatchConsoleAPIForPartnerResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code. The value is as follows: If the request succeeds, the ErrorCode field is not returned. If the request fails, the ErrorCode field is returned. For more information, see the error code list in this topic.
   * 
   * @example
   * 0
   */
  errorCode?: string;
  /**
   * @remarks
   * Response data
   */
  module?: DispatchConsoleAPIForPartnerResponseBodyModule;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6C6B99AC-39EC-5350-874C-204128C905E6
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      module: 'Module',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      module: DispatchConsoleAPIForPartnerResponseBodyModule,
      requestId: 'string',
      success: 'string',
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

