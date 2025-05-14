// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateMediaLiveChannelRequestVideoSettingsVideoCodecSetting } from "./CreateMediaLiveChannelRequestVideoSettingsVideoCodecSetting";


export class CreateMediaLiveChannelRequestVideoSettings extends $dara.Model {
  /**
   * @remarks
   * The height of the output. Valid values: 0 to 2000. If you set it to 0 or leave it empty, the height automatically adapts to the specified width to maintain the original aspect ratio.
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
   * The width of the output. Valid values: 0 to 2000. If you set it to 0 or leave it empty, the width automatically adapts to the specified height to maintain the original aspect ratio.
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
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      name: 'string',
      videoCodec: 'string',
      videoCodecSetting: CreateMediaLiveChannelRequestVideoSettingsVideoCodecSetting,
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

