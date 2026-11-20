// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrepareUpgradeResponseBodyData extends $dara.Model {
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
   * The upgrade target key.
   * 
   * @example
   * null
   */
  reasonKey?: string;
  /**
   * @remarks
   * Indicates whether the pre-upgrade preparation task was started successfully.
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

export class PrepareUpgradeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: PrepareUpgradeResponseBodyData;
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
   * 77B97AFB-7C9D-50FF-A72D-F13FD73E49D8
   */
  requestId?: string;
  /**
   * @remarks
   * The request result, which is independent of the business logic.
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
      data: PrepareUpgradeResponseBodyData,
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

