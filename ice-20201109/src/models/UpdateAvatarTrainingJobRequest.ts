// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAvatarTrainingJobRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the digital human. The description can be up to 1,000 characters in length.
   * 
   * @example
   * This is a digital human, intended for use in a certain scenario.
   */
  avatarDescription?: string;
  /**
   * @remarks
   * The name of the digital human. The name can be up to 7 characters in length.
   * 
   * @example
   * The name of the digital human.
   */
  avatarName?: string;
  /**
   * @remarks
   * The ID of the digital human training task.
   * 
   * This parameter is required.
   * 
   * @example
   * ****cdb3e74639973036bc84****
   */
  jobId?: string;
  /**
   * @remarks
   * The media asset ID of the profile picture. The ID must be 32 characters in length.
   * 
   * @example
   * ****571c704445f9a0ee011406c2****
   */
  portrait?: string;
  /**
   * @remarks
   * The URL of the thumbnail.
   * - The thumbnail is uploaded to this URL after the training succeeds.
   * - The URL must be a valid public Object Storage Service (OSS) URL within your account.
   * - The URL can be up to 512 characters in length.
   * - The URL cannot be updated after the training succeeds.
   * 
   * @example
   * https://your-bucket.oss-cn-hangzhou.aliyuncs.com/thumbnail.png
   */
  thumbnail?: string;
  /**
   * @remarks
   * Specifies whether the uploaded video supports a transparent channel.
   * 
   * You can modify this parameter only for tasks in the Initialized or Training Failed state.
   * <notice>Make sure that this setting matches the properties of the submitted training video. Otherwise, the synthesized digital human may behave abnormally.</notice>
   * 
   * @example
   * True
   */
  transparent?: boolean;
  /**
   * @remarks
   * The media asset ID of the training video.
   * - The ID must be 32 characters in length.
   * - The MP4, MOV, and WebM formats are supported.
   * - The video duration must be between 5 and 15 minutes.
   * - The video resolution must be 1920 × 1080 or 1080 × 1920.
   * 
   * @example
   * ****571c704445f9a0ee011406c2****
   */
  video?: string;
  static names(): { [key: string]: string } {
    return {
      avatarDescription: 'AvatarDescription',
      avatarName: 'AvatarName',
      jobId: 'JobId',
      portrait: 'Portrait',
      thumbnail: 'Thumbnail',
      transparent: 'Transparent',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarDescription: 'string',
      avatarName: 'string',
      jobId: 'string',
      portrait: 'string',
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

