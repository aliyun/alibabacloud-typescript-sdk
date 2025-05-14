// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomizedVoiceJobsResponseBodyDataCustomizedVoiceJobList extends $dara.Model {
  /**
   * @remarks
   * *   The time when the job was created.
   * *   The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-04-01T06:23:59Z
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
   * The time when the job was created.
   * 
   * @example
   * 2022-06-27T02:42:28Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The ID of the human voice cloning job.
   * 
   * @example
   * 2245ab99a7fd4116a4fd3f499b7a56c5
   */
  jobId?: string;
  /**
   * @remarks
   * The returned message.
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
   * Success
   */
  status?: string;
  /**
   * @remarks
   * *   The voice type. Valid values:
   * 
   *     *   Basic
   *     *   Standard
   * 
   * @example
   * Standard
   */
  type?: string;
  /**
   * @remarks
   * The voice description.
   * 
   * *   The description can be up to 256 characters in length.
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
   * *   The name can be up to 32 characters in length.
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

