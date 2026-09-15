// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyConnectorResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of Service Account Key names that failed validation. Each element is a key name string. This list is empty if all keys pass validation.
   * 
   * @example
   * default
   */
  invalidServiceAccountKeys?: string[];
  /**
   * @remarks
   * Indicates whether the credentials are valid.
   * 
   * @example
   * true
   */
  valid?: boolean;
  static names(): { [key: string]: string } {
    return {
      invalidServiceAccountKeys: 'invalidServiceAccountKeys',
      valid: 'valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invalidServiceAccountKeys: { 'type': 'array', 'itemType': 'string' },
      valid: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.invalidServiceAccountKeys)) {
      $dara.Model.validateArray(this.invalidServiceAccountKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyConnectorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The validation result.
   */
  data?: VerifyConnectorResponseBodyData;
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
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * request-123456
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
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: VerifyConnectorResponseBodyData,
      httpStatusCode: 'number',
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

