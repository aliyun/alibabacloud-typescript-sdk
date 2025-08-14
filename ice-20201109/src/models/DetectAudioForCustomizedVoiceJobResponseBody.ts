// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectAudioForCustomizedVoiceJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the audio file passes the check. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  pass?: boolean;
  /**
   * @remarks
   * The reason returned if the audio file failed to pass the check.
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
   * The data returned.
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
   * Indicates whether the request was successful. Valid values: true false
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

