// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSmartSysAvatarModelsResponseBodySmartSysAvatarModelList extends $dara.Model {
  /**
   * @remarks
   * The ID of the digital human. The ID is required to submit a separate digital human rendering job or use the digital human image in an intelligent timeline.
   * 
   * @example
   * yunqiao
   */
  avatarId?: string;
  /**
   * @remarks
   * The name of the digital human.
   */
  avatarName?: string;
  /**
   * @remarks
   * The video bitrate.
   * 
   * @example
   * 4000
   */
  bitrate?: number;
  /**
   * @remarks
   * The sample thumbnail URL of the digital human.
   * 
   * @example
   * http://ice-pub-media.myalicdn.com/smart/avatarModel/coverDemo/yunqiao.mp4
   */
  coverUrl?: string;
  /**
   * @remarks
   * The video height.
   * 
   * @example
   * 1920
   */
  height?: number;
  /**
   * @remarks
   * Indicates whether portrait mask rendering is supported.
   * 
   * @example
   * false
   */
  outputMask?: boolean;
  /**
   * @remarks
   * The sample video URL of the digital human.
   * 
   * @example
   * http://ice-pub-media.myalicdn.com/smart/avatarModel/videoDemo/yunqiao.mp4
   */
  videoUrl?: string;
  /**
   * @remarks
   * The video width.
   * 
   * @example
   * 1080
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      avatarId: 'AvatarId',
      avatarName: 'AvatarName',
      bitrate: 'Bitrate',
      coverUrl: 'CoverUrl',
      height: 'Height',
      outputMask: 'OutputMask',
      videoUrl: 'VideoUrl',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarId: 'string',
      avatarName: 'string',
      bitrate: 'number',
      coverUrl: 'string',
      height: 'number',
      outputMask: 'boolean',
      videoUrl: 'string',
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

