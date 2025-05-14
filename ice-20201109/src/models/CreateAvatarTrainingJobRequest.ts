// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAvatarTrainingJobRequest extends $dara.Model {
  /**
   * @remarks
   * *   The description of the digital human.
   * *   The description can be up to 1,000 characters in length.
   */
  avatarDescription?: string;
  /**
   * @remarks
   * *   The name of the digital human.
   * *   The name can be up to seven characters in length.
   * 
   * This parameter is required.
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
   * *   The media asset ID of the portrait image.
   * *   The value must be 32 characters in length.
   * 
   * @example
   * ****571c704445f9a0ee011406c2****
   */
  portrait?: string;
  /**
   * @remarks
   * *   The thumbnail URL.
   * *   After the digital human is trained, the thumbnail is uploaded to this URL.
   * *   The URL must be a valid public Object Storage Service (OSS) URL.
   * *   The URL can be up to 512 characters in length.
   * 
   * @example
   * https://your-bucket.oss-cn-hangzhou.aliyuncs.com/thumbnail.png
   */
  thumbnail?: string;
  /**
   * @remarks
   * *   Specifies whether the training video supports alpha channels.
   * 
   *     **
   * 
   *     **Note**: Make sure that the current settings are consistent with those of the submitted training video. Otherwise, the digital human may malfunction.
   * 
   * @example
   * True
   */
  transparent?: boolean;
  /**
   * @remarks
   * *   The ID of the video used for training.
   * *   The value must be 32 characters in length.
   * *   Supported formats: MP4, MOV, and WebM.
   * *   The duration of the video must be 5 to 15 minutes.
   * *   The resolution of the video must be 1920×1080 or 1080×1920.
   * 
   * @example
   * ****571c704445f9a0ee011406c2****
   */
  video?: string;
  static names(): { [key: string]: string } {
    return {
      avatarDescription: 'AvatarDescription',
      avatarName: 'AvatarName',
      avatarType: 'AvatarType',
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
      avatarType: 'string',
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

