// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateMediaLiveChannelRequestVideoSettingsVideoCodecSettingCodecDetail } from "./CreateMediaLiveChannelRequestVideoSettingsVideoCodecSettingCodecDetail";
import { CreateMediaLiveChannelRequestVideoSettingsVideoCodecSettingFramerate } from "./CreateMediaLiveChannelRequestVideoSettingsVideoCodecSettingFramerate";
import { CreateMediaLiveChannelRequestVideoSettingsVideoCodecSettingGop } from "./CreateMediaLiveChannelRequestVideoSettingsVideoCodecSettingGop";
import { CreateMediaLiveChannelRequestVideoSettingsVideoCodecSettingRate } from "./CreateMediaLiveChannelRequestVideoSettingsVideoCodecSettingRate";


export class CreateMediaLiveChannelRequestVideoSettingsVideoCodecSetting extends $dara.Model {
  /**
   * @remarks
   * The video encoding settings.
   */
  codecDetail?: CreateMediaLiveChannelRequestVideoSettingsVideoCodecSettingCodecDetail;
  /**
   * @remarks
   * The frame rate. If it is not specified, the source specification is used.
   */
  framerate?: CreateMediaLiveChannelRequestVideoSettingsVideoCodecSettingFramerate;
  /**
   * @remarks
   * The GOP setting. If it is not specified, the source specification is used.
   */
  gop?: CreateMediaLiveChannelRequestVideoSettingsVideoCodecSettingGop;
  /**
   * @remarks
   * The video encoding rate. If it is not specified, the source specification is used.
   */
  rate?: CreateMediaLiveChannelRequestVideoSettingsVideoCodecSettingRate;
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
      codecDetail: CreateMediaLiveChannelRequestVideoSettingsVideoCodecSettingCodecDetail,
      framerate: CreateMediaLiveChannelRequestVideoSettingsVideoCodecSettingFramerate,
      gop: CreateMediaLiveChannelRequestVideoSettingsVideoCodecSettingGop,
      rate: CreateMediaLiveChannelRequestVideoSettingsVideoCodecSettingRate,
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

