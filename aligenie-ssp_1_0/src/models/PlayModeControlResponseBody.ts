// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PlayModeControlResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Playback mode
   * 
   * List loop: Repeat; Shuffle: Shuffle; Single-track loop: RepeatOne; NAT mode: Normal;
   * 
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
   * @remarks
   * Return code of the invocation
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Additional information, typically used to briefly describe a failed invocation to help the caller troubleshoot the issue.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 10002398812
   */
  requestId?: string;
  /**
   * @remarks
   * Actual return result of the service
   */
  result?: PlayModeControlResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the invocation succeeded. true indicates success, and false indicates failure. When the value is false, check the Message field for details.
   * 
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

