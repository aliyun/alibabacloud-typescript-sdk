// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaLiveChannelResponseBodyChannelAudioSettingsAudioCodecSetting extends $dara.Model {
  /**
   * @remarks
   * The audio bitrate. Unit: bit/s.
   * 
   * @example
   * 200000
   */
  bitrate?: number;
  /**
   * @remarks
   * The audio codec profile.
   * 
   * @example
   * AAC-LOW
   */
  profile?: string;
  /**
   * @remarks
   * The audio sample rate. Unit: Hz.
   * 
   * @example
   * 44100
   */
  sampleRate?: number;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      profile: 'Profile',
      sampleRate: 'SampleRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'number',
      profile: 'string',
      sampleRate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

