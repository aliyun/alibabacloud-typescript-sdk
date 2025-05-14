// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMediaLiveChannelsResponseBodyChannelsVideoSettingsVideoCodecSettingCodecDetail } from "./ListMediaLiveChannelsResponseBodyChannelsVideoSettingsVideoCodecSettingCodecDetail";
import { ListMediaLiveChannelsResponseBodyChannelsVideoSettingsVideoCodecSettingFramerate } from "./ListMediaLiveChannelsResponseBodyChannelsVideoSettingsVideoCodecSettingFramerate";
import { ListMediaLiveChannelsResponseBodyChannelsVideoSettingsVideoCodecSettingGop } from "./ListMediaLiveChannelsResponseBodyChannelsVideoSettingsVideoCodecSettingGop";
import { ListMediaLiveChannelsResponseBodyChannelsVideoSettingsVideoCodecSettingRate } from "./ListMediaLiveChannelsResponseBodyChannelsVideoSettingsVideoCodecSettingRate";


export class ListMediaLiveChannelsResponseBodyChannelsVideoSettingsVideoCodecSetting extends $dara.Model {
  /**
   * @remarks
   * The video encoding settings.
   */
  codecDetail?: ListMediaLiveChannelsResponseBodyChannelsVideoSettingsVideoCodecSettingCodecDetail;
  /**
   * @remarks
   * The frame rate.
   */
  framerate?: ListMediaLiveChannelsResponseBodyChannelsVideoSettingsVideoCodecSettingFramerate;
  /**
   * @remarks
   * The GOP setting.
   */
  gop?: ListMediaLiveChannelsResponseBodyChannelsVideoSettingsVideoCodecSettingGop;
  /**
   * @remarks
   * The video encoding rate.
   */
  rate?: ListMediaLiveChannelsResponseBodyChannelsVideoSettingsVideoCodecSettingRate;
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
      codecDetail: ListMediaLiveChannelsResponseBodyChannelsVideoSettingsVideoCodecSettingCodecDetail,
      framerate: ListMediaLiveChannelsResponseBodyChannelsVideoSettingsVideoCodecSettingFramerate,
      gop: ListMediaLiveChannelsResponseBodyChannelsVideoSettingsVideoCodecSettingGop,
      rate: ListMediaLiveChannelsResponseBodyChannelsVideoSettingsVideoCodecSettingRate,
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

