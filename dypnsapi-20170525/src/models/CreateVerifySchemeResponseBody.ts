// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVerifySchemeResponseBodyGateVerifySchemeDTO extends $dara.Model {
  /**
   * @remarks
   * The service code.
   * 
   * @example
   * FC10001287****
   */
  schemeCode?: string;
  static names(): { [key: string]: string } {
    return {
      schemeCode: 'SchemeCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schemeCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVerifySchemeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   If OK is returned, the request is successful.
   * *   For more information about other error codes, see [API response codes](https://help.aliyun.com/document_detail/85198.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  gateVerifySchemeDTO?: CreateVerifySchemeResponseBodyGateVerifySchemeDTO;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A1E75E69-3049-5FDB-A376-D745837CD2B1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      gateVerifySchemeDTO: 'GateVerifySchemeDTO',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      gateVerifySchemeDTO: CreateVerifySchemeResponseBodyGateVerifySchemeDTO,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.gateVerifySchemeDTO && typeof (this.gateVerifySchemeDTO as any).validate === 'function') {
      (this.gateVerifySchemeDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

