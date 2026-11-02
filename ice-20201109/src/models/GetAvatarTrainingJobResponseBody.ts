// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAvatarTrainingJobResponseBodyDataAvatarTrainingJob extends $dara.Model {
  /**
   * @remarks
   * The description of the digital human.
   * 
   * @example
   * This is a digital man, used in such and such a scene.
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
   * 
   * @example
   * Digital person Name
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
   * The time when the training was first initiated. The time is in UTC.
   * 
   * @example
   * 2020-12-23T13:33:40Z
   */
  firstTrainingTime?: string;
  /**
   * @remarks
   * The ID of the digital human task.
   * 
   * @example
   * ****55d86f7f4587943ce7734d6b****
   */
  jobId?: string;
  /**
   * @remarks
   * The time of the most recent training. The time is in UTC.
   * 
   * @example
   * 2020-12-23T13:33:40Z
   */
  lastTrainingTime?: string;
  /**
   * @remarks
   * The status description.
   * 
   * @example
   * Successful training
   */
  message?: string;
  /**
   * @remarks
   * The media asset ID of the profile picture.
   * 
   * @example
   * ****571c704445f9a0ee011406c2****
   */
  portrait?: string;
  /**
   * @remarks
   * The status of the digital human training task. Valid values:
   * - Init: initialized or draft
   * - Queuing: queuing
   * - Training: training
   * - Success: succeeded
   * - Fail: failed
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The URL of the thumbnail.
   * 
   * @example
   * https://your-bucket.oss-cn-hangzhou.aliyuncs.com/thumbnail.png
   */
  thumbnail?: string;
  /**
   * @remarks
   * Indicates whether the input video supports a transparent channel.
   * 
   * @example
   * true
   */
  transparent?: boolean;
  /**
   * @remarks
   * The media asset ID of the training video.
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
   * The digital human training task.
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
   * The data returned upon a successful call.
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

