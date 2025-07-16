// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEventResponseBodyContent extends $dara.Model {
  /**
   * @example
   * []
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

export class DeleteEventResponseBody extends $dara.Model {
  content?: DeleteEventResponseBodyContent;
  /**
   * @example
   * success
   */
  errorCode?: string;
  errorCtx?: { [key: string]: any };
  /**
   * @example
   * ""
   */
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
   * 4248DCC9-785F-5A14-8BE0-830FD52E1261
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
      content: DeleteEventResponseBodyContent,
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

