// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MultimodalAsyncModerationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The value of dataId passed in the API request. This field is absent if dataId was not included in the request.
   * 
   * @example
   * 26769ada6e264e7ba9aa048241e12be9
   */
  dataId?: string;
  /**
   * @remarks
   * The ReqId field returned by the URL asynchronous enhanced moderation API. Use this field to query moderation results.
   * 
   * @example
   * A07B3DB9-D762-5C56-95B1-8EC55CF176D2
   */
  reqId?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      reqId: 'ReqId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      reqId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MultimodalAsyncModerationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Returned data.
   */
  data?: MultimodalAsyncModerationResponseBodyData;
  /**
   * @remarks
   * The response message for this request.
   * 
   * @example
   * OK
   */
  msg?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: MultimodalAsyncModerationResponseBodyData,
      msg: 'string',
      requestId: 'string',
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

