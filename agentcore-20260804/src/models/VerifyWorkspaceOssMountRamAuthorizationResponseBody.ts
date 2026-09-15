// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyWorkspaceOssMountRamAuthorizationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The OSS storage authorization status.
   */
  authorizationStatus?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationStatus: 'authorizationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyWorkspaceOssMountRamAuthorizationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code.
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: VerifyWorkspaceOssMountRamAuthorizationResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      data: VerifyWorkspaceOssMountRamAuthorizationResponseBodyData,
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

