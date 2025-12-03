// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTagResponseBodyResult extends $dara.Model {
  /**
   * @example
   * v1.0
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagName: 'tagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTagResponseBody extends $dara.Model {
  /**
   * @example
   * Openapi.RequestError
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * 60945D4F-CF6D-5CFF-89ED-1D1F6657032C
   */
  requestId?: string;
  result?: DeleteTagResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: DeleteTagResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

