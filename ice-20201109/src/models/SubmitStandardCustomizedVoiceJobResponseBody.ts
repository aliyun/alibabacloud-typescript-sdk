// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitStandardCustomizedVoiceJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the human voice cloning job.
   * 
   * @example
   * ****d718e2ff4f018ccf419a7b71****
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitStandardCustomizedVoiceJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: SubmitStandardCustomizedVoiceJobResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
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
      data: SubmitStandardCustomizedVoiceJobResponseBodyData,
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

