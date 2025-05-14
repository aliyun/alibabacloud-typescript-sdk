// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAvatarsResponseBodyDataAvatarList extends $dara.Model {
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
   * Avatar-XXX
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
   * The media asset ID of the portrait image.
   * 
   * @example
   * ****571c704445f9a0ee011406c2****
   */
  portrait?: string;
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
   * Indicates whether the digital human image supports the alpha channels.
   * 
   * @example
   * true
   */
  transparent?: boolean;
  static names(): { [key: string]: string } {
    return {
      avatarDescription: 'AvatarDescription',
      avatarId: 'AvatarId',
      avatarName: 'AvatarName',
      avatarType: 'AvatarType',
      portrait: 'Portrait',
      thumbnail: 'Thumbnail',
      transparent: 'Transparent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarDescription: 'string',
      avatarId: 'string',
      avatarName: 'string',
      avatarType: 'string',
      portrait: 'string',
      thumbnail: 'string',
      transparent: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

