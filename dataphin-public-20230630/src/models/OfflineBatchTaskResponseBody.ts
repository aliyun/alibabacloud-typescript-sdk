// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OfflineBatchTaskResponseBodyOfflineResult extends $dara.Model {
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  offlineResult?: OfflineBatchTaskResponseBodyOfflineResult;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
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

