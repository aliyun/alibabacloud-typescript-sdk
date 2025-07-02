// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateMediaLiveChannelRequestVideoSettingsVideoCodecSetting } from "./CreateMediaLiveChannelRequestVideoSettingsVideoCodecSetting";


export class CreateMediaLiveChannelRequestVideoSettings extends $dara.Model {
  /**
   * @remarks
   * The height of the output. If you set it to 0 or leave it empty, the height automatically adapts to the specified width to maintain the original aspect ratio.
   * 
   * Valid values:
   * 
   * *   For regular transcoding, the larger dimension cannot exceed 3840 px, and the smaller one cannot exceed 2160 px.
   * *   For Narrowband HD™ transcoding, the larger dimension cannot exceed 1920 px, and the smaller one cannot exceed 1080 px.
   * 
   * @example
   * 720
   */
  height?: number;
  /**
   * @remarks
   * The name of the video settings. Letters, digits, hyphens (-), and underscores (_) are supported. It can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * video1
   */
  name?: string;
  /**
   * @remarks
   * The video codec. Valid values: H264 and H265.
   * 
   * @example
   * H264
   */
  videoCodec?: string;
  /**
   * @remarks
   * The video encoding settings.
   */
  videoCodecSetting?: CreateMediaLiveChannelRequestVideoSettingsVideoCodecSetting;
  /**
   * @remarks
   * The video transcoding method. Valid values:
   * 
   * *   NORMAL: regular transcoding
   * *   NBHD: Narrowband HD™ transcoding
   * 
   * If not specified, regular transcoding is used by default.
   * 
   * @example
   * NORMAL
   */
  videoCodecType?: string;
  /**
   * @remarks
   * The width of the output. If you set it to 0 or leave it empty, the width automatically adapts to the specified height to maintain the original aspect ratio.
   * 
   * Valid values:
   * 
   * *   For regular transcoding, the larger dimension cannot exceed 3840 px, and the smaller one cannot exceed 2160 px.
   * *   For Narrowband HD™ transcoding, the larger dimension cannot exceed 1920 px, and the smaller one cannot exceed 1080 px.
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
      videoCodecSetting: CreateMediaLiveChannelRequestVideoSettingsVideoCodecSetting,
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

