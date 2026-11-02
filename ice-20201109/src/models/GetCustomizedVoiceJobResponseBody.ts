// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomizedVoiceJobResponseBodyDataCustomizedVoiceJob extends $dara.Model {
  /**
   * @remarks
   * The creation time in UTC format.
   * 
   * @example
   * 2023-06-07T02:27:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The gender. Valid values:
   * - female: Female.
   * - male: Male.
   * 
   * @example
   * female
   */
  gender?: string;
  /**
   * @remarks
   * The ID of the voice cloning task.
   * 
   * @example
   * ****571c704445f9a0ee011406c2****
   */
  jobId?: string;
  /**
   * @remarks
   * The additional description of the status.
   * 
   * @example
   * Training failed
   */
  message?: string;
  /**
   * @remarks
   * The scenario. Valid values:
   * - story: Story.
   * - interaction: Interaction.
   * - navigation: Navigation.
   * 
   * @example
   * story
   */
  scenario?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - Initialization: Initialized.
   * - AudioDetecting: Audio detection is in progress.
   * - PreTraining: Submitted for training and pending.
   * - Training: Training is in progress.
   * - Success: Training succeeded.
   * - Fail: Training failed.
   * 
   * @example
   * Fail
   */
  status?: string;
  /**
   * @remarks
   * The type of the voice cloning task. Valid values:
   * - Basic: Basic edition.
   * - Standard: Standard edition.
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
   * This is an exclusive human voice
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
   * The voice name.
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
   * The voice cloning task.
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
   * The data returned when the call is successful.
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
   * Indicates whether the call is successful. Valid values:
   * - true: The call is successful.
   * - false: The call failed.
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

