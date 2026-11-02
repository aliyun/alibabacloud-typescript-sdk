// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomizedVoiceJobsResponseBodyDataCustomizedVoiceJobList extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created. The time is in UTC.
   * 
   * @example
   * 2023-04-01T06:23:59Z
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
   * The creation time.
   * 
   * @example
   * 2022-06-27T02:42:28Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The ID of the voice cloning task.
   * 
   * @example
   * 2245ab99a7fd4116a4fd3f499b7a56c5
   */
  jobId?: string;
  /**
   * @remarks
   * The additional description of the status.
   * 
   * @example
   * Successful training
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
   * The status of the task. Valid values:
   * - Initialization: Initialized.
   * - AudioDetecting: Audio detection in progress.
   * - PreTraining: Submitted and pending training.
   * - Training: Training in progress.
   * - Success: Training succeeded.
   * - Fail: Training failed.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The voice type. Valid values:
   * - Basic: Basic edition.
   * - Standard: Standard edition.
   * 
   * @example
   * Standard
   */
  type?: string;
  /**
   * @remarks
   * The description of the voice.
   * - The description cannot exceed 256 characters in length.
   * 
   * @example
   * This is the description of this voice
   */
  voiceDesc?: string;
  /**
   * @remarks
   * The ID of the voice.
   * 
   * @example
   * xiaozhuan
   */
  voiceId?: string;
  /**
   * @remarks
   * The name of the voice, which is typically in Chinese.
   * - The name cannot exceed 32 characters in length.
   * 
   * @example
   * Small Special
   */
  voiceName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      gender: 'Gender',
      gmtCreate: 'GmtCreate',
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
      gmtCreate: 'string',
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

export class ListCustomizedVoiceJobsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of voice cloning tasks.
   */
  customizedVoiceJobList?: ListCustomizedVoiceJobsResponseBodyDataCustomizedVoiceJobList[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 271
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      customizedVoiceJobList: 'CustomizedVoiceJobList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customizedVoiceJobList: { 'type': 'array', 'itemType': ListCustomizedVoiceJobsResponseBodyDataCustomizedVoiceJobList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.customizedVoiceJobList)) {
      $dara.Model.validateArray(this.customizedVoiceJobList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomizedVoiceJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: ListCustomizedVoiceJobsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * - true: Successful.
   * - false: Failed.
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
      data: ListCustomizedVoiceJobsResponseBodyData,
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

