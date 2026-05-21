// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeInstanceResponseBodyData extends $dara.Model {
  /**
   * @example
   * null
   */
  failReason?: string;
  /**
   * @example
   * null
   */
  reasonKey?: string;
  /**
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
  data?: UpgradeInstanceResponseBodyData;
  /**
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @example
   * null
   */
  errorMessage?: string;
  /**
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

