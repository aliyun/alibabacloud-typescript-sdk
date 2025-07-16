// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAttendeeResponseBodyContent extends $dara.Model {
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

export class AddAttendeeResponseBody extends $dara.Model {
  content?: AddAttendeeResponseBodyContent;
  /**
   * @example
   * 200
   */
  errorCode?: string;
  errorCtx?: { [key: string]: any };
  /**
   * @example
   * error check permissions
   */
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
   * 9BCC17ED-0187-54A0-BD31-56FDBE865447
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
      content: AddAttendeeResponseBodyContent,
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

