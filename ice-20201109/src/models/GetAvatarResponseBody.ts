// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAvatarResponseBodyDataAvatar extends $dara.Model {
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
   * The height of the digital human image in pixels.
   * 
   * @example
   * 1920
   */
  height?: number;
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
   * Indicates whether the digital human supports alpha channels.
   * 
   * @example
   * true
   */
  transparent?: boolean;
  /**
   * @remarks
   * The width of the digital human image in pixels.
   * 
   * @example
   * 1080
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      avatarDescription: 'AvatarDescription',
      avatarId: 'AvatarId',
      avatarName: 'AvatarName',
      avatarType: 'AvatarType',
      height: 'Height',
      portrait: 'Portrait',
      thumbnail: 'Thumbnail',
      transparent: 'Transparent',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarDescription: 'string',
      avatarId: 'string',
      avatarName: 'string',
      avatarType: 'string',
      height: 'number',
      portrait: 'string',
      thumbnail: 'string',
      transparent: 'boolean',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAvatarResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information about the digital human.
   */
  avatar?: GetAvatarResponseBodyDataAvatar;
  static names(): { [key: string]: string } {
    return {
      avatar: 'Avatar',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: GetAvatarResponseBodyDataAvatar,
    };
  }

  validate() {
    if(this.avatar && typeof (this.avatar as any).validate === 'function') {
      (this.avatar as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAvatarResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: GetAvatarResponseBodyData;
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
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
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
      data: GetAvatarResponseBodyData,
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

