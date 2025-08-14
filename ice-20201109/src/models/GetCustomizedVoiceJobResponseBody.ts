// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomizedVoiceJobResponseBodyDataCustomizedVoiceJob extends $dara.Model {
  /**
   * @remarks
   * The time when the job was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-06-07T02:27:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The gender. Valid values:
   * 
   * *   female
   * *   male
   * 
   * @example
   * female
   */
  gender?: string;
  /**
   * @remarks
   * The ID of the human voice cloning job.
   * 
   * @example
   * ****571c704445f9a0ee011406c2****
   */
  jobId?: string;
  /**
   * @remarks
   * The status description.
   */
  message?: string;
  /**
   * @remarks
   * The scenario. Valid values:
   * 
   * *   story
   * *   interaction
   * *   navigation
   * 
   * @example
   * story
   */
  scenario?: string;
  /**
   * @remarks
   * The job state. Valid values:
   * 
   * *   Initialization
   * *   AudioDetecting
   * *   PreTraining
   * *   Training
   * *   Success
   * *   Fail
   * 
   * @example
   * Fail
   */
  status?: string;
  /**
   * @remarks
   * The type of the human voice cloning job. Valid values:
   * 
   * *   Basic
   * *   Standard
   * 
   * @example
   * Standard
   */
  type?: string;
  /**
   * @remarks
   * The voice description.
   * 
   * @example
   * This is an exclusive voice
   */
  voiceDesc?: string;
  /**
   * @remarks
   * The voice ID.
   * 
   * @example
   * xiaozhuan
   */
  voiceId?: string;
  /**
   * @remarks
   * The voice name.
   * 
   * @example
   * Xiaozhuan
   */
  voiceName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      gender: 'Gender',
      jobId: 'JobId',
      message: 'Message',
      scenario: 'Scenario',
      status: 'Status',
      type: 'Type',
      voiceDesc: 'VoiceDesc',
      voiceId: 'VoiceId',
      voiceName: 'VoiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      gender: 'string',
      jobId: 'string',
      message: 'string',
      scenario: 'string',
      status: 'string',
      type: 'string',
      voiceDesc: 'string',
      voiceId: 'string',
      voiceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomizedVoiceJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information about the human voice cloning job.
   */
  customizedVoiceJob?: GetCustomizedVoiceJobResponseBodyDataCustomizedVoiceJob;
  static names(): { [key: string]: string } {
    return {
      customizedVoiceJob: 'CustomizedVoiceJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customizedVoiceJob: GetCustomizedVoiceJobResponseBodyDataCustomizedVoiceJob,
    };
  }

  validate() {
    if(this.customizedVoiceJob && typeof (this.customizedVoiceJob as any).validate === 'function') {
      (this.customizedVoiceJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomizedVoiceJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned if the request was successful.
   */
  data?: GetCustomizedVoiceJobResponseBodyData;
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
      data: GetCustomizedVoiceJobResponseBodyData,
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

