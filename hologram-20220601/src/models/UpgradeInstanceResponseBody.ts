// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The reason for the upgrade failure.
   * 
   * @example
   * null
   */
  failReason?: string;
  /**
   * @remarks
   * The reason key.
   * 
   * @example
   * null
   */
  reasonKey?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values:
   * - true: Successful.
   * - false: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      failReason: 'FailReason',
      reasonKey: 'ReasonKey',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failReason: 'string',
      reasonKey: 'string',
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

export class UpgradeInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: UpgradeInstanceResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * null
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * EEB0A71E-7AC7-572F-990F-EE51D3FD35B9
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether an exception occurred during the request.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpgradeInstanceResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'string',
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

