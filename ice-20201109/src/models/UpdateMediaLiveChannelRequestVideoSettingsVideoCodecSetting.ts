// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateMediaLiveChannelRequestVideoSettingsVideoCodecSettingCodecDetail } from "./UpdateMediaLiveChannelRequestVideoSettingsVideoCodecSettingCodecDetail";
import { UpdateMediaLiveChannelRequestVideoSettingsVideoCodecSettingFramerate } from "./UpdateMediaLiveChannelRequestVideoSettingsVideoCodecSettingFramerate";
import { UpdateMediaLiveChannelRequestVideoSettingsVideoCodecSettingGop } from "./UpdateMediaLiveChannelRequestVideoSettingsVideoCodecSettingGop";
import { UpdateMediaLiveChannelRequestVideoSettingsVideoCodecSettingRate } from "./UpdateMediaLiveChannelRequestVideoSettingsVideoCodecSettingRate";


export class UpdateMediaLiveChannelRequestVideoSettingsVideoCodecSetting extends $dara.Model {
  /**
   * @remarks
   * The video encoding settings.
   */
  codecDetail?: UpdateMediaLiveChannelRequestVideoSettingsVideoCodecSettingCodecDetail;
  /**
   * @remarks
   * The frame rate. If it is not specified, the source specification is used.
   */
  framerate?: UpdateMediaLiveChannelRequestVideoSettingsVideoCodecSettingFramerate;
  /**
   * @remarks
   * The GOP setting. If it is not specified, the source specification is used.
   */
  gop?: UpdateMediaLiveChannelRequestVideoSettingsVideoCodecSettingGop;
  /**
   * @remarks
   * The video encoding rate. If it is not specified, the source specification is used.
   */
  rate?: UpdateMediaLiveChannelRequestVideoSettingsVideoCodecSettingRate;
  static names(): { [key: string]: string } {
    return {
      codecDetail: 'CodecDetail',
      framerate: 'Framerate',
      gop: 'Gop',
      rate: 'Rate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codecDetail: UpdateMediaLiveChannelRequestVideoSettingsVideoCodecSettingCodecDetail,
      framerate: UpdateMediaLiveChannelRequestVideoSettingsVideoCodecSettingFramerate,
      gop: UpdateMediaLiveChannelRequestVideoSettingsVideoCodecSettingGop,
      rate: UpdateMediaLiveChannelRequestVideoSettingsVideoCodecSettingRate,
    };
  }

  validate() {
    if(this.codecDetail && typeof (this.codecDetail as any).validate === 'function') {
      (this.codecDetail as any).validate();
    }
    if(this.framerate && typeof (this.framerate as any).validate === 'function') {
      (this.framerate as any).validate();
    }
    if(this.gop && typeof (this.gop as any).validate === 'function') {
      (this.gop as any).validate();
    }
    if(this.rate && typeof (this.rate as any).validate === 'function') {
      (this.rate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

