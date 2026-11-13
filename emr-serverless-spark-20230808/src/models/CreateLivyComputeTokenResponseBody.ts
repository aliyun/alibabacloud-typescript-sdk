// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLivyComputeTokenResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The token ID.
   * 
   * @example
   * lctk-xxxxxxxx
   */
  tokenId?: string;
  static names(): { [key: string]: string } {
    return {
      tokenId: 'tokenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tokenId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLivyComputeTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of 1000000 indicates that the request is successful. Any other value indicates that the request failed. For more information about the error cause, see the message.
   * 
   * @example
   * 1000000
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: CreateLivyComputeTokenResponseBodyData;
  /**
   * @remarks
   * The error details.
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
      data: CreateLivyComputeTokenResponseBodyData,
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

