// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitialSysomResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the service role exists
   * 
   * @example
   * true
   */
  roleExist?: boolean;
  static names(): { [key: string]: string } {
    return {
      roleExist: 'role_exist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleExist: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitialSysomResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID, which can be used for end-to-end diagnosis
   * 
   * @example
   * 3FCA2E38-2A8E-5501-93BD-5CE1BA58F2EF
   */
  requestId?: string;
  /**
   * @remarks
   * Status code  
   * - If `code == Success`, authorization succeeded.  
   * - Any other status code indicates a failed authorization. In such cases, view the `message` field for detailed error information.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Return Result.
   */
  data?: InitialSysomResponseBodyData;
  /**
   * @remarks
   * Error message  
   * - If `code == Success`, this field is empty.  
   * - Otherwise, this field contains the error message.
   * 
   * @example
   * SysomOpenAPIException: SysomOpenAPI.InvalidParameter Invalid params, should be json string or dict
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: InitialSysomResponseBodyData,
      message: 'string',
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

