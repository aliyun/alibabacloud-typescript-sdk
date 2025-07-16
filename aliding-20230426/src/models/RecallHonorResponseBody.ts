// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecallHonorResponseBodyContent extends $dara.Model {
  /**
   * @example
   * success
   */
  data?: any;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallHonorResponseBody extends $dara.Model {
  content?: RecallHonorResponseBodyContent;
  /**
   * @example
   * 040008
   */
  errorCode?: string;
  errorCtx?: { [key: string]: any };
  errorMsg?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      errorCode: 'errorCode',
      errorCtx: 'errorCtx',
      errorMsg: 'errorMsg',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: RecallHonorResponseBodyContent,
      errorCode: 'string',
      errorCtx: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorMsg: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    if(this.errorCtx) {
      $dara.Model.validateMap(this.errorCtx);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

