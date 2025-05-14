// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMediaLiveChannelResponseBodyChannelVideoSettingsVideoCodecSettingCodecDetail } from "./GetMediaLiveChannelResponseBodyChannelVideoSettingsVideoCodecSettingCodecDetail";
import { GetMediaLiveChannelResponseBodyChannelVideoSettingsVideoCodecSettingFramerate } from "./GetMediaLiveChannelResponseBodyChannelVideoSettingsVideoCodecSettingFramerate";
import { GetMediaLiveChannelResponseBodyChannelVideoSettingsVideoCodecSettingGop } from "./GetMediaLiveChannelResponseBodyChannelVideoSettingsVideoCodecSettingGop";
import { GetMediaLiveChannelResponseBodyChannelVideoSettingsVideoCodecSettingRate } from "./GetMediaLiveChannelResponseBodyChannelVideoSettingsVideoCodecSettingRate";


export class GetMediaLiveChannelResponseBodyChannelVideoSettingsVideoCodecSetting extends $dara.Model {
  /**
   * @remarks
   * The video encoding settings.
   */
  codecDetail?: GetMediaLiveChannelResponseBodyChannelVideoSettingsVideoCodecSettingCodecDetail;
  /**
   * @remarks
   * The frame rate.
   */
  framerate?: GetMediaLiveChannelResponseBodyChannelVideoSettingsVideoCodecSettingFramerate;
  /**
   * @remarks
   * The GOP setting.
   */
  gop?: GetMediaLiveChannelResponseBodyChannelVideoSettingsVideoCodecSettingGop;
  /**
   * @remarks
   * The video encoding rate.
   */
  rate?: GetMediaLiveChannelResponseBodyChannelVideoSettingsVideoCodecSettingRate;
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
      codecDetail: GetMediaLiveChannelResponseBodyChannelVideoSettingsVideoCodecSettingCodecDetail,
      framerate: GetMediaLiveChannelResponseBodyChannelVideoSettingsVideoCodecSettingFramerate,
      gop: GetMediaLiveChannelResponseBodyChannelVideoSettingsVideoCodecSettingGop,
      rate: GetMediaLiveChannelResponseBodyChannelVideoSettingsVideoCodecSettingRate,
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

