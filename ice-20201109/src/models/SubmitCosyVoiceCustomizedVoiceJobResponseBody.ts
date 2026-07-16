// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCosyVoiceCustomizedVoiceJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the voice cloning task.
   * 
   * @example
   * bfb786c639894f4d80648792021****
   */
  jobId?: string;
  /**
   * @remarks
   * The voice ID.
   * 
   * @example
   * Voice-l*****
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

export class SubmitCosyVoiceCustomizedVoiceJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: SubmitCosyVoiceCustomizedVoiceJobResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C0C02296-113C-5838-8FE9-8F3A32998DDC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * - true: The request was successful.
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
      data: SubmitCosyVoiceCustomizedVoiceJobResponseBodyData,
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

