// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveAttendeeResponseBodyContent extends $dara.Model {
  /**
   * @example
   * []
   */
  data?: any;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
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

export class RemoveAttendeeResponseBody extends $dara.Model {
  content?: RemoveAttendeeResponseBodyContent;
  /**
   * @example
   * success
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
   * RequestId
   * 
   * @example
   * A348BA5D-FFD4-57E4-9450-23A14D72F331
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      errorCode: 'ErrorCode',
      errorCtx: 'ErrorCtx',
      errorMsg: 'ErrorMsg',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: RemoveAttendeeResponseBodyContent,
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

