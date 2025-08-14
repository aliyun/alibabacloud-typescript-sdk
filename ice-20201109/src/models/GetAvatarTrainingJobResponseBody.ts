// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAvatarTrainingJobResponseBodyDataAvatarTrainingJob extends $dara.Model {
  /**
   * @remarks
   * The description of the digital human.
   */
  avatarDescription?: string;
  /**
   * @remarks
   * The ID of the digital human.
   * 
   * @example
   * Avatar-XXXX
   */
  avatarId?: string;
  /**
   * @remarks
   * The name of the digital human.
   */
  avatarName?: string;
  /**
   * @remarks
   * The type of the digital human.
   * 
   * @example
   * 2DAvatar
   */
  avatarType?: string;
  /**
   * @remarks
   * *   The time when the first training was initiated.
   * *   The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2020-12-23T13:33:40Z
   */
  firstTrainingTime?: string;
  /**
   * @remarks
   * The ID of the digital human training job.
   * 
   * @example
   * ****55d86f7f4587943ce7734d6b****
   */
  jobId?: string;
  /**
   * @remarks
   * *   The time when the last training was initiated.
   * *   The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2020-12-23T13:33:40Z
   */
  lastTrainingTime?: string;
  /**
   * @remarks
   * The status description.
   */
  message?: string;
  /**
   * @remarks
   * The media asset ID of the portrait image.
   * 
   * @example
   * ****571c704445f9a0ee011406c2****
   */
  portrait?: string;
  /**
   * @remarks
   * *   The state of the digital human training job.
   * *   Valid values: Init, Queuing, Training, Success, and Fail.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The thumbnail URL.
   * 
   * @example
   * https://your-bucket.oss-cn-hangzhou.aliyuncs.com/thumbnail.png
   */
  thumbnail?: string;
  /**
   * @remarks
   * Indicates whether the input video supports alpha channels.
   * 
   * @example
   * true
   */
  transparent?: boolean;
  /**
   * @remarks
   * The ID of the video used for training.
   * 
   * @example
   * ****571c704445f9a0ee011406c2****
   */
  video?: string;
  static names(): { [key: string]: string } {
    return {
      avatarDescription: 'AvatarDescription',
      avatarId: 'AvatarId',
      avatarName: 'AvatarName',
      avatarType: 'AvatarType',
      firstTrainingTime: 'FirstTrainingTime',
      jobId: 'JobId',
      lastTrainingTime: 'LastTrainingTime',
      message: 'Message',
      portrait: 'Portrait',
      status: 'Status',
      thumbnail: 'Thumbnail',
      transparent: 'Transparent',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarDescription: 'string',
      avatarId: 'string',
      avatarName: 'string',
      avatarType: 'string',
      firstTrainingTime: 'string',
      jobId: 'string',
      lastTrainingTime: 'string',
      message: 'string',
      portrait: 'string',
      status: 'string',
      thumbnail: 'string',
      transparent: 'boolean',
      video: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAvatarTrainingJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information about the digital human training job.
   */
  avatarTrainingJob?: GetAvatarTrainingJobResponseBodyDataAvatarTrainingJob;
  static names(): { [key: string]: string } {
    return {
      avatarTrainingJob: 'AvatarTrainingJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarTrainingJob: GetAvatarTrainingJobResponseBodyDataAvatarTrainingJob,
    };
  }

  validate() {
    if(this.avatarTrainingJob && typeof (this.avatarTrainingJob as any).validate === 'function') {
      (this.avatarTrainingJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAvatarTrainingJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned if the request was successful.
   */
  data?: GetAvatarTrainingJobResponseBodyData;
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
   * Indicates whether the request was successful.
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
      data: GetAvatarTrainingJobResponseBodyData,
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

