// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMediaLiveChannelsResponseBodyChannelsVideoSettingsVideoCodecSetting } from "./ListMediaLiveChannelsResponseBodyChannelsVideoSettingsVideoCodecSetting";


export class ListMediaLiveChannelsResponseBodyChannelsVideoSettings extends $dara.Model {
  /**
   * @remarks
   * The height of the video in pixels.
   * 
   * @example
   * 720
   */
  height?: number;
  /**
   * @remarks
   * The name of the video settings.
   * 
   * @example
   * video1
   */
  name?: string;
  /**
   * @remarks
   * The video codec.
   * 
   * @example
   * H264
   */
  videoCodec?: string;
  /**
   * @remarks
   * The video encoding settings.
   */
  videoCodecSetting?: ListMediaLiveChannelsResponseBodyChannelsVideoSettingsVideoCodecSetting;
  /**
   * @remarks
   * 视频转码方式（普通转码、窄带高清转码等）
   */
  videoCodecType?: string;
  /**
   * @remarks
   * The width of the video in pixels.
   * 
   * @example
   * 1280
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      name: 'Name',
      videoCodec: 'VideoCodec',
      videoCodecSetting: 'VideoCodecSetting',
      videoCodecType: 'VideoCodecType',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      name: 'string',
      videoCodec: 'string',
      videoCodecSetting: ListMediaLiveChannelsResponseBodyChannelsVideoSettingsVideoCodecSetting,
      videoCodecType: 'string',
      width: 'number',
    };
  }

  validate() {
    if(this.videoCodecSetting && typeof (this.videoCodecSetting as any).validate === 'function') {
      (this.videoCodecSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

