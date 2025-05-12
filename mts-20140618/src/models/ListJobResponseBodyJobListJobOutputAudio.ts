// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobResponseBodyJobListJobOutputAudioVolume } from "./ListJobResponseBodyJobListJobOutputAudioVolume";


export class ListJobResponseBodyJobListJobOutputAudio extends $dara.Model {
  /**
   * @remarks
   * The audio bitrate of the output file.
   * 
   * *   Unit: Kbit/s.
   * *   Default value: **128**.
   * 
   * @example
   * 128
   */
  bitrate?: string;
  /**
   * @remarks
   * The number of sound channels.
   * 
   * *   If the value of Codec is mp3, the value of this parameter can only be 1 or 2.
   * *   If the value of Codec is aac, the value of this parameter can only be 1, 2, 4, 5, 6, or 8.
   * *   Default value: 2.
   * 
   * @example
   * 2
   */
  channels?: string;
  /**
   * @remarks
   * The audio codec.
   * 
   * *   Valid values: aac, mp3, vorbis, and flac.
   * *   Default value: **aac**.
   * 
   * @example
   * aac
   */
  codec?: string;
  /**
   * @remarks
   * The codec profile of the audio. Valid values if the value of Codec is aac: aaclow, aache, aachev2, aacld, and aaceld.
   * 
   * @example
   * aaclow
   */
  profile?: string;
  /**
   * @remarks
   * The level of quality control on the audio.
   * 
   * @example
   * 15
   */
  qscale?: string;
  /**
   * @remarks
   * The sampling rate.
   * 
   * *   Valid values: 22050, 32000, 44100, 48000, and 96000.
   * *   Unit: Hz.
   * *   Default value: 44100.
   * *   If the video container format is FLV and the audio codec is MP3, the value of this parameter cannot be 32000, 48000, or 96000. If the audio codec is MP3, the value of this parameter cannot be 96000.
   * 
   * @example
   * 44100
   */
  samplerate?: string;
  /**
   * @remarks
   * The volume configurations.
   */
  volume?: ListJobResponseBodyJobListJobOutputAudioVolume;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      channels: 'Channels',
      codec: 'Codec',
      profile: 'Profile',
      qscale: 'Qscale',
      samplerate: 'Samplerate',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      channels: 'string',
      codec: 'string',
      profile: 'string',
      qscale: 'string',
      samplerate: 'string',
      volume: ListJobResponseBodyJobListJobOutputAudioVolume,
    };
  }

  validate() {
    if(this.volume && typeof (this.volume as any).validate === 'function') {
      (this.volume as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

