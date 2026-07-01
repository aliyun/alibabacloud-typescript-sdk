// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCustomizedVoiceJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The unique identifier for the voice cloning job.
   * 
   * @example
   * ****d718e2ff4f018ccf419a7b71****
   */
  jobId?: string;
  /**
   * @remarks
   * The unique identifier for the voice.
   * 
   * @example
   * xiaozhuan
   */
  voiceId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      voiceId: 'VoiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      voiceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCustomizedVoiceJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: SubmitCustomizedVoiceJobResponseBodyData;
  /**
   * @remarks
   * The unique identifier for the request.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true: The request was successful.
   * 
   * - false: The request failed.
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
      data: SubmitCustomizedVoiceJobResponseBodyData,
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

