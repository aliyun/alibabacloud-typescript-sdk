// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAvatarTrainingJobRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the digital human. The description can be up to 1000 characters in length.
   * 
   * @example
   * This is a digital human used for a specific scenario.
   */
  avatarDescription?: string;
  /**
   * @remarks
   * The name of the digital human. The name can be up to 7 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Decimal
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
   * - The media asset ID of the avatar image. The ID is 32 characters in length.
   * - If you subsequently call SubmitAvatarTrainingJob to submit the training, this field is required.
   * - The image must have equal width and height.
   * 
   * @example
   * ****571c704445f9a0ee011406c2****
   */
  portrait?: string;
  /**
   * @remarks
   * The thumbnail URL.
   * - After training succeeds, the thumbnail is uploaded to this address.
   * - The URL must be a valid public OSS URL under the current user.
   * - The URL can be up to 512 characters in length.
   * 
   * @example
   * https://your-bucket.oss-cn-hangzhou.aliyuncs.com/thumbnail.png
   */
  thumbnail?: string;
  /**
   * @remarks
   * Specifies whether the training video supports a transparent channel.
   * >Notice: Make sure that this setting is consistent with the submitted training video. Otherwise, the synthesized digital human may be abnormal.</notice>
   * 
   * @example
   * True
   */
  transparent?: boolean;
  /**
   * @remarks
   * The media asset ID of the training video.
   * - The ID is 32 characters in length.
   * - Supported formats: mp4, mov, and webm.
   * - The duration of the material must be between 5 minutes and 15 minutes.
   * - The resolution of the material must be 1920 × 1080 or 1080 × 1920.
   * - If you subsequently call SubmitAvatarTrainingJob to submit the training, this field is required.
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

