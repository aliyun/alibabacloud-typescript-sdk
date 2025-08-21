// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PlayModeControlResponseBodyResult extends $dara.Model {
  /**
   * @example
   * Normal
   */
  openPlayMode?: string;
  static names(): { [key: string]: string } {
    return {
      openPlayMode: 'OpenPlayMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openPlayMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PlayModeControlResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 10002398812
   */
  requestId?: string;
  result?: PlayModeControlResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: PlayModeControlResponseBodyResult,
      success: 'string',
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

