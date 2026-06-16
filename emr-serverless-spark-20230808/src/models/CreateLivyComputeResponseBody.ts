// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLivyComputeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the Livy Gateway.
   * 
   * @example
   * lc-i8xogcdfa4fk3yn1
   */
  livyComputeId?: string;
  static names(): { [key: string]: string } {
    return {
      livyComputeId: 'livyComputeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      livyComputeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLivyComputeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the request. A value of 1000000 indicates that the request was successful. Other values indicate that the request failed. For more information, see the message parameter.
   * 
   * @example
   * 1000000
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: CreateLivyComputeResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateLivyComputeResponseBodyData,
      message: 'string',
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

