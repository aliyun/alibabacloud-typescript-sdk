// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSmartSysAvatarModelsResponseBodySmartSysAvatarModelList extends $dara.Model {
  /**
   * @remarks
   * The ID of the digital human. This ID is used to submit a standalone digital human rendering task or use the digital human avatar in an intelligent timeline.
   * 
   * @example
   * yunqiao
   */
  avatarId?: string;
  /**
   * @remarks
   * The name of the digital human.
   * 
   * @example
   * Yunqiao
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
   * The URL of the sample cover image for the digital human.
   * 
   * @example
   * http://ice-pub-media.myalicdn.com/smart/avatarModel/coverDemo/yunqiao.mp4
   */
  coverUrl?: string;
  /**
   * @remarks
   * The height of the video resolution.
   * 
   * @example
   * 1920
   */
  height?: number;
  /**
   * @remarks
   * Specifies whether portrait mask rendering is supported.
   * 
   * @example
   * false
   */
  outputMask?: boolean;
  /**
   * @remarks
   * The URL of the sample video for the digital human.
   * 
   * @example
   * http://ice-pub-media.myalicdn.com/smart/avatarModel/videoDemo/yunqiao.mp4
   */
  videoUrl?: string;
  /**
   * @remarks
   * The width of the video resolution.
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

export class ListSmartSysAvatarModelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of digital humans.
   */
  smartSysAvatarModelList?: ListSmartSysAvatarModelsResponseBodySmartSysAvatarModelList[];
  /**
   * @remarks
   * The total number of system digital human avatars.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      smartSysAvatarModelList: 'SmartSysAvatarModelList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      smartSysAvatarModelList: { 'type': 'array', 'itemType': ListSmartSysAvatarModelsResponseBodySmartSysAvatarModelList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.smartSysAvatarModelList)) {
      $dara.Model.validateArray(this.smartSysAvatarModelList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

