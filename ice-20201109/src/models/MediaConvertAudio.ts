// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MediaConvertAudio extends $dara.Model {
  /**
   * @remarks
   * The audio bitrate of the output file.
   * 
   * *   Unit: Kbps.
   * *   Valid values: [8,1000].
   * *   Default value: 128.
   * *   Common values: 64, 128, and 256.
   * 
   * @example
   * 128
   */
  bitrate?: number;
  /**
   * @remarks
   * The number of audio channels.
   * 
   * *   Valid values: 0, 1, 2, 4, 5, 6, and 8.
   * 
   *     *   If the Codec parameter is set to MP3 or OPUS, you can set this parameter to 0, 1, or 2.
   *     *   If the Codec parameter is set to AAC or FLAC, you can set this parameter to 0, 1, 2, 4, 5, 6, or 8.
   *     *   If the Codec parameter is set to VORBIS, you can set this parameter to 2.
   *     *   If the Format parameter is set to MPD, you cannot set this parameter to 8.
   * 
   * *   Default value: 2.
   * 
   * *   Set the value to 0 to preserve the original number of channels from the source file.
   * 
   * @example
   * 2
   */
  channels?: number;
  /**
   * @remarks
   * The audio codec.
   * 
   * *   Valid values: AAC, AC3, EAC3, MP2, MP3, FLAC, OPUS, VORBIS, WMA-V1, WMA-V2, and pcm_s16le.
   * *   Default value: AAC.
   * 
   * @example
   * AAC
   */
  codec?: string;
  /**
   * @remarks
   * The audio codec profile.
   * 
   * *   This parameter takes effect only if the Codec parameter is set to AAC.
   * *   Valid values: aac_low, aac_he, aac_he_v2, aac_ld, and aac_eld.
   * *   Default value: aac_low.
   * 
   * @example
   * aac_low
   */
  profile?: string;
  /**
   * @remarks
   * Specifies whether to remove the audio stream from the output.
   * 
   * *   true: deletes the audio stream. All other parameters in the Audio object are ignored.
   * *   false: retains the audio stream.
   * *   Default value: false.
   */
  remove?: boolean;
  /**
   * @remarks
   * The sample rate.
   * 
   * *   Unit: Hz
   * *   Valid values: 22050, 32000, 44100, 48000, and 96000.
   * *   Default value: 44100.
   * 
   * The supported sample rates vary depending on the container and codec format. For example, when the audio codec is MP3, a sample rate of 96000 is not supported. If the container format is FLV, only sample rates of 22050 and 44100 are supported.
   * 
   * @example
   * 44100
   */
  samplerate?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      channels: 'Channels',
      codec: 'Codec',
      profile: 'Profile',
      remove: 'Remove',
      samplerate: 'Samplerate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'number',
      channels: 'number',
      codec: 'string',
      profile: 'string',
      remove: 'boolean',
      samplerate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

