// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OfflineBatchTaskResponseBodyOfflineResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the object to be published.
   * 
   * @example
   * 10211123
   */
  publishObjectId?: number;
  static names(): { [key: string]: string } {
    return {
      publishObjectId: 'PublishObjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publishObjectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineBatchTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. A value of OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The offline result.
   */
  offlineResult?: OfflineBatchTaskResponseBodyOfflineResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      offlineResult: 'OfflineResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      offlineResult: OfflineBatchTaskResponseBodyOfflineResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.offlineResult && typeof (this.offlineResult as any).validate === 'function') {
      (this.offlineResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

