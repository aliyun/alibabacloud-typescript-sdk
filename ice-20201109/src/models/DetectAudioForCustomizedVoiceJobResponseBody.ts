// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectAudioForCustomizedVoiceJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the audio passed the check. Valid values:
   * 
   * - true: The audio passed the check.
   * - false: The audio failed the check.
   * 
   * @example
   * false
   */
  pass?: boolean;
  /**
   * @remarks
   * The specific reason why the audio failed the check.
   * 
   * @example
   * Pronunciation error, please read the contents of the copy accurately
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      pass: 'Pass',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pass: 'boolean',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectAudioForCustomizedVoiceJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: DetectAudioForCustomizedVoiceJobResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * - true: The operation was successful.
   * - false: The operation failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectAudioForCustomizedVoiceJobResponseBodyData,
      requestId: 'string',
      success: 'boolean',
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

