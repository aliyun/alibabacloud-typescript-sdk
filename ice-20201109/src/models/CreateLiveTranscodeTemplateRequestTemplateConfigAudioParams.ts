// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLiveTranscodeTemplateRequestTemplateConfigAudioParams extends $dara.Model {
  /**
   * @remarks
   * The bitrate of the output audio. Unit: Kbit/s. Valid values: 1 to 1000.
   * 
   * @example
   * 100
   */
  bitrate?: string;
  /**
   * @remarks
   * The number of sound channels. Valid values: 1: mono 2: binaural
   * 
   * @example
   * 2
   */
  channels?: string;
  /**
   * @remarks
   * The audio codec. Valid values:
   * 
   * *   AAC
   * *   MP3
   * 
   * @example
   * AAC
   */
  codec?: string;
  /**
   * @remarks
   * The audio codec profile. Valid values when the Codec parameter is set to AAC:
   * 
   * *   aac_low
   * *   aac_he
   * *   aac_he_v2
   * *   aac_ld
   * 
   * @example
   * aaclow
   */
  profile?: string;
  /**
   * @remarks
   * The audio sampling rate. Valid values: 22050 to 96000.
   * 
   * Note: If you set AudioProfile to aac_ld, the audio sampling rate cannot exceed 44,100.
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
      samplerate: 'Samplerate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      channels: 'string',
      codec: 'string',
      profile: 'string',
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

