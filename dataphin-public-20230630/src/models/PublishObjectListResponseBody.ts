// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishObjectListResponseBodyPublishResult extends $dara.Model {
  /**
   * @remarks
   * The list of pending publish record IDs.
   */
  submitIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      submitIdList: 'SubmitIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      submitIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.submitIdList)) {
      $dara.Model.validateArray(this.submitIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishObjectListResponseBody extends $dara.Model {
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
   * The publish result.
   */
  publishResult?: PublishObjectListResponseBodyPublishResult;
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
      publishResult: 'PublishResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      publishResult: PublishObjectListResponseBodyPublishResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.publishResult && typeof (this.publishResult as any).validate === 'function') {
      (this.publishResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

