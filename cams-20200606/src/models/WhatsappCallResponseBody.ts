// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WhatsappCallResponseBodyModel extends $dara.Model {
  /**
   * @remarks
   * The unique identifier for each call.
   * 
   * @example
   * wamid-xx**
   */
  callId?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WhatsappCallResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The request status code.
   * 
   * - OK: The request was successful.
   * 
   * - For other error codes, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The error description.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The returned result.
   */
  model?: WhatsappCallResponseBodyModel;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * xik-x**
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * - **true**: The call was successful.
   * 
   * - **false**: The call failed.
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      model: WhatsappCallResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

